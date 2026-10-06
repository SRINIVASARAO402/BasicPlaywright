import{test,expect} from '@playwright/test'

test("Test Case on Get By Label",async({page})=>
{

await page.goto("file:///D:/My Files/PlayWrightVideos/BasicPlaywright/PlayWright WebElements/PlayWright WebElements/ByLabel.html")

await page.waitForTimeout(2000);

await page.getByLabel("Username").fill("Srinu playwright Tester");

await page.waitForTimeout(2000);

})