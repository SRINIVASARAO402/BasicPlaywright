import {test, expect} from '@playwright/test'

test("Test Case on Alerts", async({page})=>
{
    await page.goto("file:///D:/Manual and Playwright videos/PlayWrightVideos/BasicPlaywright/WebElements browsers/Selenium Elements/Selenium Elements/AlertsOkCancel.html");

    await page.waitForTimeout(2000);

    page.on("dialog", async(k)=>
    {
        await page.waitForTimeout(3000);
        console.log("OK and Cancel --->" +k.type())   //confirm
        console.log(k.message())
        k.dismiss()  //clicks on Cancel
    })

    await page.locator("//button").click();

    await page.waitForTimeout(4000);


})