function getWeather() {
  cityName = document.getElementById("input").value;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=7b7fccc59b0e3578ffcf3a8e5693c318&units=metric&lang=fr`;
  fetch(url).then((response) =>
    response.json().then((data) => {
	console.log(data);
  let temp = data.main.temp;
  let description = data.weather[0].description;
  let phrasemeteo = document.getElementById("meteo");
  phrasemeteo.innerHTML = " Il fait " + temp + " degres et la m&eacute;teo : " + description ;
  let meteomain = data.weather[0].main;
  console.log(meteomain);
  console.log(description);
  changeTemps(meteomain);
  }));
}


function changeTemps(e)  {
  console.log("coucou");
  switch (e) {
    case "Snow":
    snowStorm.start();
    console.log("SalutSnow");
    break
    case "Clouds":
      $("#temps").attr("src","imagesSVG/nuage.svg")
      snowStorm.stop();
      console.log("SalutCloud");
      break
    case "Clear":
      $("#temps").attr("src","imagesSVG/soleil.svg")
      snowStorm.stop()
      console.log("SalutClear");
      break

    case "Rain":
    $("#temps").attr("src","imagesSVG/soleil.svg")
    snowStorm.stop()
    console.log("SalutPluie");
      break
    default:
      $("#temps").attr("src","imagesSVG/nuage.svg")
      console.log("SalutDefault");
    break
}
}

$("#bouton").on("click", getWeather)

function anim1(){
  let fleurPop = document.getElementById("fleur");
  fleurPop.style.opacity = 1;
  AnimFleur = new Vivus("fleur",{
  type: 'oneByOne',
  duration: 1000,
});

}

function anim2(){
  let fleurPop2 = document.getElementById("fleur2");
  fleurPop2.style.opacity = 1;
  AnimFleur2 = new Vivus("fleur2",{
  type: 'oneByOne',
  duration: 1000,
});
}


  function animOnTime(){
  setInterval( function() {
    anim1();
    setTimeout(anim2, 8000);
  });
}

// function animOnTime(){
//   setInterval( function() {
//     anim1();
//     setTimeout(anim2, 8000);
//   }, 16000);
// }
animOnTime();


function HeureCheckEJS() {
  krucial = new Date;
  //console.log(krucial);
  heure = krucial.getHours();
  //console.log(heure);
  min = krucial.getMinutes();
  //console.log(min);
  sec = krucial.getSeconds();
  //console.log(sec);
  jour = krucial.getDate();
  //console.log(jour);
  mois = krucial.getMonth()+1;
  //console.log(mois);
  annee = krucial.getFullYear();
  //console.log(annee);
  if (sec < 10) {
	 sec0 = "0";
  }else {
  	sec0 = "";
  }
  if (min < 10) {
		min0 = "0";
  }else {
  	min0 = "";
  }
  if (heure < 10) {
  	heure0 = "0";
  }else {
		heure0 = "";
  }

  DinaHeure = heure0 + heure + ":" + min0 + min + ":" + sec0 + sec;
  document.getElementById("ejs_heure").innerHTML=DinaHeure;
  setTimeout("HeureCheckEJS()", 1000)
  return heure;
}

function change() {
  heurePrez = HeureCheckEJS();
  console.log("youpiii"+heurePrez)
  if (heurePrez >= 6 && heurePrez <= 10 ){
    document.body.style.backgroundColor ="#FEB872" ;
  }
  else if (heurePrez >10 && heurePrez <18){
    document.body.style.backgroundColor = "#66B4FF";
  }
  else if (heurePrez >=18 && heurePrez <=20){
    document.body.style.backgroundColor = "#FFB6C1";
  }
  else {
    document.body.style.backgroundColor = "#00003E";
  }
  setTimeout("change()", 1000)
}
change();
