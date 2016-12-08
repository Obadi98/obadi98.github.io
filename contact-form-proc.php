<?php
 
if(empty($_POST['submit']))
{
    echo "Form is not submitted!";
    exit;
}
if(empty($_POST["name"]) ||
    empty($_POST["email"]))
    {
        echo "Please fill the form";
        exit;
    }
     
$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];
 
mail( 'obadabaqleh@hotmail.com' , 'New form submission' , 
"New form submission: Name: $name, Email:$email: $message"  );
 
header('Location: thank-you.html');
 
?>
