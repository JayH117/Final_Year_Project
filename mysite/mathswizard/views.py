# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render

def home(request):
	return render(request, 'mathswizard/home.html')

def login(request):
	return render(request, 'mathswizard/login.html')
	
def dashboard(request):
	return render(request, 'mathswizard/dashboard.html')
	
# def logout(request):
	# return render(request, 'mathswizard/logout.php')
# Create your views here.
