# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2018-04-03 14:14
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mathswizard', '0030_auto_20180330_1159'),
    ]

    operations = [
        migrations.AddField(
            model_name='studentprofile',
            name='completed',
            field=models.CharField(default='1', max_length=100),
        ),
    ]