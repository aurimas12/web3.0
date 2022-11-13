from rest_framework.response import Response
from rest_framework import viewsets
from .models import Bid
from .serializers import BidSerializer

class BidViewSet(viewsets.ModelViewSet):
    queryset = Bid.objects.all()
    serializer_class = BidSerializer

    def retrieve(self, request, *args, **kwargs):
        bids_total=(Bid.objects.filter(item_id=kwargs.get('pk')).count())
        amounts=(Bid.objects.filter(item_id=kwargs.get('pk')).values('amount'))
        
        amount_total=0
        for amount in amounts:
            amount_total+=(amount.get('amount'))
        return Response({'bids_total':bids_total,'amount_total':amount_total})

