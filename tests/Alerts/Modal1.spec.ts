import {test, expect} from '@playwright/test'

test("Test Case on Modal Popup", async({page})=>
{
    await page.goto("file:///D:/Manual and Playwright videos/PlayWrightVideos/BasicPlaywright/WebElements browsers/Selenium Elements/Selenium Elements/Model Popup.html");

    await page.waitForTimeout(2000);

    await page.locator("button#Modal").click();

    await page.waitForTimeout(2000);

    await page.locator("span.close").click();

    await page.waitForTimeout(4000);


})