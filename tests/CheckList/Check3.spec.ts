import {test, expect} from '@playwright/test'

test("Test case on Check List", async({page})=>
{
    await page.goto("file:///D:/Manual and Playwright videos/PlayWrightVideos/BasicPlaywright/WebElements browsers/Selenium Elements/Selenium Elements/Country Name.Htm");

    console.log("The Number of Country in the Check list : " +(await page.locator("//option").count()));
    

    await page.locator("//option").nth(3).click();
    await page.waitForTimeout(500);
    await page.keyboard.press("Control")
    await page.locator("//option").nth(6).click();
    await page.waitForTimeout(500);
    await page.keyboard.press("Control")
    await page.locator("//option").nth(17).click();
    await page.waitForTimeout(500);
    await page.keyboard.press("Control")
    await page.locator("//option").nth(19).click();
    await page.waitForTimeout(500);
    await page.keyboard.press("Control")
    await page.locator("//option").nth(23).click();

    await page.waitForTimeout(4000);


})