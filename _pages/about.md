---
title: "About"
layout: page
permalink: "/about.html"
---

{% for author in site.authors %}
<div class="col-md-4">
		<div class="card shadow-sm border-0">
			<img class="card-img-top" src="./assets/img/demo/blog8.jpg" alt="Card image cap">
			<div class="card-body text-center">
				<img class="rounded-circle shadow mt-neg5" src="{{site.baseurl}}/{{ author[1].avatar }}" width="70">
				<h5 class="card-title">{{ author[1].name }}</h5>
				<p class="card-text text-muted">
					 {{ author[1].bio }}
				</p>
				<div class="text-center">
					<a target="_blank" href="{{ author[1].facebook }}"><span class="iconbox iconsmall rounded-circle bg-secondary text-white mr-1"><i class="fab fa-facebook-f"></i></span></a>
					<a target="_blank" href="{{ author[1].twitter }}"><span class="iconbox iconsmall rounded-circle bg-info text-white mr-1"><i class="fab fa-twitter"></i></span></a>
					<a target="_blank" href="{{ author[1].github }}"><span class="iconbox iconsmall rounded-circle bg-dark text-white"><i class="fab fa-github"></i></span></a>
				</div>
			</div>
		</div>
	</div>
{% endfor%}

[urbanna]: https://portalurbanna.com.br
[Camila L. Oliveira]: https://millaloliveira.com
[4Bee Cosmeticos]: https://www.4beecosmeticos.com.br
[Hey]: https://its.heyurb.com.br