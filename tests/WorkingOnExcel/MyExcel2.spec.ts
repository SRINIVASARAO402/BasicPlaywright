import{test,expect} from '@playwright/test'
import MyExcel from 'xlsx'

test("Test Case on Handling Excel",async({page})=>
{
    function readExcel(filepath:string,sheetname:string,)
    {
        const workbook = MyExcel.readFile(filepath);
        const worksheet:any = workbook.Sheets[sheetname];
        const ExcelData = MyExcel.utils.sheet_to_json(worksheet,{header:1});
        return ExcelData;


    }

    const EmployeeInfo:any = readExcel("./ReadMyExcel/EmployeeData.xlsx","Summer");
    for(let h = 1; h<=70; h++)
    {
       console.log(EmployeeInfo[h][0]);

    }

    

})
