{% extends "mathswizard/header.html" %}

{% block content %}
<body>

<div id = "header">
	<img src="The Library Logo.jpg" style="width:270px;height:125px;">
	<img src="banner.jpg" style="width:700px;height:150px;paddingtop:30px" align="right">
	<ul>
		<li><a href="Home.html" style="border-radius:5px 0px 0px 0px;">Home</a></li>
		<li><a href="login.php" style="border-radius:5px 5px 0px 0px;background-color:rgb(0, 204, 255);color:white">Log in</a></li>
		<li><a href="signup.php" style="border-radius:0px 5px 5px 0px">Sign up</a></li>
	</ul>
	</div>
	<div id ="content">
		<div id = "incon">
			<h2>Please enter your Username and Password to log in</h2>
			<form action="" method="post">
				{% csrf_token %}
				<label>UserName :</label>
				<input id="username" name="username" placeholder="Username" type="text">
				<label>Password :</label>
				<input id="password" name="password" placeholder="**********" type="password">
				<input name="submit" type="submit" value=" Login ">
			</form>
		</div>
		<div id = "footer">
			<ul class = "links">
				<li><a href="Home.html">Home</a></li>
				<li><a href="login.php">Log in</a></li>
				<li><a href="signup.php">Sign up</a></li>
			</ul>
		</div>
	</div>
</div>

</div>

{% endblock %}
