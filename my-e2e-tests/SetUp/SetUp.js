import {test,expect} from '@playwright/test'
import { LoginPageSL } from '../pages/loginPage'
import { LogOut } from '../pages/logOut'


exports.test = test.extend({

    LoginPage : async ({page},use)=>{
        await use(new LoginPageSL(page))
    },
    LogOutPg : async({page},use)=>{
        await use(new LogOut(page))
    }

})

exports.expect = expect