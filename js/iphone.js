/**
 * Created by yangxiong on 2017/5/10.
 */
$('.toolbar .toolbar-tabs .tab').hover(function () {
    $(this).find('.tab-tip').css('display',"none");
    $(this).addClass('tab-hover');
    $(this).find('.tab-text').stop().animate({left:-60+"px"},200)
},function () {
    $(this).find('.tab-tip').css('display',"block");
    $(this).removeClass('tab-hover')
    $(this).find('.tab-text').stop().animate({left:35+"px"},200)
});
$('.toolbar .toolbar-footer .tab').hover(function () {
    $(this).find('.tab-tip').css('display',"none");
    $(this).addClass('tab-hover');
    $(this).find('.tab-text').stop().animate({left:-48+"px"},200)
},function () {
    $(this).find('.tab-tip').css('display',"block");
    $(this).removeClass('tab-hover')
    $(this).find('.tab-text').stop().animate({left:35+"px"},200)
});

//支持那里
$('.choose-support li').hover(function () {
    $(this).children('.etooltips').css('display','block');
},function () {
    $(this).children('.etooltips').css('display','none');
});

//配件选择
$('#tab-main-list li').hover(function () {
    this.className=='ac'?$(this).css('cursor','default'):$(this).css('color','#e4393c')
},function () {
    this.className=='ac'?$(this).css('cursor','default'):$(this).css('color','#666')
});

//main-img的一系列特效-------------------------------------------------------------------------------------
$('.main-img img').attr('index',1);
$('.main .preview .picList li').not($('.main .preview .picList li').has('a')).hover(function () {
    $('.main .preview .picList li').removeClass('img-hover');
    $(this).addClass('img-hover');
    var preview_piclist_index=$(this).index();
    $('.main-img img').attr({'src':"images/0"+preview_piclist_index+"450.jpg",'index':preview_piclist_index})
});
//放大镜
$('.main-img').mouseenter(function () {
    var zoom='<div class="zoom"></div>'; //创建放大镜
    var zoomdiv='<div class="zoomdiv"><img src="images/0'+$('.main-img img').attr('index')+'800.jpg"></div>';
    $('.main-img').append(zoom); //加入放大镜
    $('.preview').append(zoomdiv);
});
$('.main-img').mouseleave(function () {
    $(this).children('.zoom').remove();
    $('.preview').children('.zoomdiv').remove();
});
$('.main-img').mousemove(function (ev) {
    var ev = ev || event;
    var x = ev.pageX - $(this).offset().left-$('.zoom').width()/2;
    var y = ev.pageY - $(this).offset().top-$('.zoom').height()/2;
    if (x<0){x=0}
    if (x>$(this).width()-$('.zoom').width()){x=$(this).width()-$('.zoom').width()}
    if (y<0){y=0}
    if (y>$(this).height()-$('.zoom').height()){y=$(this).height()-$('.zoom').height()}
    $('.zoom').css({left:x+'px',top:y+'px'})
    $('.zoomdiv img').css({
        left:-x*($('.zoomdiv img').width()/450) + 'px',
        top:-y*($('.zoomdiv img').height()/450) + 'px'
    });
});
//--------------------------------------------------------------------------

//促销
$('.cuxiao-cont').hover(function () {
    $(this).addClass('cuxiao-hover')
    $('.view-all').hide();
},function () {
    $(this).removeClass('cuxiao-hover')
    $('.view-all').show();
});


//添加购物车
(function () {
    var val;
    $('.choose-amount').children('.add').click(function () {
        val = $('.choose-amount input').val();
        val++;
        $('.choose-amount input').val(val);
        if (val>1){
            $('.choose-amount').children('.reduce').removeClass('disabled')
        }
        return false;
    });

    $('.choose-amount').children('.reduce').click(function() {
        val = $('.choose-amount input').val();
        if (val <= 1) {
            return false;
        } else {
            $(this).removeClass('disabled');
            val--;
            $('.choose-amount input').val(val);
        }
        if (val<=1){
            $(this).addClass('disabled');
        }
        return false;
    });
}());
//--------------------------------------------------------------------------------------
$('.sidebar-bg').css({'left':$('.all').offset().left});
$('.all,.sidebar-bg').hover(function () {
    $('.sidebar-bg').css('display','block');

},function () {
    $('.sidebar-bg').css('display','none');
});
//--------------------------------------------------------------------------------------
$('.all,.address,.right a').hover(function () {
    $(this).addClass('hover');
},function () {
    $(this).removeClass('hover');
})





