# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2018-03-23 13:50
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mathswizard', '0025_auto_20180323_1316'),
    ]

    operations = [
        migrations.AlterField(
            model_name='studentprofile',
            name='first_name',
            field=models.CharField(blank=True, default='', max_length=100),
        ),
        migrations.AlterField(
            model_name='studentprofile',
            name='last_name',
            field=models.CharField(blank=True, default='', max_length=100),
        ),
    ]
