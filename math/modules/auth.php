<?php

// Auth Token
// Process Login Form

if(isset($_POST['signin'])) {
  $uname = $_POST['username'] ?? '';
  $upass = $_POST['password'] ?? '';
  
  if($uname == "student" && $upass == "math") {
    $_SESSION['user_id'] = 1;
    $uname = null;
    $upass = null;
    
  }
  
  //    $u = new User($db);
  //    $u->login($uname, $password);
}

if($u->isLoggedIn()) {
  header('Location: /math/', true);
}
