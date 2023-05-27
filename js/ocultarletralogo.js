/*
Esta es una función que no oculta
la letra del titulo cuando 
esta el mouse cerca del logo
*/
function showTitle() {
  var title = document.querySelector('.title');
  title.style.opacity = '1';
}

function hideTitle() {
  var title = document.querySelector('.title');
  title.style.opacity = '0';
}
