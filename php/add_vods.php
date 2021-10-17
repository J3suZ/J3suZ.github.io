<?php

    $vod = isset($_POST['vod']) ? $_POST['vod'] : "";
    require_once('./vods.php');

    if(!empty($vod)){
        $data= Vods::InsertVod($vod);
        echo json_encode($data);
    }else echo json_encode("No se ha encontrado ningun valor");

?>