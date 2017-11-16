{% extends "mathswizard/header.html" %}

{% block content %}
<body>
<?php
	
	$connection = mysql_connect("localhost", "root", ""); // Establishing Connection with Server
	$db = mysql_select_db("assignment", $connection); // Selecting Database from Server
	
	
	//coming from signup page message
	if (isset($_GET['Message'])) 
	{
		print '<script type="text/javascript">alert("' . $_GET['Message'] . '");</script>';
	}
	//logging in the user by checking information in the database
	if(isset($_POST['submit']))
	{ 
		$username = $_POST['username'];
		$password = $_POST['password'];
		
		$check = mysql_query("SELECT * FROM users WHERE Username = '$_POST[username]' AND Password  = '$_POST[password]'");
	
		if(mysql_num_rows($check)> 0) 
		{
			session_start();
			$_SESSION["activeuser"] = "$username";
			header("Location: myhome.php");
		}
		
		else
		{
			echo '<script language="javascript">';
			echo 'alert("Error: Username or password is incorrect")';
			echo '</script>';
		}
	}	
?>
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
