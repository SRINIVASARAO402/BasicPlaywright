import{test,expect} from '@playwright/test'

test.beforeAll("BeforeAll",async()=>
{
    console.log("Playwright--BeforeAll")
})
test.describe.serial("This is serial wise",async()=>
    {
        
test("Test case-1",async()=>
{
    console.log("Test-1")
})
test("Test-2",async()=>
{
console.log("Test-2")
})
})

test.beforeEach("BeforeEach",async()=>
{
console.log("Playwright-BeforeEach")
})
test("Test case-2",async()=>
{
console.log("Test-2")
})

test.afterAll("After All",async()=>
    {
        console.log("Playwright-After All")
    })

test.afterEach("After Each",async()=>
    {
        console.log("Playwright--After Each")
    })