<?php
session_start();
 // error_reporting(E_ALL);
 // ini_set('display_errors', 1);
include 'inc/rewrite.php';
include 'inc/config.php';
# include 'inc/db.php';
# include 'inc/functions.php';
include 'autoload.php';

$u = new User(null);
if(!$u->isLoggedIn()) {
    if($uri[0] != 'auth') {
	header('Location: /math/auth/', true);
    }
}


if(isset($uri[0])){
	if($uri[0] == 'auth') {	
		include 'modules/auth.php';
	}
}


include 'html/header.php';
if($u->isLoggedIn()){ 
    // $u->load();
    include 'html/menu.php';
}


if(isset($_POST['logout'])) {
    $u->logout2();
}

if(!empty($uri[0]) && $uri[0] == 'logout') {
    $u->logout2();
}

$modules = array('auth' => 'modules/auth_html.php',
                 'test' => 'modules/test.php',
		 'questions' => 'modules/questions.php',
		 'design'  => 'modules/design.php',
);

if(isset($uri[0])){
    foreach($modules as $uriname => $file) {
        if($uri[0] == $uriname) {
	    include $file;
        }
    }
} else {
    // 404;
}
include 'html/footer.php';
