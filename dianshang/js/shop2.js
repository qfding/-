var $boxall=document.querySelectorAll(".mouse-hover");
for(let i=0;i<$boxall.length;i++){
    $boxall[i].addEventListener("mouseenter",$mouseenter,false);
    $boxall[i].addEventListener("mouseleave",$mouseleave,false);
    $boxall[i].addEventListener("click",$click,false);
}
function $mouseenter(){
    this.className="mouseenter "+"mouse-hover";
}
function $mouseleave(){
    this.className="mouse-hover";
}
function $click(){
    var $children=this.parentElement.children;
    for(let i=0;i<$children.length;i++){
        $children[i].className="mouse-hover";
        $children[i].addEventListener("mouseenter",$mouseenter,false);
        $children[i].addEventListener("mouseleave",$mouseleave,false);
    }
    this.removeEventListener("mouseleave",$mouseleave,false);
    this.removeEventListener("mouseenter",$mouseenter,false);
    this.className="click "+"mouse-hover";
}

$boxall[0].click();
$boxall[2].click();
$boxall[4].click();
$boxall[8].click();
$boxall[10].click();

$(".heart").click(function(){
    $(this).toggleClass("icon-xinshixin");
    $(".heart-img")[0].src="images/shopimg/shixin.png";
});
$(".heart").mouseenter(function(){
    $(".heart-xinxi")[0].style.display="block";
});
$(".heart").mouseleave(function(){
    $(".heart-xinxi")[0].style.display="none";
});

var $macimg=document.querySelector(".mac-img");
document.onscroll=function(){
    var $height=$(document).scrollTop();
    // console.log($(document).scrollTop());
    if($height<163){
        $macimg.removeAttribute("style");
    }else if(163<$height<1737){
        $macimg.style.position="fixed";
        $macimg.style.top=0;
    }
    if($height>1737){
        $macimg.removeAttribute("style");
        $macimg.style.position="absolute";
        $macimg.style.bottom=10+"px";
    }
    
}



    var id=1;
    var $Ghz="2.6Ghz";
    var $processor="i7";
    var $memory="512GB";
    var $storage="16GB";
    var $heightGhz="4.3Ghz";
    var price1=0;
    var price2=0;
    var price3=0;
    var count=1;
    var obj={
        Ghz:$Ghz,
        processor:$processor,
        memory:$memory,
        storage:$storage,
        heightGhz:$heightGhz,
        price:0,
    }
    $("#processor-choose1").on("click",function(){
        id=1;
        obj.Ghz="2.6Ghz";
        obj.processor="i7";
        obj.heightGhz="4.3Ghz";
        price1=0;
        $(".chang-price")[0].innerText="RMB "+(21988+Number(price1)+Number(price2)+Number(price3));
    })
    $("#processor-choose2").on("click",function(){
        id=2;
        obj.Ghz="2.9Ghz";
        obj.processor="i9";
        obj.heightGhz="4.8Ghz";
        price1=2256;
        $(".chang-price")[0].innerText="RMB "+(21988+Number(price1)+Number(price2)+Number(price3));
    })
    
    $("#memory-choose1").on("click",function(){
        obj.memory="512GB";
        price2=0;
        $(".chang-price")[0].innerText="RMB "+(21988+Number(price1)+Number(price2)+Number(price3));
    })
    $("#memory-choose2").on("click",function(){
        obj.memory="1TB";
        price2=3012;
        $(".chang-price")[0].innerText="RMB "+(21988+Number(price1)+Number(price2)+Number(price3));
    })
    $("#memory-choose3").on("click",function(){
        obj.memory="2TB";
        price2=9036;
        $(".chang-price")[0].innerText="RMB "+(21988+Number(price1)+Number(price2)+Number(price3));
    })
    $("#memory-choose4").on("click",function(){
        obj.memory="4TB";
        price2=24096;
        $(".chang-price")[0].innerText="RMB "+(21988+Number(price1)+Number(price2)+Number(price3));
    })
    
    $("#storage-choose1").on("click",function(){
        obj.storage="16GB";
        price3=0;
        $(".chang-price")[0].innerText="RMB "+(21988+Number(price1)+Number(price2)+Number(price3));
    })
    $("#storage-choose2").on("click",function(){
        obj.storage="32GB";
        price3=3012;
        $(".chang-price")[0].innerText="RMB "+(21988+Number(price1)+Number(price2)+Number(price3));
    })


$(".pay").on("click",function(){
    obj.price=Number(price1)+Number(price2)+Number(price3);
    
    // // console.log(obj.price);
    // if(localStorage.data){
    //     var obj2=JSON.parse(localStorage.data);
    //     obj2.num+=1;
    //     var str=JSON.stringify(obj2);
    //     localStorage.data=str;
    //     $shop_car.click();
    // }else{
    //     localStorage.setItem("data","");
    //     // var arr=[];
    //     // arr.push(obj);
    //     var str=JSON.stringify(obj);
    //     localStorage.data=str;
    //     $shop_car.click();
    // }
    // console.log(localStorage.data);
    addCar(id,count,obj);
    $shop_car.click();
})

function addCar(id, count,obj) {   
    // 把商品信息保存到本地数据库
    // 把所有添加的商品数据放到一个字段中, shopList
    // 添加第一个商品时,本地存储没有shopList
    // 本地存储数据格式一定是字符串格式
    var shopList = localStorage.shopList || '[]';
    shopList = JSON.parse(shopList);
    for(var i = 0; i < shopList.length; i++) {
        if(shopList[i].id === id) {
            // 商品已经存在
            shopList[i].count = Number(shopList[i].count) + Number(count);
            break;
        }
    }
    if(i === shopList.length) {
        // 商品不存在
        shopList.push({id: id, count: count,data:obj});

    }
    localStorage.shopList = JSON.stringify(shopList);
}





var num=0;
$(".btn-kai").on("click",function(){
    num=$(document).scrollTop();
    $(".lunbo")[0].style.display="block";
    $("body")[0].style.overflow="hidden";
    var mySwiper = new Swiper('.lunbo', {
        // autoplay: true,//可选选项，自动滑动
        loop: true,//环路
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
            // hideOnClick:true
            // dynamicBullets: true,
        },
        navigation: {
            nextEl: '.btn-right',
            prevEl: '.btn-left',
        },
        
    })
})
$(".btn-guan").on("click",function(){
    $(".lunbo")[0].style.display="none";
    $("body")[0].style.overflow="auto";;
    $(document).scrollTop(num);
})