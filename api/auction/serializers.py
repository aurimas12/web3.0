# bid create return total bid count on this item
from rest_framework import serializers
from auction.models import Bid

class BidSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bid
        fields = '__all__'