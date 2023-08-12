<?php
    $name = $_POST['name'];
    $email= $_POST['email'];
    $mobilenumber = $_POST['mobilenumber'];
    $howcanihelpyou = $_POST['howcanihelpyou'];

    //Database connection
    $conn = new mysqli('localhost','root','','test');
    if($conn->connect_error){
        die('Connection Failed : '.$conn->connect_error);
    }else{
        $stmt = $conn->prepare("insert into contactus(name,email,mobilenumber,howcanihelpyou) values(?, ?, ?, ?)");
        $stmt->bind_param("ssis", $name, $email, $mobilenumber, $howcanihelpyou);
        $stmt->execute();
        echo "registration Successfully...";
        $stmt->close();
        $conn->close();
    }
?>