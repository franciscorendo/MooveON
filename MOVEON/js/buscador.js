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

//todo esto esta explicado en otros javas.
window.onload = function() {
 var queryString = new URLSearchParams(location.search)
 var busco = queryString.get("buscador")
 var usuario = localStorage.getItem("user")
 if (usuario != null) {
   document.querySelector("button.btn-log").style.display = "none"
   document.querySelector("li.prefes").style.display = "block"
   document.querySelector("li.saludop").style.display = "block"
   document.querySelector("p.saludo").innerHTML = "Hola " + usuario
   document.querySelector("li.lg").style.display = "block"
 }
 var cont= 2;
 window.onscroll = function(ev) {
     if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
       fetch("https://api.themoviedb.org/3/search/tv?api_key=a3f9467ae2c29b7ede89cca0ca14d893&language=en-US&query="+busco+"&page="+ cont+"&include_adult=false")
         .then(function(respuesta) {
           return respuesta.json()
           console.log(respuesta);
         })
         .then(function(informacion) {
               var arrayBusqueda = informacion.results
               console.log(arrayBusqueda);
               for (var i = 0; i < arrayBusqueda.length; i++) {
                 var png = arrayBusqueda[i].poster_path;
                 var id = arrayBusqueda[i].id
                 document.querySelector(".ul-fotos").innerHTML += "<li class="+"li-item"+ "tabindex="+"0"+"><a href=detalleSerie.html?idPeli=" + id + "><img class="+"img-li"+" src=" + "https://image.tmdb.org/t/p/w185" +png+"></a>"
               }
         })
         .catch(function(error) {
           console.log("Error: " + error);
         })
     }
 };
fetch("https://api.themoviedb.org/3/search/tv?api_key=a3f9467ae2c29b7ede89cca0ca14d893&language=en-US&query="+busco+"&page=1&include_adult=false")
 .then(function(respuesta) {
   return respuesta.json()
   console.log(respuesta);
 })
 .then(function(informacion) {
       var arrayBusqueda = informacion.results
       console.log(arrayBusqueda);
       for (var i = 0; i < arrayBusqueda.length; i++) {
         var png = arrayBusqueda[i].poster_path;
         var id = arrayBusqueda[i].id
         document.querySelector(".ul-fotos").innerHTML += "<li class="+"li-item"+ "tabindex="+"0"+"><a href=detalleSerie.html?idPeli=" + id + "><img class="+"img-li"+" src=" + "https://image.tmdb.org/t/p/w185" +png+"></a>"
         //Intentamos hacer el link para que al clickear la foto nos mande a detalles pero no lo logramos.
       }
 })
 .catch(function(error) {
   console.log("Error: " + error);
 })
 // esto es para el menu que se desplaza para abajo cuando te paras arriba de generos
 //anda y busca en este link las appis y transformalas en json para listearlas
 fetch("https://api.themoviedb.org/3/genre/tv/list?api_key=a3f9467ae2c29b7ede89cca0ca14d893&language=en-US")
   .then(function(respuesta) {
     return respuesta.json()
     console.log(respuesta);
   })
 //ahora agarra en especial los generos y traelos como arrays infinitos
   .then(function(informacion) {
     var arrayGeneros = informacion.genres
     for (var i = 0; i < arrayGeneros.length; i++) {
       var nombre = arrayGeneros[i].name
       var id = arrayGeneros[i].id
       var li;
 //estructura que va a linkear donde posicionarlos
       li = '<li>'
       li += '<a href=listaGeneros.html?idGenero=' + id + '&genero='+nombre+'>' + nombre + '</a>'
       li += '</li>'
 //estilo selector para los genros
       document.querySelector("ul.gen").innerHTML += li
     }
   })
   .catch(function(error) {
     console.log("Error: " + error);
   })
 //esto es para que cuando busques, si escribis 2 caracteres, arroje error
   document.querySelector("form.buscar").onsubmit = function(e) {
   var busco = document.buscar.buscador.value;
   console.log(busco);
   // var buscadorInput = document.querySelector("input")
   if (busco.length <= 3) {
     e.preventDefault()
UIkit.notification({message: 'Ingrese mas de tres caracteres', status: 'warning',  timeout: 2000})
 }else {
 }
 }
}
