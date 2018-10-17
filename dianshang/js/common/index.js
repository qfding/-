var $last=document.getElementById("last");
var $table=document.getElementById("table");
var $user=document.querySelector(".apple-table-last");
var $shop_car=document.querySelector(".shop-car");
if(localStorage.getItem("username")){
    $("#username")[0].innerText="注销"+localStorage.getItem("username");
    $(".xiaolan")[0].style.display="block";
}
$last.onclick=function(){
    $table.style.display="block";
    console.log(1);
}
document.onclick=function(e){
    if(e.target.id !=="last"&&e.target.id !=="table"){
        $table.style.display="none";
    }
}
$user.onclick=function(){
    location.href="denglu.html";
}
$shop_car.onclick=function(){
    location.href="shop-car.html";
}