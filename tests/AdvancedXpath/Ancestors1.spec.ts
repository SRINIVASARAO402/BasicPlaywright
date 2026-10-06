import{test,expect} from '@playwright/test'

test("This Backwaard-Ancestors Xpath",async({page})=>
{
await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php");
await page.locator("//input[@type='password']//preceding::input[1]").fill("playwright");
await page.locator("//input[@type='Submit']//preceding::input[1]").fill("playwright");
await page.locator("//input[@type='reset']//preceding::input[1]").click();

await page.waitForTimeout(2000);

})