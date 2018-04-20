# -*- coding: utf-8 -*-
# Generated by Django 1.11.12 on 2018-04-18 05:23
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='register',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('username', models.CharField(default=None, max_length=255, null=True)),
                ('firstname', models.CharField(default=None, max_length=255, null=True)),
                ('lastname', models.CharField(default=None, max_length=255, null=True)),
                ('email', models.EmailField(blank=True, default=None, max_length=254)),
                ('password', models.CharField(default=None, max_length=255, null=True)),
            ],
        ),
    ]