import { test, expect } from '@playwright/test';

test("Practice for the for each method", () => {

    let fruits: string[] = ['apple', 'banana', 'papaya', 'kiwi', 'mango'];

    /* 
     fruits.forEach((fruit, index) => {
         console.log(`${index + 1} ${fruit}`)
 
     })
     */

    //map
    /* let nums: number[] = [10, 20, 30, 30, 50];

    let result = nums.map((value): number => {
        return value * value;

    });
    console.log(result);
 */


    /*  //filter
     let nums: number[] = [10, 20, 30, 30, 50];
 
     let ret=nums.filter((value)=>{
        return value>30;
 
     });
     console.log(ret)
 
  */

    /*     //reduce
        let nums: number[] = [1, 2, 3, 3, 5];
        let multiplication = nums.reduce((mul, values) => {
            return mul * values
    
    
        }, 1);
        console.log(multiplication);
     */

    /* 
    let nums: number[] = [1, 2, 3, 3, 5];
    let result=nums.some((value)=>{
        return value>4
    
    });
    console.log(result);
    
    
     */

    // reverse the string

    let str: string = 'Hi team good morning';
    let splstr: string[] = str.split(' ');
    let splstr0 = splstr[0];
    let splstr1 = splstr[1];
    let splstr2 = splstr[2];
    let splstr3 = splstr[3];
    let rev0:string=' ';
    let rev2:string=' ';

    for (let i=splstr0.length-1;i>=0;i--){
        rev0=rev0+splstr0[i];
    }

    for (let j=splstr2.length-1;j>=0;j--){
        rev2=rev2+splstr2[j];
    }
 console.log(`${rev0} ${splstr1} ${rev2} ${splstr3}`)

})