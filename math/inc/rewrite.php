<?php
$uri = array();
if(isset($_GET['q']) && !empty($_GET['q'])) {
    $path = $_GET['q'];
    
    if (substr($path, -1) === '/') {
	$uri = explode('/', $path);
    } else {
	//	echo 'ERROR';
	header('Location: /math/' . $path . '/', true, 301);
    }
}
