import {test as base} from "./SignUp.js"
import { login_loc } from "../pages/Login.js"

export let test = base.extend({

    LoginPage: async ({page},use) => {

        let login= new login_loc(page)
        await login.login_url()
        await login.login_details()
        await use(page)
        
    }
})
