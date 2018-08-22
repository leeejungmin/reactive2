<?php

data = json_decode(file_get_contents('php://input'), TRUE);

$username = $_POST['username'];
$password = $_POST['password'];

var_dump(data);
if($username == 'lee' && $password == 'lee'){
	echo 1;
} else {
	echo 0;
}

?>
