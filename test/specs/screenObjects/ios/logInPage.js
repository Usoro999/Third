

class LogInPage{
  get logInField() {
    return $('~Username input field')
  }
  get passwordField() {
    return $('~Password input field')
  }
  get loginBtn() { return $('~Login button') }

  get messageSms(){return $('~Provided credentials do not match any user in this service.')}



  
  async inputUserName(user) {
    await this.logInField.addValue(user)
    
  }
  async inputPassword(password) {
    await this.passwordField.addValue(password)
  }

  async cliclOnLoginBtn() {
    await this.loginBtn.click()
    //const loginButton = '**/XCUIElementTypeOther[`label == "Login"`][3]'
    //(await $(`-ios class chain:${loginButton}`)).click()
}

  async getMessageTest() {
    return await this.messageSms.getText()
  }
  
  
  
}
export const onLogInPage = new LogInPage()