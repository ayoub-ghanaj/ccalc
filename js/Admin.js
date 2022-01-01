  /* Sidebar Toggle Codes*/
  
  var sidebarOpen = false;
  var sidebar = document.getElementById("sidebar");
  var sidebarCloseIcon = document.getElementById("sidebarIcon");
  
  function toggleSidebar() {
    if (!sidebarOpen) {
      sidebar.classList.add("sidebar_responsive");
      sidebarOpen = true;
    }
  }
  
  function closeSidebar() {
    if (sidebarOpen) {
      sidebar.classList.remove("sidebar_responsive");
      sidebarOpen = false;
    }
  }

$(document).ready(function(){
//navigation bar
$('#F3').hide();
  $('#b1').click(function(){
    $('#b3').removeClass('active_link');
    $('#b1').addClass('active_link');
    $('#b2').removeClass('active_link');
    $('#F2').hide();
    $('#F3').hide();
    $('#F1').show();
    $('#F4').hide();
    $('#bt1').hide();
  });
  $('#b2').click(function(){
    $('#b3').removeClass('active_link');
    $('#b2').addClass('active_link');
    $('#b1').removeClass('active_link');
    $('#F1').hide();
    $('#F2').show();
    $('#F3').hide();
    $('#bt2').hide();
    $('#F4').hide();
  });
  $('#b3').click(function(){
    $('#b2').removeClass('active_link');
    $('#b3').addClass('active_link');
    $('#b1').removeClass('active_link');
    $('#F1').show();
    $('#F2').show();
    $('#F3').hide();
    $('#bt2').show();
    $('#bt1').show();
    $('#F4').hide();
  });

//Side bar
  $('#sd1').click(function(){
    $('#sd1').addClass('active_menu_link');
    $('#sd2').removeClass('active_menu_link');
    $('#sd3').removeClass('active_menu_link');
    $('#sd4').removeClass('active_menu_link');
    $('#sd5').removeClass('active_menu_link');
    $('#sd6').removeClass('active_menu_link');
    $('#sd7').removeClass('active_menu_link');
    $('#sd8').removeClass('active_menu_link');

    $('#b2').removeClass('active_link');
    $('#b3').addClass('active_link');
    $('#b1').removeClass('active_link');
    $('#F1').show();
    $('#F2').show();
    $('#bt2').show();
    $('#bt1').show();
    $('#F3').hide();
    $('#F4').hide();
  });
  $('#sd2').click(function(){
    $('#sd2').addClass('active_menu_link');
    $('#sd1').removeClass('active_menu_link');
    $('#sd3').removeClass('active_menu_link');
    $('#sd4').removeClass('active_menu_link');
    $('#sd5').removeClass('active_menu_link');
    $('#sd6').removeClass('active_menu_link');
    $('#sd7').removeClass('active_menu_link');
    $('#sd8').removeClass('active_menu_link');

    $('#b2').removeClass('active_link');
    $('#b3').addClass('active_link');
    $('#b1').removeClass('active_link');
    $('#F1').show();
    $('#F2').show();
    $('#bt2').show();
    $('#bt1').show();
    $('#F4').hide();
    $('#F3').hide();
  });
  $('#sd3').click(function(){
    $('#sd3').addClass('active_menu_link');
    $('#sd1').removeClass('active_menu_link');
    $('#sd2').removeClass('active_menu_link');
    $('#sd4').removeClass('active_menu_link');
    $('#sd5').removeClass('active_menu_link');
    $('#sd6').removeClass('active_menu_link');
    $('#sd7').removeClass('active_menu_link');
    $('#sd8').removeClass('active_menu_link');
    $('#b2').removeClass('active_link');
    $('#b3').addClass('active_link');
    $('#b1').removeClass('active_link');
    $('#F1').hide();
    $('#F3').hide();
    $('#F2').hide();
    $('#F4').show();
  });
  $('#sd4').click(function(){
    $('#sd4').addClass('active_menu_link');
    $('#sd1').removeClass('active_menu_link');
    $('#sd3').removeClass('active_menu_link');
    $('#sd2').removeClass('active_menu_link');
    $('#sd5').removeClass('active_menu_link');
    $('#sd6').removeClass('active_menu_link');
    $('#sd7').removeClass('active_menu_link');
    $('#sd8').removeClass('active_menu_link');
    $('#F4').hide();
    $('#F1').hide();
    $('#F3').hide();
    $('#F2').hide();
  });
  $('#sd5').click(function(){
    $('#sd5').addClass('active_menu_link');
    $('#sd1').removeClass('active_menu_link');
    $('#sd3').removeClass('active_menu_link');
    $('#sd4').removeClass('active_menu_link');
    $('#sd2').removeClass('active_menu_link');
    $('#sd6').removeClass('active_menu_link');
    $('#sd7').removeClass('active_menu_link');
    $('#sd8').removeClass('active_menu_link');

    $('#b2').removeClass('active_link');
    $('#b3').addClass('active_link');
    $('#b1').removeClass('active_link');
    $('#F1').hide();
    $('#F2').hide();
    $('#F4').hide();
    $('#bt2').show();
    $('#bt1').show();

    $('#F3').show();
  });
  $('#sd7').click(function(){
    $('#sd7').addClass('active_menu_link');
    $('#sd1').removeClass('active_menu_link');
    $('#sd3').removeClass('active_menu_link');
    $('#sd4').removeClass('active_menu_link');
    $('#sd5').removeClass('active_menu_link');
    $('#sd6').removeClass('active_menu_link');
    $('#sd2').removeClass('active_menu_link');
    $('#sd8').removeClass('active_menu_link');
  });
  $('#sd8').click(function(){
    $('#sd8').addClass('active_menu_link');
    $('#sd1').removeClass('active_menu_link');
    $('#sd3').removeClass('active_menu_link');
    $('#sd4').removeClass('active_menu_link');
    $('#sd5').removeClass('active_menu_link');
    $('#sd6').removeClass('active_menu_link');
    $('#sd7').removeClass('active_menu_link');
    $('#sd2').removeClass('active_menu_link');
  });
});

/*function triggerClick(){
  document.querySelector('#profileimage').click();
}
function displayImage(e){
  if(e.files[0]){
    var reader = new FileReader();

    reader.onload = function(e){
      document.querySelector('#profiledisplay').setAttribute('src', e.target.result);
      document.querySelector('#profiledisplay2').setAttribute('src', e.target.result);
      $('#profiledisplay').css('background-image', 'url('+e.target.result +')');
    }
    reader.readAsDataURL(e.files[0]);
  }
}
$("#profileimage").change(function() 
    {
      displayImage(this);
    }
);
*/

