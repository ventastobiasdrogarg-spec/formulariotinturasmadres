export type TipoTintura = "monoherbal" | "compuesta";
export type TipoFiltro = TipoTintura | "sin-preferencia";

export type Opcion = {
  id: string;
  label: string;
};

export type ProductoTintura = {
  id: string;
  nombre: string;
  plantaPrincipal: string;
  tipo: TipoTintura;
  objetivos: string[];
  uso: string;
  descripcion: string;
  precio: string;
  imagen: string;
  link: string;
  prioridad?: number;
};

export const PRECAUCION_GENERAL =
  "Las tinturas madres son productos naturales de uso tradicional. Si estás embarazada, en lactancia, tomás medicación o tenés una condición médica, consultá con un profesional de la salud antes de consumir.";

export const MODO_PREPARACION =
  "Diluir 60 gotas diarias en agua, soda, jugo natural o tu infusión preferida. Se recomienda dividir la dosis en 2 o 3 veces al día, siguiendo las indicaciones de tu profesional de la salud.";

export const LOGO_TIENDA_VIDA =
  "https://acdn-us.mitiendanube.com/stores/005/320/797/themes/common/logo-1659079047-1755642602-dea4669484e2179094d4c4b57472ba8a1755642602-480-0.webp";

export const OBJETIVOS: Opcion[] = [
  { id: "relax", label: "Relax" },
  { id: "ansiedad", label: "Ansiedad" },
  { id: "dormir", label: "Dormir mejor" },
  { id: "adelgazante", label: "Adelgazante" },
  { id: "saciedad", label: "Saciedad" },
  { id: "energia", label: "Energía" },
  { id: "antioxidante", label: "Antioxidante" },
  { id: "digestion", label: "Digestión" },
  { id: "retencion", label: "Retención de líquidos" },
  { id: "circulacion", label: "Circulación" },
  { id: "defensas", label: "Defensas" },
  { id: "concentracion", label: "Concentración" },
  { id: "estres", label: "Estrés" },
  { id: "bienestar", label: "Bienestar general" },
  { id: "higado", label: "Hígado / detox" },
  { id: "inflamacion", label: "Inflamación o molestias articulares" },
];

export const TIPOS: { id: TipoFiltro; label: string }[] = [
  { id: "monoherbal", label: "Tintura Madre Monoherbal" },
  { id: "compuesta", label: "Tintura Madre Compuesta" },
  { id: "sin-preferencia", label: "Sin preferencia" },
];

