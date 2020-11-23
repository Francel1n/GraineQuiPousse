let date = Date();
const millisecondes_connexion = Date.now();
document.getElementById("p1").innerHTML = date;
document.getElementById("p2").innerHTML = millisecondes_connexion;

let imgNumber = 0;
let totalimgNumber = 6;
let anim = [];

for (i=0; i<totalimgNumber; i++){
  anim[i]= new Image (1000, 815);
  anim[i].src ="imagesSVG/graine"+ (i+1)+ ".svg";
}

function switch2() {
document.graine.src = anim[imgNumber].src;
  imgNumber++;
  if (imgNumber >= totalimgNumber) {
   imgNumber = 0;
 }
}

function animate1() {
  setInterval(switch2, 1000);
}

onLoad= animate1()
