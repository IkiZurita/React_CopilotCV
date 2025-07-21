# Portafolio Personal con React + GitHub Copilot

Este proyecto es un portafolio personal desarrollado con React, Vite y Material UI, siguiendo buenas prácticas de desarrollo asistidas por Inteligencia Artificial.

## Tecnologías utilizadas

- React
- Vite
- Material UI
- GitHub Copilot (IA asistente)
- Jest + React Testing Library

## Características

- Información personal y profesional
- Fotografía y número de contacto
- Habilidades blandas y técnicas
- Proyectos destacados
- Lenguajes de programación

## Pruebas unitarias

Se implementaron pruebas automáticas para validar:

- Presencia de fotografía
- Nombre completo
- Número de teléfono
- Al menos 5 habilidades
- Al menos 3 proyectos
- Al menos 1 lenguaje de programación

Las pruebas se encuentran en:  
`src/App.test.jsx`

## Experiencia con GitHub Copilot

Durante el desarrollo, GitHub Copilot fue una herramienta clave para, generar estructuras de pruebas rápidamente, sugerir funciones de test automatizadas y agilizar la escritura de componentes en React.

La IA ayudó especialmente en la escritura de pruebas Jest con estructuras predefinidas y aserciones útiles, reduciendo tiempos de desarrollo y errores comunes.

## Automatización CI/CD

El flujo `.github/workflows/deploy.yml`:

1. Instala dependencias (`npm ci`)
2. Ejecuta pruebas unitarias (Jest + React Testing Library)
3. Compila el sitio con Vite
4. Publica automáticamente en GitHub Pages

Sin ramas `gh-pages` manuales — usa `actions/deploy-pages`, que aprovecha el `GITHUB_TOKEN` interno.

## 🔗 Enlace al repositorio

[https://github.com/IkiZurita/React_CopilotCV](https://github.com/IkiZurita/React_CopilotCV)
