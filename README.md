# Asesor de Tinturas Madre - Tienda Vida

Aplicación web hecha con React + Vite + TypeScript para recomendar tinturas madre según:

1. Tipo de tintura madre:
   - Tintura Madre Monoherbal
   - Tintura Madre Compuesta
   - Sin Preferencia
2. Objetivo del cliente:
   - Relax
   - Sueño
   - Ansiedad
   - Digestión
   - Détox
   - Energía
   - Concentración
   - Antioxidante
   - Defensas
   - Circulación
   - Retención de líquidos
   - Adelgazante / Saciedad
   - Respiratorio
   - Vías urinarias
   - Hepático
   - Menopausia
   - Bienestar general

## Instalar

```bash
npm install
```

## Ver en desarrollo

```bash
npm run dev
```

Después abrí la URL local que muestra Vite, normalmente:

```txt
http://localhost:5173
```

## Generar versión final

```bash
npm run build
```

La carpeta final para publicar queda en:

```txt
dist
```

## Publicar en Vercel

En Vercel usar:

```txt
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

## Editar productos

La base de productos está en:

```txt
src/data.ts
```

Para agregar o modificar una tintura, editá el arreglo:

```ts
PRODUCTOS_TINTURAS
```

Cada producto tiene:

- `id`
- `nombre`
- `plantaPrincipal`
- `tipo`
- `objetivos`
- `descripcion`
- `uso`
- `precio`
- `link`
- `prioridad`

## Nota importante

Las recomendaciones son orientativas y comerciales. No reemplazan indicación médica ni profesional.
