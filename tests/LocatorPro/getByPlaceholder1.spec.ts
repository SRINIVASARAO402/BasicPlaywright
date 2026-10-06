import{test,expect} from '@playwright/test'

test("Test Case on Get By Place Holder",async({page})=>
    {
    await page.goto("file:///D:/My Files/PlayWrightVideos/BasicPlaywright/PlayWright WebElements/PlayWright WebElements/PlaceHolderPro.html");    
    await page.waitForTimeout(500);

    await page.getByPlaceholder("Username").fill("Hai I am srinu");
    await page.getByPlaceholder("Password").fill("playwright");
    await page.getByPlaceholder("Email address").fill("playwrightA@gmail.com");
    await page.getByPlaceholder("Enter your comments").fill("Trainer is Expert good teaching");

    await page.waitForTimeout(2000);
    
    })
