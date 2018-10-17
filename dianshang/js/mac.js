var swiper = (function () {
    var timer = null;
    return {
        init: function (ele) {
            if (typeof ele == 'string') {
                ele = document.querySelector(ele);
            }

            this.ele = ele;
            this.$tipBox = ele.querySelector('.video-tip');
            this.$tipLiAll = this.$tipBox.children;
            this.$box1 = ele.querySelector('.photo');
            this.index = 0;
            this.$box2 = ele.querySelector('.computer');
            for (var i = 0; i < this.$tipLiAll.length; i++) {
                this.$tipLiAll[i].index = i;
            }
            this.event();
        },
        event: function () {
            var _this = this;
            _this.$tipBox.onclick = function (ev) {
                ev = ev || window.event;
                var target = ev.target || ev.srcElement;
                _this.index = target.index
                if (target.nodeName == 'LI') {
                    _this.showImage(target.index);
                    target.className = 'active';
                    console.log(1);
                }
            }

            function fn1(ev) {
                ev = ev || window.event;
                var target = ev.target || ev.srcElement;
                if (target.nodeName == 'LI') {
                    target.removeAttribute('class');
                }
            }
            _this.$box1.onclick = function () {
                _this.index = _this.index - 1
                if (_this.index < 0) {
                    _this.index = 1;
                }
                _this.showImage(_this.index);
                _this.$box1.style.opacity=1;
                _this.$box2.style.opacity=0.6;
            }
            _this.$box2.onclick = function () {
                _this.index = _this.index + 1
                if (_this.index > 1) {
                    _this.index = 0;
                }
                _this.showImage(_this.index);
                _this.$box2.style.opacity=1;
                _this.$box1.style.opacity=0.6;
            }
        },
        showImage: function (index) {
            index = index || 0;
            for (var i = 0; i < this.$tipLiAll.length; i++) {
                this.$tipLiAll[i].removeAttribute('class');
            }
            this.$tipLiAll[index].className = 'active';
            
            move('.media', 'left', -1349 * index);
        },
       
    }
}())