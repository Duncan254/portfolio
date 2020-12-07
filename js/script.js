



const backgruond = document.querySelector('.backgruond');

const animation2 = document.querySelector('.animation2');
const animation3 = document.querySelector('.animation3');
const animation4 = document.querySelector('.animation4');
const animation5 = document.querySelector('.animation5');
const animation6 = document.querySelector('.animation6');
const animation7 = document.querySelector('.animation7');
const animation8 = document.querySelector('.animation8');
const content_box = document.querySelector('.content_box');
const mabox = document.querySelector('.mabox');
const port = document.querySelector('.port');
const ann2 = document.querySelector('.ann2');
const nav_link = document.querySelector('.nav_link');
const hello = document.querySelector('.hello');
const hello2 = document.querySelector('.hello2');
const hello3 = document.querySelector('.hello3');
const image = document.querySelector('.image');
const btn = document.querySelector('.btn');
const html = document.querySelector('.html');
const css = document.querySelector('.css');
const java = document.querySelector('.java');
const php = document.querySelector('.php');
const about_me1 =document.querySelector('about_me1');
var test ="yes";
 


const tl =new TimelineMax();

tl.fromTo(animation2, 1.5, {x:"-100%"}, {x:"10%", ease: Power2.easeInout})

tl.from(animation3, 1.5, {y:"-100%"}, "-=1.5") 
tl.from(animation4, 1.5, {x:"-100%"}, "-=1.5")
tl.from(animation5, 1.5, {x:"400%"}, "-=1.5")
tl.from(animation6, 1.5, {y:"-100%"}, "-=1.5")
tl.from(animation7, 1.5, {y:"100%"}, "-=1.5")
tl.from(animation8, 1.5, {x:"400%"}, "-=1.5")
tl.from(content_box, 4,{opacity:"0"}, {opacity:"100"},)
tl.from(hello, 1.9, {x:"-160%"}, "-=1.5")
tl.from(nav_link, 9,{opacity:"0"}, {opacity:"100"})
tl.from(hello2, 0.7,{y:"-920%"},"=-5")
tl.from(hello3, 0.7,{y:"920%"}, "=-5")
tl.from(mabox, 4,{opacity:"0"}, {opacity:"1"},)
tl.fromTo(port, 1.5,{x:"1%"},{x:"40%"}, "-=6")
tl.from(image, 1.9, {opacity:"0"},{opacity:"100"}, "-=1.5");

function smoothScroll(target,duration){

var target =document.querySelector(target);
var targetPosition = target.getBoundingClientRect().top;
var startPosition = window.pageYOffset;
var distance =targetPosition- startPosition;
var starttime= null;


function animation(currentTime){
	if(starttime===null) starttime = currentTime;
	var timeElapsed = currentTime -starttime;
	var run =easeInOutQuad(timeElapsed, startPosition,distance,duration);
	window.scrollTo(0,run);
	if(timeElapsed<duration) requestAnimationFrame(animation)
}
function easeInOutQuad(t, b, c, d) {
    t /= d/2;
    if (t < 1) return c/2*t*t + b;
    t--;
    return -c/2 * (t*(t-2) - 1) + b;
}

requestAnimationFrame(animation);

}



var about_me = document.querySelector('.about_me');

about_me.addEventListener('click',function(){
 smoothScroll('.about_me1', 1500);
});

var specilizing = document.querySelector('.specilizing');

specilizing.addEventListener('click',function(){
 smoothScroll('.specilizing1', 1500);
});

var jobs = document.querySelector('.jobs');

jobs.addEventListener('click',function(){
 smoothScroll('.section-title', 1500);
});


function scrollAppear(){
    const tl =new TimelineMax();
    var abt = document.querySelector('.abt');
    var ss = document.querySelector('.ss');


    var abtPosition = abt. getBoundingClientRect().top;
    var ssPosition = ss. getBoundingClientRect().top;
    var screenPosition =window.innerHeight /1.8;
    
    

 


    if(abtPosition < screenPosition){


    	abt.classList.add('abt2'),
        tl.fromTo(html,3,{width:'0'},{width:'90%',ease: Power2.easeInout},)
tl.fromTo(css,3,{width:'0'},{width:'92%'},"-=3")
tl.fromTo(java,3,{width:'0'},{width:'58%'},"-=3")
tl.fromTo(php,3,{width:'0'},{width:'43%'},"-=3"); 
    }

    if(ssPosition < screenPosition){
    	ss.classList.add('ss2');
    }

      



}


var i = 0;
var txt = 'get ready to be amazed'; /* The text */
var speed = 90; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < 38) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}







window.addEventListener('scroll', scrollAppear);

