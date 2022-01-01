$(document).ready(function(){

    $('#BT0').click(function(){
        $('#BT0').addClass('active');
       $('#BT1').removeClass('active');
       $('#BT2').removeClass('active');
       $('#BT3').removeClass('active');
       $('#BT4').removeClass('active');
       $('#BT5').removeClass('active');
       $('#BT6').removeClass('active');
       $('#T1').show();
       $('#T2').show();
    });
    $('#BT1').click(function(){
        $('#BT1').addClass('active');
       $('#BT0').removeClass('active');
       $('#BT2').removeClass('active');
       $('#BT3').removeClass('active');
       $('#BT4').removeClass('active');
       $('#BT5').removeClass('active');
       $('#BT6').removeClass('active');
       $('#T2').hide();
       $('#T1').show();
    });
    $('#BT2').click(function(){
        $('#BT2').addClass('active');
       $('#BT1').removeClass('active');
       $('#BT0').removeClass('active');
       $('#BT3').removeClass('active');
       $('#BT4').removeClass('active');
       $('#BT5').removeClass('active');
       $('#BT6').removeClass('active');
       $('#T2').hide();
       $('#T1').hide();
    });
    $('#BT3').click(function(){
        $('#BT3').addClass('active');
       $('#BT1').removeClass('active');
       $('#BT0').removeClass('active');
       $('#BT2').removeClass('active');
       $('#BT4').removeClass('active');
       $('#BT5').removeClass('active');
       $('#BT6').removeClass('active');
    });
    $('#BT4').click(function(){
        $('#BT4').addClass('active');
       $('#BT1').removeClass('active');
       $('#BT0').removeClass('active');
       $('#BT3').removeClass('active');
       $('#BT2').removeClass('active');
       $('#BT5').removeClass('active');
       $('#BT6').removeClass('active');
       $('button').hide();
       $('button').hide();
    });
    $('#BT5').click(function(){
        $('#BT5').addClass('active');
       $('#BT1').removeClass('active');
       $('#BT0').removeClass('active');
       $('#BT3').removeClass('active');
       $('#BT4').removeClass('active');
       $('#BT2').removeClass('active');
       $('#BT6').removeClass('active');
       $('#T1').hide();
       $('#T2').show();
    });
    $('#BT6').click(function(){
        $('#BT6').addClass('active');
       $('#BT1').removeClass('active');
       $('#BT0').removeClass('active');
       $('#BT3').removeClass('active');
       $('#BT4').removeClass('active');
       $('#BT5').removeClass('active');
       $('#BT2').removeClass('active');
    });
    /*$('#F3').hide();
    $('#BT5').click(function(){
        $('#F3').show();
    });
    $('#BT0').click(function(){
        $('#F3').hide();
    });
    $('#BT1').click(function(){
        $('#F3').hide();
    });
    $('#BT6').click(function(){
        $('#F3').hide();
    });*/
   
    


    $('.new_Btn').click(function() {
        $('#html_btn').click();
    });

    /*button image */

  
});

// Get DOM Elements
const modal = document.querySelector('#my-modal');

const modalBtn1 = document.querySelector('#mdfg');
const modalBtn2 = document.querySelector('#mdfc');
const closeBtn = document.querySelector('.close');


// Events
modalBtn1.addEventListener('click', openModalo);
modalBtn2.addEventListener('click', openModalo);

closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Open
function openModalo() {
  modal.style.display =  'block';
}

// Close
function closeModal() {
  modal.style.display = 'none';
}


// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}

const addbtn = document.querySelector('#btnadd');
const add = document.querySelector('.txd');
const add2 = document.querySelector('.txd2');
const add3 = document.querySelector('.txd3');
const add4 = document.querySelector('.txd4');
const add5 = document.querySelector('.txd5');


addbtn.addEventListener('click', opnadd);
function opnadd(){
  add.style.display = 'table-cell';
  add2.style.display = 'table-cell';
  add3.style.display = 'table-cell';
  add4.style.display = 'table-cell';
  add5.style.display = 'table-cell';
}