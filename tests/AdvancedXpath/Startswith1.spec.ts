import{test,expect} from '@playwright/test'

test("This startswith Xpath",async({page})=>
{
await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php");

await page.locator("//input[starts-with(@name,'txtU')]").fill("playwright");
await page.locator("//input[starts-with(@name,'txtP')]").fill("playwright");
await page.locator("//input[starts-with(@type,'Sub')]").click();

await page.waitForTimeout(2000);


})