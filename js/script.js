/*MANU*/

function hamburger(){
  document.getElementById('line1').classList.toggle('line_1');
  document.getElementById('line2').classList.toggle('line_2');
  document.getElementById('line3').classList.toggle('line_3');
  document.getElementById('nav').classList.toggle('in');
}
document.getElementById('hamburger').addEventListener('click' , function (){
  hamburger();
} );



$(function(){

/*スライド*/

const slides = $("#js-slide").find("img");
const slideLength = slides.length;

let now = 0;
let next = 1;

const fade = 3000;
const show = 6000;

slides.hide();
slides.eq(0).show();

const slidesshow = () => {

  slides.eq(now % slideLength).fadeOut(fade).removeClass("zoom");
  slides.eq(next % slideLength).fadeIn(fade).addClass("zoom");

  now++;
  next++;
};

setInterval(slidesshow, show);


  
  
/*topic */

$('#topic_1').click(function(){
    $('#show-tpic-1').fadeIn();
})

$('#show-tpic-1').click(function(){
    $('#show-tpic-1').fadeOut();
  })

  $('#topic_2').click(function(){
    $('#show-tpic-2').fadeIn();
})

$('#show-tpic-2').click(function(){
    $('#show-tpic-2').fadeOut();
  })

  $('#topic_3').click(function(){
    $('#show-tpic-3').fadeIn();
})

$('#show-tpic-3').click(function(){
    $('#show-tpic-3').fadeOut();
  })

  $('#topic_4').click(function(){
    $('#show-tpic-4').fadeIn();
})

$('#show-tpic-4').click(function(){
    $('#show-tpic-4').fadeOut();
  })
/*team --------*/
/*stuff */
$('#stuff').click(function(){
  $('#show-stuff').fadeIn();
})

$('#show-stuff').click(function(){
  $('#show-stuff').fadeOut();
})
/*FW */
$('#fw').click(function(){
  $('#show-fw').fadeIn();
})

$('#show-fw').click(function(){
  $('#show-fw').fadeOut();
})
/*MF*/
$('#mf').click(function(){
  $('#show-mf').fadeIn();
})

$('#show-mf').click(function(){
  $('#show-mf').fadeOut();
})
/*DF */
$('#df').click(function(){
  $('#show-df').fadeIn();
})

$('#show-df').click(function(){
  $('#show-df').fadeOut();
})

/*GK */
$('#gk').click(function(){
  $('#show-gk').fadeIn();
})

$('#show-gk').click(function(){
  $('#show-gk').fadeOut();
})
/*goods*/
$('.slider').slick({
  autoplay: true,
  infinite: true,
  speed: 200,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<div class="slick-prev"></div>',
  nextArrow: '<div class="slick-next"></div>',
  centerMode: true,
  variableWidth: true,
  dots: true,
});

$('#slider').click(function(){
  $('#slider').fadeOut();
})



});/*ready*/
