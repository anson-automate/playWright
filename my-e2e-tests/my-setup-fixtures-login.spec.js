import {test} from '@playwright/test'

export const myTest = test.extend({
    logIn: async({page},use)=>{
        //console.log('set up')
        await page.goto('https://www.saucedemo.com/v1/index.html');
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').fill('secret_sauce');
        
        await page.getByRole('button', { name: 'LOGIN' }).click();
        await use(page)
       // console.log('tear down')
    }

});