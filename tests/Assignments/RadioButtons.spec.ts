import{test,expect} from '@playwright/test'

test("Test Radio Buttons",async({page})=>
    {
        await page.goto("file:///D:/Manual and Playwright videos/PlayWrightVideos/BasicPlaywright/WebElements browsers/Selenium Elements/Selenium Elements/Gender Radio  Button.html");

        let RadioButtonCount = await page.locator("//input").count()
        console.log("Total Radio Button Count is : "+RadioButtonCount);
        
        await page.locator("//input[1]").check();
        await page.waitForTimeout(2000)
        await page.locator("//input[2]").check();
        await page.waitForTimeout(2000)

    })