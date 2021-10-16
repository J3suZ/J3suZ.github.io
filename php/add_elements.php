<?php

$element = isset($_POST['vod']) ? $_POST['vod'] : false;
require_once('./php/BD.php');

    class prueba{

        static function InsertVod($element){
            $query = new BD();
            $sql = "INSERT INTO vods_table (vods_element) VALUES (?)";
            $params = array($element);
            $data = $query->execute($params, $sql);
            echo json_encode($data);
        }
    }
    if($element){
        prueba::InsertVod($element);
    }

?>