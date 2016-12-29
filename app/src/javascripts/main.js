(function () {
    'use strict';

    // load dependencies
    var animationControl = require('./animation-control.js');
    var mixtool          = require('mix-h5');

    $(document).ready(function () {
        // 监测手机横竖屏
        mixtool.landscape(null, null, function () {
            HEI = $(window).height();
            zoom = Math.min($(document.body).width(), $(document.body).height()) / 320;
            if(swiper) {
                swiper.update();
            }
        });
        // init Swiper
        var mySwiper = new Swiper('.swiper-container', {
            noSwiping : true,
            mousewheelControl: false,
            effect: 'coverflow',    // slide, fade, coverflow or flip
            speed: 400,
            direction: 'vertical',
            coverflow: {
                rotate: 100,
                stretch: 0,
                depth: 300,
                modifier: 1,
                slideShadows: false     // do disable shadows for better performance
            },
            onInit: function (swiper) {
                animationControl.initAnimationItems();  // get items ready for animations
                animationControl.playAnimation(swiper); // play animations of the first slide
            },
            onTransitionStart: function (swiper) {     // on the last slide, hide .btn-swipe
                if (swiper.activeIndex === swiper.slides.length - 1) {
                    $upArrow.hide();
                } else {
                    $upArrow.show();
                }
            },
            onTransitionEnd: function (swiper) {       // play animations of the current slide
                animationControl.playAnimation(swiper);
            },
            onTouchStart: function (swiper, event) {    // mobile devices don't allow audios to play automatically, it has to be triggered by a user event(click / touch).
                if (!$btnMusic.hasClass('paused') && bgMusic.paused) {
                    bgMusic.play();
                }
            }
        });
        $('.link-1').click(function(){
            mySwiper.slideTo(1, 400, false);//切换到第2个slide，速度为400秒
        })
        $('.link-2').click(function(){
            mySwiper.slideTo(2, 400, false);//切换到第3个slide，速度为1秒
        })
        $('.link-3').click(function() {
            $('.shadow-cover').show();
        })
        $('.close').click(function() {
            $('.shadow-cover').hide();
        })
        var arr = [
        {
            link:"https://weidian.com/item.html?itemID=1914765413",
            name:"山崎1923",
            types:"单一麦芽威士忌",
            price:"￥ 498 RMB"
        },
        {
            link:"https://weidian.com/item.html?itemID=1914766548",
            name:"山崎12年",
            types:"单一麦芽威士忌",
            price:"￥ 980 RMB"
        },
        {
            link:"https://weidian.com/item.html?itemID=1914768100",
            name:"白州12年",
            types:"单一麦芽威士忌",
            price:"￥ 580 RMB"
        },
        {
            link:"https://weidian.com/item.html?itemID=1913308061",
            name:"白州18年",
            types:"单一麦芽威士忌",
            price:"￥ 3580 RMB"
        },
        {
            link:"https://weidian.com/item.html?itemID=1913308963",
            name:"响12年",
            typs:"调和型威士忌",
            price:"￥ 658 RMB"
        },
        {
            link:"https://weidian.com/item.html?itemID=1914769633",
            name:"响17年",
            types:"调和型威士忌",
            price:"￥ 1380 RMB"
        },
        {
            link:"https://weidian.com/item.html?itemID=1913135218",
            name:"老牌",
            types:"威士忌",
            price:"￥ 188 RMB"
        },
        {
            link:"https://weidian.com/item.html?itemID=1913134522",
            name:"洛雅",
            types:"调和型威士忌",
            price:"￥ 258 RMB"
        }]
        var swiper = new Swiper('.swiper-container-horizontal', {
            noSwiping : false,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            spaceBetween: 30,
            loop: true
        });
        $('.arrow-local-2').click(function() {
            var a = swiper.realIndex;
            $('.wine-name').html(arr[a].name);
            $('.wine-types').html(arr[a].types);
            $('.wine-price').html(arr[a].price);
            $('.wine-price').html(arr[a].price);
            $('.wine-link').attr("href", arr[a].link);
            if ( a == 2 || a == 3) {
                $('#slide-2').css({
                    "background":"url(images/green-bg.jpg",
                    "background-repeat":"no-repeat",
                    "background-position":"0px -50px",
                    "background-size": "100%"
                });
            }
            else {
                $('#slide-2').css({
                    "background":"url(images/zong-bg.jpg",
                    "background-repeat":"no-repeat",
                    "background-position":"0px -50px",
                    "background-size": "100%"
                });
            }

        })
        $('.arrow-local').click(function() {
            var b = swiper.realIndex;
            $('.wine-name').html(arr[b].name);
            $('.wine-types').html(arr[b].types);
            $('.wine-price').html(arr[b].price);
            $('.wine-link').attr("href", arr[b].link);
             if ( b == 2 || b == 3) {
                $('#slide-2').css({
                    "background":"url(images/green-bg.jpg",
                    "background-repeat":"no-repeat",
                    "background-position":"0px -50px",
                    "background-size": "100%"
                });
            }
            else {
                $('#slide-2').css({
                    "background":"url(images/zong-bg.jpg",
                    "background-repeat":"no-repeat",
                    "background-position":"0px -50px",
                    "background-size": "100%"
                });
            }
        })
        new swiper('.swiper-container-horizontal-2', {
            noSwiping : false,
            spaceBetween: 30,
        });

    });
})();
