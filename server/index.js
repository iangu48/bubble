const express = require('express');
const app = express();
const mcache = require('memory-cache');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

const cache = (duration) => {
 	return (req, res, next) => {
    	let key = '__express__' + req.originalUrl || req.url
    	let cachedBody = JSON.parse(mcache.get(key))
    	if (cachedBody) {
      		res.json(cachedBody);
      		console.log(req.headers);
			console.log("request made");
      	return
   		} else {
      		res.sendResponse = res.send
      		res.send = (body) => {
        		mcache.put(key, body, duration * 1000);
        		res.sendResponse(body)
      	}
      	next()
    }
  }
}

const google = require('./google.js');
const reddit = require('../redditScraper/index.js');


app.get('/', cache(1800), function (req, res) {
	getData(["worldnews", "news", "worldevents"]).then(res.json.bind(res));

	console.log(req.headers);
	console.log("request made");
})

app.get('/science-and-technology', cache(1800), function (req, res) {
	getData(["science", "technology"]).then(res.json.bind(res));

	console.log(req.headers);
	console.log("request made");
})

app.get('/canada', cache(1800), function (req, res) {
	getData(["canada", "onguardforthee"]).then(res.json.bind(res));

	console.log(req.headers);
	console.log("request made");
})

app.get('/politics', cache(1800), function (req, res) {
	getData(["politics", "worldpolitics", "ukpolitics", "eupolitics", "uspolitics"]).then(res.json.bind(res));

	console.log(req.headers);
	console.log("request made");
})

app.get('/entertainment', cache(1800), function (req, res) {
	getData(["entertainment", "movies", "music", "books", "television"]).then(res.json.bind(res));

	console.log(req.headers);
	console.log("request made");
})

app.get('/sports', cache(1800), function (req, res) {
	getData(["sports", "nba", "sportsHUB", "baseball", "basketball", "football", "hockey", "motorsports", "soccer", "mma", "running",
		"climbing", "snowboarding", "skiing", "cricket", "tennis", "cycling", "boxing", "skateboarding", "golf"]).then(res.json.bind(res));

	console.log(req.headers);
	console.log("request made");
})

async function getData(subReddits) {
	let redditData = await reddit.scrapeData(subReddits);
	let dataArray = [];
	for (rd of redditData.data) {
		let data = await google.analyzeText(rd.text);
		data.forEach(entity => {
			let item = {text: entity.name, size: 1, href: [rd.link]};
			dataArray.push(item);
		});
	}

	dataArray = combineDuplicates(dataArray);
	dataArray = dataArray.sort((a, b) => b.size - a.size);

	if (subReddits.includes("canada")) {
		dataArray = dataArray.filter((item) => item.text.toUpperCase() !== "canada".toUpperCase());
	}

	return {'data': dataArray};
}

/**
* combineDuplicates(dataArray): Merges all the elements in the dataArray with the same title.
*/
function combineDuplicates(dataArray) {
	let newArray = [];

	while (dataArray.length > 0) {
		let currentTitle = dataArray[0].text;
		let curTitleArray = dataArray.filter((a) => a.text === currentTitle);

		if (curTitleArray.length > 1) {
			let linkList = [];
			for (item of curTitleArray) {
				linkList.push(item.href[0]);
			}

			newArray.push({text: currentTitle, size: linkList.length * 50, href: linkList});
			console.log({text: currentTitle, size: linkList.length * 50, href: linkList});
		} else {
			newArray.push({text: currentTitle, size: 1 * 50, href: [dataArray[0].href[0]]});
			console.log({text: currentTitle, size: 1 * 50, href: [dataArray[0].href[0]]});
		}

		dataArray = dataArray.filter((a) => a.text !== currentTitle);
	}

	return newArray;
}

app.listen(3000);