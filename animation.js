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
    stopPluie();
    break
    case "Clouds":
      document.getElementById("temps").src="imagesSVG/nuage.svg";
      snowStorm.stop();
      console.log("SalutCloud");
      stopPluie();
      break
    case "Clear":
      document.getElementById("temps").src="imagesSVG/soleil.svg";
      snowStorm.stop()
      console.log("SalutClear");
      stopPluie();
      break

    case "Rain":
    pluie();
    snowStorm.stop()
    console.log("SalutPluie");
      break
    default:
      document.getElementById("temps").src="imagesSVG/nuage.svg";
      console.log("SalutDefault");
    break
}
}

document.getElementById("bouton").onclick = getWeather;

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

function animOnTime() {
  anim1();
  anim2();
}
  /*function animOnTime(){
  setInterval( function() {
    anim1();
    setTimeout(anim2, 8000);
  });
}*/

 /*function animOnTime(){
   setInterval( function() {
    anim1();
     setTimeout(anim2, 8000);
   }, 16000);
 }*/
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

function pluie() {
  const rain = []
const drops = [];
const gravity = 0.2;
const wind = 0.015;
const rain_chance = 0.4;

window.requestAnimFrame =
  window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.oRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };

const canvas = document.getElementById('c');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 360;

//--------------------------------------------

class Vector {
  constructor (x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  add (v) {
    if (v.x != null && v.y != null) {
      this.x += v.x;
      this.y += v.y;
    } else {
      this.x += v;
      this.y += v;
    }

    return this;
  }

  copy () {
    return new Vector(this.x, this.y);
  }
}

//--------------------------------------------

class Rain {
  constructor () {
    this.pos = new Vector(Math.random() * canvas.width, -50);
    this.prev = this.pos;
    this.vel = new Vector();
  }

  update () {
    this.prev = this.pos.copy();
    this.vel.y += gravity;
    this.vel.x += wind;
    this.pos.add(this.vel);
  }

  draw (ctx) {
    ctx.beginPath();
    ctx.moveTo(this.pos.x, this.pos.y);
    ctx.lineTo(this.prev.x, this.prev.y);
    ctx.stroke();
  }
}


//--------------------------------------------

class Drop {
  constructor (x, y) {
    const dist = Math.random() * 7;
    const angle = Math.PI + Math.random() * Math.PI;

    this.pos = new Vector(x, y);
    this.vel = new Vector(
      Math.cos(angle) * dist,
      Math.sin(angle) * dist
    );
  }

  update () {
    this.vel.y += gravity;
    this.vel.x *= 0.95;
    this.vel.y *= 0.95;
    this.pos.add(this.vel);
  }

  draw (ctx) {
    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, 1, 0, Math.PI * 2);
    ctx.fill();
  }
}

//--------------------------------------------

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  let i = rain.length;
  while (i--) {
    const raindrop = rain[i];

    raindrop.update();

    if (raindrop.pos.y >= canvas.height) {
      let n = Math.round(4 + Math.random() * 4);

      while (n--)
        drops.push(new Drop(raindrop.pos.x, canvas.height));
      rain.splice(i, 1);
    }

    raindrop.draw(ctx);
  }

  i = drops.length;
  while (i--) {
    const drop = drops[i];
    drop.update();
    drop.draw(ctx);

    if (drop.pos.y > canvas.height) drops.splice(i, 1);
  }

  if (Math.random() < rain_chance) rain.push(new Rain());

  requestAnimFrame(update);
}

function init() {
  ctx.lineWidth = 1;
  ctx.strokeStyle = 'rgba(60,135,235,1)';
  ctx.fillStyle = 'rgba(60,135,235,1)';
  update();
}

init();
}

function stopPluie() {
  const rain = []
const drops = [];
const gravity = 0.2;
const wind = 0.015;
const rain_chance = 0.4;

window.requestAnimFrame =
  window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.oRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };

const canvas = document.getElementById('c');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 360;
draw ()
}
