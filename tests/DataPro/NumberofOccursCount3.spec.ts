import{test,expect} from '@playwright/test'

test("Count of Number of Occurence",async()=>
{
    let city : string = "Hyderbad is Capital of Telangana"
    let job : string = "srinu is qa tester" 
    //char count
    let charCount :{[key:string]:number}={};
   //Remove the Spaces
    for(let C of city.toLowerCase())
    {
        if(C === " ")
        {
            continue;
        }
        charCount[C] = (charCount[C] || 0) +1; //With H as 1
    }
    console.log(charCount);
})
