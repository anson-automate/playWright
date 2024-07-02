export const ActionsPage = class ActionsPage {

    constructor(page){

        this.page = page
        this.name = this.page.locator('#name')
        this.email = this.page.locator('#email')
        this.phone = this.page.locator('#phone')

    }

     async enterText(name,email,phone){
        await this.name.fill(name)
        await this.email.fill(email)
        await this.phone.fill(phone)
    }

    async selectGender(gender){
        // Dyanamic css selector
        await this.page.locator(`#${gender}`).check()
    }

    async daysSelect(days){
        days.map(async (day) => await this.page.click(`#${day}`))
    }


}