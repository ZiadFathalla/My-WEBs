

$(document).ready(function () {
   $('.carousel').carousel({
       interval:2000
   }) ;
   
   $('#Home_Active').click(function () {
       $('#ee').toggle(300); 
    });
    
    $('#H').click(function () {
       $('#ee').hide(); 
    });

});

$(window).load(function () {
   
     $('.overlay h1').fadeOut(1000,
        function(){
                 $('this').parent().fadeOut(2000,
        function () {
                 $('this').remove();
                
       });
   }); 
});



