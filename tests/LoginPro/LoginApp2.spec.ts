import{test,expect} from '@playwright/test'

test("Test Case on Checking the Login Functionality",async({page})=>
{
    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php")
    //Home Page Title check
    console.log("The Home Title is : " + await page.title())
    await page.waitForTimeout(1000)
    //Home Page Title check
    await page.locator("//input[@type='text']").fill("playwright");
    await page.locator("//input[@type='password']").fill("playwright");
    await page.locator("//input[@type='Submit']").click();

    console.log("The After-Login Title is: " + await page.title());
    await page.waitForTimeout(3000)
})