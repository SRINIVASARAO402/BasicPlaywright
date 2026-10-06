import {test, expect} from '@playwright/test'

test("Test Case on Mouse Scrolling", async({page})=>
{
    await page.goto("https://www.snapdeal.com/");

    await page.waitForTimeout(7000);

    await page.locator("//a[text()='Sell on Snapdeal']").scrollIntoViewIfNeeded();

    await page.waitForTimeout(2000);

    await page.locator("//a[text()='Sell on Snapdeal']").click();
    await page.waitForTimeout(6000);


})