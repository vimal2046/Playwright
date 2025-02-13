const {test,expect} = require('@playwright/test')

test("verify google", async function ({page}) {
    
    await page.goto('http://google.com')

    const url = await page.url()
    expect(url).toBe('http://www.google.com/')
    await expect(page).toHaveTitle("Google")

 
})