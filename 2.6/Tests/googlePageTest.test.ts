// import the class from the page object
import { GooglePage } from "../googlePagePractice";
// import the remainder of what we need from selenium 
import { Builder, Capabilities, WebDriver } from "selenium-webdriver";
const chromedriver = require('chromedriver'); 
const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build(); 
// pull over the class from the page object and set it as a variable
const page = new GooglePage(driver, "https://www.google.com/"); 

//write test below

test('do a search', async () => {
    await page.navigate(); 
    await page.search('Movies Near Me'); 
    await page.getResults(); 
    await page.driver.quit(); 
}); 