window.onload=function () {
    var oTop=document.getElementById('top');
    var timer=null;
    function setInter() {
        var oH=document.documentElement.clientHeight;
        var oS=document.documentElement.scrollTop;
        timer=setInterval(function () {
            document.documentElement.scrollTop=(oS*=0.8);
            if (oS<=1){
                oS=0;
                clearInterval(timer);
                oTop.style.display="none";
            }
            console.log(oS)
        },30)

    }
    document.onwheel=function () {
        clearInterval(timer);
    };
    /*备注：onwheel和onscroll的区别，onwheel：当”鼠标滚动时“触发该onwheel事件，onscroll：当"滚动条发生改变时"，触发该事件*/
    function top2() {
        var oH=document.documentElement.clientHeight;
        var oS=document.documentElement.scrollTop;
        if(document.documentElement.clientHeight+400<oH+oS ){
            $("#top").css('display','block')
        }else {
            $("#top").css('display','none')
        }
    }

    $(window).on('ready',function () {
        top2();
    });
    $(document).on('scroll',function () {
        top2();
    });
    $("#top").on('click',function () {
        setInter();
    });
};