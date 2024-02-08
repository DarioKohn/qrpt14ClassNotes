import {Builder, By, Capabilities, WebDriver, WebElement} from 'selenium-webdriver'; 
const chromedriver = require('chromedriver'); 
const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build(); 


describe('practice locators in tests', () => {
    beforeEach(async () => {
        await driver.get('https://www.google.com/');
    });
    afterAll(async () => {
        await driver.quit(); 
    }); 

    const searchBar: By = By.name('q')
    const results: By = By.id('rso')

    test('searching for legos', async () => {
        await driver.findElement(searchBar).sendKeys("Car Legos\n"); 
        let resultText = await driver.findElement(results).getText(); 
        expect(resultText).toContain('LEGO® Car Toys & Sets');
       
    });
});