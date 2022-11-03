from django.contrib import admin
from .models import Item,Creator

admin.site.register(Creator)
admin.site.register(Item)

# TODO str modeliams prideti
# TODO item modeliui padaryt text area vietoj charfield
# TODO adminpanelej padaryt item skilti kad graziai image matytusi
# TODO media folder sutvarkyti
