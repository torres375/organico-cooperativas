from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
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