export const IMAGENES_TINTURAS: Record<string, string> = {
  "pasiflora-da": "https://acdn-us.mitiendanube.com/stores/005/320/797/products/tm-pasionaria-ed051d82d7d4d4181d17296122543042-1024-1024.webp",
  "valeriana-da": "https://acdn-us.mitiendanube.com/stores/005/320/797/products/tm-valeriana-6a56fa49baeb06b96317295403502178-1024-1024.webp",
  "melisa-da": "https://acdn-us.mitiendanube.com/stores/005/320/797/products/tm-melisa-97ab5c891e77c841a917296112939826-1024-1024.webp",
  "tilo-da": "https://acdn-us.mitiendanube.com/stores/005/320/797/products/tm-tilo-c64d3821e1dbf4528917295325538735-1024-1024.webp",
  "relax-301-da": "https://acdn-us.mitiendanube.com/stores/005/320/797/products/diseno-sin-titulo-2025-04-03t111103-462-3a1849f141cfa6a94717436895030438-1024-1024.webp",
  "fucus-da": "https://acdn-us.mitiendanube.com/stores/005/320/797/products/frasco-tintura-madre-fucus-drogueria-argentina-situacion-5413331c9e9bc3425417703909769170-1024-1024.webp",
  "garcinia-da": "https://acdn-us.mitiendanube.com/stores/005/320/797/products/tm-garcinia-cambogia-e4dec0522eca4a0b4217295395160198-1024-1024.webp",
  "alcachofa-da": "https://acdn-us.mitiendanube.com/stores/005/320/797/products/tm-alcachofa-fde62446933dcfb3a017295438566822-1024-1024.webp",
  "cola-caballo-da": "https://acdn-us.mitiendanube.com/stores/005/320/797/products/tm-cola-de-caballo-3858136447f20c8e4d17296149114404-1024-1024.webp",
  "adelgazante-302-da": "https://acdn-us.mitiendanube.com/stores/005/320/797/products/tintura-compuesta-302-75ec87e60386e2217d17296158399014-1024-1024.webp",
  "quemador-311-da": "https://acdn-us.mitiendanube.com/stores/005/320/797/products/tintura-madre-compuesta-311-21e2c38dad2793f5ae17296202220512-1024-1024.webp",
  "ginseng-da": "https://acdn-us.mitiendanube.com/stores/005/320/797/products/tm-ginseng-8a7e379172b9a028b817296136694845-1024-1024.webp",
  "ginkgo-da": "https://acdn-us.mitiendanube.com/stores/005/320/797/products/tm-ginkgo-biloba-bfbba886a0052a606317296144615998-1024-1024.webp",
  "maca-da": "https://acdn-us.mitiendanube.com/stores/005/320/797/products/tm-maca-17ece9c4fe6eb0fbbf17295323065791-1024-1024.webp",
  "melena-leon-da": "https://acdn-us.mitiendanube.com/stores/005/320/797/products/tintura-madre-drogueria-argentina-melena-de-leon-1-61075339589e348cbb17296145920510-1024-1024.webp",
  "energizante-304-da": "https://acdn-us.mitiendanube.com/stores/005/320/797/products/tintura-madre-compuesta-304-a802d6332178e47a4617296183680421-1024-1024.webp",
  "equinacea-da": "https://acdn-us.mitiendanube.com/stores/005/320/797/products/tm-equinacea-d813483905eca1970517292821348990-1024-1024.webp",
  "una-gato-da": "https://acdn-us.mitiendanube.com/stores/005/320/797/products/tm-una-de-gato-b0a969861a8d26f06917454968250921-1024-1024.webp",
  "curcuma-da": "https://acdn-us.mitiendanube.com/stores/005/320/797/products/tm-curcuma-0ea677d1bab95b0e6417437066490379-1024-1024.webp",
  "antioxidante-305-da": "https://acdn-us.mitiendanube.com/stores/005/320/797/products/tintura-compuesta-305-5ecc965f5ed300dd3517296185534615-1024-1024.webp",
  "boldo-da": "https://acdn-us.mitiendanube.com/stores/005/320/797/products/tm-boldo-1ea404b1ed3648a6a917295431958574-1024-1024.webp",
  "carqueja-da": "https://acdn-us.mitiendanube.com/stores/005/320/797/products/tm-carqueja-5fca0ac0c86c5d1b2317296076994056-1024-1024.webp",
  "cardo-mariano-da": "https://acdn-us.mitiendanube.com/stores/005/320/797/products/tm-cardo-mariano-3ce66e77c77de64a5f17368570952765-1024-1024.webp",
  "hinojo-da": "https://acdn-us.mitiendanube.com/stores/005/320/797/products/tm-hinojo-13ee8c714b8fc20f4617296095694428-1024-1024.webp",
  "digestiva-308-da": "https://acdn-us.mitiendanube.com/stores/005/320/797/products/tintura-madre-compuesta-308-d462b1ce0abf98acaf17296190033480-1024-1024.webp",
  "detox-303-da": "https://acdn-us.mitiendanube.com/stores/005/320/797/products/tintura-madre-compuesta-303-4e8bef0ecd4c1f7a7f17296159356352-1024-1024.webp",
  "protector-hepatico-309-da": "https://acdn-us.mitiendanube.com/stores/005/320/797/products/tintura-madre-compuesta-309-ede5a7acbbc67d4bae17303206595810-1024-1024.webp",
  "ortiga-da": "https://acdn-us.mitiendanube.com/stores/005/320/797/products/tm-ortiga-2a3e82d9c6bf75ad2a17296117903588-1024-1024.webp",
  "diuretico-307-da": "https://acdn-us.mitiendanube.com/stores/005/320/797/products/tintura-madre-compuesta307-d509415a96556d226b17296187528347-1024-1024.webp",
  "castano-da": "https://acdn-us.mitiendanube.com/stores/005/320/797/products/tm-castano-de-indias-5cc3846803926d123117381600379021-1024-1024.webp",
  "hamamelis-da": "https://acdn-us.mitiendanube.com/stores/005/320/797/products/tm-hamamelis-f84bf17b7bcfdf8d2317295400672119-1024-1024.webp",
  "harpagofito-da": "https://acdn-us.mitiendanube.com/stores/005/320/797/products/tm-harpagofito-dbd49a93df1ebda79a17295402136468-1024-1024.webp",
  "jengibre-da": "https://acdn-us.mitiendanube.com/stores/005/320/797/products/tm-jengibre-aa39fce441d3370bf017296098448415-1024-1024.webp",
  "centella-vitawellness": "https://acdn-us.mitiendanube.com/stores/005/320/797/products/vw-final-blanco-centella-asiatica-ginkgo-biloba-te-verde-hibiscus-05-9fbf2992eaadf1d8a517364510155496-1024-1024.webp",
  "vmax-vitawellness": "https://acdn-us.mitiendanube.com/stores/005/320/797/products/vw-final-blanco-v-max-forte_mesa-de-trabajo-1-5c0d425fc2dd66201b17364522425472-1024-1024.webp",
  "lions-serena-vitawellness": "https://acdn-us.mitiendanube.com/stores/005/320/797/products/vw-final-blanco-lions-mane-serena-02-8b5ca8a4ef90292bca17364536370572-1024-1024.webp",
  "curcuma-vitawellness": "https://acdn-us.mitiendanube.com/stores/005/320/797/products/vw-final-blanco-curcuma-pimienta-negra-jengibre-04-76bc969015a83cd6bf17364544014340-1024-1024.webp",
};

