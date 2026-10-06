import {test, expect} from '@playwright/test'

test("Test Case on Alerts", async({page})=>
{
    await page.goto("file:///D:/Manual and Playwright videos/PlayWrightVideos/BasicPlaywright/WebElements browsers/Selenium Elements/Selenium Elements/Alert Message.html");

    await page.waitForTimeout(4000);

    await page.locator("//button").click();

    await page.waitForTimeout(6000);


})