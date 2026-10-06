
import{test,expect, chromium} from '@playwright/test'

test("Open the Ebay application",async()=>
{
    const BE = await chromium.launch();
    const BC = await BE.newContext();
    const mypage = await BE.newPage();

    await mypage.goto("https://www.ebay.com/")
})














