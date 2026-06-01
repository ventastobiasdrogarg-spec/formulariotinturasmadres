import React, { useMemo, useState } from "react";
import "./App.css";
import {
  IMAGENES_TINTURAS,
  LOGO_TIENDA_VIDA,
  MODO_PREPARACION,
  OBJETIVOS,
  PRECAUCION_GENERAL,
  PRODUCTOS_TINTURAS,
  TIPOS,
  type Opcion,
  type ProductoTintura,
  type TipoFiltro,
} from "./data";

function normalizarTexto(texto: string): string {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function tieneImagenReal(src: string): boolean {
  if (!src || typeof src !== "string") return false;
  const value = src.trim();
  return value.startsWith("http") || value.startsWith("/") || value.startsWith("data:image");
}

function validarProducto(producto: ProductoTintura): boolean {
  const tipoValido = producto.tipo === "monoherbal" || producto.tipo === "compuesta";
  const objetivosValidos = Array.isArray(producto.objetivos) && producto.objetivos.length > 0;
  const linkTiendaVida = producto.link.startsWith("https://www.tiendavida.com.ar/productos/");
  return Boolean(producto.id && producto.nombre && producto.precio && tipoValido && objetivosValidos && linkTiendaVida);
}

function scoreProducto(producto: ProductoTintura, objetivoElegido: string): number {
  const base = producto.objetivos.includes(objetivoElegido) ? 1000 : 0;
  const prioridad = Number(producto.prioridad || 0);
  const matchNombre = normalizarTexto(producto.nombre).includes(normalizarTexto(objetivoElegido)) ? 50 : 0;
  return base + prioridad + matchNombre;
}

export function recomendar(productos: ProductoTintura[], objetivoElegido: string, tipoElegido: TipoFiltro): ProductoTintura[] {
  return productos
    .filter(validarProducto)
    .filter((producto) => producto.objetivos.includes(objetivoElegido))
    .filter((producto) => (tipoElegido === "sin-preferencia" ? true : producto.tipo === tipoElegido))
    .sort((a, b) => scoreProducto(b, objetivoElegido) - scoreProducto(a, objetivoElegido));
}

function runTests(): void {
  const relaxMono = recomendar(PRODUCTOS_TINTURAS, "relax", "monoherbal");
  console.assert(relaxMono.length > 0, "Test: relax monoherbal debe devolver productos.");
  console.assert(relaxMono.every((p) => p.tipo === "monoherbal"), "Test: relax monoherbal solo debe devolver monoherbales.");

  const relaxCompuesta = recomendar(PRODUCTOS_TINTURAS, "relax", "compuesta");
  console.assert(relaxCompuesta.length > 0, "Test: relax compuesta debe devolver productos.");
  console.assert(relaxCompuesta.every((p) => p.tipo === "compuesta"), "Test: relax compuesta solo debe devolver compuestas.");

  const energiaSinPreferencia = recomendar(PRODUCTOS_TINTURAS, "energia", "sin-preferencia");
  console.assert(energiaSinPreferencia.length > 0, "Test: energía sin preferencia debe devolver productos.");
  console.assert(energiaSinPreferencia.every((p) => p.objetivos.includes("energia")), "Test: todos los productos de energía deben coincidir con el objetivo.");

  const objetivoInexistente = recomendar(PRODUCTOS_TINTURAS, "objetivo-inexistente", "sin-preferencia");
  console.assert(objetivoInexistente.length === 0, "Test: objetivo inexistente no debe devolver productos.");

  const retencionCompuesta = recomendar(PRODUCTOS_TINTURAS, "retencion", "compuesta");
  console.assert(retencionCompuesta.every((p) => p.tipo === "compuesta" && p.objetivos.includes("retencion")), "Test: retención compuesta debe coincidir con objetivo y tipo.");
}

if (typeof window !== "undefined") {
  runTests();
}

function Badge({ children, tone = "default" }: { children: React.ReactNode; tone?: "default" | "green" | "teal" }) {
  return <span className={`badge badge-${tone}`}>{children}</span>;
}

function Header({ onReset }: { onReset: () => void }) {
  return (
    <header className="header">
      <div className="brand">
        <div className="logoBox">
          <img src={LOGO_TIENDA_VIDA} alt="Tienda Vida" className="logo" loading="eager" decoding="async" />
        </div>
        <div>
          <p className="kicker">Tienda Vida</p>
          <h1>Asesor de Tinturas Madre</h1>
        </div>
      </div>
      <button onClick={onReset} className="secondaryButton headerButton">
        Reiniciar
      </button>
    </header>
  );
}

function Progress({ step }: { step: number }) {
  const steps = ["Objetivo", "Tipo", "Resultado"];

  return (
    <div className="progress">
      {steps.map((item, index) => (
        <div key={item} className="progressItem">
          <div className={`progressBar ${index <= step ? "active" : ""}`} />
          <p className={index <= step ? "activeText" : ""}>{item}</p>
        </div>
      ))}
    </div>
  );
}

function OptionButton({ option, selected, onSelect, horizontal = false }: { option: Opcion; selected: boolean; onSelect: () => void; horizontal?: boolean }) {
  return (
    <button onClick={onSelect} className={`optionButton ${horizontal ? "optionHorizontal" : ""} ${selected ? "selected" : ""}`}>
      <span>{option.label}</span>
      <span className="radioDot" />
    </button>
  );
}

function OptionGrid({
  title,
  subtitle,
  options,
  selected,
  onSelect,
  horizontal = false,
}: {
  title: string;
  subtitle: string;
  options: Opcion[];
  selected: string;
  onSelect: (id: string) => void;
  horizontal?: boolean;
}) {
  return (
    <section className="panel optionsPanel">
      <div className="panelHeader">
        <Badge tone="teal">Formulario guiado</Badge>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>

      {horizontal ? (
        <>
          <div className="horizontalScroll">
            <div className="horizontalRow">
              {options.map((option) => (
                <OptionButton key={option.id} option={option} selected={selected === option.id} onSelect={() => onSelect(option.id)} horizontal />
              ))}
            </div>
          </div>
          <p className="scrollHelp">Deslizá hacia los costados para ver todas las opciones.</p>
        </>
      ) : (
        <div className="optionGrid">
          {options.map((option) => (
            <OptionButton key={option.id} option={option} selected={selected === option.id} onSelect={() => onSelect(option.id)} />
          ))}
        </div>
      )}
    </section>
  );
}

function ProductImage({ src, alt, producto }: { src: string; alt: string; producto: ProductoTintura }) {
  const [hasError, setHasError] = useState(false);
  const mostrarImagen = tieneImagenReal(src) && !hasError;
  const iniciales = producto.plantaPrincipal
    .replaceAll("/", " ")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <div className="productImageBox">
      {mostrarImagen ? (
        <img
          src={src}
          alt={alt}
          className="productImage"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          onError={() => setHasError(true)}
        />
      ) : (
        <div className="imageFallback">
          <div className="fallbackCircle">{iniciales || "TV"}</div>
          <p>Imagen pendiente</p>
          <strong>{producto.plantaPrincipal}</strong>
        </div>
      )}
    </div>
  );
}

