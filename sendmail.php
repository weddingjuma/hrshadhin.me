<?php

require 'vendor/autoload.php';
use Mailgun\Mailgun;

if($_SERVER['REQUEST_METHOD']=="POST")
 {
   $name = $_POST['name'];
   $email = $_POST['email'];
   $message = $_POST['message'];
  # Instantiate the client.
  $mgClient = new Mailgun('YOUR-MAIL-GUN-API-KEY-HERE');
  $domain = "hrshadhin.me";
  # Make the call to the client.
  $result = $mgClient->sendMessage($domain, array(
    'from'    => 'Web Master<webmaster@hrshadhin.me>',
    'to'      => 'H.R.Shadhin <root@hrshadhin.me>',
    'subject' => $name.'['.$email.']',
    'text'    => $message
  ));
   if($result->http_response_code==200){
     echo 'success';
   }
   else {
     echo $result->http_response_code;
   }
}
else {
  echo "You not allowed to do that!";
}


?>
