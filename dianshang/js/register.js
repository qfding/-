var register = (function () {

    return {
        init: function (ele) {
            // 获取form表单
            this.$ele = document.querySelector(ele);
            // 获取提交按钮
            this.$loginBtn = this.$ele['login-btn'];
            //获取所有input框
            this.$inpAll=document.querySelectorAll(".change");
            //获取姓氏框
            this.$firstName=document.getElementById("firstName");
            this.$lastName=document.getElementById("lastName");
            this.$usernameInp = this.$ele['username'];
            this.$passwordInp = this.$ele['password'];
            this.$nextpasswordInp = this.$ele['password-second'];
            this.$mimaImg=document.getElementById("mima-img");
            this.$mimacuo=document.getElementById("mima-cuo");
            this.$problem1=document.getElementById("select-one").nextElementSibling;
            this.$problem2=document.getElementById("select-two").nextElementSibling;
            this.$problem3=document.getElementById("select-three").nextElementSibling;
            this.event();
        },
        event: function () {
            var _this = this;
            // 注册按钮
            this.$loginBtn.onclick = function () {
                var flag=true;
        
                //没有一个是红框则发送ajax
                // debugger;
                console.log(_this.$inpAll.length);
                for(let i=0;i<_this.$inpAll.length;i++){   
                    // debugger
                    // console.log(_this.$inpAll[i].value);
                    if(_this.$inpAll[i].value == ""){
                        _this.$inpAll[i].className="warn "+"form-control change";
                        _this.$inpAll[i].nextElementSibling.style.display="block";
                        _this.$inpAll[i].value="";
                    }
                    if(_this.$inpAll[i].className == "warn form-control change"){
                        flag=false;
                    }
                    function $change(){
                        this.className="form-control change";
                    }
                    _this.$inpAll[i].addEventListener("focus",$change,false)
                }
                if(flag){
                    // 发送ajax，验证用户名和密码
                    var params = {
                        method: 'post',
                        data: {
                            username: _this.$usernameInp.value,
                            password: _this.$passwordInp.value
                        },
                        success: function (data) {
                            data = JSON.parse(data);
                            _this.loginSuccess(data);
                        }
                    }
                    sendAjax('http://localhost:8080/Tingsir/dianshang/php/register.php', params);
    
                    console.log(1000);
                }else{

                    // alert("某处未填写");
                    console.log(1);
                }
            }
            this.$usernameInp.onchange = function () {
                var reg = /^([a-zA-Z0-9._-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
                var $email = _this.$usernameInp.value;
                var $div = document.getElementById("cuowu-zi");
                _this.$div2 = document.getElementById("chongfu-zi");
                if (reg.test($email)) {
                    console.log(1);
                } else {
                    $div.style.display = "block";
                    this.className="warn "+"form-control change";
                    // _this.$usernameInp.style.bordercolor="#black";
                }
                function fn() {
                    $div.style.display = "none";
                    this.className="form-control change";
                }
                this.addEventListener("focus", fn, false);
                function fn4() {
                    if (reg.test($email)) {
                        this.className="form-control change";
                        $div.style.display = "none";
                    } else {
                        $div.style.display = "block";
                        this.className="warn "+"form-control change";
                        // _this.$usernameInp.style.bordercolor="#black";
                    }
                }
                this.addEventListener("blur", fn4, false);
                var params = {
                    data: {
                        username: _this.$usernameInp.value
                    },
                    success: function (data) {
                        data = JSON.parse(data);
                        _this.checkName(data);
                    }
                }
                sendAjax('http://localhost:8080/Tingsir/dianshang/php/check_username.php', params);
            }
            this.$passwordInp.onfocus=function(){
                _this.$mimaImg.style.display="block";
                this.className="form-control change";
                function f1() {
                    _this.$mimaImg.style.display = "none";
                    var reg=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/;
                    var $mima=this.value;
                    if(reg.test($mima)){
                        console.log("密码符合")
                    }else{
                        this.className="warn "+"form-control change";
                    }
                }
                this.addEventListener("blur", f1, false);

                function $controlImg(){
                    var $mima=this.value;
                    var $conditions1=document.getElementsByClassName("first-li")[0];
                    var $conditions2=document.getElementsByClassName("second-li")[0];
                    var $conditions3=document.getElementsByClassName("last-li")[0];
                    var $progress_back=document.getElementsByClassName("progress-back")[0];
                    if($mima.length>=8){
                        $conditions1.style.color="green";
                    }else{
                        $conditions1.style.color="#333";
                    }  
                    var reg2=/[A-Z][a-z]+/;
                    if(reg2.test($mima)){
                        $conditions2.style.color="green";
                    }else{
                        $conditions2.style.color="#333";
                    }  
                    // debugger 
                    var reg3=/[0-9]+/;
                    if(reg3.test($mima)){
                        $conditions3.style.color="green";
                    }else{
                        $conditions3.style.color="#333";
                    } 
                    if($mima.length>=8 || reg2.test($mima) || reg3.test($mima)){
                        $progress_back.className="progress-back "+"progress-red";
                        if(($mima.length>=8 && reg2.test($mima)) || (reg2.test($mima) && reg3.test($mima)) || ($mima.length>=8 && reg3.test($mima))){
                            $progress_back.className="progress-back "+"progress-yellow";
                            if($mima.length>=8 && reg2.test($mima) && reg3.test($mima)){
                                $progress_back.className="progress-back "+"progress-green";    
                            }
                        }
                    }else{
                        $progress_back.className="progress-back";
                    }
                }
                this.addEventListener("input", $controlImg, false);
            }
            this.$nextpasswordInp.onchange=function(){
                var $mimaOne=_this.$passwordInp.value;
                var $mimaTwo=_this.$nextpasswordInp.value;
                if($mimaOne != $mimaTwo){
                    _this.$mimacuo.style.display = "block";
                    this.className="warn "+"form-control change";
                }
                function f2(){
                    this.className="form-control change";
                }
                this.addEventListener("focus", f2, false);
                function f3(){
                    if($mimaOne != $mimaTwo){
                        _this.$mimacuo.style.display = "block";
                        this.className="warn "+"form-control change";
                    }else{
                        _this.$mimacuo.style.display = "none";
                        this.className="form-control change";
                    }
                }
                this.addEventListener("blur", f3, false);
            }
            this.$problem1.onfocus=function(){
                this.className="form-control change";
            }
            this.$problem2.onfocus=function(){
                this.className="form-control change";
            }
            this.$problem3.onfocus=function(){
                this.className="form-control change";
            }

            

        },
        checkName: function (data) {
            if (data.code == 200) {
                // 用户名称不存在
            } else {
                // 用户名称存在
                this.$div2.style.display="block";
            }
        },
        loginSuccess: function (data) {
            if (data.code == 200) {
                alert("注册成功，请登陆账户")
                location.href = 'denglu.html';
            } else {
                alert(data.msg);
            }
        }
    }

}())
