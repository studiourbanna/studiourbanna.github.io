---
title: "Autores"
layout: default
permalink: "/authors-list.html"
---

<h4 class="font-weight-bold spanborder"><span>{{page.title}}</span></h4>
    <div class="row gap-y listrecent listrecent listauthor">
    {% for author in site.authors %}
        <div class="col-lg-6 mb-4">
            <div class="p-4 border rounded">
            <div class="row">
            <div class="col-md-4 mb-4 mb-md-0"><img alt="{{ author[1].name }}" src="{{site.baseurl}}/{{ author[1].avatar }}" class="rounded-circle" height="80" width="80"></div>
            <div class="col-md-8">
            <a href="{{site.baseurl}}/author/{{ author[1].name | slugify }}">
            <h4 class="text-dark mb-0"> {{ author[1].name }} </h4>
            <small class="d-inline-block mt-1 mb-3 font-weight-normal">(Ver Posts)</small>
            <div class="excerpt">{{ author[1].bio }}</div>
            </a>
            <div class="icon-block mt-3 d-flex justify-content-between">  
            <div>
            <a target="_blank" href="{{ author[1].site }}"><i class="fas fa-globe"></i></a> &nbsp;
            <a target="_blank" href="{{ author[1].twitter }}"><i class="fab fa-twitter"></i></a>&nbsp;
            <a target="_blank" href="{{ author[1].facebook }}"><i class="fab fa-facebook"></i></a> &nbsp;
            </div>
            </div>
            </div>
            </div>
            </div>
        </div>
    {% endfor %}
    </div>