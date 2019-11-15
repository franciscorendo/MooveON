var queryString = location.search

queryString = new URLSearchParams (queryString)

var busqueda = queryString.get("busqueda")
document.querySelector("input.busqueda").value = busqueda;

if (busqueda != null) {
  fetch("https://api.themoviedb.org/3/discover/tv?api_key=a3f9467ae2c29b7ede89cca0ca14d893&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false")
  .then(function(respuesta){
    return respuesta.json();
})


  .then(function(datos){
    console.log(datos);
    //guardo array de Series
    var arrayDeSeries = datos.results
    var ul = document.querySelector('div.ul')
    var li = ""
    //parte fija img
   var urlIMG = "https://image.tmdb.org/t/p/original/"
   //recorro el array
for (var i=0; i < arrayDeSeries.length; i++){
  if (arrayDeSeries[i].poster_path != null){
    li = "<li>"
      li += "<a href='detalle.html?idPelicula="+arrayDeSeries[i].id+"'>"
      li += "<p>" + arrayDeSeries[i].title + "</p>"
      li += "<img src = '" + urlImg + arrayDeSeries[i].poster_path + "' style='width:300px;'>"
      li += "</a>"
      li += "</li>"
      ul.innerHTML += li
  }
  }
})
//Condicional: Si no funciona pag...
.catch(function(error){
  console.log("the error was:" + error)
})

}
})
