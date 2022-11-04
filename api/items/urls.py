from django.urls import path, include
from rest_framework.routers import DefaultRouter
from items import views
from django.urls import  path,include
from rest_framework import routers
from .views import  ItemViewSet

router = routers.DefaultRouter()
# router.register(r'books', BookViewSet)
urlpatterns = [
    #  path('', include(router.urls)),
     path('items/', ItemViewSet.as_view({'get':'list'})),
]

