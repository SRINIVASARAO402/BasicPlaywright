 import{test, expect} from '@playwright/test'

test("Test Case on Checking the Drop Down Count", async({page})=>
{

    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php")

    await page.waitForTimeout(1000)
   
    await page.locator("//input[@type='text']").fill("playwright")
    await page.locator("//input[@type='password']").fill("playwright")
    await page.locator("//input[@type='Submit']").click();

    
    await page.waitForTimeout(2000)
   //await expect(page.locator("select#loc_code")).toBeVisible();

   let ddcount = await page.frameLocator("iframe#rightMenu").locator("select#loc_code").count();
   console.log("The Number of Drop Downs in the given page : " +ddcount)



    await page.waitForTimeout(2000)


})