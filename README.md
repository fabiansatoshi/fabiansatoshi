# 🌐 fabiansatoshi - Blog personal de Fabián González

**fabiansatoshi** es un blog personal creado por [Fabián González](https://fabiangonzalez.dev) donde comparto mis gustos y opiniones sobre videojuegos, anime, manga y cultura pop en general. También integro contenido desde TikTok y exploro ideas creativas a través de artículos escritos en Markdown y secciones interactivas con JavaScript.

Este sitio está construido con [Eleventy (11ty)](https://www.11ty.dev/), un generador de sitios estáticos rápido y flexible, y está alojado de forma gratuita en GitHub Pages bajo el dominio:

👉 **[https://fabiangonzalez.github.io](https://fabiangonzalez.github.io)**

---

## 🚀 Tecnologías utilizadas

- **Eleventy (11ty)** – Generador de sitios estáticos.
- **Markdown** – Para escribir los artículos del blog.
- **HTML/CSS/JS** – Para secciones personalizadas e interactivas.
- **GitHub Pages** – Hosting gratuito y estable.
- **TikTok Embed** – Integración de mis videos de TikTok directamente en el blog.

---

## 📂 Estructura del proyecto

```bash
.
├── _includes/        # Plantillas reutilizables (layout, tiktok.html)
├── posts/            # Artículos del blog en formato Markdown
├── static/           # Archivos estáticos como CSS o imágenes
├── _site/            # Sitio generado automáticamente (no editar a mano)
├── index.njk         # Página principal del sitio
├── posts.njk         # Listado de posts
├── .eleventy.js      # Configuración de Eleventy
├── .gitignore        # Archivos que no se suben al repo
├── package.json      # Dependencias y scripts
└── README.md         # Este archivo
```

---

## ✍️ Primer post publicado

> **Mi historia con los videojuegos 🎮**  
> Hablo sobre mis inicios con la Family Game, momentos nostálgicos y lo que significa para mí el gaming retro.  
> 👉 `/posts/primer-post/`

---

## 📸 TikTok integrado

Algunos artículos incluyen videos directamente desde mi cuenta de TikTok:  
[@fabiansatoshi](https://www.tiktok.com/@fabiansatoshi)

---

## 🛠 Cómo correr el sitio localmente

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/fabiangonzalez/fabiangonzalez.github.io
   cd fabiangonzalez.github.io
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Correr el servidor local:
   ```bash
   npx eleventy --serve
   ```

4. Acceder a `http://localhost:8080` en tu navegador.

---

## ☁️ Publicar en GitHub Pages

Para hacer deploy al sitio:

```bash
npm run deploy
```

Esto compilará el sitio en `_site/` y lo subirá al branch `gh-pages` de GitHub.

---

## 📄 Licencia

Este proyecto está licenciado bajo la **MIT License**, lo cual significa que podés copiarlo, modificarlo o inspirarte en él libremente.

---

## 💬 Contacto

¿Querés charlar sobre algún tema o colaborar?  
📩 Escribime por WhatsApp o seguime en TikTok: [@fabiansatoshi](https://www.tiktok.com/@fabiansatoshi)
