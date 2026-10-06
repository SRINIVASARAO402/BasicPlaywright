import{test,expect} from '@playwright/test'

test("Test CheckBoxes",async({page})=>
{
    await page.goto("file:///D:/Manual and Playwright videos/PlayWrightVideos/BasicPlaywright/WebElements browsers/Selenium Elements/Selenium Elements/Country Check box.html");
   let CheckBoxcount = await page.locator("//input").count()
   console.log("Total CheckBox Count is : "+CheckBoxcount);
   await page.waitForTimeout(2000)

    await page.locator("//input[1]").click();
    await page.locator("//input[2]").click();
    await page.locator("//input[3]").click();
    await page.locator("//input[4]").click();
    await page.locator("//input[5]").click();

    await page.waitForTimeout(2000);
})