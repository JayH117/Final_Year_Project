{% extends "mathswizard/header.html" %}

{% block content %}
<body> 
	<div id ="content">
		<div id = "incon">
			<h2>Please enter your Username and Password to log in</h2>
			<form action="" method="post">
				{% csrf_token %}
				<label>UserName :</label>
				<input id="username" name="username" placeholder="Username" type="text">
				<label>Password :</label>
				<input id="password" name="password" placeholder="**********" type="password">
				<input name="submit" type="submit">
			</form>
		</div>
		<div id = "footer">
			<ul class = "links">
				<li><a href="home">Home</a></li>
				<li><a href="login">Log in</a></li>
				<li><a href="register">Register</a></li>
			</ul>
		</div>
	</div>
</div>

</div>

{% endblock %}
