<?php

    require_once('./vods.php');
    $sql = "SELECT * FROM `videos`.`vods_table`";
    $data = Vods::GetVods("", $sql);

    echo json_encode($data);

?>