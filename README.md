# Renovación Popular Ate

Sitio de campaña de Elizabeth Cabezas, candidata a alcaldesa de Ate por Renovación Popular.

## Estructura

Este es un sitio **100% HTML/CSS estático**, sin frameworks ni build steps. Todo el sitio vive en la carpeta [`docs/`](docs/), que GitHub Pages publica directamente en **[renovacionpopularate.org.pe](https://renovacionpopularate.org.pe)** (dominio configurado en [`docs/CNAME`](docs/CNAME)).

```
docs/
  index.html                        página principal
  camaras-de-seguridad-ate.html     página interna: cámaras de seguridad
  zonas-de-desarrollo-ate.html      página interna: zonas de desarrollo
  veterinaria-municipal-ate.html    página interna: clínica veterinaria
  *.jpg, *.png                      fotos, logo, íconos
  *.pdf                             hoja de vida y plan de gobierno
  robots.txt, sitemap.xml, manifest.json
```

## Cómo editar el sitio

No hay `npm install` ni build: se edita directamente el HTML de `docs/`, se hace commit y push a `main`, y GitHub Pages lo publica en unos minutos.

Cada página es un archivo HTML autocontenido (con su propio `<style>` inline) que reutiliza el mismo header, footer y menú móvil que el resto del sitio, para mantener consistencia visual.
