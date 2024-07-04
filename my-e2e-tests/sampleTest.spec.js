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

test('Confirmation alert @prompt',async({WindowAlertFrame})=>{
    // confirm js alert 
    await WindowAlertFrame.confirm()
})

test(' Alert @prompt',async({WindowAlertFrame})=>{
    //  js alert 
    await WindowAlertFrame.alertmodal()
})

test("New window Alert pop up frame @prompt",async({WindowAlertFrame})=>{

    // Opena a new window
    await WindowAlertFrame.newWindow(myTestData.userSearch)
    // open a new window and a popup
    await WindowAlertFrame.newWindowPopup(myTestData.userEmail)

    // prompt to accept an input
    await WindowAlertFrame.prompt(myTestData.userName)

    await WindowAlertFrame.frameDbClick(myTestData.userEmail)

})




