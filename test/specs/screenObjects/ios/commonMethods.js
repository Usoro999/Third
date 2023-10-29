class CommonMethods {



  async waitContext() {
    await driver.waitUntil(async () => {
      const contexts = driver.getContexts()
      return contexts.length > 1;
    },{timeout: 30000, timeoutMsg: 'Timed out'})
  }

  
  async switchToContext() {
    const listOfContexts = this.waitContext()
    for (const context of listOfContexts) {
      if (!context == 'Native_app') {
        await driver.switchContext(context)
      }
    }
  }






}
export const commonMethods = new CommonMethods()