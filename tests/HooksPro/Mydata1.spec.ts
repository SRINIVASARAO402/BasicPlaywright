import{test,expect} from '@playwright/test'

test.beforeAll("Before All",async()=>
{
console.log("Hai I am Before All Pre Condition")

})

test.afterEach("After Each",async()=>
{
console.log("Hai I am After Each Post Condition")
})

test("Test case1",async()=>
{
console.log("This Test case-1")

})
test.afterAll("After All",async()=>
{
console.log("Hai I am After All Post Condition")
})



test("Test case2",async()=>
{
console.log("This Test case-2")

})


test.beforeEach("Before Each",async()=>
{
console.log("Hai I am Before Each Pre Conditions")
})
