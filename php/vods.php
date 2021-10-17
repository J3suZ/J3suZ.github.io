<?php

    require_once('./BD.php');

    class Vods{
        static function InsertVod($vods){
            $query = new BD();
            $sql = "INSERT INTO `videos`.`vods_table` (`vods_element`) VALUES (?)";
            $params = array($vods);
            return $query->execute($params,$sql);
        }

        static function GetVods($params, $sql){
            $query = new BD();
            return $query->executeQuery($params, $sql);
        }
    }

?>