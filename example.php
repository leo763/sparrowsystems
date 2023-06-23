<?php

$names = array("LEON", "KATI", "RESTY", "EDDY");
$age = array(["name" => "LEON","age" => 12],["name" => "KATI","age" => 22],["name" => "EDDY","age" => 42]);



$names = array("LEON", "KATI", "RESTY", "EDDY");
$age = array(["name" => "LEON","age" => 12],["name" => "KATI","age" => 22],["name" => "EDDY","age" => 42]);

$nameAgePairs = array();

foreach ($names as $name) {
    $found = false;
    foreach ($age as $person) {
        if ($person['name'] == $name) {
            $found = true;
            $nameAgePairs[$name] = $person['age'];
            break;
        }
    }
    if (!$found) {
        $nameAgePairs[$name] = 0;
    }
}

print_r($nameAgePairs);



?>