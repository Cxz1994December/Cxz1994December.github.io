window.onload = function (ev) {
	var oe = ev || window.event;
	var browserHeight = document.documentElement.clientHeight;
	var browserWidth = document.documentElement.clientWidth;
	var num = 0;
	var num1 = 0;
	var num2 = 0;
	var imgNum = 0;
	var btnNum = 0;
	var myTimes = null;
	var onoff = true;





	$('.active').css('transition', '0s');
	$('.active_d').css('height', browserHeight + 'px');
	if (browserWidth < 1350) {
		$('.bg_1 .img').css('backgroundSize', '1350px');
		$('.bg_1_box .img').css('maxWidth', browserWidth + 'px');
	}else {
		$('.bg_1 .img').css('backgroundSize', '100%');
		$('.bg_1_box .img').css('maxWidth', browserWidth + 'px');
		$('.active_a').css('backgroundSize', '120%');
	}
	if(browserWidth < 1400) {
		$('.header .logo').css('display', 'none');
	}
	
	
	if(browserHeight < 560) {
		$('.bg_4 .boxBox .two').css('display', 'none');
		$('.bg_4 .boxBox .three').css('display', 'none');
	}else if(browserHeight < 700) {
		$('.bg_4 .boxBox .two').css('display', 'block');
		$('.bg_4 .boxBox .three').css('display', 'none');
	}else {
		$('.bg_4 .boxBox li').css('display', 'block');
	}
	
	if(browserWidth < 690) {
		$('.bg_9_box').css('width', 690-396 + 'px');
	}else {
		$('.bg_9_box').css('width', browserWidth-396 + 'px');
	}

	// 视口适应
	window.onresize = function(ev) {
		var oe = ev || window.event;
		browserHeight = document.documentElement.clientHeight;
		browserWidth = document.documentElement.clientWidth;
		console.log(browserWidth);
		console.log(browserHeight);
		
		
		$('.active_d').css('height', browserHeight + 'px');
		if (browserWidth < 1350) {
			$('.active_d').css('height', browserHeight + 'px');
			$('.bg_1 .img').css('backgroundSize', '1350px');
			$('.active_a').css('backgroundSize', '1550px');
		}else {
			$('.active_d').css('height', browserHeight + 'px');
			$('.bg_1 .img').css('backgroundSize', '100%');
			$('.active_a').css('backgroundSize', '120%');
		}
		if(browserWidth < 1400) {
			$('.header .logo').css('display', 'none');
		}else{
			$('.header .logo').css('display', 'block');
		}

		if(browserHeight < 560) {
			$('.bg_4 .boxBox .two').css('display', 'none');
			$('.bg_4 .boxBox .three').css('display', 'none');
		}else if(browserHeight < 700) {
			$('.bg_4 .boxBox .two').css('display', 'block');
			$('.bg_4 .boxBox .three').css('display', 'none');
		}else {
			$('.bg_4 .boxBox li').css('display', 'block');
		}

		$('.bg_1_box .img').css('maxWidth', browserWidth + 'px')
		
		$('.bg_1_box').css('left', -imgNum*browserWidth + 'px');
		
		if(browserWidth < 690) {
			$('.bg_9_box').css('width', 690-396 + 'px');
		}else {
			$('.bg_9_box').css('width', browserWidth-396 + 'px');
		}
		
	}

	// 首页轮播
	$('.bg_1_btn li').hover(
		function(){
			btnNum = $(this).index();
			$('.bg_1_btn li').css('background', '#fff');
			$(this).css('background', '#00dfb9');
			$('.bg_1_box').css('left', browserWidth * -btnNum + 'px');
			imgNum = btnNum;
		}
	);

	myTimes = setInterval(function(){
		imgNum++;
		if (imgNum > 4) {
			imgNum = 1;
			$('.bg_1_box').css('transition', '0s');
			$('.bg_1_box').css('left', -(imgNum-1)*browserWidth + 'px');
			$('.bg_1_btn li').eq(imgNum).css('background', '#00dfb9');
		}
		
		setTimeout(function(){
			$('.bg_1_box').css('transition', '0.6s');
			$('.bg_1_box').css('left', -imgNum*browserWidth + 'px');
			$('.bg_1_btn li').css('background', '#fff');
			if (imgNum == 4) {
				$('.bg_1_btn li').eq(0).css('background', '#00dfb9');
			}else {
				$('.bg_1_btn li').eq(imgNum).css('background', '#00dfb9');
			}
		}, 20);
	}, 10000);
	

	

	// 滚轮
	$(document).on("mousewheel DOMMouseScroll", function (e) {
    var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) || (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));

    	// 上滑滚轮
	    if (onoff) {
	    	 if (delta > 0) {
	 			num++;
		        if (num > 0) {
		        	num = 0;
		        	$('.active').css('top', num*100 + '%');
		        }
		        onoff = false;
		        setTimeout(function() {
		        	if (num > -1) {
			        	$('.header').css('background', '');
			        	$('.header').css('height', '74px');
			        	$('.header .nav li').css('fontSize', '22px');
			        	$('.header .nav ul').css('marginTop', '33px');
			        	$('.header .logo').css('top', '20px');
			        	$('.header .logo img').css('height', '');
			        	$('.header .right').css('top', '32px');
			        	$('.header .right span').css('fontSize', '26px');
			        	$('.header .right i').css({'top':'34px', 'right':'225px'});
			        }
		        	$('.active').css('transition', '0.3s');
		        	$('.active').css('top', num*100 + '%');
		        	if(num < -7) {
		        		$('#act li').eq(6).addClass('activeNav');
		        		num = -7;

		        		num++;
		        	}else {
		        		$('#act li').removeClass('activeNav');
		        		$('#act li').eq(-num).addClass('activeNav');
		        		$('.nav .topBor').css('left', -84*num + 'px');
		        	}
		        	onoff = true;
				},300);
		    } 
		}

		// 下滑滚轮
		if (onoff) {
			if (delta < 0) {
		        num--;
		        if (num < -8) {
		        	num = -8;
		        	$('.active').css('top', num*100 + '%');
		        	
		        }
		        onoff = false;
		        setTimeout(function() {
		        	if (num < 0) {
			        	$('.header').css('background', 'rgba(0,0,0,0.5)');
			        	$('.header').css('height', '65px');
			        	$('.header .nav li').css('fontSize', '16px');
			        	$('.header .nav ul').css('marginTop', '21px');
			        	$('.header .logo img').css('height', '30px');
			        	$('.header .logo').css('top', '14px');
			        	$('.header .right').css('top', '21px');
			        	$('.header .right span').css('fontSize', '18px');
			        	$('.header .right i').css({'top':'20px', 'right':'170px'});
			        }
		        	$('.active').css('transition', '0.3s');
		        	$('.active').css('top', num*100 + '%');
		        	if(num < -7) {
		        		$('#act li').eq((num+1)*-1).removeClass('activeNav');
		        		num = -7;
		        		$('.nav .topBor').css('left', -84*num + 'px');
		        		num--;
		        	}else {
		        		$('#act li').removeClass('activeNav');
		        		$('#act li').eq(-num).addClass('activeNav');
		        		$('.nav .topBor').css('left', -84*num + 'px');
		        	}
		        	onoff = true;
				},300);
		    }
		}
		num2 = -num;
	});




	// 导航栏
	$('#act li').hover(function(){
		num1 = $(this).index();
		$('.nav .topBor').css('left', 84*num1 + 'px');
		$(this).addClass('activeNav');

		$(this).click(function() {
			num2 = num1;
			if (num1 > 0) {
	        	$('.header').css('background', 'rgba(0,0,0,0.5)')
	        }else {
	        	$('.header').css('background', '')
	        }
			$('#act li').removeClass('activeNav');
			$(this).addClass('activeNav');
			$('.nav .topBor').css('left', 84*num2 + 'px');
			$('.active').css('transition', '0.3s');
			$('.active').css('top', -num1*100 + '%');
			num = -num1;
		});
	},
	function(){
		$('.nav .topBor').css('left', 84*num2 + 'px');
		if (num2 > 7) {
			$('.nav .topBor').css('left', 84*(num2-1) + 'px');
			$(this).removeClass('activeNav');
		}
		if($(this).siblings().hasClass('activeNav')) {
			$(this).removeClass('activeNav');
		}
	});


	var myLsttimes = null;
	var lstNum = 0;
	
	myLsttimes = setInterval(function(){
		lstNum++;
		if(lstNum > 4) {
			lstNum = 0;
			$('.bg_1_lst li').css('top', -lstNum*25 + 'px');
		}
		$('.bg_1_lst li').css('top', -lstNum*25 + 'px');
	}, 3000);
	
	










