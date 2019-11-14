window.addEventListner("load", function(){
  fetch("https://api.themoviedb.org/3/genre/tv/list?api_key=a3f9467ae2c29b7ede89cca0ca14d893&language=en-US&page=1")
  .then(function(response) {
    return response.json();
  })
  .then(function(respuesta){
    var series = respuesta.generes;
    for(var i=0; i < series.length; i++){
      document.querySelector("select.opcionesGenero").innerHTML += "<option value" + series[i].id + ">" + series[i].name + "</option>"
      document.querySelector("select.incluir").innerHTML += "<option value=" + series[i].id + ">" + series[i].name + "<option>"
    }
  })

  var query = new URLSearchParams (location.search)

  var genero = queery.get('genero')
  if(genero != null){
    genero = '&with_genres' + genero
  }else{
    genero = ""
  }

  var excluir = query.get('excluir')
  if (excluir != null){
    excluir = '&without_genres' + excluir
  } else{
    excluir = ""
  }
  var orden = query.get('orden')

  if(orden!= null){
    orden = '&sort_bye' + orden
  } else{
    orden = ""
  }

  var year = query.get('year')
  if(year != null){
    year = "&first_air_date_year" + year
  }else {
    year = ""
  }

  fetch("https://api.themoviedb.org/3/discover/tv?api_key=a3f9467ae2c29b7ede89cca0ca14d893&language=en-US&page=1" + genero + excluir + orden + year)
  .then(function(response){
    return response.json();
  })
  .then(function(respuesta){
    console.log(respuesta);
    var series = respuesta.results;
    document.querySelector("h2.title").innerText = "Respuesta de la busqueda avanzada";
    for (var i = 0; i < series.length; i++) {
      if(series[i].poster_path != null) {
        document.querySelector("div#busqueda").innerHTML += "<div class='pelis'><img src='https://image.tmdb.org/t/p/w300" + series[i].poster_path +"'></div>";
      }
    }
  })
})
