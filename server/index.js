const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());
app.options("*", cors());

const google = require('./google.js');
const reddit = require('../redditScraper/index.js');


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
	dataArray = dataArray.sort((a, b) => b.size - a.size);

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