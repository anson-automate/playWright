export const WebTableDate = class WebTableDate{

    constructor(page) {
        this.page = page
        this.rows = this.page.locator("table[name='BookTable'] tr")
        this.colHeaders = this.page.locator("table[name='BookTable'] tr th")
        this.pageWebtable = this.page.locator('#productTable tr')
        this.pageloc = this.page.locator('#pagination a')
        this.datePicker = this.page.locator('#datepicker')
        this.datePickerNext = this.page.locator("a[data-handler='next'] span")
        this.datePickerMonth = this.page.locator('.ui-datepicker-month')
        this.datePickerDays = this.page.locator("td[data-handler='selectDay'] a")
    }

    async printColumnHeaders(){
        //used nth() for nth column
       for(let i=0;i<await this.colHeaders.count();i++){
         console.log(await this.colHeaders.nth(i).textContent())
       }
   
    }

    async getColValue(colName,position){
        //used filter() and hasText()
      return  await this.rows.filter({hasText: colName}).locator('td').nth(position).textContent()
    }

    async selectPageWebtable(products){
      for (let prod of products){
          if (parseInt(prod.split(" ")[1])<6){
            await this.clickPage(0)      
          } else if (parseInt(prod.split(" ")[1])<11){
            await this.clickPage(1)
          } else if (parseInt(prod.split(" ")[1])<16){
            await this.clickPage(2)
          } else {
            await this.clickPage(3)
          }
          // check the product checkbox
        await this.pageWebtable.filter({hasText:prod}).locator('input').click()   
      }
  }
  // to select the page (pagination)
  async clickPage(number){
      const classValue = await this.pageloc.nth(number).getAttribute('class')
         if(classValue == null){
           await this.pageloc.nth(number).click()
         }
       }
  async selectDate(newDate){
    let month = newDate.split(" ")[1]
    
    let seletedMonth = ""
    await this.datePicker.click()
    do {
       await this.datePickerNext.first().click()
       seletedMonth = await this.datePickerMonth.textContent()
        
    } while (seletedMonth != month);
    console.log("selected Month ",seletedMonth)
    console.log("Selected Date ",await this.datePickerDays.nth(parseInt(newDate.split(" ")[0])-1).textContent())
    await this.datePickerDays.nth(parseInt(newDate.split(" ")[0])-1).click()
    
  }

}