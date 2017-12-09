const puppeteer = require('puppeteer');



(async () => {

    const screenshot = async function(url, width, height){
        console.log(`${width}-${height} started`);

        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.setViewport({
            width: width,
            height: height
        });
        await page.goto(url);
        await page.screenshot({path: `${width}-${height}.png`});

        await browser.close();

        console.log(`${width}-${height} done`);
    }

    const url = 'https://www.example.com';

    await screenshot(url, 1920, 4000);
    await screenshot(url, 1366, 4000);
    await screenshot(url, 1024, 4000);
    await screenshot(url, 767, 4000);
    await screenshot(url, 320, 4000);
})();

