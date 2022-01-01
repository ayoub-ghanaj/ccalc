$(document).ready(function(){

    $('#menu').click(function(){
  
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
  
    });
  
    $(window).on('load scroll',function(){
  
      $('#menu').removeClass('fa-times');
      $('.navbar').removeClass('nav-toggle');
  
      if($(window).scrollTop() > 0){
        $('#scroll-top').show();
      }else{
        $('#scroll-top').hide();
      }
  
    });
  
    // smooth scrolling 
  
    $('a[href*="#"]').on('click',function(e){
  
      e.preventDefault();
  
      $('html, body').animate({
  
        scrollTop : $($(this).attr('href')).offset().top,
  
      },
        500,
        'linear'
      );
  
    });
  
  });

  // begin

  //variables
let flip = document.getElementById('flip1');
let letter = document.getElementById('letter1');
let letter1 = document.getElementById('envelope1');



//EventListner
letter1.addEventListener('onclick', open);
letter1.addEventListener('onmouseout', close);

//open
function open(){
	flip.classList.add('open');
	flip.classList.remove('close');
	setTimeout(function(){
	letter.classList.add('letterOpen');
	letter.classList.remove('letterClose');
	letter.style.zIndex = '99';
	},400);
}

//close
function close(){
	letter.classList.remove('letterOpen');
	letter.classList.add('letterClose');
	setTimeout(function(){
		flip.classList.remove('open');
		flip.classList.add('close');
		letter.style.zIndex = '98';
	},300);
}