//	第二界面
	var lstIndex = 0;
	
	$('.bg_2_box .lst li').hover
	(
		function(){
			lstIndex = $(this).index();
			$(this).css('transition', 'all .3s ease-in-out .6s');
			$(this).css('backgroundPositionY', '0px');
			$(this).css('color', '#fff');
			$('.bg_2_box .lst p').css('transition', '.5s .6s');
			$('.bg_2_box .lst p').eq(lstIndex).css('bottom', '0px');
			$('.bg_2_box .lst .le').eq(lstIndex).css('clip', 'rect(0px,156px,-10px,78px)');
			$('.bg_2_box .lst .ri').eq(lstIndex).css('clip', 'rect(156px,78px,156px,0px)');
			$('.bg_2_box .lst i').css('transition','all .5s ease-in-out .6s');

			switch(lstIndex)
			{
			    case 0:
					$('.bg_2_box .lst .pc_img').css('backgroundPositionX', '-168px')
			        break;
			    case 1:
			        $('.bg_2_box .lst .mobi_img').css('backgroundPositionX', '-335px')
			        break;
			    case 2:
			        $('.bg_2_box .lst .sys_img').css('backgroundPositionX', '-328px')
			        break;
			    case 3:
			        $('.bg_2_box .lst .app_img').css('backgroundPositionX', '-167px')
			        break;
			    case 4:
			        $('.bg_2_box .lst .host_img').css('backgroundPositionX', '-336px')
			        break;
			    default:
			        
			}
		},
		function(){
			$(this).css('transition', '0s');
			$(this).css('backgroundPositionY', '400px');
			$(this).css('color', '#000');
			$('.bg_2_box .lst p').css('transition', '0s');
			$('.bg_2_box .lst p').eq(lstIndex).css('bottom', '-200px');
			$('.bg_2_box .lst .le').eq(lstIndex).css('clip', 'rect(0px,156px,156px,78px)');
			$('.bg_2_box .lst .ri').eq(lstIndex).css('clip', 'rect(0px,78px,156px,0px)');
			$('.bg_2_box .lst i').css('transition','0s');
			switch(lstIndex)
			{
			    case 0:
					$('.bg_2_box .lst .pc_img').css('backgroundPositionX', '-245px')
			        break;
			    case 1:
			        $('.bg_2_box .lst .mobi_img').css('backgroundPositionX', '-415px')
			        break;
			    case 2:
			        $('.bg_2_box .lst .sys_img').css('backgroundPositionX', '-416px')
			        break;
			    case 3:
			        $('.bg_2_box .lst .app_img').css('backgroundPositionX', '-244px')
			        break;
			    case 4:
			        $('.bg_2_box .lst .host_img').css('backgroundPositionX', '-422px')
			        break;
			    default:
			        
			}
		}
	);
	
	
