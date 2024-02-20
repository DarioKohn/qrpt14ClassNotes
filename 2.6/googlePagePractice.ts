import {By, until, WebDriver, WebElement} from 'selenium-webdriver'; 
const chromedriver = require('chromedriver'); 

export class GooglePage {
    //required parameters in order to use the class outside of the page.
    driver: WebDriver; 
    url: string = 'https://www.google.com/'; 
    //locators for the test
    searchBar: By = By.name('q'); 
    results: By = By.css('#cnt'); 
    //this iss setting the parameters in order to use the class outside of the page.
    constructor(driver: WebDriver, url: string) {
        this.driver = driver;
        this.url = url; 
    }; 
     //methods go below
     async navigate() {
        await this.driver.get(this.url); 
        await this.driver.wait(until.elementLocated(this.searchBar)); 
    }; 
    //navigates to the page and waits for the header to be located ^
    async getElement(elementBy: By): Promise<WebElement> {
        await this.driver.wait(until.elementLocated(elementBy)); 
        let element = await this.driver.findElement(elementBy); 
        await this.driver.wait(until.elementIsVisible(element)); 
        return element; 
    }; 
    //this method gets the element requested makes sure its on the page and then returns the element for later use.
    async sendKeys(elementBy: By, keys: any): Promise<void> {
        let input = await this.getElement(elementBy); 
        await input.clear(); 
        return input.sendKeys(keys); 
    }; 
    //set an input and clear said input and enter the keys provided ^^
    async click(elementBy: By) {
       await this.driver.wait(until.elementLocated(elementBy)); 
       return (await this.driver.findElement(elementBy)).click(); 
    }; 
    //locating an element and clicking on the element 
    async search(searchTerm: string) {
        return this.sendKeys(this.searchBar, `${searchTerm}\n`); 
    }; 
    //google specific it is setting the search bars input.
    async getText(elementBy: By) {
        await this.driver.wait(until.elementLocated(elementBy)); 
        return this.driver.findElement(elementBy).getText(); 
    }; 
    //finding the element and then getting the test.
    async getResults() {
        return this.getText(this.results); 
    }; 
}; 