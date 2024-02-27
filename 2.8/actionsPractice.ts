import { BasePage } from "../2.7/basePage";
import {By} from 'selenium-webdriver'; 
const fs = require('fs')

export class ActionPractice extends BasePage {
    cookieBtn: By = By.xpath('//button[@class="onetrust-close-btn-handler onetrust-close-btn-ui banner-close-button ot-close-icon"]'); 
    newsDrop: By = By.xpath('(//span[text()="News"])[1]'); 
    ruleChange: By = By.xpath('(//a[text()="Rule Changes"])'); 
    thirdRule: By = By.xpath('(//div[@class="p-wysiwyg styles-sc-1ewxgrh-0 styles-sc-9861x0-0 bjPBFY gLBcvo"])[3]'); 

    constructor() {
        super({url: "https://www.mlb.com/"}); 
    }; 

    async canHover() {
        const hover = this.driver.actions(); 
        const startElement = await this.getElement(this.newsDrop); 
        await this.actionWiggle(hover, startElement, 100); 
        await hover.perform(); 
    }; 
    async scrollToRule() {
        const scrollThing = await this.getElement(this.thirdRule); 
        await this.driver.actions()
        .move({origin: scrollThing}) 
        .perform(); 

        await fs.writeFile(`${__dirname}/mlb.png`,
        await this.driver.takeScreenshot(), "base64", 
        (e) => {
            if (e) console.error(e)
            else console.log('It Worked')!
        }); 
    }; 
}