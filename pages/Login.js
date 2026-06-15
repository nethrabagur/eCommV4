import login_data from '../test_data/Login.json'

export class login_loc{
    constructor(page){
        this.page=page
        this.email=page.locator(`//input[@data-qa="login---------email"]`)
        this.password=page.locator(`//input[@data-qa="login------------password"]`)
        this.login_button=page.locator(`//button[@data-qa="login----------button"]`)
    }
    async login_url() {
        await this.page.goto(login_data.URL)
    }
    async login_details() {

        await this.email.fill(login_data['login-email'])
        await this.password.fill(login_data['login-password'])
        await this.login_button.click()
        
    }
}
