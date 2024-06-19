import{test,expect} from '@playwright/test'

test('multiple elements product',async({page})=>{

    await page.goto('https://demoblaze.com/#')

    async function getProductName() {
        await page.waitForSelector("//div[@id='tbodyid']//h4/a")
        let products = await page.$$("//div[@id='tbodyid']//h4/a")
        for (let product of products)  {
            const productname = await product.textContent()
            console.log(productname)
    
        }
    }

    const nextBtn = await page.locator("//button[@id='next2']")
    await nextBtn.click()



       while (true) {
        

        await getProductName()

            if(!await nextBtn.isVisible()) 
                {break}

            await nextBtn.click()
                  
        }


})

