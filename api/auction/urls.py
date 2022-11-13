from .views import  BidViewSet
from django.urls import path, include

urlpatterns = [
    path("bid/list", BidViewSet.as_view({'get':'list'})),
    path("bid/create/", BidViewSet.as_view({'post':'create'})),
    path("bid/<int:pk>/total", BidViewSet.as_view({'get':'retrieve'})),
]