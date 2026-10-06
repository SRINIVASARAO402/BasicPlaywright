import { test } from '@playwright/test';

test.beforeAll("BeforeAll",async()=>{
    console.log("Hai I am BeforeAll Pre Conditions")
})

test.afterEach("AfterEach",async()=>{
    console.log("Hai I am AfterEach Post Condition")
})
test.describe.serial('My Serial Suite', () => {

test('Test Case 1', async () => {

console.log('Test Case 1');

});

test.afterAll("After All",async()=>{
    console.log("Hai I am After All Post Condition")
})

test('Test Case 2', async () => {

console.log('Test Case 2');

});
test('Test Case 3', async () => {
console.log('Test Case 3');

});

})
test.beforeEach("Before Each",async()=>{
    console.log("Hai I am Before Each Pre Conditions")
})