const puppeteer = require('puppeteer');

const SUBSMASHBROS_URL = (smashbros) => `https://www.usgamer.net/articles/${smashbros}/`;

const self = {
    browser: null,
    pages: null,

    initialize: async (smashbros) => {

        self.browser = await puppeteer.launch({
            headless: false
        });
        self.page = await self.browser.newPage();

        // Go to the subsmashbros
        await self.page.goto(SUBSMASHBROS_URL(smashbros), { waitUntil: 'networkidle0' });

        
    },

        getResults: async (nr) => {

            let elements = await self.page.$$('(".body > ul")[2]');

            for (let element of elements) {

                let t

            }

            
        }


}


module.exports = self;