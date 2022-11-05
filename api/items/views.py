from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework import viewsets


from .models import Creator,Item
from .serializers import CreatorSerializer, ItemSerializer
from rest_framework.viewsets import ModelViewSet
# Create your views here.

class ItemViewSet(viewsets.ModelViewSet):
    serializer_class = ItemSerializer
    queryset = Item.objects.all()


    def retrieve(self, request, pk=None):
        item = get_object_or_404(self.queryset, pk=pk)
        serializer = ItemSerializer(item)
        return Response(serializer.data)
class CreatorViewSet(viewsets.ModelViewSet):
    serializer_class = CreatorSerializer
    queryset = Creator.objects.all()

    