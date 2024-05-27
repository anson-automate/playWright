

exports.LoginPageSL = class  LoginPageSL{

    constructor(page){

        this.page=page
        this.username=page.locator('[data-test="username"]')
        this.passwordbx= page.locator('[data-test="password"]')
        this.loginbtn= page.getByRole('button', { name: 'LOGIN' })
    }

    async  login (userName,passordVal){

        await this.page.goto('https://www.saucedemo.com/v1/index.html');
        await this.username.fill(userName)
        await this.passwordbx.fill(passordVal)
        await this.loginbtn.click()
    }

}