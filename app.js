// Biblioteca utilizada para acessar o selenium
var webdriverio = require('webdriverio');

// Opções no create do webdriverio
var options = {
  desiredCapabilities: {
    // browserName: 'firefox'
    browserName: 'chrome'
  },
  port: 9515,
  path: '/'
};

console.log("Iniciando client do selenium...");

(async () => {
    // Criar client do selenium
    var client = webdriverio.remote(options);

    // Iniciar client
    await client.init();

    // Acessar url da google
    await client.url('http://www.bitnary.com.br');

    var title = await client.getTitle();

    console.log("Título da página: " + title);

    await client.end();
})().catch((e) => console.error(e));