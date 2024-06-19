exports.LogOut = class LogOut{

    constructor ({page}){

        this.page = page
        
        //this.menuSelect = 
        //this.logOutBtn = page.locator('#logout_sidebar_link')
    }

    async userlogout(){

        await this.page.locator('div').filter({ hasText: /^\$9\.99ADD TO CART$/ }).getByRole('button').click()
        await this.page.locator('#logout_sidebar_link').click()
    }


    
}
