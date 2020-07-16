<?php 

session_start();

if (isset($_SESSION['username'])) {
	
	$username = $_SESSION['username'];
	require_once ".././php/DatabaseConnection.php";

	$databaseHandle = new DatabaseConnection();
	$connection = $databaseHandle->getConnection();

	$selectStatement = $connection->prepare("SELECT username, name, email, role, facultyNumber FROM `Users` WHERE username = :username");
	$result = $selectStatement->execute([
		'username' => $username
	]);
	$databaseUser = $selectStatement->fetch();

	echo json_encode([
		'status' => true,
		'username' => $databaseUser['username'],
		'name' => $databaseUser['name'],
		'email' => $databaseUser['email'],
		'role' => $databaseUser['role'],
		'facultyNumber' => $databaseUser['facultyNumber']
	]);

} else {
	echo json_encode([
		'status' => false
	]);
}

?>