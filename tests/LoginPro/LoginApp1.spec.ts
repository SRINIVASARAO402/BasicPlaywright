import{test,expect} from '@playwright/test'

test("Test Case on Checking the Login Functionality",async({page})=>
{
    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php")

    await page.waitForTimeout(1000)
    
    await page.locator("//input[@type='text']").fill("playwright");
    await page.locator("//input[@type='password']").fill("playwright");
    await page.locator("//input[@type='Submit']").click();

    
    
    await page.waitForTimeout(1000)
})