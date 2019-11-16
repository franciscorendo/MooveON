window.onload = function(){


    fetch("https://api.themoviedb.org/3/tv/{tv_id}?api_key=a3f9467ae2c29b7ede89cca0ca14d893&language=en-US")

      .then(function(respuesta) {
        return respuesta.json()
      })
      .then(function(serie) {
        console.log(serie);
       var urlImg = "https://image.tmdb.org/t/p/original/"

      document.querySelector(".posterSerie").innerHTML = "<img src='"+ urlImg + serie.poster_path+ "'style='width:300px;'>";


        document.querySelector("h1").innerHTML = serie.title;
        document.querySelector(".fecha").innerHTML= serie.release_date;
        document.querySelector(".sipnopsis").innerHTML= serie.overview;
        document.querySelector(".lenguaje").innerHTML= serie. original_language;

       var genero= serie.genres
       for (i=0; i< serie.length; i++) {
         serie.genres[i]
         document.querySelector(".generoDetalle").innerHTML= "<a href='generos.html'>"+serie.genres[i].name+"</a>"
   }
  })
  var url = "https://api.themoviedb.org/3/tv/{tv_id}/videos?api_key=a3f9467ae2c29b7ede89cca0ca14d893&language=en-US"
  fetch(url)
    .then(function(response){
      return response.json();
      })
      .then(function(serieTrailer) {
       console.log(serieTrailer);
       console.log(serieTrailer.results[0].key);
        var urlTrailer= '<iframe width="850" height="472" src="https://www.youtube.com/embed/'+ serieTrailer.results[0].key +'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        document.querySelector(".infoDeSerie").innerHTML= urlTrailer;

        })
         .catch(function(error) {
           console.log("the error was: " + error);
          })


  fetch("https://api.themoviedb.org/3/tv/{tv_id}/recommendations?api_key=a3f9467ae2c29b7ede89cca0ca14d893&language=en-US&page=1")
    .then(function(respuesta) {
      return respuesta.json()
    })
    .then(function(datos) {
      var series = datos.results
      console.log(series);

      for (var i = 0; i < series.length; i++) {
        document.querySelector(".contenedor-recomendados").innerHTML += '<li><div class="uk-panel"><a href="detalle.html?idserie='+series[i].id+'"><img src="https://image.tmdb.org/t/p/original/' + series[i].poster_path + '" alt=""></a><div class="uk-position-center uk-panel"><h1></h1></div></div></li>'
      }
    })

  }
