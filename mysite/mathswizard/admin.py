# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.contrib import admin
from mathswizard.models import TeacherProfile, StudentProfile
	

admin.site.site_header ='Maths Wizard Admin'

admin.site.register(TeacherProfile)
admin.site.register(StudentProfile)