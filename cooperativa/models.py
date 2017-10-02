from __future__ import unicode_literals

from django.db import models


# Create your models here.
class Cooperativa(models.Model):
    nombre = models.CharField(max_length=70)
    descripcion = models.CharField(max_length=550)
    zona = models.CharField(max_length=70)
    responsable = models.CharField(max_length=70)
    nit = models.CharField(max_length=70)
    correo = models.CharField(max_length=70)

    class Meta:
        verbose_name = 'Cooperativa'
        verbose_name_plural = 'Cooperativas'

    def __str__(self):
        return '%s' % (self.nombre)

    def __unicode__(self):
        return self.nombre


class TipoDocumento(models.Model):
    nombre = models.CharField(max_length=70)
    descripcion = models.CharField(max_length=550)

    class Meta:
        verbose_name = 'Tipo Documento'
        verbose_name_plural = 'Tipos de documentos'

    def __str__(self):
        return '%s' % (self.nombre)

    def __unicode__(self):
        return self.nombre

class Productor(models.Model):
    nombre = models.CharField(max_length=70)
    descripcion = models.CharField(max_length=550)
    tipo_documento = models.ForeignKey(TipoDocumento)
    documento = models.CharField(max_length=50)
    direccion = models.TextField()
    cooperativa = models.ForeignKey(Cooperativa)
    foto= models.TextField()

    class Meta:
        verbose_name = 'Productor'
        verbose_name_plural = 'Productores'

    def __str__(self):
        return '%s' % (self.nombre)

    def __unicode__(self):
        return self.nombre
