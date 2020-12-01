const puppeteer = require('puppeteer');

const getData = async () => {
  // 1 - Créer une instance de navigateur
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // 2 - Naviguer jusqu'à l'URL cible
  await page.goto('https://fr.wikipedia.org/wiki/Paris');
  //await page.click(
//    '#mw-content-text > div.mw-parser-output > table.infobox_v2 > tbody > tr:nth-child(14) > td',
//  )

  await page.waitFor(1000); // fait une pause d'une seconde

  // 3 - Récupérer les données
  const result = await page.evaluate(() => {
    let population = document.querySelector('#mw-content-text > div.mw-parser-output > table.infobox_v2 > tbody > tr:nth-child(14) > td').innerText;
    console.log(population);
  //  let price = document.querySelector('.price_color').innerText
  //  return { title, price }
  })

  // 4 - Retourner les données (et fermer le navigateur)
  browser.close();
  return result
}

// Appelle la fonction getData() et affichage les données retournées
getData().then(value => {
  console.log(value)
})
