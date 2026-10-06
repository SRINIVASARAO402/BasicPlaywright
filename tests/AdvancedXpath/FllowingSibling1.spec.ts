import{test,expect} from '@playwright/test'

test("This Foward-Following-Sibling Xpath",async({page})=>
{
await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php");

await page.locator("//table[@cellpadding='3']//following-sibling::input").fill("playwright");
await page. locator("//table[@cellpadding='3']//following-sibling::input//following::input [1]").fill("playwright");
await page.locator("//table[@cellpadding='3']//following-sibling::input/following::input[2]").click();
await page.waitForTimeout(2000);


})