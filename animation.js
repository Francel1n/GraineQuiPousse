// let date = Date();
// const millisecondes_connexion = Date.now();
// document.getElementById("p1").innerHTML = date;
// document.getElementById("p2").innerHTML = millisecondes_connexion;

 AnimFleur = new Vivus("fleur",{
  type: 'oneByOne',
  duration: 10000,
  }); 

  function HeureCheckEJS()
	{
  krucial = new Date;
  console.log(krucial);
  heure = krucial.getHours();
  console.log(heure);
  min = krucial.getMinutes();
  console.log(min);
  sec = krucial.getSeconds();
  console.log(sec);
  jour = krucial.getDate();
  console.log(jour);
  mois = krucial.getMonth()+1;
  console.log(mois);
  annee = krucial.getFullYear();
  console.log(annee);
	if (sec < 10)
		sec0 = "0";
	else
		sec0 = "";
	if (min < 10)
		min0 = "0";
	else
		min0 = "";
	if (heure < 10)
		heure0 = "0";
	else
		heure0 = "";
	DinaHeure = heure0 + heure + ":" + min0 + min + ":" + sec0 + sec;
	//which = DinaHeure
	//if (document.getElementById){
		document.getElementById("ejs_heure").innerHTML=DinaHeure;
	
	setTimeout("HeureCheckEJS()", 1000)
	}
window.onload = HeureCheckEJS;

function Change(heure) {
if (heure >= 10)
console.log("coucou");
//document.getElementsByTagName("body").style.color=#FF1232;
}
Change(heure);

//document.getElementById("graine").innerHTML = AnimFleur;

// let imgNumber = 0;
// let totalimgNumber = 6;
// let anim = [];
//
// for (i=0; i<totalimgNumber; i++){
//   anim[i]= new Image (1000, 815);
//   anim[i].src ="imagesSVG/graine"+ (i+1)+ ".svg";
// }
//
// function switch2() {
// document.graine.src = anim[imgNumber].src;
//   imgNumber++;
//   if (imgNumber >= totalimgNumber) {
//    imgNumber = 0;
//  }
// }
//
// function animate1() {
//   setInterval(switch2, 1000);
// }
//
// onLoad= animate1()
