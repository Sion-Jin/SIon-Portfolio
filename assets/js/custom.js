$(function(){
    
    ScrollTrigger.matchMedia({
    // large
    "(min-width: 1024px)": function() {

        //헤더//updates_list slide down
        $('#updates_list').click(function() {
            $('.list_item').css('max-height','102px');
            $('.bg_area').addClass('on');
            $('.button_area .close_btn').css({"opacity":"1","z-index":"30"});
            $('.memoji_link').addClass('on');
        });
        $('#updates_close').click(function() {
            $('.list_item').css('max-height','8px');
            $('.bg_area').removeClass('on');
            $('.button_area .close_btn').css({"opacity":"0","z-index":"25"});
            $('.memoji_link').removeClass('on');
        });



        // navMotion.play()
        // navMotion.reverse() 이 두개를 활용해서 슬라이드 레프트 제어

        //헤더//nav slide left
        navMotion = gsap.timeline({
            paused:true,//실행이 안된 상태
            onComplete:function(){
                $('.group_nav').addClass('on');
            }
        })
        navMotion
        .addLabel('a')
        .to(".group_nav .second", 1, {x:-80, width:80, height:37, ease: Back.easeInOut},'a')
        .to(".group_nav .third", 1, {x:-161, width:80, height:37, ease: Back.easeInOut},'a')
        .to(".group_nav .second span, .group_nav .third span",{opacity:0},'a-=0.2');

        $('.nav_link.first').mouseover(function(){//호버시 navMotion.reverse()
            if($('.group_nav').hasClass('on')) {
                navMotion.reverse()
            }
        });

        //200px 이상 스크롤 시 navMotion.play();
        $(window).scroll(function(){
            curr = $(this).scrollTop();

            if(curr > 80){
                navMotion.play();
            }else{
                navMotion.reverse()
            }
        });

/*
        //헤더//navUpdates sldie up
        updatesMotion = gsap.timeline({
            paused:true,
            onComplete:function(){
                $('.group_updates').addClass('on');
            }
        })
        updatesMotion
        .addLabel('a')
        .to(".group_updates .list_area", 1, {y: -145, ease: Back.easeInOut},'a')
        .to(".group_updates .more_btn", 0.3, {y: -30, opacity:1},'-=0.35');

        $('.group_updates .more_btn').click(function(e){
            if($('.group_updates').hasClass('on')){
                e.preventDefault();
                updatesMotion.reverse()
                $('.group_updates').removeClass('on')
            }
        });

        $(window).scroll(function(){
            curr = $(this).scrollTop();

            if(curr > 80){
                updatesMotion.play();
            }else{
                updatesMotion.reverse()
            }
        });
*/

        //포트폴리오//scale
        thumbEl = document.querySelectorAll('footer'); // 변경 '.container .area_inner'
        thumbEl.forEach(l => {

            gsap.set(l,{scale:1.1})

            const pfAni = gsap.timeline({scrollTrigger: {
                trigger: l,
                start:"40 60%",
                end:"30% 60%",
                scrub: true,
               // markers: true,
                }});

            pfAni
            .to(l, {scale:1})
        });

    },
    // medium
    "(max-width: 1023px)": function() {

        //헤더 마우스 호버
        navMotion = gsap.timeline({
            paused:false,
            onComplete:function(){
                $('.group_nav').addClass('on');
            }
        })
        navMotion
        .addLabel('a')
        .to(".group_nav .second", 1, {y:80, width:100, height:37, opacity:0, ease: Back.easeInOut},'a')
        .to(".group_nav .third", 1, {y:160, width:180, height:37, opacity:0, ease: Back.easeInOut},'a')
        .to(".group_nav .second span, .group_nav .third span",{opacity:0},'a-=0.2');
      
       /* navMotion
        .addLabel('a')
        .to(".group_nav .second", 1, {x:-80, width:100, height:37, ease: Back.easeInOut},'a')
        .to(".group_nav .third", 1, {x:-161, width:180, height:37, ease: Back.easeInOut},'a')
        .to(".group_nav .second span, .group_nav .third span",{opacity:0},'a-=0.2');
    */
        $('.nav_link').mouseover(function(){
            navMotion.reverse()
        });
        $('.nav_link').mouseout(function(){
            navMotion.play()
        });


        //헤더//updates_list slide down
        /*
        $('.group_updates .more_btn').click(function(e) {
            e.preventDefault();
            $('.group_updates .bg_area').addClass('on');
            $('.group_updates').addClass('on');
            $('.group_updates .button_area').addClass('on');
            $('.group_updates .close_btn').addClass('on');
            $('.group_updates .more_btn').addClass('on2');
            $('.group_updates .bg_area').addClass('on2');
        });
        $('.group_updates .close_btn').click(function(e) {
            e.preventDefault();
            $('.group_updates .bg_area').removeClass('on');
            $('.group_updates').removeClass('on');
            $('.group_updates .button_area').removeClass('on');
            $('.group_updates .close_btn').removeClass('on');
            $('.group_updates .more_btn').removeClass('on2');
            setTimeout(function(){
                $('.group_updates .bg_area').removeClass('on2');
            },600);
                
        });*/

    },
    // all
    "all": function() {
      
        gsap.registerPlugin(ScrollTrigger);

        //로드//ani
        const loadAni = gsap.timeline();
        loadAni
        .to(".load_page .text_wrap", {duration:0.6, opacity:1, delay:0.7})
        .to(".load_page .text_wrap", {duration:0.6, opacity:0, delay:0.6})
        .addLabel('b')
        .to(".load_page", {duration:0.5, display:"none"},'b')
        .to(".wrapper", {height:"initial", overflow:"visible"},'b+0.3')
        .addLabel('c')
        .to(".wrapper", {duration:1, opacity:1},'c-=0.2')
        .to("footer", {duration:0.6, scale:1},'c-=0.2');
        

        //메인//intro Hover ani
        $(document).ready(function(){
            $('.textWrap a').mouseover(function(){
                $(this).addClass('on');
                $(this).siblings().css('opacity','.4');
            });
            $('.textWrap a').mouseout(function(){
                $(this).removeClass('on');
                $(this).siblings().css('opacity','1');
            });
        });
        
        
        //메인//intro ani
        gsap.to(".main_visual", {
            scale:0.85,
            scrollTrigger: {
            trigger:".main_visual",
            start:"0 top",
            end:"100% top",
            scrub:1,
            // markers: true,
        }});
        
        /*
        //프로젝트//intro Hover ani
        $(document).ready(function(){
          $('.portfolio_inner').mouseover(function(){
              $(this).addClass('on');
              $(this).siblings().css('opacity','.8');
          });
          $('.portfolio_inner').mouseout(function(){
              $(this).removeClass('on');
              $(this).siblings().css('opacity','1');
          });
      });
       */
        //프로젝트//intro Hover ani
      gsap.to(".ProjectWrap", {
          scale:0.97,
          scrollTrigger: {
          trigger:".ProjectItem",
          start:"0 top",
          end:"100% top",
          scrub:1,
          // markers: true,
      }});
     
        
        //포트폴리오//opacity
        imgEl = document.querySelectorAll('.thumb_area img');
        imgEl.forEach(l => {
        
            gsap.set(l,{opacity:0})
        
            const imgAni = gsap.timeline({scrollTrigger: {
                trigger: l,
                start:"0 60%",
                end:"35% 90%",
                scrub: true,
                //markers: true,
                }});
        
            imgAni
            .to(l, {opacity:1})
        });
        
        
        //전체//hover ani
        $("body").mouseover(function(){
            $(this).siblings(".pf_bg").css("opacity","1");
            $(".container").css("color","#0a0a0a"); //변경 container
            $(".header").css("color","#fff");
            $(".scroll_bg").addClass('on') 
        });
        $("body").mouseout(function(){
            $(this).siblings(".pf_bg").css("opacity","0");
            $(".pf_area").css("color","#0a0a0a"); //변경container
            $(".header").css("color","#fff");
            $(".scroll_bg").removeClass('on')
        });

        lastWidth = window.innerWidth;
        $(window).resize(function(){
        if(window.innerWidth != lastWidth){
                location.reload();
                scrollTrigger.refresh();
        }
        lastWidth = window.innerWidth;
        });

        $(window).scroll(function(){
            ScrollTrigger.refresh(true)
        })

    }
  });

});
// function reloadDivArea() {
//     $('#divReloadLayer').load(location.href+' #divReloadLayer');
// }
/*
const buttonBG = document.getElementById("btn-bg")
const buttonText = document.getElementById("btn-text")

const handleAnimation = (element, text) => {
  let currentX;
  let currentY;
  let initialX;
  let initialY;
  let xOffset = 0;
  let yOffset = 0;

  element.addEventListener("mouseover", function(e) {
  initialX = e.clientX - xOffset;
  initialY = e.clientY - yOffset;
  })

  element.addEventListener("mousemove", function(e) {
  currentX = e.clientX - initialX;
  currentY = e.clientY - initialY;

  element.style.transform = `translate3d(${currentX / 12}px,${currentY / 10}px,0)`
  text.style.transform = `translate(-50%, -50%) translate3d(${currentX / 20}px, ${currentY / 15}px,0)` 
    element.style.transition = "transform .1s"
    text.style.transition = "transform .1s"
})
element.addEventListener("mouseleave", function(){
  currentX = 0;
  currentY = 0;

  element.style.transform = `translate3d(${currentX}px, $(currentY}px,0)`
  text.style.transform = `translate(-50%, -50%) translate3d(${currentX}px, ${currentY}px, 0)`
  element.style.transition = "transform .5s"
  text.style.transition = "transform .5s"
})

  }
handleAnimation(buttonBG, buttonTest);

*/