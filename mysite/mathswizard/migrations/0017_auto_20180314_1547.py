# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2018-03-14 15:47
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('mathswizard', '0016_auto_20180314_1546'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='teacherprofile',
            name='difficulty',
        ),
        migrations.RemoveField(
            model_name='teacherprofile',
            name='focus',
        ),
        migrations.RemoveField(
            model_name='teacherprofile',
            name='teacher',
        ),
        migrations.AddField(
            model_name='teacherprofile',
            name='city',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AddField(
            model_name='teacherprofile',
            name='description',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AddField(
            model_name='teacherprofile',
            name='email',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AddField(
            model_name='teacherprofile',
            name='school',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AlterField(
            model_name='studentprofile',
            name='teacher',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='Test', to=settings.AUTH_USER_MODEL),
        ),
    ]
