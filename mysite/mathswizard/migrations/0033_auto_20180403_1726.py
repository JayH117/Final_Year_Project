# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2018-04-03 16:26
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mathswizard', '0032_studentprofile_skipped'),
    ]

    operations = [
        migrations.AlterField(
            model_name='studentprofile',
            name='dislikes',
            field=models.CharField(choices=[('Addition', 'Addition'), ('Multiplication', 'Multiplication'), ('Subtraction', 'Subtraction')], default='N/A', max_length=100),
        ),
        migrations.AlterField(
            model_name='studentprofile',
            name='likes',
            field=models.CharField(choices=[('Addition', 'Addition'), ('Multiplication', 'Multiplication'), ('Subtraction', 'Subtraction')], default='N/A', max_length=100),
        ),
    ]
