# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render, redirect
from mathswizard.forms import RegistrationForm
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserChangeForm

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
            return redirect('/mathswizard/dashboard')
    else:
        form = RegistrationForm()
        args = {'form': form}
		
        return render(request, 'mathswizard/registration.html',args)
		
def dashboard(request):
	args = {'user': request.user}
	return render(request, 'mathswizard/dashboard.html', args)
	
def edit_user(request):
	if request.method == 'POST':
		form = UserChangeForm(request.POST, instance=request.user)
		
		if form.is_valid():
			form.save()
			return redirect('/mathswizard/dashboard')
		else:
			form = UserChangeForm(instance=request.user)
			args = {'form': form}
			return render(request, 'mathswizard/edit_user.html', args) 
# Create your views here.