//	第三界面
	var lst3Index = 0;
	$('.bg_3_box .lst li').hover(
		function(){
			lst3Index = $(this).index();
			$('.bg_3_box .lst .img_box div').eq(lst3Index).css('top', '0px');
			$('.bg_3_box .lst .text p').eq(lst3Index).css('color', '#fff');
			$('.bg_3_box .lst .text span').eq(lst3Index).css('color', '#fff');
			$('.bg_3_box .lst .text u').eq(lst3Index).css('bottom', '102px');
			console.log(lst3Index);
		},
		function(){
			$('.bg_3_box .lst .img_box div').eq(lst3Index).css('top', '-200px');
			$('.bg_3_box .lst .text p').eq(lst3Index).css('color', '#999');
			$('.bg_3_box .lst .text span').eq(lst3Index).css('color', '#222');
			$('.bg_3_box .lst .text u').eq(lst3Index).css('bottom', '0px');
		}
	);


	// 第四界面
	var X = 0;
	var Y = 0;
	$('.bg_4 .box').hover(
		function(){
			// 小黑块
			$('.bgK').css('display', 'block');
		},
		function(){
			$('.bgK').css('display', 'none');
		}
	);
	$('.boxBox li').hover(
		function(){
			X = $(this).position().top;
			Y = $(this).position().left;
			$(this).css('backgroundPositionY', '-150px')

			// 小黑块移动
			$('.bgK').css('left', Y + 'px');
			$('.bgK').css('top', X + 'px');
		},
		function(){
			$(this).css('backgroundPositionY', '0px')
		}
	);


