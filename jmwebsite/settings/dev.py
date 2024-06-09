from .base import *
import os
from dotenv import load_dotenv

load_dotenv()

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

env = os.environ.copy()
SECRET_KEY = os.getenv('DJANGO_SECRET_KEY')

ALLOWED_HOSTS = ['*']

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'jm',
        'USER': 'jm',
        'PASSWORD': 'password',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}