import { Google } from "./baseGooglePage";
const google = new Google(); 

test('do a search',async () => {
    await google.navigate(); 
    await google.search('Chicago Cubs'); 
    let results = await google.getResults(); 
    expect(results).toContain('Chicago Cubs'); 
    await google.driver.quit(); 
})