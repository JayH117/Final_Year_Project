# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2018-03-14 15:46
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('mathswizard', '0015_auto_20180314_1535'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='teacherprofile',
            name='city',
        ),
        migrations.RemoveField(
            model_name='teacherprofile',
            name='description',
        ),
        migrations.RemoveField(
            model_name='teacherprofile',
            name='email',
        ),
        migrations.RemoveField(
            model_name='teacherprofile',
            name='school',
        ),
        migrations.AddField(
            model_name='teacherprofile',
            name='difficulty',
            field=models.CharField(choices=[('Beginner', 'Beginner'), ('Intermediate', 'Intermediate'), ('Advanced', 'Advanced')], default='Beginner', max_length=100),
        ),
        migrations.AddField(
            model_name='teacherprofile',
            name='focus',
            field=models.CharField(choices=[('Addition', 'Addition'), ('Multiplication', 'Multiplication'), ('Subtraction', 'Subtraction')], default='Addition', max_length=100),
        ),
        migrations.AddField(
            model_name='teacherprofile',
            name='teacher',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='teacher', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='studentprofile',
            name='teacher',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='Teacher', to=settings.AUTH_USER_MODEL),
        ),
    ]
