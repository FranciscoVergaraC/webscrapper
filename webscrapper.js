const request = require('request');
const cheerio = require('cheerio');
console.log('se inicia el proceso')

request('https://pomofocus.io', (error, response, html) => {
  console.log('se genera el primer request')
  if (!error && response.statusCode === 200) {
    const $ = cheerio.load(html);
    // aquí puedes utilizar la sintaxis de jQuery para seleccionar elementos HTML
    // por ejemplo, para obtener el título de la página:
    const pageTitle = $('title').text();
    console.log(pageTitle);
  }
});
