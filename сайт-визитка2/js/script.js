$(document).ready(function(){$(".popup-wrapper").hide(),$(".popup-info").hide(),$(".popup-tracks").hide(),$(".popup-youtube").hide(),$(".slider").hide(),$(".track").hover(function(){$(".line-left").css("left","0"),$(".line-right").css("right","0")}),$(".track").mouseleave(function(){$(".line-left").css("left","-100%"),$(".line-right").css("right","-100%")}),$(".who-me").hover(function(){$(".line-l_left").css("bottom","0")}),$(".who-me").mouseleave(function(){$(".line-l_left").css("bottom","-100%")}),$(".list").hover(function(){$(".line-r_right").css("bottom","0")}),$(".list").mouseleave(function(){$(".line-r_right").css("bottom","-100%")}),$(".burger-menu").click(function(){$(".popup-wrapper").show(300)}),$(".close").click(function(){$(".popup-wrapper").hide(300)}),$(".close2").click(function(){$(".popup-info").hide(300),$(".slider").hide(300)}),$(".close3").click(function(){$(".popup-tracks").hide(300)}),$(".close4").click(function(){$(".popup-youtube").hide(300)}),$(".who-me_open").click(function(){$(".popup-info").show(300),$(".slider").show()}),$(".youtube_open").click(function(){$(".popup-youtube").show(300)}),$(".slider").slick({slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:2e3}),$(".tracks_open").click(function(){$(".popup-tracks").show(300)}),960<$(window).width()&&$("body").parallax({elements:[{selector:".parallax1",properties:{x:{left:{initial:40,multiplier:.001,unit:"%",invert:!1}},y:{top:{initial:-50,multiplier:.001,unit:"%",invert:!0}}}},{selector:".alexander",properties:{x:{left:{initial:-80,multiplier:85e-5,unit:"%",invert:!0}},y:{top:{initial:70,multiplier:85e-5,unit:"%",invert:!1}}}},{selector:".parallax2",properties:{x:{right:{initial:-5,multiplier:.003,unit:"%",invert:!1}},y:{bottom:{initial:13,multiplier:.003,unit:"%",invert:!0}}}},{selector:".parallax3",properties:{x:{left:{initial:22,multiplier:.0015,unit:"%",invert:!1}},y:{top:{initial:-11,multiplier:.0015,unit:"%",invert:!0}}}},{selector:".parallax4",properties:{x:{left:{initial:5,multiplier:.003,unit:"%",invert:!1}},y:{bottom:{initial:5,multiplier:.003,unit:"%",invert:!1}}}},{selector:".parallax5",properties:{x:{right:{initial:-7,multiplier:.002,unit:"%",invert:!0}},y:{top:{initial:-9,multiplier:.002,unit:"%",invert:!0}}}},{selector:".parallax6",properties:{x:{left:{initial:-15,multiplier:.002,unit:"%",invert:!1}},y:{top:{initial:30,multiplier:.002,unit:"%",invert:!1}}}}]})});