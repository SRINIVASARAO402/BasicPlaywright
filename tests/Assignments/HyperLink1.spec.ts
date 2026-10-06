import{test,expect} from '@playwright/test'

test("Test the HyperLinks",async({page})=>
{
    await page.goto("file:///D:/Manual and Playwright videos/PlayWrightVideos/BasicPlaywright/WebElements browsers/Selenium Elements/Selenium Elements/Hyper links.html");
    
    let HyperLinkCount = await page.locator("//a").count();
    console.log("Total HyperLinks in the page are : "+HyperLinkCount);

    await page.locator("//a[text()='The Rock Says']").click();
    await page.waitForTimeout(2000);
    await page.goBack();
    await page.waitForTimeout(2000);
    await page.locator("//a[text()= 'T & J']").click();
    await page.waitForTimeout(2000);
    await page.goBack();

    


})