from rest_framework import serializers
from productor.models import Productor


class ProductorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Productor
        fields = '__all__'
