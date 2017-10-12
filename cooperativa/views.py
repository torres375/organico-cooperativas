from django.shortcuts import get_object_or_404, render, get_list_or_404
from django.views.decorators.csrf import csrf_exempt
import json
from django.http import HttpResponse, JsonResponse
from rest_framework.renderers import JSONRenderer
from cooperativa.models import Cooperativa
from cooperativa.serializers import CooperativaSerializer

# Create your views here.

def cooperativasAdmin(request):
    context = {}
    return render(request, 'cooperativas.html', context)

class modeloJSON(HttpResponse):
	def __init__(self, data, **kwargs):
		content = JSONRenderer().render(data)
		kwargs['content_type'] = 'application/json'
		super(modeloJSON, self).__init__(content, **kwargs)

@csrf_exempt
def cooperativasList(request):
    if (request.method == 'GET'):
        cooperativas = Cooperativa.objects.all()
        serializer = CooperativaSerializer(cooperativas, many=True)
        return modeloJSON(serializer.data)

@csrf_exempt
def cooperativasGet(request, id_cooperativa):
    if (request.method == 'GET'):
        cooperativa = get_object_or_404(Cooperativa, id=id_cooperativa)
        cooperativas = Cooperativa.objects.all().filter(id=id_cooperativa)
        serializer = CooperativaSerializer(cooperativas, many=True)
        return modeloJSON(serializer.data)

@csrf_exempt
def guardarCooperativa(request):
    respuesta = False
    if (request.method == 'POST'):
        cooperativaPost = json.loads(request.body)
        cooperativa = Cooperativa.objects.create(nombre=cooperativaPost["nombre"],
                                                 nit=cooperativaPost["nit"],
                                                 descripcion=cooperativaPost["descripcion"],
                                                 zona=cooperativaPost["zona"],
                                                 responsable=cooperativaPost["responsable"],
                                                 correo=cooperativaPost["correo"],
                                                 direccion=cooperativaPost["direccion"],
                                                 telefono=cooperativaPost["telefono"],
                                                 );

        cooperativa.save()
        respuesta = True
    return modeloJSON(respuesta)