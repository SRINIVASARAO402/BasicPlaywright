import {test , expect} from '@playwright/test'

test("Test Case on Handling the Windows", async({browser})=>
{
    const bcontext = await browser.newContext();
    
    const homepage = await bcontext.newPage();
    await homepage.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php")
    await homepage.locator("//input[@type='text']").fill("playwright")
    await homepage.locator("//input[@type='password']").fill("playwright")
    await homepage.locator("//input[@type='Submit']").click();

    await homepage.waitForTimeout(2000);

    console.log("Title after login : " +(await homepage.title()));

    await homepage.locator("li#help").hover();

    await homepage.waitForTimeout(2000);

    const [subpage] = await Promise.all
    (
        [
            bcontext.waitForEvent("page"),
            await homepage.locator("//span[text()='Blog']").click()
        ]
    )

    await subpage.waitForTimeout(4000);

    console.log("Checking the Title after proper implementation : " +(await subpage.title()))






})