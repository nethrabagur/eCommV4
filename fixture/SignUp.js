
import {test as base } from "@playwright/test"
import { signup_loc } from "../pages/SignUP.js"
import { signUpDetails_loc } from "../pages/SignUp_Details.js"

export let test = base.extend({
    SignUpPage: async ({page},use) => {
        let signUp=new signup_loc(page)
        await signUp.signup_URL()
        await signUp.signup_details()
        
        let signUpDetails=new signUpDetails_loc(page)
        await signUpDetails.SignUpDetails_details()
        await use(page)
    }
})

