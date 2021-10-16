<?php

class BD
{
    private $conect;

    function __construct()
    {
        try {
            $this->conect = new PDO("mysql:localhost, dbname=videos", "root", "");
            $this->conect->setAttribute(PDO::ERRMODE_EXCEPTION, PDO::ATTR_ERRMODE);
            $this->conect->exec('set names utf8');
        } catch (Exception $error) {
            die("Error:" . $error->getMessage() . $error->getLine());
        }
    }
    function execute($params, $sql){
        $query = $this->conect->prepare($sql);
        if($query->execute($params)){
            return "Se ha compleado con exito";
        }else return "No se ha compleado con exito";

        return $query->fetchAll(PDO::FETCH_ASSOC);
    }
};

?>