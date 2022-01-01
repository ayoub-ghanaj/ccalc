$(document).ready(function() {

    $('#BT0').click(function() {
        $('#BT0').addClass('active');
        $('#BT1').removeClass('active');
        $('#BT2').removeClass('active');
        $('#BT3').removeClass('active');
        $('#BT4').removeClass('active');
        $('#BT5').removeClass('active');
        $('#BT6').removeClass('active');
        $('button').show();
        $('.olcards').show();
    });
    $('#BT1').click(function() {
        $('#BT1').addClass('active');
        $('#BT0').removeClass('active');
        $('#BT2').removeClass('active');
        $('#BT3').removeClass('active');
        $('#BT4').removeClass('active');
        $('#BT5').removeClass('active');
        $('#BT6').removeClass('active');
        $('button').hide();
        $('.olcards').show();
    });
    $('#BT2').click(function() {
        $('#BT2').addClass('active');
        $('#BT1').removeClass('active');
        $('#BT0').removeClass('active');
        $('#BT3').removeClass('active');
        $('#BT4').removeClass('active');
        $('#BT5').removeClass('active');
        $('#BT6').removeClass('active');
        $('button').hide();
    });
    $('#BT3').click(function() {
        $('#BT3').addClass('active');
        $('#BT1').removeClass('active');
        $('#BT0').removeClass('active');
        $('#BT2').removeClass('active');
        $('#BT4').removeClass('active');
        $('#BT5').removeClass('active');
        $('#BT6').removeClass('active');
        $('button').hide();
    });
    $('#BT4').click(function() {
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
    $('#BT5').click(function() {
        $('#BT5').addClass('active');
        $('#BT1').removeClass('active');
        $('#BT0').removeClass('active');
        $('#BT3').removeClass('active');
        $('#BT4').removeClass('active');
        $('#BT2').removeClass('active');
        $('#BT6').removeClass('active');
        $('.olcards').hide();
    });
    $('#BT6').click(function() {
        $('#BT6').addClass('active');
        $('#BT1').removeClass('active');
        $('#BT0').removeClass('active');
        $('#BT3').removeClass('active');
        $('#BT4').removeClass('active');
        $('#BT5').removeClass('active');
        $('#BT2').removeClass('active');
    });
    $('#F3').hide();
    $('#BT5').click(function() {
        $('#F3').show();
    });
    $('#BT0').click(function() {
        $('#F3').hide();
    });
    $('#BT1').click(function() {
        $('#F3').hide();
    });
    $('#BT6').click(function() {
        $('#F3').hide();
    });


    /*

       $('.new_Btn').click(function() {
           $('#html_btn').click();
       });

      button image */


});

// Get DOM Elements
const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#mdf');
const modalBtn2 = document.querySelector('#mdf2');
const modalBtn3 = document.querySelector('#mdf3');
const closeBtn = document.querySelector('.close');

// Events
modalBtn.addEventListener('click', openModal);
modalBtn2.addEventListener('click', openModal);
modalBtn3.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
//window.addEventListener('click', outsideClick);

// Open
function openModal() {
    modal.style.display = 'block';
}

// Close
function closeModal() {
    modal.style.display = 'none';
}

// Close If Outside Click
//function outsideClick(e) {
// if (e.target == modal) {
////      modal.style.display = 'none';
//  }
//}
const arrows = document.querySelectorAll(".arrow");
const booklists = document.querySelectorAll(".book-list");

arrows.forEach((arrow, i) => {

    const itemNumber = booklists[i].querySelectorAll("img").length;
    let clickCounter = 0;
    arrow.addEventListener("click", () => {
        const ratio = Math.floor(window.innerWidth / 270);
        clickCounter++;
        if (itemNumber - (3 + clickCounter) + (4 - ratio) >= 0) {
            booklists[i].style.transform = `translateX(${booklists[i].computedStyleMap().get("transform")[0].x.value-300}px)`;
        } else {
            booklists[i].style.transform = "translateX(0)";
            clickCounter = 0;
        }
    });


    //console.log(booklists[i].querySelectorAll("img").length)
    //console.log(Math.floor(window.innerWidth/270));
});


//toggle