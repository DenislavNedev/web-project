<?php 
	
$registerData = json_decode(file_get_contents('php://input'), true);

$username = $registerData["username"];
$name = $registerData["name"];
$email = $registerData["email"];
$role = $registerData["role"];
$facultyNumber = $registerData["facultyNumber"];
$password = $registerData["password"];
$hashedPassowrd = password_hash($password, PASSWORD_DEFAULT);

require_once ".././php/DatabaseConnection.php";

$dbHandle = new DatabaseConnection();
$connection = $dbHandle->getConnection();

$sqlInsertStatement = "INSERT INTO `Users` (`username`, `name`, `email`, `role`, `facultyNumber`, `passoword`) VALUES (?,?,?,?,?,?)";
$prepareStatement = $connection->prepare($sqlInsertStatement);
$result = $prepareStatement->execute($username, $name, $email, $role, (int)$facultyNumber, $hashedPassowrd);

if ($result) {
    $response = array(
        "status" => true
    );
    echo json_encode($response);
} else {
    $errorMessage = $prepareStatement->errorInfo();
    $response = array(
        "status" => false,
        "message" => "There was an error saving your data to the database: " . $errorMessage[2]
    );
    echo json_encode($response);
}