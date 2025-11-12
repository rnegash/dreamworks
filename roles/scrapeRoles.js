const cheerio = require("cheerio");

const url = "https://join.com/companies/caya"

const selector = "#openPositionsSection"

const scrapeData = async () => {
    try {

        const response = await fetch(url)

        const body = await response.text()

        const markup = cheerio.load(body)

        const jobsMarkup = markup(selector).find("a")
        const jobs = []

        markup(jobsMarkup).each((i, link) => {
            const jobNode = markup(link)
            const jobText = jobNode.find("h3").text()
            jobs.push(jobText)
        })

        console.log(jobs)
    } catch (error) {
        console.error(error)
    }
}

scrapeData()

