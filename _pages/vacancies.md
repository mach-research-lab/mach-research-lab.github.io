---
layout: page
title: vacancies
permalink: /vacancies/
description: Our vacancies
nav: true
nav_order: 3
display_categories: [PhD,Postdoc,Master Thesis, Bachelor Thesis]
horizontal: false
---
If no open position is available, feel free to contact us anyway at: ppedro@chalmers.se.  
<!-- pages/projects.md -->
<div class="vacancies">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_vacancies = site.vacancies | where: "category", category %}
  {% assign sorted_vacancies = categorized_vacancies | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for vacancy in sorted_vacancies %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for vacancy in sorted_vacancies %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_vacancies = site.vacancies | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for vacancy in sorted_vacancies %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for vacancy in sorted_vacancies %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
