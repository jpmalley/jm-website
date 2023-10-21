"""jmwebsite URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf import settings
from django.contrib import admin
from django.urls import path

from home.views import home, about, projects, experience, contact
from filetransfer.views import filetransfer, success, presignUpload, presignDownload

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home, name="home"),
    path('about/', about, name="about"),
    path('projects/', projects, name="projects"),
    path('experience/', experience, name="experience"),
    path('contact/', contact, name="contact"),

    # filetransfer views
    path('filetransfer', filetransfer, name="filetransfer"),
    path('success/', success, name="success"),
    path('ajax/presign_upload/', presignUpload, name="presign_upload"),
    path('ajax/presign_download/', presignDownload, name="presign_download")
]