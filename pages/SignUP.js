import signup_data from '../test_data/SignUP.json'
import { generateRandomNumber } from '../utility/Random_Number.js'

export class signup_loc{
    constructor(page){
        this.page=page
        this.name=page.locator(`//input[@placeholder="Name"]`)
        this.email=page.locator(`//input[@data-qa="signup-email"]`)
        this.signup_button=page.locator(`//button[@data-qa="signup-button"]`)
    }

    async signup_URL() {
        await this.page.goto(signup_data.URL)
    }

    async signup_details(username,email) {
        let numb=generateRandomNumber()
        await this.name.fill(signup_data.name+numb)
        await this.email.fill(signup_data.email)
        await this.signup_button.click()
    }
}