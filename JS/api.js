var apiURL = 'https://api.themoviedb.org/3/discover/movie?api_key=3565f170ed601e1f31423bea172d2860&language=es-AR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';

var ulPelis = document.querySelector('#peliculas');

fetch(apiURL)
.then (function (respuesta) {
  return respuesta.json();
})
.then(function(datos){
  //console.log(datos.results);
  var arrayPeliculas = datos.results;
  for (var unaPeli of arrayPeliculas){
  ulPelis.innerHTML +=
  }

})
.catch(function(errores){
  console.log(errores);
});
