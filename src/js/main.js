window.onload = (() => {
 /* Para esconder la pantalla de inicio*/
  setTimeout(function hide() { $('#pagSplash').hide('fast');
  document.getElementById('pagApp').style.display = 'block'; }, 3000);
  
  function onSearch(){}
  
  initMap();

});// fin de window onload

