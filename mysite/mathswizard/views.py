# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render, redirect
from django.template.response import TemplateResponse
from mathswizard.forms import ( 
	RegistrationForm,
	EditUserForm,
	StudentForm
	)
from mathswizard.models import StudentProfile, TeacherProfile
from django.contrib.auth.models import User
from django.contrib.auth.forms import (
	UserChangeForm,
	PasswordChangeForm
	)
from django.contrib.auth import update_session_auth_hash

def home(request):
	return render(request, 'mathswizard/home.html')

def login(request):
	return render(request, 'mathswizard/login.html')
	
def logout(request):
	return render(request, 'mathswizard/logout.html')

def register(request):
    if request.method =='POST':
        form = RegistrationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('/mathswizard/login')
    else:
        form = RegistrationForm()
        args = {'form': form}
		
        return render(request, 'mathswizard/registration.html',args)
		
def dashboard(request):
	args = {'user': request.user}
	return render(request, 'mathswizard/dashboard.html', args)
	
def edit_user(request):
	if request.method == 'POST':
		form = EditUserForm(request.POST, instance=request.user)
		
		if form.is_valid():
			form.save()
			return redirect('/mathswizard/dashboard')
	else:
		form = EditUserForm(instance=request.user)
		args = {'form': form}
		return render(request, 'mathswizard/edit_user.html', args)

def change_password(request):
	if request.method == 'POST':
		form = PasswordChangeForm(data=request.POST, user=request.user)
		
		if form.is_valid():
			form.save()
			update_session_auth_hash(request, form.user)
			return redirect('/mathswizard/dashboard')
	else:
		form = PasswordChangeForm(user=request.user)
		args = {'form': form}
		return render(request, 'mathswizard/change_password.html', args)
	
def add_student(request):
    if request.method =='POST':
        form = StudentForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('/mathswizard/dashboard')
    else:
        form = StudentForm()
        args = {'form': form}
		
        return render(request, 'mathswizard/add_student.html',args)
		
def students(request):
	data = StudentProfile.objects.filter(teacher = request.user)
	return TemplateResponse(request, 'mathswizard/mystudents.html',{"data": data})