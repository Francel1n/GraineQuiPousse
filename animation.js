let date = Date();
const millisecondes_connexion = Date.now();
document.getElementById("p1").innerHTML = date;
document.getElementById("p2").innerHTML = millisecondes_connexion;

let imgNumber = 0;
let totalimgNumber = 6;
let anim = [];

for (i=0; i<totalimgNumber; i++){
  anim[i]= new Image (2000, 815);
  anim[i].src ="imagesSVG/graine"+ (i+1)+ ".svg";
}
document.graine.src = anim[1].src;
