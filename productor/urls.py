"""organico_cooperativas URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.views.generic import TemplateView

from . import views

urlpatterns = [
    # views
    url(r'^$', views.productorAdmin, name="home_productor"),
    url(r'^registro/$', views.productorAdmin, name="registrar_productor"),
    url(r'^lista', views.productorLista, name="listar_productor"),
    url(r'^detalle/(?P<id>.+)$', views.productorDetail, name='detalle_productor'),

    # rest services
    url(r'^service$', views.productoresList, name="servicios_productor"),
    url(r'^get/(?P<id>.+)$', views.productorGet, name='get_productor'),
]