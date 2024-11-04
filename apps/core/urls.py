from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name="index"),
    path('service_worker.js',views.service_worker)
]
