// jQuery-ն JavaScript-ի գրադարան է, որը նախատեսված է
//  DOM-ով (Document Object Model) հեշտ աշխատելու, 
//  իրադարձություններ կառավարելու, անիմացիաներ ստեղծելու
//   և AJAX հարցումներ կատարելու համար:


//1. jQuery-ն շատ նման է CSS ընտրիչների, օրինակ:

    $(document).ready(function() {
        $("#toggleBtn").click(function() {
            $(".box").toggle(500); // toggle-ով փոխում ենք տեսանելիությունը 0.5 վայրկյանում
        });
    });



$(document).ready(function() {
    $('#div1').click(function() {
      $('#div2').slideDown('slow');
    });
    $('#div1').click(function() {
    $('#div2').slideUp('slow');
      });
    $('#div1').click(function() {
     $('#div2').slideToggle('slow');
      });
  });
  
$(document).ready(function () {
    $('#div3').click(function () {
      $('#div4').slideToggle();
      $('#demo').text();
    });
     });


$(document).ready(function(){
  $("button").click(function(){
    $("div").animate({
      left: '250px',
      height: '+=150px',
      width: '+=150px'
    });
  });
});
