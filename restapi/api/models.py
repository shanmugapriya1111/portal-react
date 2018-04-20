from __future__ import unicode_literals
from django.db import models

# Create your models here.

class Register(models.Model):

    id = models.AutoField(primary_key=True)
    username =  models.CharField(max_length=255, default=None, null=True)
    firstname = models.CharField(max_length=255, default=None, null=True)
    lastname = models.CharField(max_length=255, default=None, null=True)
    email = models.EmailField(default=None, blank=True)
    password =models.CharField(max_length=255, default=None,null=True)

    class Meta:
		unique_together = ('username',)
