<?php 
	
$registerData = json_decode(file_get_contents('php://input'), true);

$username = $registerData["username"];
$name = $registerData["name"];
$email = $registerData["email"];
$role = $registerData["role"];
$facultyNumber = $registerData["facultyNumber"];
$password = $registerData["password"];
$hashedPassword = password_hash($password, PASSWORD_DEFAULT);

require_once ".././php/DatabaseConnection.php";

$dbHandle = new DatabaseConnection();
$connection = $dbHandle->getConnection();

$sqlInsertStatement = "INSERT INTO `Users` (`id`, `username`, `name`, `email`, `role`, `facultyNumber`, `passoword`) VALUES (NULL, :username, :name, :email, :role, :facultyNumber, :passoword)";
$prepareStatement = $connection->prepare($sqlInsertStatement);
$result = $prepareStatement->execute([
	'username' => $username,
	'name' => $name,
	'email' => $email,
	'role' => $role,
	'facultyNumber' => (int)$facultyNumber,
	'passoword' => $hashedPassword
]);

if ($result) {
    $response = array(
        "status" => true
    );
    echo json_encode($response);
} else {
    $errorMessage = $prepareStatement->errorInfo();
    $response = array(
        "status" => false,
        "message" => "There was an error saving your data to the database: " . $errorMessage[2],
        "errorCode" => $errorMessage[0]
    );
    echo json_encode($response);
}

?>