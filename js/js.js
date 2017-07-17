
//左边侧栏
(function(){
  var _index=0;
  $("#nav-menu ul li").click(function(){
   $(this).find("span").addClass("active").parent().siblings().find("span").removeClass("active");
   _index=$(this).index()+1;
   //通过拼接字符串获取元素，再取得相对于文档的高度
   var _top=$(".floor"+_index).offset().top;
   //scrollTop滚动到对应高度
   $("body,html").animate({scrollTop:_top},500);
  });
  var nav=$("#nav-menu"); //得到导航对象
  var win=$(window); //得到窗口对象
  var sc=$(document);//得到document文档对象。
  win.scroll(function(){
   if(sc.scrollTop()>=1700){
   $("#nav-menu").show(); 
   //获取滚动元素对应的索引!!!重难点
   var index=Math.floor( (sc.scrollTop()-1700) /675);
   $("#nav-menu ul li span").eq(index).addClass("active").parent().siblings().find("span").removeClass("active");
   }else{
   $("#nav-menu").hide();
   }
  });
 }());

//右边侧栏
(function(){
  $('.toolbar .toolbar-tabs .tab').hover(function () {
    $(this).find('.tab-tip').css('display',"none");
    $(this).addClass('tab-hover');
    $(this).find('.tab-text').animate({left:-60+"px"},200)
},function () {
    $(this).find('.tab-tip').css('display',"block");
    $(this).removeClass('tab-hover')
    $(this).find('.tab-text').animate({left:35+"px"},200)
});
$('.toolbar .toolbar-footer .tab').hover(function () {
    $(this).find('.tab-tip').css('display',"none");
    $(this).addClass('tab-hover');
    $(this).find('.tab-text').animate({left:-48+"px"},200)
},function () {
    $(this).find('.tab-tip').css('display',"block");
    $(this).removeClass('tab-hover')
    $(this).find('.tab-text').animate({left:35+"px"},200)
});
}());

//搜索栏

$('#key-search').keyup(function(ev) {
    var con=$(this).val();
    var re=/我/
    if(re.test(con)){
        crli()
    }
});
function crli(){
    $('')
}

//箭头
$('.address,.right a').hover(function () {
    $(this).addClass('hover');
},function () {
    $(this).removeClass('hover');
})



