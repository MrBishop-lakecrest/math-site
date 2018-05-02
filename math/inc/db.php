<?php

// DB Connector
$db = new mysqli("localhost", "mbarrett", "bish0p", "sharron");

/* check connection */
if ($db->connect_errno) {
    printf("Connect failed: %s\n", $mysqli->connect_error);
    exit();
}


try {
    $db2 = new PDO($dsn, DB_USER, DB_PASS);
    $db2->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo 'Connection failed: ' . $e->getMessage();
}
