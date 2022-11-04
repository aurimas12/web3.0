from rest_framework.response import Response
from rest_framework import viewsets


from .models import Creator,Item
from .serializers import CreatorSerializer, ItemSerializer
from rest_framework.viewsets import ModelViewSet
# Create your views here.

class ItemViewSet(viewsets.ModelViewSet):
    serializer_class = ItemSerializer
    queryset = Item.objects.all()
