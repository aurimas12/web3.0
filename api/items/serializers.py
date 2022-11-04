from rest_framework import serializers
from items.models import Item,Creator

class CreatorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Creator
        fields = ['name','image']


class ItemSerializer(serializers.ModelSerializer):
    creator = CreatorSerializer()
    class Meta:
        model = Item
        fields = ['title','description','image','creator','current_bid']
