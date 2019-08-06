$(document).ready(function () {
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

