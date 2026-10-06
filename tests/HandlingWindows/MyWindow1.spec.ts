import {test , expect} from '@playwright/test'

test("Test Case on Handling the Windows", async({page})=>
{
    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php")
    await page.locator("//input[@type='text']").fill("playwright")
    await page.locator("//input[@type='password']").fill("playwright")
    await page.locator("//input[@type='Submit']").click();

    await page.waitForTimeout(2000);

    console.log("Title after login : " +(await page.title()));

    await page.locator("li#help").hover();

    await page.waitForTimeout(2000);

    await page.locator("//span[text()='Forum']").click();

    await page.waitForTimeout(6000);

    console.log("Title after click on Forum : " +(await page.title()));
    
    await page.waitForTimeout(3000);




})