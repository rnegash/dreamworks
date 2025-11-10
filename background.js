// Scraping code

// list of sites and selectors

browser.browserAction.onClicked.addListener(() => {
    browser.tabs.create({
        url: "roles/roles.html",
    });
});