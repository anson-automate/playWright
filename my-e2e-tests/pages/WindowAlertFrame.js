import { expect } from '@playwright/test'
export const WindowAlertFrame = class WindowAlertFrame {
    constructor(page,context) {
        this.context = context
        this.page = page
        this.windowButton = this.page.locator(".widget-content button[onclick='myFunction()']")
        this.logo = '#logo'
        this.searchBx = '#search input'
        this.lanSel = '#primaryLangSelector'
        this.loginBtn = "span[data-text='Sign in']"
        this.userTxbx = '#usernameLarge'
        this.promptBtn = this.page.locator(".widget-content button[onClick='myFunctionPrompt()']")
        this.textArea = this.page.locator("#demo")
        this.confirmbtn = this.page.locator(".widget-content button[onClick='myFunctionConfirm()']")
        this.alertBtn = this.page.locator(".widget-content button[onClick='myFunctionAlert()']")
        this.frameUserName = this.page.frameLocator('#frame-one796456169').locator('#RESULT_TextField-0')
        this.dbClickbtn = this.page.locator("[ondblclick='myFunction1()']")

        
    }

    async newWindow(searchString){ 

        await this.windowButton.click()
        // wait for new browser window
        const newPage = await this.context.waitForEvent('page')
        await expect(newPage.locator(this.logo)).toBeVisible()
        await newPage.locator(this.searchBx).fill(searchString)
        await newPage.close()

    }

    async newWindowPopup(email){

    const thirdPage = await this.context.newPage()
    thirdPage.goto('https://www.canadapost-postescanada.ca/')
    thirdPage.locator(this.lanSel).click()
    thirdPage.locator(this.loginBtn ).click()
    await thirdPage.locator(this.userTxbx).fill(email)
    await thirdPage.close()
    }

    async prompt(inputName){
        this.page.on('dialog',async (alert) => {
            console.log(await alert.message())
            alert.accept(inputName)
        })

        await this.promptBtn.click()
        console.log(await this.textArea.textContent())
        await expect(await this.textArea.textContent()).toContain(inputName)
    }

    async confirm(){

        this.page.on('dialog',async (alert) => {
            console.log(await alert.message())
            // to dismiss the alert by press cancel button
            alert.dismiss()
        })  
        await this.confirmbtn.click()
        console.log(await this.textArea.textContent())
    }

    async alertmodal(){

        this.page.on('dialog',async (alert) => {
            console.log(await alert.message())
            // to accept the alert by press ok button
            alert.accept()
        })

        await this.alertBtn.click()
    }

    async frameDbClick(myUserName){
        // frame user name
        await this.frameUserName.fill('myUserName')
        // double click a button 
        await this.dbClickbtn.dblclick()
    }

}