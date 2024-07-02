import { PassThrough } from 'stream'
import {test,expect} from './SetUp/SetUp'
import myTestData from './TestData/Data.json'
test.beforeEach(async({page})=>{
        // Exmaple for BaseUrl
        await page.goto('/')
})
test('Web form and radio button',async({ActionsPage})=>{

    // Example for text box data entry with custom fixture and test data
    await test.step('Web form data entry',async()=>{
        await ActionsPage.enterText(myTestData.userName,myTestData.userEmail,myTestData.userPhone) 
    })

    await test.step('Radio button and checkbox selection',async()=>{
        await ActionsPage.selectGender(myTestData.userGender.toLowerCase())
        // Mutliple checkbox selection
        await ActionsPage.daysSelect(myTestData.userDays.map((x)=>x.toLowerCase()))
    })

})

test('Drop down',async({DropDown})=>{
    
    await DropDown.selectCountry(myTestData.userCountry)
    await DropDown.selectColor(myTestData.userColor)
    await DropDown.dragAndDrop()
    // set slider value based on test data
    await DropDown.slider(myTestData.userSlider)

}
)

test('Web table and dates', async({WebTableDate})=>{
    // print column headers
    await  WebTableDate.printColumnHeaders()
   // print a colunm value of a search string in a web table
    console.log(await WebTableDate.getColValue(myTestData.userBook.BookName,myTestData.userBook.Column))
   // select web table rows based on test data with pagination
    await  WebTableDate.selectPageWebtable(myTestData.userProducts)
    // Select a date from calendar
    let dt = new Date();
    let no_of_months = 4;
    dt.setMonth(dt.getMonth() + no_of_months)
    let newDate = "11 "+dt.toLocaleString('default', { month: 'long',year: "numeric" })
    await WebTableDate.selectDate(newDate)

})

test("New window Alert pop up",async({page,context})=>{
/*
await page.locator(".widget-content button[onclick='myFunction()']").click()
const newPage = await context.waitForEvent('page')

expect(newPage.locator('#logo')).toBeVisible()

await newPage.locator('#search input').fill('iPhone 13')

await newPage.close()

const thirdPage = await context.newPage()
thirdPage.goto('https://www.canadapost-postescanada.ca/')

thirdPage.locator('#primaryLangSelector').click()

thirdPage.locator("span[data-text='Sign in']").click()

//const popupModal = await context.waitForEvent('popup')

await thirdPage.locator('#usernameLarge').fill(myTestData.userEmail)

await thirdPage.close()
*/

// doulbe click
await page.locator("[ondblclick='myFunction1()']").dblclick()

page.on('dialog',async (alert) => {
    console.log(await alert.message())
    alert.accept('Aviv')
})


//a//wait page.waitForSelector("button[onClick='myFunctionAlert()']")

//await page.click(".widget-content button[onClick='myFunctionAlert()']")

// await page.click(".widget-content button[onClick='myFunctionConfirm()']")




await page.click(".widget-content button[onClick='myFunctionPrompt()']")
console.log(await page.locator("#demo").textContent())
await expect(await page.locator("#demo").textContent()).toContain("Aviv")
await page.frameLocator('#frame-one796456169').locator('#RESULT_TextField-0').fill('Aviv')

await page.waitForTimeout(6000)

})




