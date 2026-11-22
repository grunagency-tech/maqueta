# Grün Loyalty — Rediseño UX/UI & CRO (`loyalty.grunagency.com`)

Rediseño integral e implementación completa de la experiencia comercial de **Grün Loyalty** ([https://loyalty.grunagency.com/](https://loyalty.grunagency.com/)), enfocado en claridad visual en menos de 10 segundos, demostración interactiva de producto y conversión comercial para dueños de cafeterías, barberías, restaurantes y negocios locales.

## Stack & Arquitectura

- **Framework:** Astro 5 + React 18 Islands (`InteractivePassDemo.tsx`)
- **Tipografías auto-hospedadas:** `Space Grotesk`, `Rethink Sans`, `JetBrains Mono` (`public/fonts/*.woff2`)
- **Identidad visual Grün:** Obsidiana `#060707`, Blanco `#F5F7F6` y Verde `#1ED937`
- **Rutas preservadas:**
  - `/` (`src/pages/index.astro`): Landing page rediseñada con demostración interactiva en vivo, flujo de 5 pasos + 2 modalidades de sellado, beneficios, ROI de `$500 MXN/mes`, FAQ sin redundancias y CTA final con desglose de siguientes pasos.
  - `/login` (`src/pages/login.astro`): Acceso sin contraseña (magic link) compatible con el endpoint original.
  - `/privacy` (`src/pages/privacy.astro`): Aviso de Privacidad íntegro (LFPDPPP).
  - `/terms` (`src/pages/terms.astro`): Términos y Condiciones íntegros (`$500 MXN mensuales`).

## Comandos

```bash
# Servidor de desarrollo local (http://localhost:4322)
npm run dev

# Build estático de producción (./dist)
npm run build

# Previsualización de producción
npm run preview
```
