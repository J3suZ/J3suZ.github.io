<?php

class BD{
    private $conect;

    function __construct()
    {
        try {
            $this->conect = new PDO("mysql:localhost, dbname=videos", "root", "");
            $this->conect->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $this->conect->exec('set names utf8');
        } catch (Exception $error) {
            die("Error:" . $error->getMessage() . $error->getLine());
        }
    }

    /* Funcion para insertar data en la BD */

    function execute($params ,$sql){
        $query = $this->conect->prepare($sql);
        if($query->execute($params)){
            return true;
        }else return false;
    }

    /* Funcion para obtener, modificar y eliminar data. */

    function executeQuery($params, $sql){
        if(empty($params)){
            $query= $this->conect->query($sql);
        }else{
            $query = $this->conect->prepare($sql);
            $query->execute($params);
        }
        return $query->fetchAll(PDO::FETCH_ASSOC);
    }
};

?>