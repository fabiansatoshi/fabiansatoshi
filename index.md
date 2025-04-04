---
layout: default
title: Home
---

<section class="hero">
  <div class="container">
    <div class="hero__inner">
      <div class="row">
        <div class="col col-6 col-d-12">
          <div class="hero__left">
            <div class="hero__image">
              <img src="/images/hero.jpg" alt="Foto Fabián">
            </div>
            <div class="hero__image__caption">Programando el futuro desde mi escritorio</div>
          </div>
        </div>
        <div class="col col-6 col-d-12">
          <div class="hero__right">
            <h1 class="hero__title">Hola 👋 ¡Soy Fabián! </h1>
            <p class="hero__subtitle">Ingeniero de Software, fan de la electrónica y los videojuegos</p>
            <div class="hero__description">
              <p>Este blog es mi bitácora donde comparto conocimientos, proyectos y recursos para devs y curiosos digitales.</p>
            </div>
            <a href="/contacto" class="hero__button button button--primary">Hablemos</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<section class="blog__section section">
  <div class="container">

    <!-- Header -->
    <div class="section__head">
      <h2 class="section__title">Mi Journal</h2>
      <div class="blog__view">
        <div class="blog__toggle">
          <div class="icon">
            <div class="icon-bar"></div>
            <div class="icon-bar"></div>
            <div class="icon-bar"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Lista de posts estilo Coderon -->
    <div class="row grid">
      {% for post in site.posts limit:6 %}
        <div class="article article--flexible col col-6 col-t-12 grid__post animate">
          <div class="article__inner">
            <div class="article__head">
              <a class="article__image" href="{{ post.url }}">
                <img class="lazy loaded" src="/images/default.jpg" alt="{{ post.title }}">
              </a>
            </div>
            <div class="article__content">
              {% if post.categories.size > 0 %}
                <div class="article__tags">
                  <a href="/tags/?tag={{ post.categories[0] }}" class="article__tag" style="background: #4643ec;">
                    {{ post.categories[0] | capitalize }}
                  </a>
                </div>
              {% endif %}
              <h2 class="article__title">
                <a href="{{ post.url }}">{{ post.title }}</a>
              </h2>
              <p class="article__excerpt">
                {{ post.excerpt | strip_html | truncate: 120 }}
              </p>
              <div class="article__meta">
                <time class="article__date" datetime="{{ post.date | date_to_xmlschema }}">
                  {{ post.date | date: "%d %b, %Y" }}
                </time>
                <div class="article__minutes">3 min read</div>
              </div>
            </div>
          </div>
        </div>
      {% endfor %}
    </div>

  </div>
</section>


<!-- Aquí seguirán otras secciones como Nerd Stuff, Binary Journal, etc -->
