import { Builder, By, Capabilities, until, WebDriver, WebElement } from "selenium-webdriver";
const chromedriver = require('chromedriver'); 
const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build(); 

class enterWanted {
    //first we need our driver, and our url
    driver: WebDriver; 
    url: string = 'https://devmountain-qa.github.io/enter-wanted/1.4_Assignment/index.html'; 
    //then the locators go below
    headerInput: By = By.name('hdrInput'); 
    mkeInput: By = By.name('mkeInput'); 
    oaiInput: By = By.xpath('(//input[@class="inputField"])[3]'); 
    submitBtn: By = By.xpath('//button[text()=" Submit "]'); 
    clearBtn: By = By.id('clearBtn'); 
    //Constructor goes below
    constructor(driver: WebDriver) {
        this.driver = driver; 
    }; 
    //methods go below
    async navigate() {
        await this.driver.get(this.url); 
        await this.driver.wait(until.elementLocated(this.headerInput)); 
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
}; 

const ewPage = new enterWanted(driver); 

test('enter wanted to make sure buttons work', async () => {
    await ewPage.navigate(); 
    await ewPage.sendKeys(ewPage.headerInput, "BlahBlah"); 
    await ewPage.sendKeys(ewPage.mkeInput, "blah blah"); 
    await ewPage.sendKeys(ewPage.oaiInput, "blah Blah "); 
    await ewPage.click(ewPage.submitBtn); 
    await ewPage.click(ewPage.clearBtn); 
    await ewPage.driver.sleep(4000); 
    await ewPage.driver.quit(); 
}); 