const request = require('request-promise');
const cheerio = require('cheerio');
const fs = require('fs');

/**
* scrapeData(subreddits): returns the titles and links to Reddit posts in the
* specified subreddits
* 
* @param subreddits must be an array of valid subreddit names (of type string)
*/
async function scrapeData(subreddits) {
	// build reddit url
	let url = "https://old.reddit.com/r/";
	for (let i = 0; i < subreddits.length; i++) {
		url += "+" + subreddits[i];
	}
	url += '/top/?sort=top&t=day';

<<<<<<< HEAD
	var obj = {'data': []};
=======
	let scrapedData = {'data': []};
>>>>>>> a00022bee7f9cd40198152063cbe3428afd5544c

	const response = await request({
		uri: url,
		resolveWithFullResponse: true
	});

	console.log("Status code: " + response.statusCode);
	const body = response.body;
	let $ = cheerio.load(body);

	$('div#siteTable > div.link').each(function(index) {
		let title = $(this).find('p.title > a.title').text().trim();
		let href =  $(this).find('p.title > a.title').attr('href').trim();
		scrapedData.data.push({"text": title, "link": href})
	});

	return scrapedData;
}

module.exports = {
	scrapeData
}