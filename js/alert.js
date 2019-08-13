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

   })
};

