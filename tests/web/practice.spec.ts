import { test, expect } from '@playwright/test';

test("Practice of while loop", () => {

  let add=(num1:number,num2:number):number=>{
    return num1+num2;
  }


 let result= add(10,20);
 console.log("Result is :", result);

  let result2= add(100,200);
 console.log("Result is :", result2);

})