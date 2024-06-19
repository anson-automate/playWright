import {test,expect} from './SetUp/SetUp'


test('login test', async({LoginPage,LogOutPg})=>{

   // using custom fixtures and POM
    await LoginPage.login('standard_user','secret_sauce')
    await LogOutPg.userlogout()

})