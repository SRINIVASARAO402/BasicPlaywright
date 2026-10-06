import{test,expect} from '@playwright/test'
import { isUtf8 } from 'buffer'
import myjson from 'fs'

test("Test Case on Reading Json File",async({page})=>
    {
    const Myinfo = JSON.parse(myjson.readFileSync('./ReadJson/Empread2.json','utf-8'));
    
    console.log(Myinfo.who);
    
     await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php")
    //Home Page Title Print
    // console.log("The Home Title is : " + await page.title())

    //Compare the Home Page Title then Match here after Login Successfully
    await expect(page).toHaveTitle("OrangeHRM - New Level of HR Management");
    
    await page.waitForTimeout(1000)
    //Home Page Title check
    await page.locator(Myinfo.XUN).fill("playwright");
    await page.locator(Myinfo.XPWD).fill("playwright");
    await page.locator(Myinfo.XSUB).click();

    console.log("The After-Login Title is: " + await page.title());
    await page.waitForTimeout(3000)


    })

    