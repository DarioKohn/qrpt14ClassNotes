import { CookieClass } from "./setupPage";
const mars = new CookieClass(); 

test('Can navigate the basics of cookie clicker',async () => {
    await mars.navigate(); 
    await mars.click(mars.engBtn); 
    await mars.driver.sleep(2000)
    let shopName = await mars.getText(mars.bakeName); 
    expect(shopName).toContain(`${shopName}`); 
    console.log(`${shopName}`)
    await mars.repeatClick(350, mars.cookieBtn); 
    await mars.repeatClick(10, mars.cursor); 
    await mars.click(mars.twitterBtn); 
    await mars.tabSwitch(); 
    await mars.click(mars.legacyBtn); 
    await mars.click(mars.ascendBtn); 
    await mars.click(mars.reBtn); 
    await mars.click(mars.yesBtn); 
    await mars.repeatClick(300, mars.cookieBtn);
    await mars.repeatClick(10, mars.cursor);  
    await mars.driver.sleep(2000); 
    await mars.driver.quit(); 
})