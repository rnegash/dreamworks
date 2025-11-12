const cheerio = require("cheerio");

const url = "https://join.com/companies/caya";

const containerSelector = "#openPositionsSection";
const textSelector = "h3";

const scrapeData = async () => {
  try {
    const response = await fetch(url);

    const body = await response.text();

    const markup = cheerio.load(body);

    const jobsContainerMarkup = markup(containerSelector).find("a");
    const scrapedJobs: Array<string> = [];

    markup(jobsContainerMarkup).each((i: number, link: string) => {
      const jobNode = markup(link);
      const jobText = jobNode.find(textSelector).text();
      scrapedJobs.push(jobText);
    });

    console.log(scrapedJobs);
  } catch (error) {
    console.error(error);
  }
};

scrapeData();
