import{test, expect} from '@playwright/test'

test("Test Case on Checking the Drop Down Count", async({page})=>
{

    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php")

    await page.waitForTimeout(1000)
   
    await page.locator("//input[@type='text']").fill("playwright")
    await page.locator("//input[@type='password']").fill("playwright")
    await page.locator("//input[@type='Submit']").click();

    
    await page.waitForTimeout(2000)
   //await expect(page.locator("select#loc_code")).toBeVisible();
    let F = page.frameLocator("iframe#rightMenu");
    let dd = F.locator("select#loc_code");    //dd is the dropdown variable

    let ddvaluecount = await dd.locator("//option").count();
    console.log("The Number of elements in the drop down : " + ddvaluecount);
    let ddvalues = dd.locator("//option");  //all dd values


    for(let t = 0 ; t < ddvaluecount; t++)
    {
        console.log(await ddvalues.nth(t).textContent()) 
    }
    



    await page.waitForTimeout(2000)


})