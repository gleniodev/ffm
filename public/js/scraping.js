const request = require('request-promise');
const cheerio = require('cheerio');

const url = 'http://liturgia.cancaonova.com/pb/'

async function cancaoNova(){
    const response = await request(url);
    console.log(response);
}

cancaoNova();