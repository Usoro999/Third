//import { MenuScreen } from "../screenObjects/ios/menuScreen";
import { onProductScreen } from "../screenObjects/ios/productScreen.js";
import { onMenuScreen } from "../screenObjects/ios/menuScreen.js";
import { onLogInPage } from "../screenObjects/ios/logInPage.js";


describe("SampleTest", () => {
  it("Sapmle test", async () => {
    console.log(await driver.getContext());
    
    await onProductScreen.clickOnMenuBtn();
    //await onProductsScreen.logInIsDisplayed()
    console.log(await driver.getContext());
    //assert.equal(await onProductScreen.getTextFromLogInBtn(), "Log In");
    await onMenuScreen.clickOnLogIn();
    await onLogInPage.inputUserName("user");
    await onLogInPage.inputPassword("password");
    await onLogInPage.cliclOnLoginBtn();
    await expect(await onLogInPage.getMessageTest()).toContain("Provided");
   
  });

  it.skip("Scroll", async () => {
    await onProductScreen.scrollToSauce();

    await expect(await onProductScreen.sauceLabsOnesie).toBeDisplayed();
    await driver.getContext();
    await driver.pause(5000);
    
  });
});
