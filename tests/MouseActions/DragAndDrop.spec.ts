import {test, expect} from '@playwright/test'

test("Test Case on Drag and Drop", async({page})=>
{
    await page.goto("file:///D:/Manual and Playwright videos/PlayWrightVideos/BasicPlaywright/WebElements browsers/Selenium Elements/Selenium Elements/Drag and Drop.html");

    await page.waitForTimeout(2000);

    await page.dragAndDrop("img#drag1", "div#draghere");

    await page.waitForTimeout(4000);


})