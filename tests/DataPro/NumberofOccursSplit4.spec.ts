import{test,expect} from '@playwright/test'

test("Count of Number of Occurence",async()=>
{
    let city : string = "Hyderbad is Capital of Telangana"
   
    let A : string[] = city.split(" ")
    console.log(A[4])
})
