from django.shortcuts import get_object_or_404, render
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse, JsonResponse
from rest_framework import status
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from rest_framework.decorators import api_view
from productor.models import Productor
from productor.serializers import ProductorSerializer


# Create your views here.

def productorAdmin(request):
    context = {}
    return render(request, 'productor.html', context)

def productorLista(request):
    context = {}
    return render(request, 'productor-lista.html', context)

def productorDetail(request, id):
    productor = get_object_or_404(Productor, id=id)
    context = {'productor': productor}
    return render(request, 'productor-detalle.html', context)

class modeloJSON(HttpResponse):
    def __init__(self, data, **kwargs):
        content = JSONRenderer().render(data)
        kwargs['content_type'] = 'application/json'
        super(modeloJSON, self).__init__(content, **kwargs)

@csrf_exempt
@api_view(['GET', 'POST', ])
def productoresList(request):
    if (request.method == 'GET'):
        productores = Productor.objects.all()
        serializer = ProductorSerializer(productores, many=True)
        return modeloJSON(serializer.data)
    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = ProductorSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)

@csrf_exempt
@api_view(['GET'])
def productorGet(request, id):
    productor = Productor.objects.get(pk=id)
    serializer = ProductorSerializer(productor)
    return modeloJSON(serializer.data)