from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Cooperativa(models.Model):
    nombre =  models.CharField(max_length=70)
    descripcion = models.CharField(max_length=550),
    zona = models.CharField(max_length=70),
    responsable = models.CharField(max_length=70),
    nit = models.CharField(max_length=70),
    correo = models.CharField(max_length=70)