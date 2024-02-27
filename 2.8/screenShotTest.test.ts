import  {googlePage} from './screenShotPage'; 
const page = new googlePage(); 
const fs =require('fs'); 

test('do a search', async () => {
    await page.navigate(); 
    await page.search('Chicken Noodle Soup'); 
    let text = await page.getResults(); 
    expect(text).toContain('Chicken Noodle Soup'); 
    //write a file with the text results
    await fs.writeFile(`${__dirname}/googleResults.txt`, text, (e) => {
        if (e) console.error(e)
        else console.log('page saved'); 
    }); 
    //take a screenshot of the results page.
    await fs.writeFile(`${__dirname}/googleResults.png`, 
    await page.driver.takeScreenshot(), "base64", 
    (e) => {
        if (e) console.error(e)
        else console.log('A picture is worth a thousand words'); 
    }); 
    await page.driver.quit(); 
}); 