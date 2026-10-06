import{test,expect} from '@playwright/test'

test("Test Case on Get By Text",async({page})=>
    {
        await page.goto("file:///D:/My Files/PlayWrightVideos/BasicPlaywright/PlayWright WebElements/PlayWright WebElements/ByTextFile.html");

        await page.getByText("MyGoogle").click();
        await page.waitForTimeout(2000)
        await page.goBack();
        await page.getByText("Go to TheMask").click();
        await page.waitForTimeout(2000);
        await page.goBack();
       
    })
    