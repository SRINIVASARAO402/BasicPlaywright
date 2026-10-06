import{test, expect} from '@playwright/test'

test("Test Case on Checking the Drop Down under frame after login", async({page})=>
{

    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php")

    await page.waitForTimeout(1000)
   
    await page.locator("//input[@type='text']").fill("playwright")
    await page.locator("//input[@type='password']").fill("playwright")
    await page.locator("//input[@type='Submit']").click();

    
    await page.waitForTimeout(2000)
   //await expect(page.locator("select#loc_code")).toBeVisible();

    await expect(page.frameLocator("iframe#rightMenu").locator("select#loc_code")).toBeVisible();
    console.log("Hurry I found the Drop Down under the Frame")



    await page.waitForTimeout(2000)


})