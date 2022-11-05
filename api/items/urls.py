from django.urls import path, include
from rest_framework.routers import DefaultRouter
from items import views
from django.urls import  path,include
from rest_framework import routers
from .views import  CreatorViewSet, ItemViewSet

router = routers.DefaultRouter()
router.register(r'items', ItemViewSet)
urlpatterns = [
    #  path('', include(router.urls)),
     path('', include(router.urls)),
    #  path('items/', ItemViewSet.as_view({'get':'list'})),
    #  path('items/{int:pk}/', ItemViewSet.as_view({'get': 'retrieve'})),
     path('creator/', CreatorViewSet.as_view({'get':'list'})),
]

