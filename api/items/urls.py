from django.urls import path, include
from rest_framework.routers import DefaultRouter
from items import views

urlpatterns = [
    path('c/', views.SnippetViewSet.as_view()),
]
