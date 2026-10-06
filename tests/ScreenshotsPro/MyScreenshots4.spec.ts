import {test , expect} from '@playwright/test'

test("Capture Screenshots-EntireFullPage", async({page})=>
{

  await page.goto("https://www.amazon.in/");

  await page.waitForTimeout(8000);

  await page.screenshot({path: './TestProofs/FullAmazon.jpg',fullPage : true});

  await page.waitForTimeout(3000);


})
