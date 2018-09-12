$(function(){
    $(window).on('resize',function(){
        $('.carousel-inner .item').each(function(index,value){
            if($(window).width()>=768){
                var imgSrc=$(this).data("largeImage");

                $(this).html($('<a href="javascript:;" class="pcImg"></a>').css("backgroundImage","url("+imgSrc+")"));
            }else{
                var imgSrc = $(this).data("smallImage");
                //console.log(value);
                $(this).html('<a href="javascript:;" class="mobileImg"><img src="'+imgSrc+'"></a>');
            }
        })
    }).trigger("resize");

    $('.carousel').carousel({
        interval: 2000
    })
    var startX,endX;
    $(".carousel-inner")[0].addEventListener("touchstart",function(e){
        startX = e.targetTouches[0].clientX;
    })
    $(".carousel-inner")[0].addEventListener("touchend",function(e){
        endX = e.changedTouches[0].clientX;
        if(endX-startX>0){
            $(".carousel").carousel('prev');
        }else if(endX-startX<0){
            $(".carousel").carousel('next');
        }
    })

    $('[data-toggle="tooltip"]').tooltip();

    var ul = $('.wjs_product .nav-tabs');
    var lis = ul.find("li");
    var totalWidth = 0;
    lis.each(function(index,value){
        totalWidth+=$(value).innerWidth();
        //console.log(totalWidth);
    })
    ul.width(totalWidth);
    var myScroll = new IScroll('.tabs_parent',{
        scrollX: true, scrollY: false
    });
})

