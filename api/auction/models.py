from django.db import models
from items.models import Item

class Bid(models.Model):
    event = models.CharField(max_length=25,default='event')
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    amount = models.IntegerField()
    bid_date = models.DateTimeField(auto_now=True)
