import{test,expect} from '@playwright/test'

test("Count of Number of Occurence",async()=>
{
    let city : string = "Hyderbad is Capital of Telangana"
    let job : string = "srinu is qa tester" 
    //char count
    let charCount :{[key:string]:number}={};

    for(let C of city.toLowerCase())
    {
        console.log(C);
    }
    for(let D of job.toUpperCase())
    {
        console.log(D)
    }


})