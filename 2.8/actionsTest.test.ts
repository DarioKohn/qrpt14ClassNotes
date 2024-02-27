import { ActionPractice } from "./actionsPractice";
const page = new ActionPractice(); 
const fs = require('fs'); 

test("look at new rules", async () => {
    await page.navigate(); 
    await page.click(page.cookieBtn)
    await page.canHover(); 
    await page.click(page.ruleChange); 
    await page.scrollToRule(); 
    await page.driver.quit(); 
}); 