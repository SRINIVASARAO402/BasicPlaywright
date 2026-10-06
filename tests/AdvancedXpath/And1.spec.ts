import{test,expect} from '@playwright/test'

 test("This And Xpath",async({page})=>
 {
await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php");

await page.locator("//input[@class='loginText'and @tabindex='1']").fill("playwright");
await page.locator("//input[@class='loginText'and @tabindex='2']").fill("playwright");
await page.locator("//input[contains(@type,'bmi')]").click();

await page.waitForTimeout(2000);

console.log(await page.locator("//li[text()='Welcome playwright']").textContent()) 

 })

