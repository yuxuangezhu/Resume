var el_height = $(window).height();
// $('.r_section_box').scrollTop(0)
// var startScroll = $(document).scrollTop();
var page = 0, lock = true;
VueBox('title', {title: '个人简历'});
VueBox('.r_nav', {logo: '个人简历', first: '简介', lists: [{text: '技能', link: ''},{text: '项目经验', link: ''},{text: '联系方式', link: 'section_four'}]});
VueBox('.r_ball', {one: '技能', two: '项目经验', three: '简介', four: '联系方式'});
VueBox('.r_skill_list', {skills: [{name: 'html(5)', score: '80', title: '熟悉'}, {name: 'css(3)', score: '80', title: '熟悉'}, {name: 'javascript', score: '90', title: '掌握'}, {name: 'nodejs', score: '70', title: '熟悉'}, {name: 'seajs', score: '70', title: '熟悉'}, {name: 'react', score: '60', title: '了解'}, {name: 'photoshop', score: '70', title: '熟悉'}]})
delay(function() {
	// $(',r_section_box').scrollTop(0)
	$('.r_ball_box').css('transform','rotate(3600deg)')
	$('.r_ball_inner').css('transform','rotate(-3600deg)')
	delay(function() {
		$('.r_ball').css('left', '20%')
		$('.r_text').css({
			'width': '450px',
			'height': '450px'
		})
		$('.r_ball_box').css('transform','rotate(0deg)')
		$('.r_ball_inner').css('transform','rotate(0deg)')
		delay(function() {
			$('.r_text_inner').show();
			$('.r_text').css({
				'padding': '30px',
				'width': '450px',
				'height': '350px',
				'border-radius': '10px',
				// 'background-color': 'transparent',
			})
		})
	})
}, 500)
// function changeImg(type) {
// 	type = type ? type : 0;
// 	if (type == 1) {
// 		changeImgDown()
// 	} else if (type == -1) {
// 		changeImgUp()
// 	} else {
// 		changeImgDown()
// 		delay(changeImg, 5000)
// 	}
// }
$('.navbar-nav li').on('click', function() {
	$('.active').removeClass('active');
	$(this).addClass('active');
})
$('.r_three_pre').on('click', function() {
	changeImgUp()
})
$('.r_three_next').on('click', function() {
	changeImgDown()
})
function changeImgDown() {
	var li = $('.r_three_inner_li')[0];
	$(li).fadeOut();
	delay(function() {
		$('.r_three_inner').append(li);
		$(li).fadeIn()
	}, 200)
}
function changeImgUp() {
	var length = $('.r_three_inner_li').length;
	var li = $('.r_three_inner_li')[length - 1];
	$(li).fadeOut()
	delay(function() {
		$($('.r_three_inner_li')[0]).before(li)
		$(li).fadeIn();
	}, 200)
}
// window.changeImg = {
// 	changeImgDown: changeImgDown,
// 	changeImgUp: changeImgUp
// }
$('.navbar-nav').on('click', 'a', function() {
	page = $(this).attr('data-index');
	var scrollTop = page * el_height;
	$('.r_section_box').animate({scrollTop: scrollTop}, 1000)
	scrollPage(page);
	// setTimeout(function() {
	// 	window.history.pushState({},0,'http://' + window.location.host + window.location.pathname);
	// })
})
$('.r_skill_list .progress-bar').on('click', function(){
	$(this).css('width', $(this).attr('aria-valuenow') + '%')
})
$('.r_section_box').on('scroll', function(e) {
	var endScroll = $('.r_section_box').scrollTop() + (el_height / 2);
	var changePage = parseInt(endScroll / el_height);
	if (changePage != page) {
		page = changePage;
		scrollPage(page);
	}
})
function scrollPage(page) {
	if (page == 1) {
		$('.r_skill_list .progress-bar').click()
	} else {
		$('.r_skill_list .progress-bar').css('width', 0)
	}
	if (page == 2) {
		$('.r_three_text').css('height', '400px');
		delay(function() {
			$('.r_three_text').css('width', '750px');
		})
		// delay(changeImg, 5000)
	} else {
		$('.r_three_text').css({
			'height': '0',
			'width': '0'
		});
	}
	$('.active').removeClass('active');
	$($('.navbar-nav li')[page]).addClass('active');
	$('.r_ball_box').css('transform','rotate('+ (90 * page) +'deg)')
	$('.r_ball_text').css('transform','rotate(-'+ (90 * page) +'deg)')
	$('.r_ball_inner').css('transform','rotate(-'+ (90 * page) +'deg)')
}
var data = {
		
	}
var event = {
		
	}
// vueBox('#app', data, event)
function delay(fn, time) {
	time = time ? time : 1000;
	setTimeout(fn, time)
}
function VueBox(el, data, event) {
	new Vue({
	  el: el,
	  data: data,
	  methods: event
	})
}