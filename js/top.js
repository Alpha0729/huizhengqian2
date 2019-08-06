$(document).ready(function () {
    //$("#top").append("");
    $("#top").append("<style>#top{\n" +
        "    width: 50px;\n" +
        "    height: 50px;\n" +
        "    position: fixed;\n" +
        "    right:80px ;\n" +
        "    bottom: 80px;\n" +
        "    background-color: #1d6168;\n" +
        "    padding: 1px;\n" +
        "    -webkit-border-radius: 50%;\n" +
        "    -moz-border-radius: 50%;\n" +
        "    border-radius: 3px;\n" +
        "    -webkit-transition: all .3s;\n" +
        "    display: none;\n" +
        "}\n" +
        "#top i{\n" +
        "    color:#fff;\n" +
        "    font-size:50px;\n" +
        "    text-align: center;\n" +
        "    line-height: 50px;\n" +
        "}\n" +
        "#top:hover{\n" +
        "    background-color: #104b51;\n" +
        "    text-decoration: none;\n" +
        "}\n" +
        "#top a:hover{\n" +
        "    text-decoration: none;\n" +
        "}</style>" +
        "<a href=\"javaScript:;\">\n" +
        "            <i class=\"layui-icon layui-icon-top \"></i>\n" + "</a>");

});

window.onload=function () {
    function now() {
        layui.use('layer',function () {
            var layer=layui.layer;
            layer.open({
                title:'在线咨询',
                type:1,
                content:$('#letter'),
                shadeClose:false,
                end:function () {
                    document.getElementById('letter').style.display='none';
                }
            })
        });
    }
    var oNow = document.getElementById('now');
    var oLetter = document.getElementById('letter');
    var time=null;
    oNow.onclick = function () {
        time = clearTimeout(time);
        now();
    };
    oLetter.style.display='none';
    /* var aInput=oLetter.getElementsByTagName('input');
     var getCookie=document.cookie;
     function get(name) {  //傻逼cookie，烦的1B
         var a=name+"=";
         var arr=getCookie.split(';');
         for(var i=0;i<arr.length;i++){
             arr[i].trim();
             if (arr[i].indexOf(a)!==-1){
                 return arr[i].substring(arr[i].indexOf(a)+a.length,arr[i].length);
             }
         }
     }
     get('abc');
     aInput[0].value=get('username');
     aInput[1].value=get('userAge');
     aInput[2].value=get('abc');
     for(var i=0;i<aInput.length;i++){
         aInput[i].index=i;
         aInput[i].oninput=function () {
             console.log(aInput[this.index]);
             if(aInput[this.index]===aInput[0]){
                 document.cookie='username='+this.value;
             }
             if(aInput[this.index]===aInput[1]){
                 document.cookie='userAge='+this.value;
             }if (aInput[this.index]===aInput[2]){
                 document.cookie='abc='+this.value;
             }
         };
     }*/
    layui.use('form',function () {
        var form=layui.form;

    });
    /*-----向上按钮-----*/
    var oTop = document.getElementById('top');
    var timer = null;
    function setInter() {
        var oH = document.documentElement.clientHeight;
        var oS = document.documentElement.scrollTop;
        timer = setInterval(function () {
            document.documentElement.scrollTop = (oS *= 0.8);
            if (oS <= 1) {
                oS = 0;
                clearInterval(timer);
                oTop.style.display = "none";
            }
        }, 30)
    }
    document.onwheel = function () {
        clearInterval(timer);
    };
    /*备注：onwheel和onscroll的区别，onwheel：当”鼠标滚动时“触发该onwheel事件，onscroll：当"滚动条发生改变时"，触发该事件*/
    function top2() {
        var oH = document.documentElement.clientHeight;
        var oS = document.documentElement.scrollTop;
        if (document.documentElement.clientHeight + 400 < oH + oS) {
            $("#top").css('display', 'block')
        } else {
            $("#top").css('display', 'none')
        }
    }

    $(window).on('ready', function () {
        top2();
    });
    $(document).on('scroll', function () {
        top2();
    });
    $("#top").on('click', function () {
        setInter();
    });
};

