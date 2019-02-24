var express = require('express');
var app = express();

var cors = require('cors');
app.use(cors());
app.options("*", cors());

var google = require('./google.js');
var reddit = require('../redditScraper/index.js');


app.get('/', function (req, res) {
	getData(["worldnews", "news", "worldevents"]).then(res.json.bind(res));

	console.log(req.headers);
	console.log("request made");
})

app.get('/science-and-technology', function (req, res) {
	getData(["science", "technology"]).then(res.json.bind(res));

	console.log(req.headers);
	console.log("request made");
})

app.get('/canada', function (req, res) {
	getData(["canada", "onguardforthee"]).then(res.json.bind(res));

	console.log(req.headers);
	console.log("request made");
})

app.get('/politics', function (req, res) {
	getData(["politics", "worldpolitics", "ukpolitics", "eupolitics", "uspolitics"]).then(res.json.bind(res));

	console.log(req.headers);
	console.log("request made");
})

app.get('/entertainment', function (req, res) {
	getData(["entertainment", "movies", "music", "books", "television"]).then(res.json.bind(res));

	console.log(req.headers);
	console.log("request made");
})

app.get('/sports', function (req, res) {
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

	return {'data': dataArray};
}

/**
* combineDuplicates(array): Merges all the elements in the data array with the same title.
*/
function combineDuplicates(array) {
	let newArray = [];

	while (array.length > 0) {
		let currentTitle = array[0].text;

		let curTitleArray = array.filter((a) => a.text === currentTitle);

		if (curTitleArray.length > 1) {
			let linkList = [];
			for (item of curTitleArray) {
				linkList.push(item.href[0]);
			}

			newArray.push({text: currentTitle, size: linkList.length * 25, href: linkList});
			console.log({text: currentTitle, size: linkList.length * 25, href: linkList});
		} else {
			newArray.push({text: currentTitle, size: 1 * 25, href: array[0].href[0]});
			console.log({text: currentTitle, size: 1 * 25, href: array[0].href[0]});
		}

		array = array.filter((a) => a.text !== currentTitle);
	}

	return newArray;
}

app.listen(3000);