<?php
    $eventData = json_decode(file_get_contents('php://input'), true);

    // var_dump($event);
    $username = $eventData["username"];
    $subject = $eventData["subject"];
    $start = $eventData["start"];
    $end = $eventData["end"];

    require_once '../php/DatabaseConnection.php';

    $dbCon = new DatabaseConnection();

    $con = $dbCon->getConnection();

    $sqlInsertStatement = "INSERT INTO `events` (`id`, `username`, `subject`, `start`, `end`) VALUES (NULL, :username, :subject, :start, :end)";
    $prepareStatement = $con->prepare($sqlInsertStatement);
    $result = $prepareStatement->execute([
        'username' => $username,
        'subject' => $subject,
        'start' => $start,
        'end' => $end
    ]);

    if ($result) {
        $response = array(
            "status" => true,
            "time_start" => $start,
            "time_end" => $end
        );

        echo json_encode($response);
    } else {
        $error = $prepareStatement->errorInfo();
        $response = array(
            "status" => false,
            "message" => "There was an error saving your data to the database: " . $error[2],
            "errorCode" => $error[0]
        );

        echo json_encode($response);
    }
?>