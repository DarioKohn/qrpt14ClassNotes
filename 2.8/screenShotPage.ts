import {By} from 'selenium-webdriver'; 
import { BasePage } from '../2.7/basePage';; 

export class googlePage extends BasePage {
    searchBar: By = By.name('q'); 
    results: By = By.id('rcnt'); 
    constructor(){
        super({url: 'https://www.google.com/'}); 
    }; 
    async search(searchThing: string) {
        return this.setInput(this.searchBar, `${searchThing}\n`); 
    }; 
    async getResults(){
        return this.getText(this.results); 
    }; 
}; 