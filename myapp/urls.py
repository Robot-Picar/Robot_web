from django.urls import path
from . import views

urlpatterns = [
    path('', views.dashboard, name='dashboard'),
    path('control/<str:command>/', views.control_robot, name='control_robot'),
]
