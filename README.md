# Clima Dev - El tiempo en Chile

Aplicación web educativa para consultar el clima de distintas ciudades de Chile. La app maneja lugares urbanos como Santiago, Arica, Antofagasta, Valparaíso, Concepción, Temuco y Osorno, mostrando temperatura, condición climática e información de pronóstico semanal.

## Características

- Diseño responsivo con el sistema de grillas de Bootstrap 5.
- Cards de ciudades organizadas para móvil, tablet y escritorio.
- Página de detalle por ciudad con información climática y pronóstico.
- Datos climáticos definidos en JavaScript para fines de práctica.

## Metodología de estilos

El proyecto utiliza la metodología **BEM** para nombrar las clases CSS propias. Esto permite separar bloques, elementos y posibles modificadores de forma clara.

Ejemplos usados en el proyecto:

- `tarjeta-clima`
- `tarjeta-clima__cuerpo`
- `tarjeta-clima__titulo`
- `tarjeta-clima__temperatura`
- `pronostico__dia`

Las clases de Bootstrap se mantienen con sus nombres originales, como `row`, `col-12`, `card`, `btn` y `navbar`.

## Estructura SASS

Los estilos se organizan en parciales dentro de la carpeta `scss/`:

- `variables/_variables.scss`: colores, fuente, tamaños, espaciados y transiciones.
- `base/_mixins.scss`: mixins reutilizables para estilos repetidos.
- `base/_base.scss`: estilos globales del sitio.
- `layout/_navegacion.scss`: estilos de la barra de navegación.
- `layout/_pie-pagina.scss`: estilos del footer.
- `componentes/_tarjeta-clima.scss`: estilos de las cards principales.
- `componentes/_pronostico.scss`: estilos del pronóstico semanal.
- `main.scss`: archivo principal que importa todos los parciales.

El CSS final compilado se encuentra en `css/main.css` y es el archivo enlazado desde el HTML.

## Tecnologías

- HTML5
- SASS / CSS
- Bootstrap 5
- JavaScript
- jQuery

## Repositorio

Repositorio público en GitHub: [weather-frontend-m2](https://github.com/lucianopv98-spec/weather-frontend-m2)

## Cómo usar

1. Clona o descarga el repositorio.
2. Abre `index.html` en un navegador moderno.
3. Para editar estilos SASS, modifica los archivos en `scss/` y compila hacia `css/main.css`.

---

Proyecto desarrollado con fines educativos.
