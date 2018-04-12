# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django import forms
from django.contrib.sessions.models import Session
from django.utils import timezone
from django.shortcuts import render, redirect
from django.template.response import TemplateResponse
from django.template import loader
from django.db.models import Avg
from mathswizard.forms import ( 
	RegistrationForm,
	EditUserForm,
	StudentForm,
	StudentFocus,
	GameUpdates
	)
from mathswizard.models import StudentProfile, TeacherProfile
from django.contrib.auth.models import User
from django.contrib.auth.forms import (
	UserChangeForm,
	PasswordChangeForm
	)
from django.contrib.auth import update_session_auth_hash
from django.http import Http404
from django.contrib.auth.decorators import login_required

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
			StudentProfile.objects.latest('id').delete()
			return redirect('/mathswizard/login')
	else:
		form = RegistrationForm()
		args = {'form': form}
		
	return render(request, 'mathswizard/registration.html',args)

@login_required		
def dashboard(request):
	levelAvg = StudentProfile.objects.filter(teacher = request.user).aggregate(Avg('level')).values()
	countStudents = StudentProfile.objects.filter(teacher = request.user).count()
	countMultiplication = StudentProfile.objects.filter(teacher = request.user, focus = "Multiplication").count()
	countAddition = StudentProfile.objects.filter(teacher = request.user, focus = "Addition").count()
	countSubtraction = StudentProfile.objects.filter(teacher = request.user, focus = "Subtraction").count()
	activeStudents = get_current_users(request.user)
	args = {'user': request.user,
			'levelAvg': levelAvg,
			'countStudents': countStudents,
			'countMultiplication':countMultiplication,
			'countAddition':countAddition,
			'countSubtraction':countSubtraction,
			'activeStudents':activeStudents
			}
	return render(request, 'mathswizard/dashboard.html', args)
	
@login_required		
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

@login_required	
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
###################################################################	
@login_required	
def students(request):
	my_students = StudentProfile.objects.filter(teacher=request.user)
	return render(request, 'mathswizard/mystudents.html', {'my_students': my_students})
	
######################################################################
@login_required	
def StudentDetails(request, student_no):
	try:
		profile = StudentProfile.objects.get(pk=student_no)
		if profile.teacher == request.user:
			return render(request, 'mathswizard/Studentprofile.html', {'profile': profile})
		else:
			raise Http404("Student does not exist")
	except StudentProfile.DoesNotExist:
		raise Http404("Student does not exist")

@login_required		
def game(request):
	student = StudentProfile.objects.get(user=request.user)
	if request.method =='POST':
			form = GameUpdates(request.POST, instance=student)
			if form.is_valid():
				form.save();
				return redirect('/mathswizard/myProfile')
	else:
		form = GameUpdates(instance=student)
		args = {'form': form,
				'student': student}
		return render(request, 'mathswizard/game.html', args)

@login_required			
def student(request):
	return render(request, 'mathswizard/dashboardStudent.html')
	
@login_required	
def add_student(request):
	if request.method =='POST':
			form = StudentForm(request.POST)
			if form.is_valid():
				instance = form.save(commit=False)
				global first
				first = instance.first_name
				global last 
				last = instance.last_name
				instance.save()
				TeacherProfile.objects.latest('id').delete()
				return redirect('/mathswizard/first_focus')
	else:
		form = StudentForm()
		args = {'form': form}
		
		return render(request, 'mathswizard/add_student.html',args)	

@login_required		
def first_focus(request):
	editFocus = StudentProfile.objects.latest('id')
	if request.method =='POST':
			form = StudentFocus(request.POST, instance=editFocus)
			if form.is_valid():
				tcheck = form.save(commit=False)
				tcheck.test = request.user
				tcheck.first_name = first
				tcheck.last_name = last
				tcheck.save()
				return redirect('/mathswizard/dashboard')
	else:
		form = StudentFocus(instance=editFocus,
							initial={'first_name': first, 
									'last_name': last, 
									'teacher':request.user})
		args = {'form': form}
		form.fields['first_name'].widget = forms.HiddenInput()
		form.fields['last_name'].widget = forms.HiddenInput()
		form.fields['teacher'].widget = forms.HiddenInput()
		return render(request, 'mathswizard/student_focus.html', args)

@login_required			
def student_focus(request, student_no):
	editFocus = StudentProfile.objects.get(pk=student_no)
	if request.method =='POST':
			form = StudentFocus(request.POST, instance=editFocus)
			if form.is_valid():
				tcheck = form.save(commit=False)
				tcheck.save()
				return redirect('/mathswizard/dashboard')
	else:
		form = StudentFocus(instance=editFocus)
		args = {'form': form}
		form.fields['first_name'].widget = forms.HiddenInput()
		form.fields['last_name'].widget = forms.HiddenInput()
		form.fields['teacher'].widget = forms.HiddenInput()
		return render(request, 'mathswizard/student_focus.html', args)

@login_required	
def Usercheck(request):
	try:
		TeacherProfile.objects.get(user=request.user)
		return redirect('/mathswizard/dashboard')
	except TeacherProfile.DoesNotExist:
		return redirect('/mathswizard/myProfile')

@login_required	
def myProfile(request):
	args = {'user': request.user}
	return render(request, 'mathswizard/dashboardStudent.html', args)
	
@login_required			
def delete_student(request, student_no):
	student = StudentProfile.objects.get(pk=student_no)
	user = User.objects.get(username=student.user)
	if student.teacher == request.user:
		student.delete()
		user.delete()
		
	return redirect('/mathswizard/dashboard')
	
def get_current_users(currentUser):
    active = Session.objects.filter(expire_date__gte=timezone.now())
    users = []
    for session in active:
        data = session.get_decoded()
        users.append(data.get('_auth_user_id', None))
    return StudentProfile.objects.filter(id__in=users, teacher=currentUser)
	
	
		
