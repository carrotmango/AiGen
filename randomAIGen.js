const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

async function crawlWebsite() {
    const url = 'https://rangirls.com/';
    const browser = await puppeteer.launch({
        headless: true, 
    });
    const page = await browser.newPage();

    await page.goto(url, {
        waitUntil: 'networkidle2',
    });

    const html = await page.content();

    const $ = cheerio.load(html);

    const imgElement = $('img.sc-gueYoa.crKJer');

    //console.log(html);

    if (imgElement.length > 0) {
        const imgSrc = imgElement.attr('src');
        
        //console.log(imgSrc);
        
        return imgSrc;

    } else {
        console.log('이미지 없음');
    }

    await browser.close();

}

//crawlWebsite();


module.exports = crawlWebsite;