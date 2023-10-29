//import MenuScreen from "../screenObjects/ios/menuScreen";
import { onProductScreen } from "../screenObjects/ios/productScreen.js";
import { onMenuScreen } from "../screenObjects/ios/menuScreen.js";
import { onLogInPage } from "../screenObjects/ios/logInPage.js";


describe("SampleTest", () => {

  it("Sapmle test", async () => {
    
    await onProductScreen.clickOnMenuBtn();
    //await onProductsScreen.logInIsDisplayed()
  
    await onMenuScreen.clickOnLogIn();
    await onLogInPage.inputUserName("user");
    await onLogInPage.inputPassword("password");
    await onLogInPage.cliclOnLoginBtn();
    await expect(await onLogInPage.getMessageTest()).toContain("Provided");
   
  });

  it.skip("Scroll", async () => {
    await driver.hideKeyboard('pressKey', 'return')
    
    await onProductScreen.clickOnCatalogBtn()
    await onProductScreen.scrollToSauce();

    await expect(await onProductScreen.sauceLabsOnesie).toBeDisplayed();
    
  });

  
});
