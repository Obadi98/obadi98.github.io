<!doctype html>
<html>

	<head>
		<link rel="icon" href="icon/icon.png"/>
		<link rel="stylesheet" type="text/css" href="style.css"/>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
		<script src="script.js"></script>
		<title>BRACKETS</title>
	</head>

	<body onload="changeimg()">
		<div class="page">
			<div class="home">
				<div class="lefthome">
				</div>
				<div class="midhome" id="midjs">
					<div class="nav">
						<p class="navitem" id="home" style="flex-grow: 1;" onclick="home()">HOME </p>
						<p class="navitem" id="serv" style="flex-grow: 1;" onclick="serv()">SERVICES </p>
						<p class="navitem" id="about" style="flex-grow: 1;" onclick="about()">ABOUT US </p>
						<p class="navitem" id="cont" style="flex-grow: 1;" onclick="cont()">CONTACT US </p>
					</div>
					<div class="midlogo" id="midlogojs">
						<div class="midlogoleft">
						</div>
						<div class="midlogomid">
							<img src="icon/icon.png" id="logojs" onmouseover="logojump()" onmouseout="logonojump()">
						</div>
						<div class="midlogoright">
						</div>
					</div>
					<div class="brackets" id="bracketsjs">
						{BRACKETS}
					</div>
				</div>
				<div class="righthome">
				</div>
			</div>
			<div class="service">
				<div class="leftserv">
				</div>
				<div class="midserv">
					<h1 class="headerserv"><i><b>#</b>OUR SERVICES</i></h1>
					<h3 class="activeservitem" id="activeserv">WEB APPLICATIONS</h3>
					<h3 class="servitem" id="notactiveserv1">ANDROID APPLICATIONS</h3>
					<h3 class="servitem" id="notactiveserv2">DESKTOP APPLICATIONS</h3>
					<h3 class="servitem" id="notactiveserv3">DESIGN</h3>	
				</div>
				<div class="rightserv">
					<div class="leftimgborder">
					</div>
					<div class="imgborder">
						<div class="topactiveservimgdiv"></div>
						<div class="activeservimgdiv"/>
							<img src="img/8.png" class="activeservimg" id="activeimg"/>
							<img src="img/2.png" class="activeservimg" id="notactiveimg1"/>
							<img src="img/3.png" class="activeservimg" id="notactiveimg2"/>
							<img src="img/6.png" class="activeservimg" id="notactiveimg3"/>
						</div>
					</div>
				</div>
			</div>
			<div class="aboutus">

			</div>
			<div class="contactus">
				<?php
					//validation
					$fnameErr = $lnameErr = $emailErr = $phoneErr = $textErr = "";
					$fname = $lname = $email = $phone = $text = "";
					if(empty($_POST["fname"]))
						$fnameErr = "First name is required";
					else{
						$fname = test_input($_POST["fname"]);
						if (!preg_match("/^[a-zA-Z ]*$/",$fname))
					    	$fnameErr = "Only letters and white space allowed";
					}


					if(empty($_POST["lname"]))
						$lnameErr = "Last name is required";
					else{
						$lname = test_input($_POST["lname"]);
						if (!preg_match("/^[a-zA-Z ]*$/",$lname))
					    	$lnameErr = "Only letters and white space allowed";
					}


					if(empty($_POST["email"]))
						$emailErr = "Email is required";
					else{
						$email = test_input($_POST["email"]);
						if (!filter_var($email, FILTER_VALIDATE_EMAIL))
					    	$emailErr = "Invalid email format";
					}


					if(empty($_POST["phone"]))
						$phoneErr = "Phone number is required";
					else{
						$phone = test_input($_POST["phone"]);
						if (!preg_match("/^[0-9]{10}$/",$phone))
					    	$phoneErr = "Please enter a valid Phone number";
					}


					if(empty($_POST["textarea"]))
						$textErr = "Please enter your message";
					else{
						$text = test_input($_POST["textarea"]);
					}

					function test_input($data) {
					    $data = trim($data);
					    $data = stripslashes($data);
					    $data = htmlspecialchars($data);
					    return $data;
					}

					//database connect
					$servername = "localhost";
					$username = "root";
					$password = "";
					$dbname = "messages";
					$conn = new mysqli($servername, $username, $password, $dbname);

					//insert into table
					$sql = "INSERT INTO message (firstname, lastname, email, phone, msg)
						VALUES ('$fname', '$lname', '$email', $phone, '$text')";
					mysqli_query($conn, $sql);

					//send the email
					$email_from = "baq.obada@gmail.com";
					$to = "baq.obada@gmail.com";
					$email_subject = "New form submission";
					$email_body = "You have recived a new message from the user $fname $lname .\n"."email address: $email \n"."Here is the message: \n $text";
					$headers = "From: $email_from \r\n";
					mail($to,$email_subject,$email_body,$headers);

				?>
				<form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="POST" class="form">
					<div class="form1">
						<div class="form11">
							<label for="fname" class="form1l" id="fnlabel" onclick="fnlabel()">First Name</label>
							<input type="text" id="fname" class="form1i" name="fname" onclick="fnlabel()"><span class="error">*<?php echo $fnameErr;?></span>
						</div>
						<div class="form12">
							<label for="lname" class="form1l" id="lnlabel" onclick="lnlabel()">Last Name</label>
							<input type="text" id="lname" class="form1i" name="lname" onclick="lnlabel()"><span class="error">*<?php echo $lnameErr;?></span><br/>
						</div>
					</div>
					<div class="form1">
						<div class="form11">
							<label for="email" class="form1l" id="elabel" onclick="elabel()">Email</label>
							<input type="text" id="email" class="form1i" name="email" onclick="elabel()"><span class="error">*<?php echo $emailErr;?></span>
						</div>
						<div class="form12">
							<label for="phone" class="form1l" id="plabel" onclick="plabel()">Phone</label>
							<input type="text" id="phone" class="form1i" name="phone" onclick="plabel()"><span class="error">*<?php echo $phoneErr;?></span><br/>
						</div>
					</div>
					<div class="form111">
						<label for="txtarea" class="form1l" id="talabel" onclick="talabel()">How can we help you?</label>
						<textarea class="textarea" id="txtarea" name="textarea" onclick="talabel()"></textarea><span class="error">*<?php echo $textErr;?></span>
					</div>
					<input type="submit" name="submit" class="btn">
				</form>
			</div>
			<div class="footer">
				<div class="leftfooter">
					<h1 class="headerfooter">{BRACKETS}</h1><br/>
					<h3 style="color:white;">Copyright © 2018 All rights reserved<br/>
						Created By BRACKETS PS,<br/>
						For More Information Contact Us On: +963951490964</h3>
				</div>
				<div class="midfooter">
				</div>
				<div class="rightfooter">
					<p class="rfitem" onclick="home()">HOME </p>
					<p class="rfitem" onclick="serv()">SERVICES </p>
					<p class="rfitem" onclick="about()">ABOUT US </p>
					<p class="rfitem" onclick="cont()">CONTACT US </p>
				</div>
			</div>
		</div>
	</body>

</html>
