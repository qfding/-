

if(localStorage.shopList){
    var data=JSON.parse(localStorage.shopList);
    console.log(data);
    var arr = [];
    var shop;
    var lastcount=0;
    for (var i = 0; i < data.length; i++) {
        var obj=data[i].data;
        var num=data[i].count;
        console.log(obj);
        var $dan=Number(obj.price)+21988;
        var count=num*$dan;
        lastcount+=count;
        // 通过id获取商品信息
        // for(var j = 0; j < this.shopList.length; j++) {
        //     if(data[i].id == this.shopList[j].id) {
        //         shop = this.shopList[j];
        //         break;
        //     }
        // }
        arr.push(`
        <div class="car-shop">
                <div class="car-img">
                    <img src="images/shopimg/mac-small.jfif" alt="">
                </div>
                <div class="car-xinxi">
                    <div class="car-num">
                        <h3><a href="">15 英寸 MacBook Pro - 深空灰色</a></h3>
                        <h4 class="price-dan">RMB ${$dan}</h4>
                        <input type="text" placeholder="${num}" class="num">
                        <h5 class="count">RMB ${count}</h5>
                    </div>
                    <div class="delete">
                        <div class="availShip">送达日期: 有现货</div>
                        <a href="#" class="btn-delete" find_index="${i}">删除</a>
                    </div>
                    <div class="car-peizhi">
                        <div class="hardware">
                            <h3>硬件</h3>
                            <ul id="peizhi">
                                <li>${obj.Ghz} 六核第八代 Intel Core ${obj.processor} 处理器，Turbo Boost<br> 最高可达 ${obj.heightGhz}</li>
                                <li>采用原彩显示技术的视网膜显示屏</li>
                                <li>触控栏和触控 ID</li>
                                <li>Radeon Pro 560X 图形处理器，配备 4GB GDDR5 显<br>存</li>
                                <li>${obj.storage} 2400MHz DDR4 内存</li>
                                <li>${obj.memory} 固态硬盘</li>
                                <li>四个雷雳 3 端口</li>
                                <li>背光键盘 - 中文 - 拼音</li>
                                <li>配件套件</li>
                            </ul>
                        </div>
                        <div class="software">
                            <h3>软件</h3>
                            <ul>
                                <li>macOS</li>
                                <li>照片、iMovie、GarageBand</li>
                                <li>Pages、Numbers、Keynote</li>
                            </ul>
                        </div>
                    </div>

                    <div class="img-liping">
                        <span><img src="https://store.storeimages.cdn-apple.com/8755/store.apple.com/shop/rs-transaction/dist/lib/css/transaction/res/gift-icon-large.svg" alt=""></span>
                        <a href="">显示礼品选项</a>
                    </div>
                </div>
            </div>
    `);

    }
    $(".car-shop")[0].innerHTML=arr.join('');
    $(".section-body")[0].style.display="none";
    $(".section-body2")[0].style.display="block";
    //如果localstorage存在
    $(".count2")[0].innerText="总计 RMB "+lastcount;
    
    // $(".num").on("change",function(){
    //     var str=this.previousElementSibling.innerText;
    //     var str2=this.nextElementSibling.innerText;
    //     var num=Number(str.split(" ")[1]);
    //     var count1=this.value*num
    //     this.nextElementSibling.innerText="RMB "+count1;
    //     //计算总价
    
    //     var num2=Number(str2.split(" ")[1]);
    //     // console.log(count1);
    //     // console.log(num2);
    //     var num3=count1-num2;//相差值
    
    //     // console.log(num3);
    //     var str3=$(".count2")[0].innerText;
    //     var num4=Number(str3.split(" ")[2]);
    //     // console.log(num4);
    
    //     lastcount=num4+num3;
    
    //     // console.log(str3.split(" ")[2]);
    
    //     // $(".count")[0].innerText="RMB "+this.value*(Number(obj.price)+21988);
    //     $(".count2")[0].innerText="总计 RMB "+lastcount;
    
    // })
    var $all_inp=document.getElementsByClassName("num");
    for(let i=0;i<$all_inp.length;i++){
        $all_inp[i].onchange=function(){
            var str=this.previousElementSibling.innerText;
            var str2=this.nextElementSibling.innerText;
            var num=Number(str.split(" ")[1]);
            var count1=this.value*num
            this.nextElementSibling.innerText="RMB "+count1;
            //计算总价
        
            var num2=Number(str2.split(" ")[1]);
            // console.log(count1);
            // console.log(num2);
            var num3=count1-num2;//相差值
        
            // console.log(num3);
            var str3=$(".count2")[0].innerText;
            var num4=Number(str3.split(" ")[2]);
            // console.log(num4);
        
            lastcount=num4+num3;
        
            // console.log(str3.split(" ")[2]);
        
            // $(".count")[0].innerText="RMB "+this.value*(Number(obj.price)+21988);
            $(".count2")[0].innerText="总计 RMB "+lastcount;

            var Num=this.value;
            data[i].count=Num;
            var str=JSON.stringify(data);
            localStorage.shopList=str;

        }
    }
    


    //删除shopList
    var $all_btn=document.getElementsByClassName("btn-delete");
    for(let i=0;i<$all_btn.length;i++){

        $all_btn[i].onclick=function(){
            if(data.length==2){
                data=data.splice(i-1,1);
                var str=JSON.stringify(data);
                localStorage.shopList=str;
                $shop_car.click();
            }else{
                localStorage.removeItem("shopList");
                $shop_car.click();
            }

        }
    }
    

    // $(".btn-delete").on("click",function(){
    //     console.log($all_btn[0].find_index);
    // })

}else{
    $(".section-body")[0].style.display="block";
    $(".section-body2")[0].style.display="none";
    $(".btn-back").on("click",function(){
        location.href="shop.html";
    })
    $(".count2")[0].innerText="总计 RMB "+lastcount;
    
}



// $(".btn-delete").on("click",function(){
//     localStorage.removeItem("data");
//     location.href="shop-car.html";
// })

