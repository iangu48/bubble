var request = require('request-promise');
var cheerio = require('cheerio');
var fs = require('fs');

async function scrapeData(str) {
	let url = "https://old.reddit.com/r/";
	for (let i = 0; i < str.length; i++) {
		url += "+" + str[i];
	}
	url += '/top/?sort=top&t=day';
	var obj = {'data': []};


	const response = await request({
		uri: url,
		resolveWithFullResponse: true,
	});

	console.log("Status code: " + response.statusCode);
	const body = response.body
	var $ = cheerio.load(body);

	$('div#siteTable > div.link').each(function( index ) {
		var title = $(this).find('p.title > a.title').text().trim();
		var href =  $(this).find('p.title > a.title').attr('href').trim();
		obj.data.push({"text": title, "link": href})
		fs.appendFileSync('reddit.txt', title + '\n\t' + href + '\n');
	});

	return obj;	
}

//let res = scrapeData(["worldnews", "science"]).then(console.log);

module.exports = {
	scrapeData
}