import { test, expect } from '@playwright/test';


test("nameVerification",async function ({page}) {
    await page.goto("https://freelance-learn-automation.vercel.app/login");
    console.log(await page.viewportSize())
    await page.getByPlaceholder("Enter Email").type("admin@email.com");
    await page.getByPlaceholder("Enter Password").type("admin")
    await page.locator("//button[normalize-space()='Sign in']").click();
    const element = page.locator("//h2[@class='errorMessage']")
    await expect(element).toHaveText("Email and Password Doesn't match")

   



})