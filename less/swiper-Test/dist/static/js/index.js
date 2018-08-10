'use strict';

$(function () {
  var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    grabCursor: true,
    //播放方式
    effect: 'coverflow',
    //自动播放
    autoplay: {
      disableOnInteraction: false
    },

    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination'
    },

    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },

    // 如果需要滚动条
    scrollbar: {
      el: '.swiper-scrollbar'
    },
    //动画
    on: {
      init: function init() {
        swiperAnimateCache(this); //隐藏动画元素 
        swiperAnimate(this); //初始化完成开始动画
      },
      slideChangeTransitionEnd: function slideChangeTransitionEnd() {
        swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
      }
    }
  });

  //Swiper3.x、Swiper2.x
  var mySwiper = new Swiper('.swiper-container', {
    onInit: function onInit(swiper) {
      //Swiper2.x的初始化是onFirstInit
      swiperAnimateCache(swiper); //隐藏动画元素 
      swiperAnimate(swiper); //初始化完成开始动画
    },
    onSlideChangeEnd: function onSlideChangeEnd(swiper) {
      swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
    }
  });
});