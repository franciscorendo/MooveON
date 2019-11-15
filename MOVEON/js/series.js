window.onload = function(){
var queryStringObj = new URLSearchParams(location.search)
queryStringObj.get('idDeGenero')

  fetch("https://api.themoviedb.org/3/discover/tv?api_key=<<api_key>>&page=1&with_genres=idDeGenero
")
    .then(function(response){
      return  response.json();
    })
    .then(function(data){
      var array = data.results
      var ul = document.querySelector('.ul-generos')

      for (serie of array) {
        var li = `
       <a href="TUDETALLEDESERIE*">
          <li>
              <div class="uk-panel">
                  <img src="https://image.tmdb.org/t/p/original`+serie.poster_path+`" alt="">

              </div>
          </li>
        </a>
        `
        ul.innerHTML += li;
      }

    })
    .catch(function(error){
      console.log(error)
    })
}
