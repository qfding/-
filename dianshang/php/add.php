<?php
    // 获取用户名
    header("Content-Type: application/json");

    header("Access-Control-Allow-Origin:*");

    // 引用另外一个文件
    include "public/connect_db.php";

    
    // 或去json数据, 请求主体的格式为json格式
    $json = json_decode(file_get_contents("php://input"));
    // var_dump($json);
    $username = $json -> username;
    $data = $json -> data;
    // 链接数据库
    $coon = new db();
    $sql = "update shop_user set data='$data' WHERE username='$username'";
    // var_dump($sql);
    $rows = $coon -> Query($sql, 3);
    if($rows){
        echo "加入成功";

    }
  ?>