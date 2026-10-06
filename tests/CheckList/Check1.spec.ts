import {test, expect} from '@playwright/test'

test("Test case on Check List", async({page})=>
{
    await page.goto("file:///D:/Manual and Playwright videos/PlayWrightVideos/BasicPlaywright/WebElements browsers/Selenium Elements/Selenium Elements/Country Name.Htm");
    console.log("The Number of Country in the Check list : " +(await page.locator("//option").count()));
    
})