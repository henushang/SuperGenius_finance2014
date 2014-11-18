$(function(){
	$(".mf_a").hover(function() {
      $(this).find(".mf_bg").css({"top":"0px","background":"#1d71b7","opacity":"1"})
	}, function() {
	   $(this).find(".mf_bg").css({"top":"110px","background":"#000","opacity":"0.5"})
	});
})