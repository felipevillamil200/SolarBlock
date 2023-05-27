/*
Esta es una función que habilita
el boton leer mas y leer menos
*/
$(document).ready(function() {
  $('.btns').click(function(e) {
    e.preventDefault();
    $('#hidden-content').slideToggle();

    if ($(this).text() === 'Leer más') {
      $(this).text('Leer menos');
    } else {
      $(this).text('Leer más');
    }
  });
});
