import{test,expect} from '@playwright/test'
import { isUtf8 } from 'buffer'
import myjson from 'fs'

test("Test Case on Reading Json File",async()=>
    {
         
const Myinfo = JSON.parse(myjson.readFileSync('./ReadJson/Empread.json','utf-8'));

console.log(Myinfo.who);

    })