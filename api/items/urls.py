from django.urls import path, include
from rest_framework.routers import DefaultRouter
from items import views
from django.urls import  path,include
from rest_framework import routers
from .views import  CreatorViewSet, ItemViewSet

router = routers.DefaultRouter()
router.register(r'', ItemViewSet)
# router.register(r'creator', CreatorViewSet)
urlpatterns = [
    #  path('', include(router.urls)),
    path('creator/', CreatorViewSet.as_view({'get':'list'})),
     path('', include(router.urls)),
]

