import SignUpDetails_data from '../test_data/SignUpDetails.json'
import { selectByText } from '../utility/DropDown'
import { generateRandomNumber } from '../utility/Random_Number'

export class signUpDetails_loc{
    constructor(page){
        this.page=page
        this.title=page.locator(`//input[@id="id_gender1"]`)
        this.password=page.locator(`//input[@id="password"]`)
        this.day=page.locator(`//select[@id="days"]`)
        this.month=page.locator(`//select[@id="months"]`)
        this.year=page.locator(`//select[@id="years"]`)
        this.first_name=page.locator(`//input[@id="first_name"]`)
        this.last_name=page.locator(`//input[@id="last_name"]`)
        this.company=page.locator(`//input[@id="company"]`)
        this.address=page.locator(`//input[@id="address1"]`)
        this.address2=page.locator(`//input[@id="address2"]`)
        this.country=page.locator(`//select[@id="country"]`)
        this.state=page.locator(`//input[@id="state"]`)
        this.city=page.locator(`//input[@id="city"]`)
        this.zipcode=page.locator(`//input[@id="zipcode"]`)
        this.mobilenumber=page.locator(`//input[@id="mobile_number"]`)
        this.createAccount_button=page.locator(`//button[@data-qa="create-account"]`)
    }

    async SignUpDetails_details () {
        let numb=generateRandomNumber()
        await this.title.click()
        await this.password.fill(SignUpDetails_data.password)
        await selectByText(this.day,SignUpDetails_data.days)
        await selectByText(this.month,SignUpDetails_data.months)
        await selectByText(this.year,SignUpDetails_data.years)
        await this.first_name.fill(SignUpDetails_data.first_name+numb)
        await this.last_name.fill(SignUpDetails_data.last_name+numb)
        await this.company.fill(SignUpDetails_data.company+numb)
        await this.address.fill(SignUpDetails_data.address+numb)
        await this.address2.fill(SignUpDetails_data.address2+numb)
        await selectByText(this.country,SignUpDetails_data.country)
        await this.state.fill(SignUpDetails_data.state)
        await this.city.fill(SignUpDetails_data.city)
        await this.zipcode.fill(SignUpDetails_data.zipcode)
        await this.mobilenumber.fill(SignUpDetails_data.mobile_number)
        await this.createAccount_button.click()        
    }
}
