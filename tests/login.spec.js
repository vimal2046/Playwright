const {test,expect, chromium}=require('@playwright/test')

test('login check',async function ({page}) {
   // const page = await chromium.launch({headless:false,slowMo:500})
    await page.goto('https://freelance-learn-automation.vercel.app/login')
    
    await page.getByPlaceholder("Enter Email").type("admin@email.com")
    await page.locator("#password1").type("admin@123")

    await page.locator("button[type='submit']").click()

    await expect(page).toHaveURL("https://freelance-learn-automation.vercel.app/")

    await page.locator("img[alt='menu']").click()
    await page.getByAltText("delete").click()
    await page.locator("img[alt='menu']").click()
    await page.locator("//div[normalize-space()='Practise']").click()
    await page.locator("//button[normalize-space()='Enable field']").click()
    await page.waitForTimeout(5500)
    await page.locator("//input[@placeholder='Now you can write']").type("vimalchandar");

    await page.locator("//input[@placeholder='Enter your name']").type("summa type pannathu");
    await page.locator("//button[normalize-space()='Hide']")
    await page.locator("//button[normalize-space()='Show']").click()
    await page.locator("//button[normalize-space()='Double Click me to see magic']").dblclick()
    await page.locator("//button[normalize-space()='Right Click me to see magic']").dblclick({button: 'right'})
    await page.waitForTimeout(3000)
    const source = page.locator("//div[@id='drag1']")
    const target = page.locator("//div[@id='div1']")
    await source.dragTo(target);
    await page.waitForTimeout(3000)
    const element = page.locator("//h3[normalize-space()='Learn Automation By Mukesh Otwani']")
    await expect(element).toHaveText("Learn Automation By Mukesh Otwani");

    await page.locator("img[alt='menu']").click()
    await page.locator("//button[normalize-space()='Sign out']").click()
    await page.waitForTimeout(3000)
    await expect(page).toHaveURL("https://freelance-learn-automation.vercel.app/login")
    

})