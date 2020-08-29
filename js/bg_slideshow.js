
// ====================================
//     FULL BACKGROUND SLIDE SHOW
// ====================================
//     VANILLA JS & GSAP
//     Example Call:
//     slideShow("intro-bg",10,1.3,0.5,0);
// ====================================


var $slides;
// var $slides = document.getElementsByClassName("intro-bg"); //slides
var currentSlide = 0; //keep track on the current slide
var stayTime; //time the slide stays
var slideTime; //fade in / fade out time
var alphaSet;

function slideShow(slideClass,sTime,tTime,alpha,current) {
    trace('slideShow INIT');
    $slides = document.getElementsByClassName(slideClass); //slides
    currentSlide = current; //keep track on the current slide
    stayTime = sTime; //time the slide stays
    slideTime = tTime; //fade in / fade out time
    alphaSet = alpha;

    TweenLite.set($slides, {autoAlpha:0, onComplete: function(){
            TweenLite.to($slides[currentSlide],(slideTime*2), {autoAlpha:alphaSet});	//show first image
            TweenLite.delayedCall(stayTime, nextSlide); //start the slideshow
        }});	//hide all images

}
function nextSlide() {
    TweenLite.to($slides[currentSlide], slideTime, {
        autoAlpha: 0,
        className: "-=bg-active"
    }); //fade out the old slide
    currentSlide = ++currentSlide % $slides.length; //find out which is the next slide
    TweenLite.to($slides[currentSlide], slideTime, {
        autoAlpha: alphaSet,
        className: "+=bg-active"
    }); //fade in the next slide
    TweenLite.delayedCall(stayTime, nextSlide); //wait a couple of seconds before next slide
}

// ==========================================
//     END FULL BACKGROUND SLIDE SHOW
// ==========================================