//	第六界面
	var lst6Index = 0;
	$('.bg_6_box .lst li').hover
	(
		function(){
			lst6Index = $(this).index();
			$('.bg_6_box .lst .le').eq(lst6Index).css('clip', 'rect(0px,128px,128px,64px)');
			$('.bg_6_box .lst .ri').eq(lst6Index).css('clip', 'rect(0px,64px,128px,0px)');
		},
		function(){
			$('.bg_6_box .lst .le').eq(lst6Index).css('clip', 'rect(0px,128px,-10px,64px)');
			$('.bg_6_box .lst .ri').eq(lst6Index).css('clip', 'rect(128px,64px,128px,0px)');
		}
			
	);
	
	
	//	第七界面
	$('.cent7_btn li').hover(
		function() {
			$('.cent7_btn li').removeClass('activeBtn');
			$(this).addClass('activeBtn');
			$aa = $(this).index();
			$('.cent_7 .cent7_lst').css('left', -480*$aa + 'px');
		}
	);
	
	
	
//	侧栏
	var sideIndex = 0;
	var sideOnoff = true;
	
	$('#sideBar .down i').click(function(){
		if (onoff) {
	        num--;
	        if (num < -8) {
	        	num = -8;
	        	$('.active').css('top', num*100 + '%');
	        	
	        }
	        onoff = false;
	        setTimeout(function() {
	        	if (num < 0) {
		        	$('.header').css('background', 'rgba(0,0,0,0.5)');
		        	$('.header').css('height', '65px');
		        	$('.header .nav li').css('fontSize', '16px');
		        	$('.header .nav ul').css('marginTop', '21px');
		        	$('.header .logo img').css('height', '30px');
		        	$('.header .logo').css('top', '14px');
		        	$('.header .right').css('top', '21px');
		        	$('.header .right span').css('fontSize', '18px');
		        	$('.header .right i').css({'top':'20px', 'right':'170px'});
		        }
	        	$('.active').css('transition', '0.3s');
	        	$('.active').css('top', num*100 + '%');
	        	if(num < -7) {
	        		$('#act li').eq((num+1)*-1).removeClass('activeNav');
	        		num = -7;
	        		$('.nav .topBor').css('left', -84*num + 'px');
	        		num--;
	        	}else {
	        		$('#act li').removeClass('activeNav');
	        		$('#act li').eq(-num).addClass('activeNav');
	        		$('.nav .topBor').css('left', -84*num + 'px');
	        	}
	        	onoff = true;
			},300);
	    }
		num2 = -num;
	});
	
	$('#sideBar .up i').click(function(){
		if (onoff) {
 			num++;
	        if (num > 0) {
	        	num = 0;
	        	$('.active').css('top', num*100 + '%');
	        }
	        onoff = false;
	        setTimeout(function() {
	        	if (num > -1) {
		        	$('.header').css('background', '');
		        	$('.header').css('height', '74px');
		        	$('.header .nav li').css('fontSize', '22px');
		        	$('.header .nav ul').css('marginTop', '33px');
		        	$('.header .logo').css('top', '20px');
		        	$('.header .logo img').css('height', '');
		        	$('.header .right').css('top', '32px');
		        	$('.header .right span').css('fontSize', '26px');
		        	$('.header .right i').css({'top':'34px', 'right':'225px'});
		        }
	        	$('.active').css('transition', '0.3s');
	        	$('.active').css('top', num*100 + '%');
	        	if(num < -7) {
	        		$('#act li').eq(6).addClass('activeNav');
	        		num = -7;

	        		num++;
	        	}else {
	        		$('#act li').removeClass('activeNav');
	        		$('#act li').eq(-num).addClass('activeNav');
	        		$('.nav .topBor').css('left', -84*num + 'px');
	        	}
	        	onoff = true;
			},300);
	    } 
	});
	
	
	
	
	
	
	$('#sideBar li').hover
	(
		function(){
			if(sideOnoff) {
				sideIndex = $(this).index();
				$('#sideBar li i').eq(sideIndex).css('opacity','.5');
				sideOnoff = false;
				setTimeout(function(){
					switch(sideIndex)
						{
					    case 1:
					        $('#sideBar .im p').stop().css({'left': '-150px', 'opacity': '1'});
					        break;
					    case 2:
					    	$('#sideBar .tel p').stop().css({'left': '-241px', 'opacity': '1'});
					        break;
					    case 3:
					        $('#sideBar .wechat p').stop().css({'left': '-159px', 'opacity': '1'});
					        break;
					}
					sideOnoff = true;
				}, 300)
			}
		},
		function(){
			$('#sideBar li i').eq(sideIndex).css('opacity','');
			$('#sideBar li p').stop().css({'left': '50px', 'opacity': '0'});
		}
	);
	
	$('#sideBar ul').mouseleave(function(){
		$('#sideBar li p').css({'left': '50px', 'opacity': '0'});
	});

}