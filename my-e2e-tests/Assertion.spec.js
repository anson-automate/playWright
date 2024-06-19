
import {test,expect} from '@playwright/test'

test('Assertion',async({page})=>{
    
    await page.goto('https://demo.nopcommerce.com/register')

    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')
    await expect(page).toHaveTitle('nopCommerce demo store. Register')

    // await expect(locator).toBeChecked()
   const gender = await page.locator('#gender-male')

    await expect(gender).not.toBeChecked()

    await gender.check()
    await expect(gender).toBeChecked()

    await expect.soft (await page.locator('.page-title h1')).toHaveText('Register')

    await expect (await page.locator('.page-title h1')).toContainText('Reg')

    const dob = await page.locator("select[name='DateOfBirthDay'] option")

    //  for (let day of dob) {
    //    console.log(await day.textContent())

    //  }

    await expect(dob).toHaveCount(32)


// select a random day
const randomDay = Math.floor(Math.random()*32)
await page.selectOption("select[name='DateOfBirthDay']",String(randomDay))

// select a day 31
await page.locator("select[name='DateOfBirthDay']").selectOption('31')

//page.waitForTimeout(7000)

})