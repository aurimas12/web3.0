from rest_framework.response import Response
from rest_framework import viewsets
from .models import Bid
from .serializers import BidSerializer

class BidViewSet(viewsets.ModelViewSet):
    queryset = Bid.objects.all()
    serializer_class = BidSerializer

    def retrieve(self, request, *args, **kwargs):
        return Response(Bid.objects.filter(item_id=kwargs.get('pk')).count())

