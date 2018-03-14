# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.conf import settings
from django.db import models
from django import forms
from django.contrib.auth.models import User, Permission
from django.db.models.signals import post_save

class TeacherProfile(models.Model):
	user = models.OneToOneField(User)
	description = models.CharField(max_length=100, default='')
	city = models.CharField(max_length=100, default='')
	school = models.CharField(max_length=100, default='')
	email = models.CharField(max_length=100, default='')
	
	def __str__(self):
		return self.user.username

class StudentProfile(models.Model):
	user = models.OneToOneField(User)
	teacher = models.ForeignKey(settings.AUTH_USER_MODEL, default=1, related_name='Test')
	FOCUS_CHOICES = (
		('Addition', 'Addition'),
		('Multiplication', 'Multiplication'),
		('Subtraction', 'Subtraction')
	)
	DIFFICULTY_CHOICES = (
		('Beginner', 'Beginner'),
		('Intermediate', 'Intermediate'),
		('Advanced', 'Advanced')
	)
	focus = models.CharField(max_length = 100, choices = FOCUS_CHOICES, default = 'Addition')
	difficulty = models.CharField(max_length = 100, choices = DIFFICULTY_CHOICES, default = 'Beginner')
	
	def __str__(self):
		return self.user.username

def create_profile(sender, **kwargs):
	if kwargs['created']:
		user_profile = TeacherProfile.objects.create(user=kwargs['instance'])
post_save.connect(create_profile, sender=User)

def create_student(sender, **kwargs):
	if kwargs['created']:
		student_profile = StudentProfile.objects.create(user=kwargs['instance'])
post_save.connect(create_student, sender=User)
