
import { $ } from '@wdio/globals'



class Productscreen {
  get menuBtn() { return $('~tab bar option menu') }
  get cartBtn() { return $('~tab bar option cart') }
  
  get catalogBtn() { return $('tab bar option catalog') }
  get logIn() { return $('~menu item log in') } 

  get sauceLabsOnesie() {return $('//XCUIElementTypeOther[@name="Sauce Labs Onesie"]')}
  get labsBolt(){ return $('//XCUIElementTypeOther[@name="Sauce Labs Bolt T-Shirt"]')}

  // '//*XCUIElementTypeWindow[@index = 2]' -> xpath of element 2
  // '//*[@name = 'Title']' -> xpath of element with name 
   // '//*[@value = 'Date']' -> xpath of element with value Date


  async clickOnMenuBtn() {
    await this.menuBtn.click()
  }
  async clickOnCartBtn() {
    await this.cartBtn.click()
  }
  async clickOnCatalogBtn(){
    await this.catalogBtn.click()
  }
  async logInIsDisplayed() {
    await this.logIn.isDisplayed()
    
  }
  async logInBtn() {
    return await this.logIn
  }
  async getTextFromLogInBtn() {
    return this.logIn.getText()
  }
  async inputUserName(name) {
    await this.logIn.addValue(name)
  }

  async scrollToSauce() {
    await driver.execute("mobile: scroll", { direction: "down" })
    
}
  async clickOnSauce() {
    await this.sauceLabsOnesie.click()  
    
  }
 
    
    
}

export const onProductScreen = new Productscreen()
