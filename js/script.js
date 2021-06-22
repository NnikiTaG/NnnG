//==========---slider---===========//

let pagSlider = new Swiper('.page', {
	wrapperClass: "page_wrapper",
	slideClass: "scren",

	direction: 'vertical',

	slidesPerView: 'auto',

	keyboard: {
		pageUpDown: true,

		enabled: true,

		onlyInViewport: true,
	},

	mousewheel: {
		sensivity: 1,
	},

	init: false,

	on: {
		init: function () {
			setScrollType();
		},
		resize: function () {
			setScrollType();
		},
	},

	speed: 1100,

	watchOverflow: true,

	observer: true,
	observeParents: true,
    observeSlideChildren: true,

	scrollbar: {
		el: '.scroll',
		dragClass: "drag_scroll",
		draggable: true,
	},

	// freeMode: true,

	parallax: true,

});

let parallaxSwiper = document.querySelectorAll('.parallax_swiper');

let wrapper = document.querySelector('.wrapper');

function setScrollType() {
	// console.log(wrapper.offsetHeight + " " + window.innerHeight);
	if (wrapper.classList.contains('free')) {
		wrapper.classList.remove('free');
		pagSlider.params.freeMode = false;
		pagSlider.params.parallax = true;
	}
	for (let i = 0; i < pagSlider.slides.length; i++) {
		const pagSlide = pagSlider.slides[i];
		const pagSlideContent = pagSlide.querySelector('.scren_content');
		if(pagSlideContent) {
			const pagSlideContentHieght = pagSlideContent.offsetHeight;
			if (pagSlideContentHieght > window.innerHeight) {
				pagSlider.params.freeMode = true;
				pagSlider.params.parallax = false;
				wrapper.classList.add('free');
				for (let a = 0; a < parallaxSwiper.length; a++) {
                  	const el = parallaxSwiper[a];
                  	el.style.opacity = 1;
                  	el.style.transform = "translate3d(" + 0 + "px, " + 0 + "%, " + 0 + "px)";
                }
				break;
			}
		}
	}
}

pagSlider.init();

//==========---slider---===========//

//==========---tab_btn---===========//

let tabBtns = document.querySelectorAll('.tab_btn');
let shems = document.querySelectorAll('.footer_shem');
var tabActive = 0;

for(let i = 0; i < tabBtns.length; i++) {
	const tabBtn = tabBtns[i];
	const shem = shems[i];
	tabBtn.addEventListener("click", function(e){
		removeClassTab();
		tabBtn.classList.add('active');
		shem.classList.add('active');
	});
}

function removeClassTab() {
	const activeTab = document.querySelector('.tab_btn.active');
	const activeShem = document.querySelector('.footer_shem.active');
	activeTab.classList.remove('active');
	activeShem.classList.remove('active');
}

//==========---tab_btn---===========//

//==========---laod_anim---===========//

let loadAnims = document.querySelectorAll('.laod_anim');

document.addEventListener("DOMContentLoaded", function() {
	for(let i = 0; i < loadAnims.length; i++) {
		const loadAnim = loadAnims[i];
		loadAnim.classList.add('load');
	}
});

//==========---laod_anim---===========//

let lincksHover_1 = document.querySelectorAll('.tab_item.tab-1');
let imgesHover_1 = document.querySelectorAll('.wrap_img.tab-1');
let lincksHover_2 = document.querySelectorAll('.tab_item.tab-2');
let imgesHover_2 = document.querySelectorAll('.wrap_img.tab-2');
let lincksHover_3 = document.querySelectorAll('.tab_item.tab-3');
let imgesHover_3 = document.querySelectorAll('.wrap_img.tab-3');
let infBlocks_1 = document.querySelectorAll('.tab_inf__wrap.tab-1');
let infBlocks_2 = document.querySelectorAll('.tab_inf__wrap.tab-2');
let infBlocks_3 = document.querySelectorAll('.tab_inf__wrap.tab-3');

var activeLinck_1 = 0;
var activeLinck_2 = 0;
var activeLinck_3 = 0;

for(let i = 0; i < lincksHover_1.length; i++) {
	const linckHover = lincksHover_1[i];
	const infBlock = infBlocks_1[i];
	linckHover.addEventListener("click", function(e){
		activeLinck_1 = i;
		removeClassLinck_1();
		linckHover.classList.add('active');
		infBlock.classList.add('active');
	});
}

