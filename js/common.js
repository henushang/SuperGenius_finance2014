 $(function() {
            $("#box-nav").lavaLamp({
                fx: "backout", 
                speed: 700,
                click: function(event, menuItem) {
                    return false;
                }
            });

            $(".t06_w290_list").hover(function(){
                    $(".t06_w290_list").find(".t06_w290_title").removeClass("t06_w290_on");
                    $(".t06_w290_list").find(".t06_w290_title span").removeClass("on_num")
                 
    				$(".t06_w290_list").find(".list_hide").css("display","none")
    				$(this).find(".list_hide").css("display","block")
                    $(this).find(".t06_w290_title").addClass("t06_w290_on");
                    $(this).find(".t06_w290_title span").addClass("on_num")
          
   				 })

            $(".t06_w291_list").hover(function(){

                    $(".t06_w291_list").find(".list_hide").css("display","none")
                    $(this).find(".list_hide").css("display","block")
          
                    $(".t06_w291_list").find("h5").removeClass('t06_w290_on');
                    $(this).find("h5").addClass('t06_w290_on')
                    $(".t06_w291_list .t06_w290_title").find("span").removeClass('on_num');
                    $(this).find('.t06_w291_title').find("span").addClass('on_num');
                 })

          


            $("#tr_act").click(function(){
               $(".login_box").css("display","block");
               $("#login").css("display","block")
            })
            $("#close").click(function(){
                 $(".login_box").css("display","none");
               $("#login").css("display","none")
            })
           
            $(".login_but").click(function(){
                 $(".login_box").css("display","none");
               $("#login").css("display","none")
            })
            // 登陆
             $("#denglu").click(function(){
               $(".login_box").css("display","block");
               $("#login").css("display","block")
            })

            // 
            $(".tp_red").click(function(){
                $("#eject1").css("display","block")
            })

            $("#close1").click(function(){
                $("#eject1").css("display","none")
            })



            $(".tp_bule").click(function(){
                $("#eject2").css("display","block")
            })
            $("#close2").click(function(){
                $("#eject2").css("display","none")
            })



   

});