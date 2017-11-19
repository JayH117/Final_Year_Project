from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm

class RegistrationForm(UserCreationForm):
	email = forms.EmailField(required=True)
	school = forms.CharField(required=True)
	
	class Meta:
		model = User
		fields = (
			'username',
			'password1',
			'password2',
			'first_name',
			'last_name',
			'email',
			'school'
		)
		
		def save(self, commit=True):
			user = super(RegistrationForm, self).save(commit=False)
			user.firstname = self.cleaned_data['first_name']
			user.lastname = self.cleaned_data['last_name']
			user.email = self.cleaned_data['email']
			user.school = self.cleaned_data['school']
			
			if commit:
				user.save()
				
			return user