---
title: "Milla"
layout: default
permalink: "/author/milla.html"
---
<div class="container">
<div class="row justify-content-center">
    <div class="col-md-8">        
        <div class="row align-items-center mb-5">
            <div class="col-md-9">
                <h2 class="font-weight-bold">{{page.title}} <span class="small btn btn-outline-success btn-sm btn-round"><a href="{{ site.authors.milla.twitter }}">Siga</a></span></h2>
                <p><a href="{{ site.authors.milla.site }}">{{ site.authors.milla.site }}</a></p>
                <p class="excerpt">{{ site.authors.milla.bio }}</p>
            </div>
            <div class="col-md-3 text-right">
                <img alt="{{ site.authors.milla.name }}" src="{{site.baseurl}}/{{ site.authors.milla.avatar }}" class="rounded-circle" height="100" width="100">
            </div>
        </div>
        <h4 class="font-weight-bold spanborder"><span>Posts de {{page.title}}</span></h4>
            {% assign posts = site.posts | where:"author","milla" %}
            {% for post in posts %}
            {% include main-loop-card.html %}
            {% endfor %}
    </div>
</div>
</div>