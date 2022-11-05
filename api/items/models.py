from django.db import models

class Creator(models.Model):
  name = models.CharField(max_length=255)
  image = models.ImageField(upload_to='creator')

class Item(models.Model):
  title = models.CharField(max_length=120)
  description = models.CharField(max_length=255)
  image = models.ImageField(upload_to='items')
  creator = models.ForeignKey(Creator, on_delete=models.CASCADE)
  current_bid = models.FloatField()
