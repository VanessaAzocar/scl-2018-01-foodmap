window.onload = (() => {
  initMap();
});// fin de window onload

const inputText = document.querySelector('input');
const containerTitle = document.getElementById('title');
const containerYear = document.getElementById('year');
const containerRuntime = document.getElementById('runtime');
const containerImage = document.getElementById('img');

// el evento para que reconozca la tecla que presiono es KEYPRESS
//evento corresponde a que al momento de apretar
// event.wich o event.keycode saca el codigo de mi tecla que se a presionado

inputText.addEventListener('keypress', (event) => {
  let key = event.which || event.keyCode;
  if (key === 13){ //código 13 es enter
    let movie = inputText.value;
    //una vez que saque el valor y lo guarde en la variable movie lo limpio pasandole el input de string vacio
  console.log(movie)
    inputText.value = '';
    
    fetch(`curl -X GET --header "Accept: application/json" --header "user-key: 11860edfffe46ba629c90cfa7c08a509" "https://developers.zomato.com/api/v2.1/cuisines"`)
    .then(response => response.json())
    //.jspn dice que me devolvera una promesa como que me devolvera la informacion que necesito
    //con la respuesta hare lo siguiente
    .then(data => {
      console.log(data);
      renderInfo(data); //va a recibir una respuesta (se puede llamar como sea no necesariamente lo de arriba)
    })
  }
})
//se pone if ssi es false que tire un alert de que no esta esa pelcula, sino
//ELSe lo que viene

const renderInfo = (data) => {
  containerTitle.innerHTML = data.Title;
  containerYear.innerHTML = data.Year;
  containerRuntime.innerHTML = data.Runtime;
  containerImage.innerHTML = `<img src="${data.Poster}">`;
}