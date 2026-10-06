import{test, expect} from '@playwright/test'

test("Test Case on Keyboard Actions", async({page})=>
{

    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php");

    await page.locator("//input[@type='text']").fill("playwright");
    await page.waitForTimeout(500);
    await page.keyboard.press("Tab");
    await page.waitForTimeout(500);
    await page.locator("//input[@type='password']").fill("playwright");
    await page.waitForTimeout(500);
    await page.keyboard.press("Tab");
    await page.waitForTimeout(500);
    await page.keyboard.press("Enter");


    await page.waitForTimeout(4000);



})