import { By } from "selenium-webdriver";
import {BasePage} from '../2.7/basePage'; 
const fs = require('fs'); 

export class CookieClass extends BasePage {
    engBtn: By = By.id('langSelect-EN'); 
    cookieBtn: By = By.id('bigCookie'); 
    cursor: By = By.xpath('//div[@class="product unlocked enabled"]'); 
    twitterBtn: By = By.id('topbarTwitter'); 
    legacyBtn: By = By.xpath('//div[text()="Legacy"]'); 
    ascendBtn: By = By.xpath('//a[text()="Ascend"]'); 
    reBtn: By = By.xpath('//span[@class="fancyText"]'); 
    yesBtn: By = By.xpath('//a[text()="Yes"]'); 
    bakeName: By = By.id('bakeryName')

    constructor() {
        super({url: 'https://orteil.dashnet.org/cookieclicker/'}); 
    }; 

    async repeatClick(clickAmount, clickThing) {
        for(let i = 0; i < clickAmount; i++) {
            await this.click(clickThing); 
        }; 
    }; 

    async tabSwitch() {
        let myTabs = await this.driver.getAllWindowHandles(); 
        await this.driver.switchTo().window(myTabs[1]); 
        await this.driver.sleep(1500); 
        fs.writeFile(`${__dirname}/twitterPicture.png`, 
        await this.driver.takeScreenshot(), "base64", 
        (e) => {
            if(e) console.error(e)
            else console.log('saved')
        }); 
        await this.driver.close(); 
        await this.driver.switchTo().window(myTabs[0]); 
    }; 

}; 