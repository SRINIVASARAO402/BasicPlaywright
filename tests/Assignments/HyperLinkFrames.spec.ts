import{test,expect} from '@playwright/test'

test('HyperLink Frames',async({page})=>{
  await page.goto("file:///D:/Manual and Playwright videos/PlayWrightVideos/BasicPlaywright/WebElements browsers/Selenium Elements/Selenium Elements/Frames.html");
  let HyperLinkCount = await page.frameLocator("//frame[3]").locator("//a").count();
  console.log("Total HyperLinks in the frame are : "+HyperLinkCount);

  await page.frameLocator("//frame[3]").locator("//a[text()='The Rock Says']").click();
  await page.waitForTimeout(3000);
  await page.reload();
  await page.waitForTimeout(3000);

 await page.frameLocator("//frame[3]").locator("//a[text()='T & J']").click();
 await page.waitForTimeout(6000);
 await page.reload();
 await page.waitForTimeout(3000);


})
