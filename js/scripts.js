$(document).ready(function(){
      $('.sidenav').sidenav({
            edge: 'right',
            draggable: 'true'
      });

      $('.carousel.carousel-slider').carousel({
            fullWidth: true,
            indicators: true,
            padding: 200
          }, setTimeout(autoplay, 4500));
         
          function autoplay() {
            $('.carousel').carousel('next');
            setTimeout(autoplay, 4500);
          }
      
      /*=SLIDER=*/
      $('.slider').slider();
      /*=Nav=
      $(".button-collapse").sideNav();*/
 





 
});