import {test,expect} from '@playwright/test'
import { LoginPageSL } from '../pages/loginPage'


exports.test = test.extend({

    LoginPage : async ({page},use)=>{
        await use(new LoginPageSL(page))
    }

})

exports.expect = expect