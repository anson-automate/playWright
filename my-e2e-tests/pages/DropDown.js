export const DropDown = class DropDown{
    constructor(page){  
        this.page = page
        this.countryDropdown = this.page.locator('#country')
        this.colorDropdown = this.page.locator('#colors')
        this.draggable = this.page.locator('#draggable')
        this.droppable = this.page.locator('#droppable')
        this.handle = this.page.locator('#slider span')

    }

    async selectCountry(countryValue){
        await this.countryDropdown.selectOption(countryValue)
    }  

    async selectColor(colorValue){
        await this.colorDropdown.selectOption(colorValue)

    }

    async dragAndDrop(){
        await this.draggable.dragTo(this.droppable)
        const textval = await this.droppable.locator('p').textContent()
        console.log("Text value of droppable : ",textval)
    }

    async slider(attributeValue){
        await this.handle.evaluate((element,{ attributeValue }) => {
            if (element) {
              element.style.left = attributeValue
            }
        }, { attributeValue });
    }


}
