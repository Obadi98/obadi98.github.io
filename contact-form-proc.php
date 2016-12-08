<?php

if(empty($_POST["submit"]))
{
	echo "Form is not submitted!";
	exit;
}
if(empty($_POST["name"]) ||
    empty($_POST["email"]))
	{
		echo "Please fill the form"
		exit;
	}
$name = $_POST["name"];
$email = $_POST["email"];

mail( "obadabaqleh@hotmail.com" , "New form submission" , "New form submission: $name, Email:$email");

header ("Location: thank-you.html");
?>