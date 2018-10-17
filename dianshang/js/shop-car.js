console.log(localStorage.data);
if(localStorage.data){
    var $peizhi=document.getElementById("peizhi");
    var $liAll=$peizhi.children;
    var obj=JSON.parse(localStorage.data);
    $("#num")[0].value=obj.num;
    $(".price-dan")[0].innerText="RMB "+(Number(obj.price)+21988);
    $(".count")[0].innerText="RMB "+(Number(obj.price)+21988)*Number($("#num")[0].value);
    $(".count2")[0].innerText="总计	RMB "+(Number(obj.price)+21988)*Number($("#num")[0].value);
    console.log(localStorage.shopList);
    $liAll[0].innerHTML=obj.Ghz+" 六核第八代 Intel Core "+obj.processor+" 处理器，Turbo Boost<br> 最高可达 "+obj.heightGhz;
    $liAll[4].innerHTML=obj.storage+" 2400MHz DDR4 内存";
    $liAll[5].innerHTML=obj.memory+" 固态硬盘";
    $(".section-body")[0].style.display="none";
    $(".section-body2")[0].style.display="block";
}else{
    $(".section-body")[0].style.display="block";
    $(".section-body2")[0].style.display="none";
}

$(".btn-back").on("click",function(){
    location.href="shop.html";
})


$(".btn-delete").on("click",function(){
    localStorage.removeItem("data");
    location.href="shop-car.html";
})

$("#num").on("change",function(){
    $(".count")[0].innerText="RMB "+this.value*(Number(obj.price)+21988);
    $(".count2")[0].innerText="总计	RMB "+this.value*(Number(obj.price)+21988);
})