function ProductCard({ producto, principal = false }: { producto: ProductoTintura; principal?: boolean }) {
  const imagenProducto = IMAGENES_TINTURAS[producto.id] || producto.imagen;

  return (
    <article className={`productCard ${principal ? "principal" : "alternative"}`}>
      <div className={`productGrid ${principal ? "productGridPrincipal" : ""}`}>
        <ProductImage src={imagenProducto} alt={producto.nombre} producto={producto} />

        <div className="productContent">
          <div>
            <div className="badgeRow">
              {principal && <Badge tone="teal">Recomendación principal</Badge>}
              <Badge tone="green">{producto.tipo === "monoherbal" ? "Monoherbal" : "Compuesta"}</Badge>
              <Badge>{producto.plantaPrincipal}</Badge>
            </div>

            <h3>{producto.nombre}</h3>
            <p className="description">{producto.descripcion}</p>
          </div>

          <div className="infoGrid">
            <div className="infoBox beige">
              <p className="infoTitle">POR QUÉ SE RECOMIENDA</p>
              <p>{producto.uso}</p>
            </div>

            <div className="infoBox green">
              <p className="infoTitle">MODO DE PREPARACION</p>
              <p>{MODO_PREPARACION}</p>
            </div>
          </div>

          <div className="priceRow">
            <p className="price">{producto.precio}</p>
            <a href={producto.link} target="_blank" rel="noreferrer" className="primaryButton">
              Ver producto / Comprar ahora
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

function Result({ objetivo, tipo, productos, onBack, onReset }: { objetivo: string; tipo: TipoFiltro; productos: ProductoTintura[]; onBack: () => void; onReset: () => void }) {
  const objetivoLabel = OBJETIVOS.find((item) => item.id === objetivo)?.label || "";
  const tipoLabel = TIPOS.find((item) => item.id === tipo)?.label || "";
  const principal = productos[0];
  const alternativas = productos.slice(1, 8);

  return (
    <section className="resultSection">
      <div className="panel resultHeader">
        <div>
          <Badge tone="teal">Resultado personalizado</Badge>
          <h2>Tintura madre recomendada</h2>
          <div className="badgeRow">
            <Badge>Objetivo elegido: {objetivoLabel}</Badge>
            <Badge tone="green">Tipo elegido: {tipoLabel}</Badge>
          </div>
        </div>

        <div className="buttonRow">
          <button onClick={onBack} className="secondaryButton">
            Volver atrás
          </button>
          <button onClick={onReset} className="darkButton">
            Empezar de nuevo
          </button>
        </div>
      </div>

      {!principal ? (
        <div className="panel emptyResult">
          <h3>No hay coincidencias cargadas</h3>
          <p>No se encontró una tintura madre real en la base que coincida con el objetivo y el tipo elegidos.</p>
          <button onClick={onReset} className="primaryButton">
            Volver a empezar
          </button>
        </div>
      ) : (
        <div className="resultList">
          <ProductCard producto={principal} principal />

          {alternativas.length > 0 && (
            <div className="alternatives">
              <h3>Otras opciones compatibles</h3>
              <div className="horizontalScroll">
                <div className="horizontalRow productRow">
                  {alternativas.map((producto) => (
                    <ProductCard key={producto.id} producto={producto} />
                  ))}
                </div>
              </div>
              <p className="scrollHelp left">Deslizá hacia los costados para ver todas las opciones compatibles.</p>
            </div>
          )}

          <div className="precaution">
            <strong>Precauciones:</strong> {PRECAUCION_GENERAL}
          </div>
        </div>
      )}
    </section>
  );
}

export default function App() {
  const [step, setStep] = useState(0);
  const [objetivo, setObjetivo] = useState("");
  const [tipo, setTipo] = useState<TipoFiltro>("sin-preferencia");

  const resultados = useMemo(() => recomendar(PRODUCTOS_TINTURAS, objetivo, tipo), [objetivo, tipo]);

  function reset() {
    setStep(0);
    setObjetivo("");
    setTipo("sin-preferencia");
  }

  function elegirObjetivo(value: string) {
    setObjetivo(value);
    setStep(1);
  }

  function elegirTipo(value: string) {
    setTipo(value as TipoFiltro);
    setStep(2);
  }

  return (
    <main className="appShell">
      <Header onReset={reset} />
      <Progress step={step} />

      <section className="heroWrapper">
        <div className="hero">
          <Badge tone="green">Tinturas madre</Badge>
          <h2>Encontrá la tintura madre más adecuada para tu objetivo</h2>
          <p>Respondé dos preguntas. La app cruza el objetivo buscado con el tipo de tintura madre y muestra productos reales cargados de Tienda Vida.</p>
        </div>
      </section>

      {step === 0 && (
        <div className="stepWrapper">
          <OptionGrid
            title="¿Qué objetivo estás buscando?"
            subtitle="Elegí la necesidad principal que querés acompañar. La recomendación es orientativa y comercial, no médica."
            options={OBJETIVOS}
            selected={objetivo}
            onSelect={elegirObjetivo}
          />
        </div>
      )}

      {step === 1 && (
        <div className="stepWrapper">
          <OptionGrid
            title="¿Qué tipo de tintura madre estás buscando?"
            subtitle="La app filtrará la base para mostrar únicamente productos que coincidan con el tipo elegido."
            options={TIPOS}
            selected={tipo}
            onSelect={elegirTipo}
            horizontal
          />

          <div className="backRow">
            <button onClick={() => setStep(0)} className="secondaryButton">
              Volver atrás
            </button>
          </div>
        </div>
      )}

      {step === 2 && <Result objetivo={objetivo} tipo={tipo} productos={resultados} onBack={() => setStep(1)} onReset={reset} />}
    </main>
  );
}
