# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2018-03-14 15:35
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('mathswizard', '0014_auto_20180314_1525'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='studentprofile',
            name='city',
        ),
        migrations.RemoveField(
            model_name='studentprofile',
            name='school',
        ),
    ]
