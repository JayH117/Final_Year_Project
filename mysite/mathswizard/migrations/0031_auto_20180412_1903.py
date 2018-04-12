# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2018-04-12 18:03
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
            field=models.IntegerField(default='1'),
        ),
        migrations.AddField(
            model_name='studentprofile',
            name='levelprog',
            field=models.IntegerField(default='0'),
        ),
        migrations.AddField(
            model_name='studentprofile',
            name='skipped',
            field=models.IntegerField(default='0'),
        ),
        migrations.AlterField(
            model_name='studentprofile',
            name='cof',
            field=models.IntegerField(default='0'),
        ),
        migrations.AlterField(
            model_name='studentprofile',
            name='focus',
            field=models.CharField(choices=[('Addition', 'Addition'), ('Multiplication', 'Multiplication'), ('Subtraction', 'Subtraction')], default='Addition', max_length=100),
        ),
        migrations.AlterField(
            model_name='studentprofile',
            name='level',
            field=models.IntegerField(default='1'),
        ),
    ]
