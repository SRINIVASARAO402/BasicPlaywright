import{test,expect} from '@playwright/test'

test("Test Case on Get By TestID",async({page})=>
    {
     await page.goto("file:///D:/My Files/PlayWrightVideos/BasicPlaywright/PlayWright WebElements/PlayWright WebElements/ByTestID.html");

        await page.getByTestId("login-button").click();
        await page.goBack();
        await page.waitForTimeout(500);
        await page.getByTestId("username-input").fill("srinu");
        //Text Content print--->John Doe
        let H = await page.getByTestId("profile-card").textContent();
        console.log(H)
        // await page.waitForTimeout(5000);
        // await page.goBack();

    })