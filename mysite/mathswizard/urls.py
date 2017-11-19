from django.conf.urls import url
from . import views
from django.contrib.auth.views import login, logout

urlpatterns = [
	url(r'^$', views.home),
	url(r'^home/$', views.home),
	url(r'^login/$', login, {'template_name': 'mathswizard/login.html'}),
	url(r'^logout/$', logout, {'template_name': 'mathswizard/logout.html'}),
	url(r'^register/$', views.register),
	url(r'^dashboard/$', views.dashboard, name='dashboard'),
	url(r'^dashboard/edit_user/$', views.edit_user)
]