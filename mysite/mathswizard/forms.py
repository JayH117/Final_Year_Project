from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from django.forms import ModelForm
from mathswizard.models import StudentProfile

class RegistrationForm(UserCreationForm):
	email = forms.EmailField(required=True)
	
	class Meta:
		model = User
		fields = (
			'username',
			'password1',
			'password2',
			'first_name',
			'last_name',
			'email'
		)
		
		def save(self, commit=True):
			user = super(RegistrationForm, self).save(commit=False)
			user.firstname = self.cleaned_data['first_name']
			user.lastname = self.cleaned_data['last_name']
			user.email = self.cleaned_data['email']
			
			if commit:
				user.save()
				
			return user

class EditUserForm(UserChangeForm):
	
	class Meta:
		model = User
		fields = (
			'email',
			'first_name',
			'last_name',
			'password'
		)

class StudentForm(UserCreationForm):
	
	class Meta:
		model = User
		fields = (
			'username',
			'password1',
			'password2',
			'first_name',
			'last_name'
		)
		
		def save(self, commit=True):
			user = super(StudentForm, self).save(commit=False)
			user.firstname = self.cleaned_data['first_name']
			user.lastname = self.cleaned_data['last_name']
			
			if commit:
				user.save()
				
			return user
			
class StudentFocus(ModelForm):
	
	class Meta:
		model = StudentProfile
		fields = (
			'user',
			'teacher',
			'focus',
			'difficulty'
			)
		
		def save(self, commit=True):
			focus = super(StudentFocus, self).save(commit=False)
			focus.focus = self.cleaned_data['focus']
			focus.difficulty = self.cleaned_data['difficulty']
			
			if commit:
				focus.save()
			return focus