function removeClassLinck_1() {
	const linckActive = document.querySelector('.tab_item.tab-1.active');
	const infBlockActive = document.querySelector('.tab_inf__wrap.tab-1.active');
	linckActive.classList.remove('active');
	infBlockActive.classList.remove('active');
}

for(let i = 0; i < lincksHover_2.length; i++) {
	const linckHover = lincksHover_2[i];
	const infBlock = infBlocks_2[i];
	linckHover.addEventListener("click", function(e){
		activeLinck_2 = i;
		removeClassLinck_2();
		linckHover.classList.add('active');
		infBlock.classList.add('active');
	});
}

function removeClassLinck_2() {
	const linckActive = document.querySelector('.tab_item.tab-2.active');
	const infBlockActive = document.querySelector('.tab_inf__wrap.tab-2.active');
	linckActive.classList.remove('active');
	infBlockActive.classList.remove('active');
}

for(let i = 0; i < lincksHover_3.length; i++) {
	const linckHover = lincksHover_3[i];
	const infBlock = infBlocks_3[i];
	linckHover.addEventListener("click", function(e){
		activeLinck_3 = i;
		removeClassLinck_3();
		linckHover.classList.add('active');
		infBlock.classList.add('active');
	});
}

function removeClassLinck_3() {
	const linckActive = document.querySelector('.tab_item.tab-3.active');
	const infBlockActive = document.querySelector('.tab_inf__wrap.tab-3.active');
	linckActive.classList.remove('active');
	infBlockActive.classList.remove('active');
}

document.querySelector('.content').onmousemove = function(e){
	// setTimeout(function() {
		console.log('hdf');
		if (!e.target.closest('.tab_item')) {
			removeClassImg_1();
			imgesHover_1[activeLinck_1].classList.add('active_move');
			infBlocks_1[activeLinck_1].classList.add('active_move');
			
		}
		if (!e.target.closest('.tab_item')) {
			removeClassImg_2();
			imgesHover_2[activeLinck_2].classList.add('active_move');
			infBlocks_2[activeLinck_2].classList.add('active_move');
		}
		if (!e.target.closest('.tab_item')) {
			removeClassImg_3();
			imgesHover_3[activeLinck_3].classList.add('active_move');
			infBlocks_3[activeLinck_3].classList.add('active_move');
		}
	// }, 2000);
	
}

// document.querySelector('.content').onmousemove = function(e){

// }

for(let i = 0; i < lincksHover_1.length; i++) {
	const imgHover = lincksHover_1[i];
	const img = imgesHover_1[i];
	const infBlock = infBlocks_1[i];
	imgHover.addEventListener("mousemove", function(e){
		// if (infBlock.classList.contais('active')){
			removeClassImg_1();
			img.classList.add('active_move');
			infBlock.classList.add('active_move');
		// }
		
	});
}

function removeClassImg_1() {
	const infBlockActive = document.querySelector('.tab_inf__wrap.tab-1.active_move');
	const activeImg = document.querySelector('.wrap_img.tab-1.active_move');
	activeImg.classList.remove('active_move');
	infBlockActive.classList.remove('active_move');
}

for(let i = 0; i < lincksHover_2.length; i++) {
	const imgHover = lincksHover_2[i];
	const img = imgesHover_2[i];
	const infBlock = infBlocks_2[i];
	imgHover.addEventListener("mousemove", function(e){
		removeClassImg_2();
		
		img.classList.add('active_move');
		infBlock.classList.add('active_move');
		
	});
	// if ( === lincksHover) {}
}

function removeClassImg_2() {
	const infBlockActive = document.querySelector('.tab_inf__wrap.tab-2.active_move');
	const activeImg = document.querySelector('.wrap_img.tab-2.active_move');
	activeImg.classList.remove('active_move');
	infBlockActive.classList.remove('active_move');
}

for(let i = 0; i < lincksHover_3.length; i++) {
	const imgHover = lincksHover_3[i];
	const img = imgesHover_3[i];
	const infBlock = infBlocks_3[i];
	imgHover.addEventListener("mousemove", function(e){
		removeClassImg_3();
		
		img.classList.add('active_move');
		infBlock.classList.add('active_move');
		
	});
	// if ( === lincksHover) {}
}

function removeClassImg_3() {
	const infBlockActive = document.querySelector('.tab_inf__wrap.tab-3.active_move');
	const activeImg = document.querySelector('.wrap_img.tab-3.active_move');
	activeImg.classList.remove('active_move');
	infBlockActive.classList.remove('active_move');
}