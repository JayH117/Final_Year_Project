# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2018-03-11 19:45
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('mathswizard', '0005_auto_20180311_1942'),
    ]

    operations = [
        migrations.AlterField(
            model_name='studentprofile',
            name='teacher',
            field=models.ForeignKey(default=1, editable=False, on_delete=django.db.models.deletion.CASCADE, related_name='Test', to=settings.AUTH_USER_MODEL),
        ),
    ]
