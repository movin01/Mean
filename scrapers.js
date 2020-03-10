// const puppeteer = require ('puppeteer');

// async function scrapeProduct(url) {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     page.goto(url);

//     const [el] = page.$x('//*[@id="page-wrapper"]/div[2]/main/div[1]/article/div/figure[2]/a/img')
//     const src = await el.getProperty('src');
//     const srcTxt = await src.jsonValue();

//     console.log({srcTxt});

//     browers.close();
// }

// scrapeProduct('https://www.usgamer.net/articles/10-12-2018-https://www.usgamer.net/articles/10-12-2018-super-smash-bros-ultimate-characters-moves-type-every-character-on-the-super-smash-bros-ultimate-roster-smash-bros-ultimate-characters-moves-type-every-character-on-the-super-smash-//*[@id="page-wrapper"]/div[2]/main/div[1]/article/div/ul[3]/li[1]/a-ultimate-roster');