function crearProducto(params: Omit<ProductoTintura, "descripcion" | "imagen"> & { descripcion?: string; imagen?: string }): ProductoTintura {
  return {
    ...params,
    descripcion:
      params.descripcion ||
      `${params.tipo === "monoherbal" ? "Tintura madre monoherbal" : "Tintura madre compuesta"} de ${params.plantaPrincipal} en gotas.`,
    imagen: params.imagen || IMAGENES_TINTURAS[params.id] || "",
  };
}

export const PRODUCTOS_TINTURAS: ProductoTintura[] = [
  crearProducto({ id: "pasiflora-da", nombre: "Pasionaria x 60 cc Tintura Madre Droguería Argentina", plantaPrincipal: "Pasionaria / Pasiflora", tipo: "monoherbal", objetivos: ["relax", "ansiedad", "dormir", "estres"], precio: "$7.600,00", uso: "Tradicionalmente se usa para acompañar momentos de nerviosismo, tensión o dificultad para relajarse.", link: "https://www.tiendavida.com.ar/productos/pasionaria-x-60-cc-tintura-madre-en-gotas-drogueriaargentina/", prioridad: 98 }),
  crearProducto({ id: "valeriana-da", nombre: "Valeriana x 60 cc Tintura Madre Droguería Argentina", plantaPrincipal: "Valeriana", tipo: "monoherbal", objetivos: ["relax", "ansiedad", "dormir", "estres"], precio: "$10.600,00", uso: "Puede acompañar rutinas de descanso y momentos donde se busca bajar el ritmo de forma natural.", link: "https://www.tiendavida.com.ar/productos/valeriana-x-60-cc-tintura-madre-en-gotas-drogueriaargentina/", prioridad: 95 }),
  crearProducto({ id: "melisa-da", nombre: "Melisa x 60 cc Tintura Madre Droguería Argentina", plantaPrincipal: "Melisa", tipo: "monoherbal", objetivos: ["relax", "ansiedad", "dormir", "estres", "digestion"], precio: "$7.600,00", uso: "Tradicionalmente se utiliza para acompañar estados de tensión y bienestar digestivo.", link: "https://www.tiendavida.com.ar/productos/melisa-x-60-cc-tintura-madre-en-gotas-drogueriaargentina/", prioridad: 92 }),
  crearProducto({ id: "tilo-da", nombre: "Tilo x 60 cc Tintura Madre Droguería Argentina", plantaPrincipal: "Tilo", tipo: "monoherbal", objetivos: ["relax", "ansiedad", "dormir", "estres"], precio: "$11.800,00", uso: "Puede acompañar momentos de calma y descanso como complemento de hábitos saludables.", link: "https://www.tiendavida.com.ar/productos/tilo-x-60-cc-tintura-madre-en-gotas-drogueriaargentina/", prioridad: 90 }),
  crearProducto({ id: "relax-301-da", nombre: "Blend N° 301 - Relax x 60 cc Tintura Madre Droguería Argentina", plantaPrincipal: "Blend Relax", tipo: "compuesta", objetivos: ["relax", "ansiedad", "dormir", "estres"], precio: "$11.200,00", uso: "Fórmula tradicionalmente utilizada para acompañar momentos de tensión, nerviosismo o estrés.", link: "https://www.tiendavida.com.ar/productos/blend-n-301-relax-x-60-cc-tintura-madre-drogueria-argentina/", prioridad: 100 }),
  crearProducto({ id: "fucus-da", nombre: "Fucus x 60 cc Tintura Madre Droguería Argentina", plantaPrincipal: "Fucus", tipo: "monoherbal", objetivos: ["adelgazante", "saciedad", "bienestar"], precio: "$7.600,00", uso: "Tradicionalmente se usa como complemento en planes de hábitos saludables, alimentación equilibrada y movimiento.", link: "https://www.tiendavida.com.ar/productos/fucus-x-60-cc-tintura-madre-en-gotas-drogueriaargentina/", prioridad: 95 }),
  crearProducto({ id: "garcinia-da", nombre: "Garcinia x 60 cc Tintura Madre Droguería Argentina", plantaPrincipal: "Garcinia", tipo: "monoherbal", objetivos: ["adelgazante", "saciedad", "bienestar"], precio: "$10.600,00", uso: "Puede acompañar objetivos de saciedad y control de hábitos alimentarios, sin prometer resultados garantizados.", link: "https://www.tiendavida.com.ar/productos/garcinia-x-60-cc-tintura-madre-en-gotas-drogueriaargentina/", prioridad: 94 }),
  crearProducto({ id: "alcachofa-da", nombre: "Alcachofa x 60 cc Tintura Madre Droguería Argentina", plantaPrincipal: "Alcachofa", tipo: "monoherbal", objetivos: ["adelgazante", "saciedad", "digestion", "higado", "bienestar"], precio: "$7.600,00", uso: "Tradicionalmente se usa para acompañar bienestar digestivo y rutinas de alimentación equilibrada.", link: "https://www.tiendavida.com.ar/productos/alcachofa-x-60-cc-tintura-madre-en-gotas-drogueriaargentina/", prioridad: 92 }),
  crearProducto({ id: "cola-caballo-da", nombre: "Cola de Caballo x 60 cc Tintura Madre Droguería Argentina", plantaPrincipal: "Cola de caballo", tipo: "monoherbal", objetivos: ["retencion", "adelgazante", "bienestar"], precio: "$7.600,00", uso: "Tradicionalmente se utiliza como complemento cuando se busca acompañar la eliminación de líquidos.", link: "https://www.tiendavida.com.ar/productos/cola-de-caballo-x-60-cc-tintura-madre-en-gotas-drogueriaargentina/", prioridad: 93 }),
  crearProducto({ id: "adelgazante-302-da", nombre: "Blend N° 302 - Adelgazante x 60 cc Tintura Madre Droguería Argentina", plantaPrincipal: "Blend Adelgazante", tipo: "compuesta", objetivos: ["adelgazante", "saciedad", "bienestar"], precio: "$11.200,00", uso: "Puede acompañar planes de hábitos saludables, alimentación equilibrada y actividad física.", link: "https://www.tiendavida.com.ar/productos/blend-n-302-adelgazante-x-60-cc-tintura-madre-drogueria-argentina/", prioridad: 100 }),
  crearProducto({ id: "quemador-311-da", nombre: "Blend N° 311 - Quemador de Grasas x 60 cc Tintura Madre Droguería Argentina", plantaPrincipal: "Blend Quemador de Grasas", tipo: "compuesta", objetivos: ["adelgazante", "saciedad", "energia"], precio: "$14.500,00", uso: "Ideal como complemento comercial para clientes que buscan acompañar hábitos saludables y movimiento.", link: "https://www.tiendavida.com.ar/productos/blend-n-311-quemador-de-grasas-x-60-cc-tintura-madre-drogueria-argentina/", prioridad: 96 }),
  crearProducto({ id: "ginseng-da", nombre: "Ginseng x 60 cc Tintura Madre Droguería Argentina", plantaPrincipal: "Ginseng", tipo: "monoherbal", objetivos: ["energia", "concentracion", "bienestar"], precio: "$17.300,00", uso: "Tradicionalmente se usa para acompañar vitalidad, rendimiento diario y sensación de energía.", link: "https://www.tiendavida.com.ar/productos/ginseng-x-60-cc-tintura-madre-en-gotas-drogueriaargentina/", prioridad: 96 }),
  crearProducto({ id: "ginkgo-da", nombre: "Ginkgo Biloba x 60 cc Tintura Madre Droguería Argentina", plantaPrincipal: "Ginkgo biloba", tipo: "monoherbal", objetivos: ["concentracion", "circulacion", "energia", "bienestar"], precio: "$9.000,00", uso: "Puede acompañar objetivos de concentración y circulación dentro de un estilo de vida saludable.", link: "https://www.tiendavida.com.ar/productos/ginkgo-biloba-x-60-cc-tintura-madre-en-gotas-drogueriaargentina/", prioridad: 95 }),
  crearProducto({ id: "maca-da", nombre: "Maca x 60 cc Tintura Madre Droguería Argentina", plantaPrincipal: "Maca", tipo: "monoherbal", objetivos: ["energia", "bienestar", "concentracion"], precio: "$13.300,00", uso: "Tradicionalmente se usa para acompañar vitalidad y bienestar general.", link: "https://www.tiendavida.com.ar/productos/maca-x-60-cc-tintura-madre-en-gotas-drogueriaargentina/", prioridad: 93 }),
  crearProducto({ id: "melena-leon-da", nombre: "Melena de Leon x 60 cc Tintura Madre Droguería Argentina", plantaPrincipal: "Melena de León", tipo: "monoherbal", objetivos: ["concentracion", "bienestar", "energia"], precio: "$32.000,00", uso: "Puede acompañar rutinas de foco, estudio o trabajo como complemento de hábitos saludables.", link: "https://www.tiendavida.com.ar/productos/melena-de-leon-x-60-cc-tintura-madre-en-gotas-drogueriaargentina/", prioridad: 94 }),
  crearProducto({ id: "energizante-304-da", nombre: "Blend N° 304 - Energizante x 60 cc Tintura Madre Droguería Argentina", plantaPrincipal: "Blend Energizante", tipo: "compuesta", objetivos: ["energia", "concentracion", "bienestar"], precio: "$17.400,00", uso: "Fórmula tradicionalmente utilizada para acompañar vitalidad y energía diaria.", link: "https://www.tiendavida.com.ar/productos/blend-n-304-energizante-x-60-cc-tintura-madre-drogueria-argentina/", prioridad: 100 }),
  crearProducto({ id: "equinacea-da", nombre: "Equinácea x 60 cc Tintura Madre Droguería Argentina", plantaPrincipal: "Equinácea", tipo: "monoherbal", objetivos: ["defensas", "antioxidante", "bienestar"], precio: "$13.300,00", uso: "Tradicionalmente se usa para acompañar defensas y bienestar general.", link: "https://www.tiendavida.com.ar/productos/equinacea-x-60-cc-tintura-madre-en-gotas-drogueriaargentina/", prioridad: 96 }),
  crearProducto({ id: "una-gato-da", nombre: "Uña de Gato x 60 cc Tintura Madre Droguería Argentina", plantaPrincipal: "Uña de gato", tipo: "monoherbal", objetivos: ["defensas", "antioxidante", "bienestar"], precio: "$13.300,00", uso: "Puede acompañar bienestar general y defensas como producto natural de uso tradicional.", link: "https://www.tiendavida.com.ar/productos/una-de-gato-x-60-cc-tintura-madre-drogueria-argentina/", prioridad: 94 }),
  crearProducto({ id: "curcuma-da", nombre: "Curcuma x 60 cc Tintura Madre Droguería Argentina", plantaPrincipal: "Cúrcuma", tipo: "monoherbal", objetivos: ["antioxidante", "inflamacion", "bienestar"], precio: "$7.600,00", uso: "Tradicionalmente se usa para acompañar bienestar general e incomodidades articulares leves.", link: "https://www.tiendavida.com.ar/productos/curcuma-x-60-cc-tintura-madre-en-gotas-drogueriaargentina/", prioridad: 93 }),
  crearProducto({ id: "antioxidante-305-da", nombre: "Blend N° 305 - Antioxidante x 60 cc Tintura Madre Droguería Argentina", plantaPrincipal: "Blend Antioxidante", tipo: "compuesta", objetivos: ["antioxidante", "defensas", "bienestar"], precio: "$11.200,00", uso: "Fórmula tradicionalmente utilizada para acompañar bienestar general y aporte antioxidante.", link: "https://www.tiendavida.com.ar/productos/blend-n-305-antioxidante-x-60-cc-tintura-madre-drogueria-argentina/", prioridad: 100 }),
  crearProducto({ id: "boldo-da", nombre: "Boldo x 60 cc Tintura Madre Droguería Argentina", plantaPrincipal: "Boldo", tipo: "monoherbal", objetivos: ["digestion", "higado", "bienestar"], precio: "$9.000,00", uso: "Tradicionalmente se usa para acompañar digestión y bienestar hepático.", link: "https://www.tiendavida.com.ar/productos/boldo-x-60-cc-tintura-madre-en-gotas-drogueriaargentina/", prioridad: 96 }),
  crearProducto({ id: "carqueja-da", nombre: "Carqueja x 60 cc Tintura Madre Droguería Argentina", plantaPrincipal: "Carqueja", tipo: "monoherbal", objetivos: ["digestion", "higado", "bienestar"], precio: "$7.600,00", uso: "Puede acompañar bienestar digestivo como complemento de hábitos saludables.", link: "https://www.tiendavida.com.ar/productos/carqueja-x-60-cc-tintura-madre-en-gotas-drogueriaargentina/", prioridad: 94 }),
  crearProducto({ id: "cardo-mariano-da", nombre: "Cardo Mariano x 60 cc Tintura Madre Droguería Argentina", plantaPrincipal: "Cardo mariano", tipo: "monoherbal", objetivos: ["higado", "digestion", "bienestar"], precio: "$14.500,00", uso: "Tradicionalmente se usa para acompañar bienestar hepático.", link: "https://www.tiendavida.com.ar/productos/cardo-mariano-x-60-cc-tintura-madre-en-gotas-drogueriaargentina/", prioridad: 95 }),
  crearProducto({ id: "hinojo-da", nombre: "Hinojo x 60 cc Tintura Madre Droguería Argentina", plantaPrincipal: "Hinojo", tipo: "monoherbal", objetivos: ["digestion", "bienestar"], precio: "$7.600,00", uso: "Tradicionalmente se usa para acompañar digestiones pesadas o sensación de hinchazón.", link: "https://www.tiendavida.com.ar/productos/hinojo-x-60-cc-tintura-madre-en-gotas-drogueriaargentina/", prioridad: 90 }),
  crearProducto({ id: "digestiva-308-da", nombre: "Blend N° 308 - Digestiva x 60 cc Tintura Madre Droguería Argentina", plantaPrincipal: "Blend Digestiva", tipo: "compuesta", objetivos: ["digestion", "bienestar"], precio: "$11.200,00", uso: "Fórmula tradicionalmente utilizada para acompañar bienestar digestivo.", link: "https://www.tiendavida.com.ar/productos/blend-n-308-digestiva-x-60-cc-tintura-madre-drogueria-argentina/", prioridad: 100 }),
  crearProducto({ id: "detox-303-da", nombre: "Blend N° 303 - Détox x 60 cc Tintura Madre Droguería Argentina", plantaPrincipal: "Blend Détox", tipo: "compuesta", objetivos: ["higado", "digestion", "bienestar"], precio: "$11.200,00", uso: "Puede acompañar rutinas de bienestar digestivo y hábitos saludables.", link: "https://www.tiendavida.com.ar/productos/blend-n-303-detox-x-60-cc-tintura-madre-drogueria-argentina/", prioridad: 100 }),
  crearProducto({ id: "protector-hepatico-309-da", nombre: "Blend N° 309 - Protector Hepático x 60 cc Tintura Madre Droguería Argentina", plantaPrincipal: "Blend Protector Hepático", tipo: "compuesta", objetivos: ["higado", "digestion", "bienestar"], precio: "$11.200,00", uso: "Fórmula tradicionalmente utilizada para acompañar bienestar hepático.", link: "https://www.tiendavida.com.ar/productos/blend-n-309-protector-hepatico-x-60-cc-tintura-madre-drogueria-argentina/", prioridad: 99 }),
  crearProducto({ id: "ortiga-da", nombre: "Ortiga x 60 cc Tintura Madre Droguería Argentina", plantaPrincipal: "Ortiga", tipo: "monoherbal", objetivos: ["retencion", "bienestar"], precio: "$7.600,00", uso: "Tradicionalmente se utiliza para acompañar eliminación de líquidos y bienestar general.", link: "https://www.tiendavida.com.ar/productos/ortiga-x-60-cc-tintura-madre-en-gotas-drogueriaargentina/", prioridad: 90 }),
  crearProducto({ id: "diuretico-307-da", nombre: "Blend N° 307 - Diurético x 60 cc Tintura Madre Droguería Argentina", plantaPrincipal: "Blend Diurético", tipo: "compuesta", objetivos: ["retencion", "bienestar"], precio: "$11.200,00", uso: "Fórmula tradicionalmente utilizada para acompañar la eliminación de líquidos.", link: "https://www.tiendavida.com.ar/productos/blend-n-307-diuretico-x-60-cc-tintura-madre-drogueria-argentina/", prioridad: 100 }),
  crearProducto({ id: "castano-da", nombre: "Castaño de Indias x 60 cc Tintura Madre Droguería Argentina", plantaPrincipal: "Castaño de Indias", tipo: "monoherbal", objetivos: ["circulacion", "bienestar"], precio: "$7.600,00", uso: "Tradicionalmente se usa para acompañar bienestar circulatorio.", link: "https://www.tiendavida.com.ar/productos/castano-de-indias-x-60-cc-tintura-madre-drogueria-argentina/", prioridad: 96 }),
  crearProducto({ id: "hamamelis-da", nombre: "Hamamelis x 60 cc Tintura Madre Droguería Argentina", plantaPrincipal: "Hamamelis", tipo: "monoherbal", objetivos: ["circulacion", "bienestar"], precio: "$10.600,00", uso: "Puede acompañar bienestar circulatorio como producto natural de uso tradicional.", link: "https://www.tiendavida.com.ar/productos/hamamelis-x-60-cc-tintura-madre-en-gotas-drogueriaargentina/", prioridad: 93 }),
  crearProducto({ id: "harpagofito-da", nombre: "Harpagofito x 60 cc Tintura Madre Droguería Argentina", plantaPrincipal: "Harpagofito", tipo: "monoherbal", objetivos: ["inflamacion", "bienestar"], precio: "$10.600,00", uso: "Tradicionalmente se usa para acompañar molestias articulares leves y bienestar general.", link: "https://www.tiendavida.com.ar/productos/harpagofito-x-60-cc-tintura-madre-en-gotas-drogueriaargentina/", prioridad: 96 }),
  crearProducto({ id: "jengibre-da", nombre: "Jengibre x 60 cc Tintura Madre Droguería Argentina", plantaPrincipal: "Jengibre", tipo: "monoherbal", objetivos: ["digestion", "energia", "inflamacion", "bienestar"], precio: "$7.600,00", uso: "Puede acompañar bienestar digestivo y sensación de vitalidad.", link: "https://www.tiendavida.com.ar/productos/jengibre-x-60-cc-tintura-madre-en-gotas-drogueriaargentina/", prioridad: 90 }),
  crearProducto({ id: "centella-vitawellness", nombre: "Centella Asiatica, Ginkgo Biloba, Te Verde & Hibiscus x 60 cc Vitawellness", plantaPrincipal: "Centella, Ginkgo, Té Verde & Hibiscus", tipo: "compuesta", objetivos: ["circulacion", "retencion", "adelgazante", "antioxidante", "bienestar"], precio: "$7.470,00", uso: "Puede acompañar bienestar general, circulación y hábitos saludables.", link: "https://www.tiendavida.com.ar/productos/centella-asiatica-ginkgo-biloba-te-verde-hibiscus-x-60-cc-vitawellness/", prioridad: 92 }),
  crearProducto({ id: "vmax-vitawellness", nombre: "V-MAX FORTE Melena de Leon, Ginkgo Biloba, Ginseng & Guaraná x 60 cc Vitawellness", plantaPrincipal: "Melena de León, Ginkgo, Ginseng & Guaraná", tipo: "compuesta", objetivos: ["energia", "concentracion", "bienestar"], precio: "$18.090,00", uso: "Puede acompañar vitalidad, foco y rendimiento diario como complemento de hábitos saludables.", link: "https://www.tiendavida.com.ar/productos/v-max-forte-melena-de-leon-ginkgo-biloba-ginseng-guarana-x-60-cc-vitawellness/", prioridad: 96 }),
  crearProducto({ id: "lions-serena-vitawellness", nombre: "Lions Mane Serena con Tilo, Melisa & Melena de Leon x 60 cc Vitawellness", plantaPrincipal: "Tilo, Melisa & Melena de León", tipo: "compuesta", objetivos: ["relax", "ansiedad", "estres", "concentracion", "bienestar"], precio: "$18.090,00", uso: "Puede acompañar momentos de calma con foco suave para rutinas diarias.", link: "https://www.tiendavida.com.ar/productos/lions-mane-serena-con-tilo-melisa-melena-de-leon-x-60-cc-vitawellness/", prioridad: 91 }),
  crearProducto({ id: "curcuma-vitawellness", nombre: "Curcuma, Pimienta Negra & Jengibre x 60 cc Vitawellness", plantaPrincipal: "Cúrcuma, Pimienta Negra & Jengibre", tipo: "compuesta", objetivos: ["inflamacion", "antioxidante", "digestion", "bienestar"], precio: "$7.470,00", uso: "Puede acompañar bienestar general, digestión y molestias articulares leves.", link: "https://www.tiendavida.com.ar/productos/curcuma-pimienta-negra-jengibre-x-60-cc-vitawellness/", prioridad: 95 }),
];
