from rest_framework import serializers
from cooperativa.models import Cooperativa


class CooperativaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cooperativa
        fields = '__all__'
