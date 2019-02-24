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

			newArray.push({text: currentTitle, size: linkList.length, href: linkList});
			console.log({text: currentTitle, size: linkList.length, href: linkList});
		} else {
			newArray.push({text: currentTitle, size: 1, href: array[0].href[0]});
			console.log({text: currentTitle, size: 1, href: array[0].href[0]});
		}

		array = array.filter((a) => a.text !== currentTitle);
	}

	return newArray;
}

let obj = {
   "data":[
      {
         "text":"Kelly Craft",
         "size":1,
         "href":[
            "https://www.msn.com/en-gb/news/world/trumps-un-nominee-kelly-craft-says-she-believes-both-sides-of-climate-change-science/ar-BBTYMH5"
         ]
      },
      {
         "text":"Kelly Craft",
         "size":1,
         "href":[
            "https://www.msn.com/en-gb/news/world/trumps-un-nominee-kelly-craft-says-she-believes-both-sides-of-climate-change-science/ar-BBTYMH5"
         ]
      },
      {
         "text":"Kelly Craft",
         "size":1,
         "href":[
            "https://www.msn.com/en-gb/news/world/trumps-un-nominee-kelly-craft-says-she-believes-both-sides-of-climate-change-science/ar-BBTYMH5"
         ]
      },
      {
         "text":"Trump",
         "size":1,
         "href":[
            "https://www.msn.com/en-gb/news/world/trumps-un-nominee-kelly-craft-says-she-believes-both-sides-of-climate-change-science/ar-BBTYMH5"
         ]
      },
      {
         "text":"climate change science",
         "size":1,
         "href":[
            "https://www.msn.com/en-gb/news/world/trumps-un-nominee-kelly-craft-says-she-believes-both-sides-of-climate-change-science/ar-BBTYMH5"
         ]
      },
      {
         "text":"sides",
         "size":1,
         "href":[
            "https://www.msn.com/en-gb/news/world/trumps-un-nominee-kelly-craft-says-she-believes-both-sides-of-climate-change-science/ar-BBTYMH5"
         ]
      },
      {
         "text":"one",
         "size":1,
         "href":[
            "https://www.msn.com/en-gb/news/world/trumps-un-nominee-kelly-craft-says-she-believes-both-sides-of-climate-change-science/ar-BBTYMH5"
         ]
      },
      {
         "text":"coal producers",
         "size":1,
         "href":[
            "https://www.msn.com/en-gb/news/world/trumps-un-nominee-kelly-craft-says-she-believes-both-sides-of-climate-change-science/ar-BBTYMH5"
         ]
      },
      {
         "text":"US",
         "size":1,
         "href":[
            "https://www.msn.com/en-gb/news/world/trumps-un-nominee-kelly-craft-says-she-believes-both-sides-of-climate-change-science/ar-BBTYMH5"
         ]
      },
      {
         "text":"students",
         "size":1,
         "href":[
            "https://www.duke-nus.edu.sg/news/split-and-continuous-restricted-sleep-schedules-affect-cognition-and-glucose-levels-differently"
         ]
      },
      {
         "text":"study",
         "size":1,
         "href":[
            "https://www.duke-nus.edu.sg/news/split-and-continuous-restricted-sleep-schedules-affect-cognition-and-glucose-levels-differently"
         ]
      },
      {
         "text":"mood",
         "size":1,
         "href":[
            "https://www.duke-nus.edu.sg/news/split-and-continuous-restricted-sleep-schedules-affect-cognition-and-glucose-levels-differently"
         ]
      },
      {
         "text":"performance",
         "size":1,
         "href":[
            "https://www.duke-nus.edu.sg/news/split-and-continuous-restricted-sleep-schedules-affect-cognition-and-glucose-levels-differently"
         ]
      },
      {
         "text":"teens",
         "size":1,
         "href":[
            "https://www.duke-nus.edu.sg/news/split-and-continuous-restricted-sleep-schedules-affect-cognition-and-glucose-levels-differently"
         ]
      },
      {
         "text":"sleep",
         "size":1,
         "href":[
            "https://www.duke-nus.edu.sg/news/split-and-continuous-restricted-sleep-schedules-affect-cognition-and-glucose-levels-differently"
         ]
      },
      {
         "text":"sleep group",
         "size":1,
         "href":[
            "https://www.duke-nus.edu.sg/news/split-and-continuous-restricted-sleep-schedules-affect-cognition-and-glucose-levels-differently"
         ]
      },
      {
         "text":"mood",
         "size":1,
         "href":[
            "https://www.duke-nus.edu.sg/news/split-and-continuous-restricted-sleep-schedules-affect-cognition-and-glucose-levels-differently"
         ]
      },
      {
         "text":"working memory",
         "size":1,
         "href":[
            "https://www.duke-nus.edu.sg/news/split-and-continuous-restricted-sleep-schedules-affect-cognition-and-glucose-levels-differently"
         ]
      },
      {
         "text":"alertness",
         "size":1,
         "href":[
            "https://www.duke-nus.edu.sg/news/split-and-continuous-restricted-sleep-schedules-affect-cognition-and-glucose-levels-differently"
         ]
      },
      {
         "text":"afternoon nap",
         "size":1,
         "href":[
            "https://www.duke-nus.edu.sg/news/split-and-continuous-restricted-sleep-schedules-affect-cognition-and-glucose-levels-differently"
         ]
      },
      {
         "text":"Cardinal",
         "size":1,
         "href":[
            "https://www.ncronline.org/news/accountability/cardinal-admits-vatican-summit-catholic-church-destroyed-abuse-files?utm_source=newsletter&utm_medium=email&utm_campaign=newsletter_axiosam&stream=top"
         ]
      },
      {
         "text":"summit",
         "size":1,
         "href":[
            "https://www.ncronline.org/news/accountability/cardinal-admits-vatican-summit-catholic-church-destroyed-abuse-files?utm_source=newsletter&utm_medium=email&utm_campaign=newsletter_axiosam&stream=top"
         ]
      },
      {
         "text":"Vatican",
         "size":1,
         "href":[
            "https://www.ncronline.org/news/accountability/cardinal-admits-vatican-summit-catholic-church-destroyed-abuse-files?utm_source=newsletter&utm_medium=email&utm_campaign=newsletter_axiosam&stream=top"
         ]
      },
      {
         "text":"abuse files",
         "size":1,
         "href":[
            "https://www.ncronline.org/news/accountability/cardinal-admits-vatican-summit-catholic-church-destroyed-abuse-files?utm_source=newsletter&utm_medium=email&utm_campaign=newsletter_axiosam&stream=top"
         ]
      },
      {
         "text":"Catholic Church",
         "size":1,
         "href":[
            "https://www.ncronline.org/news/accountability/cardinal-admits-vatican-summit-catholic-church-destroyed-abuse-files?utm_source=newsletter&utm_medium=email&utm_campaign=newsletter_axiosam&stream=top"
         ]
      },
      {
         "text":"guardsmen",
         "size":1,
         "href":[
            "https://www.miamiherald.com/latest-news/article226677224.html"
         ]
      },
      {
         "text":"orders",
         "size":1,
         "href":[
            "https://www.miamiherald.com/latest-news/article226677224.html"
         ]
      },
      {
         "text":"aid trucks",
         "size":1,
         "href":[
            "https://www.miamiherald.com/latest-news/article226677224.html"
         ]
      },
      {
         "text":"Nicolas Maduro",
         "size":1,
         "href":[
            "https://www.miamiherald.com/latest-news/article226677224.html"
         ]
      },
      {
         "text":"territory",
         "size":1,
         "href":[
            "https://www.miamiherald.com/latest-news/article226677224.html"
         ]
      },
      {
         "text":"Venezuelan",
         "size":1,
         "href":[
            "https://www.miamiherald.com/latest-news/article226677224.html"
         ]
      },
      {
         "text":"Mueller",
         "size":1,
         "href":[
            "https://www.foxnews.com/politics/mueller-sentencing-memo-says-manafort-repeatedly-and-brazenly-violated-law"
         ]
      },
      {
         "text":"sentencing memo",
         "size":1,
         "href":[
            "https://www.foxnews.com/politics/mueller-sentencing-memo-says-manafort-repeatedly-and-brazenly-violated-law"
         ]
      },
      {
         "text":"Manafort",
         "size":1,
         "href":[
            "https://www.foxnews.com/politics/mueller-sentencing-memo-says-manafort-repeatedly-and-brazenly-violated-law"
         ]
      },
      {
         "text":"law",
         "size":1,
         "href":[
            "https://www.foxnews.com/politics/mueller-sentencing-memo-says-manafort-repeatedly-and-brazenly-violated-law"
         ]
      },
      {
         "text":"Drug pollution",
         "size":1,
         "href":[
            "https://www.independent.co.uk/environment/drug-pollution-in-rivers-reaching-damaging-levels-for-animals-and-ecosystems-scientists-warn-a8792566.html"
         ]
      },
      {
         "text":"rivers",
         "size":1,
         "href":[
            "https://www.independent.co.uk/environment/drug-pollution-in-rivers-reaching-damaging-levels-for-animals-and-ecosystems-scientists-warn-a8792566.html"
         ]
      },
      {
         "text":"levels",
         "size":1,
         "href":[
            "https://www.independent.co.uk/environment/drug-pollution-in-rivers-reaching-damaging-levels-for-animals-and-ecosystems-scientists-warn-a8792566.html"
         ]
      },
      {
         "text":"ecosystems",
         "size":1,
         "href":[
            "https://www.independent.co.uk/environment/drug-pollution-in-rivers-reaching-damaging-levels-for-animals-and-ecosystems-scientists-warn-a8792566.html"
         ]
      },
      {
         "text":"animals",
         "size":1,
         "href":[
            "https://www.independent.co.uk/environment/drug-pollution-in-rivers-reaching-damaging-levels-for-animals-and-ecosystems-scientists-warn-a8792566.html"
         ]
      },
      {
         "text":"drugs",
         "size":1,
         "href":[
            "https://www.independent.co.uk/environment/drug-pollution-in-rivers-reaching-damaging-levels-for-animals-and-ecosystems-scientists-warn-a8792566.html"
         ]
      },
      {
         "text":"number",
         "size":1,
         "href":[
            "https://www.independent.co.uk/environment/drug-pollution-in-rivers-reaching-damaging-levels-for-animals-and-ecosystems-scientists-warn-a8792566.html"
         ]
      },
      {
         "text":"water tables",
         "size":1,
         "href":[
            "https://www.independent.co.uk/environment/drug-pollution-in-rivers-reaching-damaging-levels-for-animals-and-ecosystems-scientists-warn-a8792566.html"
         ]
      },
      {
         "text":"concentrations",
         "size":1,
         "href":[
            "https://www.independent.co.uk/environment/drug-pollution-in-rivers-reaching-damaging-levels-for-animals-and-ecosystems-scientists-warn-a8792566.html"
         ]
      },
      {
         "text":"ecosystems",
         "size":1,
         "href":[
            "https://www.independent.co.uk/environment/drug-pollution-in-rivers-reaching-damaging-levels-for-animals-and-ecosystems-scientists-warn-a8792566.html"
         ]
      },
      {
         "text":"times",
         "size":1,
         "href":[
            "https://www.independent.co.uk/environment/drug-pollution-in-rivers-reaching-damaging-levels-for-animals-and-ecosystems-scientists-warn-a8792566.html"
         ]
      },
      {
         "text":"risks",
         "size":1,
         "href":[
            "https://www.independent.co.uk/environment/drug-pollution-in-rivers-reaching-damaging-levels-for-animals-and-ecosystems-scientists-warn-a8792566.html"
         ]
      },
      {
         "text":"Governor",
         "size":1,
         "href":[
            "https://www.newsweek.com/puerto-rico-governor-says-donald-trump-will-not-meet-discuss-hurricane-relief-1341483"
         ]
      },
      {
         "text":"Puerto Rico",
         "size":1,
         "href":[
            "https://www.newsweek.com/puerto-rico-governor-says-donald-trump-will-not-meet-discuss-hurricane-relief-1341483"
         ]
      },
      {
         "text":"Donald Trump",
         "size":1,
         "href":[
            "https://www.newsweek.com/puerto-rico-governor-says-donald-trump-will-not-meet-discuss-hurricane-relief-1341483"
         ]
      },
      {
         "text":"territory",
         "size":1,
         "href":[
            "https://www.newsweek.com/puerto-rico-governor-says-donald-trump-will-not-meet-discuss-hurricane-relief-1341483"
         ]
      },
      {
         "text":"U.S.",
         "size":1,
         "href":[
            "https://www.newsweek.com/puerto-rico-governor-says-donald-trump-will-not-meet-discuss-hurricane-relief-1341483"
         ]
      },
      {
         "text":"hurricane relief",
         "size":1,
         "href":[
            "https://www.newsweek.com/puerto-rico-governor-says-donald-trump-will-not-meet-discuss-hurricane-relief-1341483"
         ]
      },
      {
         "text":"World",
         "size":1,
         "href":[
            "https://www.independent.co.uk/news/world/food-supply-loss-plants-animals-biodiversity-un-report-ecosystems-a8791666.html"
         ]
      },
      {
         "text":"food supply",
         "size":1,
         "href":[
            "https://www.independent.co.uk/news/world/food-supply-loss-plants-animals-biodiversity-un-report-ecosystems-a8791666.html"
         ]
      },
      {
         "text":"threat",
         "size":1,
         "href":[
            "https://www.independent.co.uk/news/world/food-supply-loss-plants-animals-biodiversity-un-report-ecosystems-a8791666.html"
         ]
      },
      {
         "text":"loss",
         "size":1,
         "href":[
            "https://www.independent.co.uk/news/world/food-supply-loss-plants-animals-biodiversity-un-report-ecosystems-a8791666.html"
         ]
      },
      {
         "text":"biodiversity",
         "size":1,
         "href":[
            "https://www.independent.co.uk/news/world/food-supply-loss-plants-animals-biodiversity-un-report-ecosystems-a8791666.html"
         ]
      },
      {
         "text":"students",
         "size":1,
         "href":[
            "https://www.democracynow.org/2019/2/20/saudis_facing_criminal_charges_in_the"
         ]
      },
      {
         "text":"number",
         "size":1,
         "href":[
            "https://www.democracynow.org/2019/2/20/saudis_facing_criminal_charges_in_the"
         ]
      },
      {
         "text":"Saudi",
         "size":1,
         "href":[
            "https://www.democracynow.org/2019/2/20/saudis_facing_criminal_charges_in_the"
         ]
      },
      {
         "text":"investigation",
         "size":1,
         "href":[
            "https://www.democracynow.org/2019/2/20/saudis_facing_criminal_charges_in_the"
         ]
      },
      {
         "text":"law enforcement officials",
         "size":1,
         "href":[
            "https://www.democracynow.org/2019/2/20/saudis_facing_criminal_charges_in_the"
         ]
      },
      {
         "text":"charges",
         "size":1,
         "href":[
            "https://www.democracynow.org/2019/2/20/saudis_facing_criminal_charges_in_the"
         ]
      },
      {
         "text":"government",
         "size":1,
         "href":[
            "https://www.democracynow.org/2019/2/20/saudis_facing_criminal_charges_in_the"
         ]
      },
      {
         "text":"U.S.",
         "size":1,
         "href":[
            "https://www.democracynow.org/2019/2/20/saudis_facing_criminal_charges_in_the"
         ]
      },
      {
         "text":"disappearances",
         "size":1,
         "href":[
            "https://www.democracynow.org/2019/2/20/saudis_facing_criminal_charges_in_the"
         ]
      },
      {
         "text":"boy",
         "size":1,
         "href":[
            "https://m.dw.com/en/french-boy-suspected-of-reintroducing-measles-to-costa-rica/a-47654101"
         ]
      },
      {
         "text":"French",
         "size":1,
         "href":[
            "https://m.dw.com/en/french-boy-suspected-of-reintroducing-measles-to-costa-rica/a-47654101"
         ]
      },
      {
         "text":"measles",
         "size":1,
         "href":[
            "https://m.dw.com/en/french-boy-suspected-of-reintroducing-measles-to-costa-rica/a-47654101"
         ]
      },
      {
         "text":"Costa Rica",
         "size":1,
         "href":[
            "https://m.dw.com/en/french-boy-suspected-of-reintroducing-measles-to-costa-rica/a-47654101"
         ]
      },
      {
         "text":"Loss",
         "size":1,
         "href":[
            "https://www.commondreams.org/news/2019/02/22/terrifying-rapid-loss-biodiversity-placing-global-food-supplies-risk-irreversible"
         ]
      },
      {
         "text":"Biodiversity",
         "size":1,
         "href":[
            "https://www.commondreams.org/news/2019/02/22/terrifying-rapid-loss-biodiversity-placing-global-food-supplies-risk-irreversible"
         ]
      },
      {
         "text":"Food Supplies",
         "size":1,
         "href":[
            "https://www.commondreams.org/news/2019/02/22/terrifying-rapid-loss-biodiversity-placing-global-food-supplies-risk-irreversible"
         ]
      },
      {
         "text":"top",
         "size":1,
         "href":[
            "https://www.commondreams.org/news/2019/02/22/terrifying-rapid-loss-biodiversity-placing-global-food-supplies-risk-irreversible"
         ]
      },
      {
         "text":"Risk of 'Irreversible Collapse",
         "size":1,
         "href":[
            "https://www.commondreams.org/news/2019/02/22/terrifying-rapid-loss-biodiversity-placing-global-food-supplies-risk-irreversible"
         ]
      },
      {
         "text":"agenda",
         "size":1,
         "href":[
            "https://www.commondreams.org/news/2019/02/22/terrifying-rapid-loss-biodiversity-placing-global-food-supplies-risk-irreversible"
         ]
      },
      {
         "text":"government",
         "size":1,
         "href":[
            "https://www.commondreams.org/news/2019/02/22/terrifying-rapid-loss-biodiversity-placing-global-food-supplies-risk-irreversible"
         ]
      },
      {
         "text":"world",
         "size":1,
         "href":[
            "https://www.commondreams.org/news/2019/02/22/terrifying-rapid-loss-biodiversity-placing-global-food-supplies-risk-irreversible"
         ]
      },
      {
         "text":"news bulletin",
         "size":1,
         "href":[
            "https://www.commondreams.org/news/2019/02/22/terrifying-rapid-loss-biodiversity-placing-global-food-supplies-risk-irreversible"
         ]
      },
      {
         "text":"China",
         "size":1,
         "href":[
            "https://www.independent.co.uk/news/world/asia/china-censor-uighur-muslim-detention-camps-bbc-news-report-xinjiang-a8792486.html?fbclid=IwAR2b2wC_rXDaZ1fDiulYEI8qgbE8U8Pageh2sVFeSfnhNg56rIr13bJmQV4"
         ]
      },
      {
         "text":"news",
         "size":1,
         "href":[
            "https://www.independent.co.uk/news/world/asia/china-censor-uighur-muslim-detention-camps-bbc-news-report-xinjiang-a8792486.html?fbclid=IwAR2b2wC_rXDaZ1fDiulYEI8qgbE8U8Pageh2sVFeSfnhNg56rIr13bJmQV4"
         ]
      },
      {
         "text":"air",
         "size":1,
         "href":[
            "https://www.independent.co.uk/news/world/asia/china-censor-uighur-muslim-detention-camps-bbc-news-report-xinjiang-a8792486.html?fbclid=IwAR2b2wC_rXDaZ1fDiulYEI8qgbE8U8Pageh2sVFeSfnhNg56rIr13bJmQV4"
         ]
      },
      {
         "text":"BBC",
         "size":1,
         "href":[
            "https://www.independent.co.uk/news/world/asia/china-censor-uighur-muslim-detention-camps-bbc-news-report-xinjiang-a8792486.html?fbclid=IwAR2b2wC_rXDaZ1fDiulYEI8qgbE8U8Pageh2sVFeSfnhNg56rIr13bJmQV4"
         ]
      },
      {
         "text":"detention camps",
         "size":1,
         "href":[
            "https://www.independent.co.uk/news/world/asia/china-censor-uighur-muslim-detention-camps-bbc-news-report-xinjiang-a8792486.html?fbclid=IwAR2b2wC_rXDaZ1fDiulYEI8qgbE8U8Pageh2sVFeSfnhNg56rIr13bJmQV4"
         ]
      },
      {
         "text":"Muslim",
         "size":1,
         "href":[
            "https://www.independent.co.uk/news/world/asia/china-censor-uighur-muslim-detention-camps-bbc-news-report-xinjiang-a8792486.html?fbclid=IwAR2b2wC_rXDaZ1fDiulYEI8qgbE8U8Pageh2sVFeSfnhNg56rIr13bJmQV4"
         ]
      },
      {
         "text":"number",
         "size":1,
         "href":[
            "https://www.facs.org/media/press-releases/2019/medicaid022219"
         ]
      },
      {
         "text":"patients",
         "size":1,
         "href":[
            "https://www.facs.org/media/press-releases/2019/medicaid022219"
         ]
      },
      {
         "text":"expansion",
         "size":1,
         "href":[
            "https://www.facs.org/media/press-releases/2019/medicaid022219"
         ]
      },
      {
         "text":"cancer",
         "size":1,
         "href":[
            "https://www.facs.org/media/press-releases/2019/medicaid022219"
         ]
      },
      {
         "text":"Journal",
         "size":1,
         "href":[
            "https://www.facs.org/media/press-releases/2019/medicaid022219"
         ]
      },
      {
         "text":"Medicaid",
         "size":1,
         "href":[
            "https://www.facs.org/media/press-releases/2019/medicaid022219"
         ]
      },
      {
         "text":"study findings",
         "size":1,
         "href":[
            "https://www.facs.org/media/press-releases/2019/medicaid022219"
         ]
      },
      {
         "text":"American College of Surgeons",
         "size":1,
         "href":[
            "https://www.facs.org/media/press-releases/2019/medicaid022219"
         ]
      },
      {
         "text":"alcohol poisoning",
         "size":1,
         "href":[
            "https://www.bbc.com/news/world-asia-india-47341941"
         ]
      },
      {
         "text":"alcohol",
         "size":1,
         "href":[
            "https://www.bbc.com/news/world-asia-india-47341941"
         ]
      },
      {
         "text":"India",
         "size":1,
         "href":[
            "https://www.bbc.com/news/world-asia-india-47341941"
         ]
      },
      {
         "text":"form",
         "size":1,
         "href":[
            "https://www.bbc.com/news/world-asia-india-47341941"
         ]
      },
      {
         "text":"alcohol",
         "size":1,
         "href":[
            "https://www.bbc.com/news/world-asia-india-47341941"
         ]
      },
      {
         "text":"Methanol",
         "size":1,
         "href":[
            "https://www.bbc.com/news/world-asia-india-47341941"
         ]
      },
      {
         "text":"Curiosity Rover",
         "size":1,
         "href":[
            "https://www.jpl.nasa.gov/news/news.php?feature=7339"
         ]
      },
      {
         "text":"Discoveries",
         "size":1,
         "href":[
            "https://www.jpl.nasa.gov/news/news.php?feature=7339"
         ]
      },
      {
         "text":"Venezuela",
         "size":1,
         "href":[
            "https://www.bbc.co.uk/news/world-latin-america-47343918"
         ]
      },
      {
         "text":"posts",
         "size":1,
         "href":[
            "https://www.bbc.co.uk/news/world-latin-america-47343918"
         ]
      },
      {
         "text":"soldiers",
         "size":1,
         "href":[
            "https://www.bbc.co.uk/news/world-latin-america-47343918"
         ]
      },
      {
         "text":"border",
         "size":1,
         "href":[
            "https://www.bbc.co.uk/news/world-latin-america-47343918"
         ]
      },
      {
         "text":"Trucks",
         "size":1,
         "href":[
            "https://www.washingtonpost.com/world/2019/02/23/how-crisis-venezuela-is-unfolding-images/?noredirect=on&utm_term=.3fa99436467c"
         ]
      },
      {
         "text":"aid",
         "size":1,
         "href":[
            "https://www.washingtonpost.com/world/2019/02/23/how-crisis-venezuela-is-unfolding-images/?noredirect=on&utm_term=.3fa99436467c"
         ]
      },
      {
         "text":"Venezuela",
         "size":1,
         "href":[
            "https://www.washingtonpost.com/world/2019/02/23/how-crisis-venezuela-is-unfolding-images/?noredirect=on&utm_term=.3fa99436467c"
         ]
      },
      {
         "text":"forces",
         "size":1,
         "href":[
            "https://www.washingtonpost.com/world/2019/02/23/how-crisis-venezuela-is-unfolding-images/?noredirect=on&utm_term=.3fa99436467c"
         ]
      },
      {
         "text":"Maduro",
         "size":1,
         "href":[
            "https://www.washingtonpost.com/world/2019/02/23/how-crisis-venezuela-is-unfolding-images/?noredirect=on&utm_term=.3fa99436467c"
         ]
      },
      {
         "text":"fire",
         "size":1,
         "href":[
            "https://www.washingtonpost.com/world/2019/02/23/how-crisis-venezuela-is-unfolding-images/?noredirect=on&utm_term=.3fa99436467c"
         ]
      },
      {
         "text":"β-Hydroxybutyrate",
         "size":1,
         "href":[
            "https://news.gsu.edu/2018/09/10/researchers-identify-molecule-with-anti-aging-effects-on-vascular-system-study-finds/"
         ]
      },
      {
         "text":"aging",
         "size":1,
         "href":[
            "https://news.gsu.edu/2018/09/10/researchers-identify-molecule-with-anti-aging-effects-on-vascular-system-study-finds/"
         ]
      },
      {
         "text":"Venezuela",
         "size":1,
         "href":[
            "https://www.reuters.com/article/us-venezuela-politics-colombia/venezuela-breaks-diplomatic-relations-with-colombia-over-aid-maduro-says-idUSKCN1QC0SR"
         ]
      },
      {
         "text":"relations",
         "size":1,
         "href":[
            "https://www.reuters.com/article/us-venezuela-politics-colombia/venezuela-breaks-diplomatic-relations-with-colombia-over-aid-maduro-says-idUSKCN1QC0SR"
         ]
      },
      {
         "text":"Colombia",
         "size":1,
         "href":[
            "https://www.reuters.com/article/us-venezuela-politics-colombia/venezuela-breaks-diplomatic-relations-with-colombia-over-aid-maduro-says-idUSKCN1QC0SR"
         ]
      },
      {
         "text":"Maduro",
         "size":1,
         "href":[
            "https://www.reuters.com/article/us-venezuela-politics-colombia/venezuela-breaks-diplomatic-relations-with-colombia-over-aid-maduro-says-idUSKCN1QC0SR"
         ]
      },
      {
         "text":"aid",
         "size":1,
         "href":[
            "https://www.reuters.com/article/us-venezuela-politics-colombia/venezuela-breaks-diplomatic-relations-with-colombia-over-aid-maduro-says-idUSKCN1QC0SR"
         ]
      },
      {
         "text":"China",
         "size":1,
         "href":[
            "https://www.independent.co.uk/news/world/asia/china-censor-uighur-muslim-detention-camps-bbc-news-report-xinjiang-a8792486.html"
         ]
      },
      {
         "text":"news report",
         "size":1,
         "href":[
            "https://www.independent.co.uk/news/world/asia/china-censor-uighur-muslim-detention-camps-bbc-news-report-xinjiang-a8792486.html"
         ]
      },
      {
         "text":"detention camps",
         "size":1,
         "href":[
            "https://www.independent.co.uk/news/world/asia/china-censor-uighur-muslim-detention-camps-bbc-news-report-xinjiang-a8792486.html"
         ]
      },
      {
         "text":"BBC",
         "size":1,
         "href":[
            "https://www.independent.co.uk/news/world/asia/china-censor-uighur-muslim-detention-camps-bbc-news-report-xinjiang-a8792486.html"
         ]
      },
      {
         "text":"Muslim",
         "size":1,
         "href":[
            "https://www.independent.co.uk/news/world/asia/china-censor-uighur-muslim-detention-camps-bbc-news-report-xinjiang-a8792486.html"
         ]
      },
      {
         "text":"militias",
         "size":1,
         "href":[
            "https://www.washingtonpost.com/world/the_americas/guaido-and-supporters-prepare-to-challenge-maduros-blockade-of-aid/2019/02/22/b77eff44-3632-11e9-8375-e3dcf6b68558_story.html?noredirect=on&utm_term=.c97cf28b5188"
         ]
      },
      {
         "text":"fire",
         "size":1,
         "href":[
            "https://www.washingtonpost.com/world/the_americas/guaido-and-supporters-prepare-to-challenge-maduros-blockade-of-aid/2019/02/22/b77eff44-3632-11e9-8375-e3dcf6b68558_story.html?noredirect=on&utm_term=.c97cf28b5188"
         ]
      },
      {
         "text":"border",
         "size":1,
         "href":[
            "https://www.washingtonpost.com/world/the_americas/guaido-and-supporters-prepare-to-challenge-maduros-blockade-of-aid/2019/02/22/b77eff44-3632-11e9-8375-e3dcf6b68558_story.html?noredirect=on&utm_term=.c97cf28b5188"
         ]
      },
      {
         "text":"Brazil",
         "size":1,
         "href":[
            "https://www.washingtonpost.com/world/the_americas/guaido-and-supporters-prepare-to-challenge-maduros-blockade-of-aid/2019/02/22/b77eff44-3632-11e9-8375-e3dcf6b68558_story.html?noredirect=on&utm_term=.c97cf28b5188"
         ]
      },
      {
         "text":"Venezuela",
         "size":1,
         "href":[
            "https://www.washingtonpost.com/world/the_americas/guaido-and-supporters-prepare-to-challenge-maduros-blockade-of-aid/2019/02/22/b77eff44-3632-11e9-8375-e3dcf6b68558_story.html?noredirect=on&utm_term=.c97cf28b5188"
         ]
      },
      {
         "text":"videos",
         "size":1,
         "href":[
            "https://www.buzzfeednews.com/article/carolineodonovan/youtube-just-demonetized-anti-vax-channels"
         ]
      },
      {
         "text":"YouTube",
         "size":1,
         "href":[
            "https://www.buzzfeednews.com/article/carolineodonovan/youtube-just-demonetized-anti-vax-channels"
         ]
      },
      {
         "text":"Channels",
         "size":1,
         "href":[
            "https://www.buzzfeednews.com/article/carolineodonovan/youtube-just-demonetized-anti-vax-channels"
         ]
      },
      {
         "text":"videos",
         "size":1,
         "href":[
            "https://www.buzzfeednews.com/article/carolineodonovan/youtube-just-demonetized-anti-vax-channels"
         ]
      },
      {
         "text":"ad placements",
         "size":1,
         "href":[
            "https://www.buzzfeednews.com/article/carolineodonovan/youtube-just-demonetized-anti-vax-channels"
         ]
      },
      {
         "text":"advertisers",
         "size":1,
         "href":[
            "https://www.buzzfeednews.com/article/carolineodonovan/youtube-just-demonetized-anti-vax-channels"
         ]
      },
      {
         "text":"vaccination",
         "size":1,
         "href":[
            "https://www.buzzfeednews.com/article/carolineodonovan/youtube-just-demonetized-anti-vax-channels"
         ]
      },
      {
         "text":"ads",
         "size":1,
         "href":[
            "https://www.buzzfeednews.com/article/carolineodonovan/youtube-just-demonetized-anti-vax-channels"
         ]
      },
      {
         "text":"Government",
         "size":1,
         "href":[
            "https://www.cbc.ca/news/health/federal-aid-homeopaths-honduras-1.5030384"
         ]
      },
      {
         "text":"Canadian",
         "size":1,
         "href":[
            "https://www.cbc.ca/news/health/federal-aid-homeopaths-honduras-1.5030384"
         ]
      },
      {
         "text":"money",
         "size":1,
         "href":[
            "https://www.cbc.ca/news/health/federal-aid-homeopaths-honduras-1.5030384"
         ]
      },
      {
         "text":"homeopathy",
         "size":1,
         "href":[
            "https://www.cbc.ca/news/health/federal-aid-homeopaths-honduras-1.5030384"
         ]
      },
      {
         "text":"Honduras",
         "size":1,
         "href":[
            "https://www.cbc.ca/news/health/federal-aid-homeopaths-honduras-1.5030384"
         ]
      },
      {
         "text":"Glencore",
         "size":1,
         "href":[
            "https://cleantechnica.com/2019/02/22/coal-giant-glencore-announces-plan-to-cap-coal-production-at-current-levels/?utm_source=feedburner&utm_medium=feed&utm_campaign=Feed%3A+IM-cleantechnica+%28CleanTechnica%29"
         ]
      },
      {
         "text":"world",
         "size":1,
         "href":[
            "https://cleantechnica.com/2019/02/22/coal-giant-glencore-announces-plan-to-cap-coal-production-at-current-levels/?utm_source=feedburner&utm_medium=feed&utm_campaign=Feed%3A+IM-cleantechnica+%28CleanTechnica%29"
         ]
      },
      {
         "text":"coal miners",
         "size":1,
         "href":[
            "https://cleantechnica.com/2019/02/22/coal-giant-glencore-announces-plan-to-cap-coal-production-at-current-levels/?utm_source=feedburner&utm_medium=feed&utm_campaign=Feed%3A+IM-cleantechnica+%28CleanTechnica%29"
         ]
      },
      {
         "text":"coal production capacity",
         "size":1,
         "href":[
            "https://cleantechnica.com/2019/02/22/coal-giant-glencore-announces-plan-to-cap-coal-production-at-current-levels/?utm_source=feedburner&utm_medium=feed&utm_campaign=Feed%3A+IM-cleantechnica+%28CleanTechnica%29"
         ]
      },
      {
         "text":"levels",
         "size":1,
         "href":[
            "https://cleantechnica.com/2019/02/22/coal-giant-glencore-announces-plan-to-cap-coal-production-at-current-levels/?utm_source=feedburner&utm_medium=feed&utm_campaign=Feed%3A+IM-cleantechnica+%28CleanTechnica%29"
         ]
      },
      {
         "text":"targets",
         "size":1,
         "href":[
            "https://cleantechnica.com/2019/02/22/coal-giant-glencore-announces-plan-to-cap-coal-production-at-current-levels/?utm_source=feedburner&utm_medium=feed&utm_campaign=Feed%3A+IM-cleantechnica+%28CleanTechnica%29"
         ]
      },
      {
         "text":"line",
         "size":1,
         "href":[
            "https://cleantechnica.com/2019/02/22/coal-giant-glencore-announces-plan-to-cap-coal-production-at-current-levels/?utm_source=feedburner&utm_medium=feed&utm_campaign=Feed%3A+IM-cleantechnica+%28CleanTechnica%29"
         ]
      },
      {
         "text":"Paris Climate Agreement",
         "size":1,
         "href":[
            "https://cleantechnica.com/2019/02/22/coal-giant-glencore-announces-plan-to-cap-coal-production-at-current-levels/?utm_source=feedburner&utm_medium=feed&utm_campaign=Feed%3A+IM-cleantechnica+%28CleanTechnica%29"
         ]
      },
      {
         "text":"aid",
         "size":1,
         "href":[
            "https://abcnews.go.com/International/starving-venezuelans-desperately-hoping-aid-arrives/story?id=61245696"
         ]
      },
      {
         "text":"Maduro",
         "size":1,
         "href":[
            "https://abcnews.go.com/International/starving-venezuelans-desperately-hoping-aid-arrives/story?id=61245696"
         ]
      },
      {
         "text":"Venezuelans",
         "size":1,
         "href":[
            "https://abcnews.go.com/International/starving-venezuelans-desperately-hoping-aid-arrives/story?id=61245696"
         ]
      },
      {
         "text":"response",
         "size":1,
         "href":[
            "https://abcnews.go.com/International/starving-venezuelans-desperately-hoping-aid-arrives/story?id=61245696"
         ]
      },
      {
         "text":"aid",
         "size":1,
         "href":[
            "https://abcnews.go.com/International/starving-venezuelans-desperately-hoping-aid-arrives/story?id=61245696"
         ]
      },
      {
         "text":"comments",
         "size":1,
         "href":[
            "https://abcnews.go.com/International/starving-venezuelans-desperately-hoping-aid-arrives/story?id=61245696"
         ]
      },
      {
         "text":"border",
         "size":1,
         "href":[
            "https://abcnews.go.com/International/starving-venezuelans-desperately-hoping-aid-arrives/story?id=61245696"
         ]
      },
      {
         "text":"Colombia",
         "size":1,
         "href":[
            "https://abcnews.go.com/International/starving-venezuelans-desperately-hoping-aid-arrives/story?id=61245696"
         ]
      },
      {
         "text":"Brazil",
         "size":1,
         "href":[
            "https://abcnews.go.com/International/starving-venezuelans-desperately-hoping-aid-arrives/story?id=61245696"
         ]
      },
      {
         "text":"border",
         "size":1,
         "href":[
            "https://abcnews.go.com/International/starving-venezuelans-desperately-hoping-aid-arrives/story?id=61245696"
         ]
      }
   ]
}

console.log(combineDuplicates(obj.data));