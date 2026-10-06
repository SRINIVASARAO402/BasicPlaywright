import{test,expect} from '@playwright/test'

test("This AbsoluteXpath",async({page})=>
{
    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php");

    await page.locator("//input[@name='txtUserName']").fill("playwright");
   
    await page.locator("//input[@type='password']").fill("playwright");
    await page.waitForTimeout(2000);

    await page.locator("//input[@tabindex='3']").click();
    await page.waitForTimeout(2000);

  
})