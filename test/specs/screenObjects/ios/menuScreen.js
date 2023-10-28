

 class MenuScreen {
  get logIn() {
    return $("~menu item log in");
  }

  async clickOnLogIn() {
    await this.logIn.click();
  }
}
//export const onMenuScreen = new MenuScreen()
export default new MenuScreen()
