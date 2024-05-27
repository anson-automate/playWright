import {test,expect} from './SetUp/SetUp'


test('login test', async({LoginPage})=>{

   // using custom fixtures and POM
    await LoginPage.login('standard_user','secret_sauce')
})