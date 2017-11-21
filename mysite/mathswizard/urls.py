from django.conf.urls import url
from . import views
from django.contrib.auth.views import(
	login,
	logout,
	password_reset,
	password_reset_done,
	password_reset_confirm,
	password_reset_complete
	)

urlpatterns = [
	url(r'^$', views.home),
	url(r'^home/$', views.home),
	url(r'^login/$', login, {'template_name': 'mathswizard/login.html'}),
	url(r'^logout/$', logout, {'template_name': 'mathswizard/logout.html'}),
	url(r'^register/$', views.register),
	url(r'^dashboard/$', views.dashboard, name='dashboard'),
	url(r'^dashboard/edit_user/$', views.edit_user),
	url(r'^change_password/$', views.change_password),
	url(r'^password_reset/$', password_reset, name='password_reset'),
	url(r'^password_reset/done/$', password_reset_done, name='password_reset_done'),
	url(r'^password_reset/confirm/(?P<uidb64>[0-9A-Za-z]+)-(?P<token>.+)/$',
        password_reset_confirm, name='password_reset_confirm'),
	url(r'^password_reset/complete/$', password_reset_complete, name='password_reset_complete'),
	url(r'^add_student/$', views.add_student),
	url(r'^students/$', views.students)
]
