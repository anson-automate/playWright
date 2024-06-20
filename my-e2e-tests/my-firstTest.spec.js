import { test, expect } from '@playwright/test';
import { beforeEach } from 'node:test';

test('Invalid login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/index.html');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secrect_sauce');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username and password do not match any user in this service')

  // error - Epic sadface: Username and password do not match any user in this service
});

test('Valid login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/index.html');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await page.locator('div').filter({ hasText: /^\$29\.99ADD TO CART$/ }).getByRole('button').click();
  await page.locator('div').filter({ hasText: /^\$9\.99ADD TO CART$/ }).getByRole('button').click();
  await page.getByRole('link', { name: '2' }).click();
  await page.getByRole('link', { name: 'CHECKOUT' }).click();
  await page.locator('[data-test="firstName"]').fill('test first name');
  await page.locator('[data-test="lastName"]').fill('test last name');
  await page.locator('[data-test="postalCode"]').fill('12345');
  await page.getByRole('button', { name: 'CONTINUE' }).click();
  await expect (page.getByText('FREE PONY EXPRESS DELIVERY!')).toBeVisible()
  await expect (page.getByText('Total: $43.18')).toBeVisible()
  await page.getByRole('link', { name: 'CANCEL' }).click();
  //await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username and password do not match any user in this service')

  // error - Epic sadface: Username and password do not match any user in this service
});

// https://www.globalsqa.com/demo-site/draganddrop/
//#column-a
//#column-b
//

test('drag and drop 1',async({page})=>{
  //test.setTimeout(80000);
  await page.goto('https://practice.expandtesting.com/drag-and-drop')
  await page.locator('#column-a').dragTo(page.locator('#column-b'))
});

//#source > div.red

//#target

test('drag and drop 2',async({page})=>{
  //test.setTimeout(80000);
  await page.goto('https://practice.expandtesting.com/drag-and-drop-circles')
  await page.locator('#source > div.red').dragTo(page.locator('#target'))
  await page.locator('#source > div.green').dragTo(page.locator('#target'))
  await page.locator('#source > div.blue').dragTo(page.locator('#target'))
});

// #hidingButton

test('click hiding button',async({page})=>{
  //test.setTimeout(80000);
  await page.goto('https://practice.expandtesting.com/scrollbars')
  await page.locator('#hidingButton').click()
});

// #output-number
test('Web Inputs',async({page})=>{
  //test.setTimeout(80000);
  await page.goto('https://practice.expandtesting.com/inputs')
  await page.getByLabel('Input: Number').fill('123');
  await page.getByLabel('Input: Text').fill('tettttt');
  await page.getByLabel('Input: Password').fill('123tet');
  await page.getByLabel('Input: Date').fill('1988-03-21');
  await page.getByRole('button', { name: 'Display Inputs' }).click();
  await expect(page.locator('#output-number')).toHaveText('123')

  await page.locator('#btn-clear-inputs').click()
  //

});

test('add-remove-elements',async({page})=>{
  await page.getByText('Add/Remove Elements').click()
  await expect (page.getByText('Add Element')).toBeVisible()
  await expect (page.getByText('Delete')).toBeHidden()
  await page.getByText('Add Element').click()
  await expect (page.getByText('Delete')).toBeVisible()

  //body > main > div > div > h1

})

test('Notification Message',async({page})=>{
  await page.getByRole('link', { name: 'Notification Message' }).click();
  //await page.getByText('Action successful', { exact: true }).click();
  let msg = await page.locator('#flash').getAttribute('text')
  console.log(msg)
  //await page.getByText('Action successful', { exact: true }).click();
  await page.getByLabel('Close').click();
  await page.getByRole('link', { name: 'Click here' }).click();
  // await page.getByText('Action successful', { exact: true }).click();
  // await page.getByLabel('Close').click();
  // await page.getByRole('link', { name: 'Click here' }).click();
  // //console.log(mesg)


  // button.btn-close

})

test('dynamic-table',async({page})=>{
  await page.goto('https://testautomationpractice.blogspot.com/')
  const dyTable = await page.locator('[id=productTable]')
  const columns = await dyTable.locator('thead tr th')
  console.log('columns :'+await columns.count())

  const rows = await dyTable.locator('tbody tr')
  console.log('rows :'+await rows.count())

  rows.filter({
    hasText:'Product 3'
  }).locator('input').check()

  getPrice(rows,page,'Product 3')
  getPrice(rows,page,'Product 1')

})

test('dynamic-table11',async({page})=>{
  await page.goto('https://practice.expandtesting.com/dynamic-table')
  const dyTable = await page.locator('[class=table-responsive]')
  const columns = await dyTable.locator('table thead tr th')
  let colPos = -1
for (let i = 0;i< await columns.count();i++){
  const vv = await columns.nth(i).textContent()

if (vv=='CPU'){
  colPos = i
}
  
}
  console.log('columns :'+await columns.count())

  console.log('col pos for CPU  :'+colPos)

  const rows = await dyTable.locator('tbody tr')
  console.log('rows :'+await rows.count())

  // rows.filter({
  //   hasText:'Product 3'
  // }).locator('input').check()

  getPrice(rows,page,'Chrome',colPos)
  getPrice(rows,page,'System',colPos)

})

async function getPrice(rows,page,productName,colPos){
  const val = await rows.filter({
    hasText:productName
  }).locator('td').nth(colPos).textContent()

  console.log( 'product : '+productName+' CPU : '+val)
}

test('drop down',async({page})=>{

 await page.goto('https://testautomationpractice.blogspot.com/')
 await page.selectOption('#country','Germany')

 const dropDwnVal=await page.locator('#country').textContent()
 await expect(dropDwnVal.includes('Inia')).toBeTruthy()
console.log(dropDwnVal)
})