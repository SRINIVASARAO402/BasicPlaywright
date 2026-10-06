import {test, expect} from '@playwright/test'

test("Test Case on Double Click", async({page})=>
{
    await page.goto("file:///D:/Manual and Playwright videos/PlayWrightVideos/BasicPlaywright/WebElements browsers/Selenium Elements/Selenium Elements/Doubleclick.html");

    await page.waitForTimeout(2000);

    await page.locator("p#demo").dblclick();

    await page.waitForTimeout(4000);


})