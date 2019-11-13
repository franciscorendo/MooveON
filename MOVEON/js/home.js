window.onload = function(){



// POPULARES
  fetch("https://api.themoviedb.org/3/tv/popular?api_key=a3f9467ae2c29b7ede89cca0ca14d893&language=en-US&page=1")
    .then(function(response){
      return  response.json();
    })
    .then(function(data){
      var array = data.results
      var ul = document.querySelector('.ul-populares')
      // console.log(array)
      for (serie of array) {
        var li = `
       <a href="TUDETALLEDESERIE*">
          <li>
              <div class="uk-panel">
                  <img src="https://image.tmdb.org/t/p/original`+serie.poster_path+`" alt="">
                  <div class="uk-position-center uk-panel"><h2>`+serie.name+`</h2></div>
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


// AL AIRE

    fetch("https://api.themoviedb.org/3/tv/top_rated?api_key=a3f9467ae2c29b7ede89cca0ca14d893&language=en-US&page=1")
    .then(function(response){
      return  response.json();
    })
    .then(function(data){
      var array = data.results
      var ul = document.querySelector('.ul-alaire')
      console.log(array)
      for (serie of array) {
        var li = `
       <a href="TUDETALLEDESERIE*">
          <li>
              <div class="uk-panel">
                  <img src="https://image.tmdb.org/t/p/original`+serie.poster_path+`" alt="">
                  <div class="uk-position-center uk-panel"><h2>`+serie.name+`</h2></div>
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
// MEJOR PUNTUADAS
fetch("https://api.themoviedb.org/3/tv/top_rated?api_key=a3f9467ae2c29b7ede89cca0ca14d893&language=en-US&page=1")
.then(function(response){
  return  response.json();
})
.then(function(data){
  var array = data.results
  var ul = document.querySelector('.ul-mejorpuntuadas')
  console.log(array)
  for (serie of array) {
    var li = `
   <a href="TUDETALLEDESERIE*">
      <li>
          <div class="uk-panel">
              <img src="https://image.tmdb.org/t/p/original`+serie.poster_path+`" alt="">
              <div class="uk-position-center uk-panel"><h2>`+serie.name+`</h2></div>
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
