# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2018-03-19 13:21
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('mathswizard', '0017_auto_20180314_1547'),
    ]

    operations = [
        migrations.AlterField(
            model_name='studentprofile',
            name='teacher',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='Teacher', to=settings.AUTH_USER_MODEL),
        ),
    ]
