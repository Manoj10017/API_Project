import { test, expect } from '@playwright/test';

test("Practice of while loop", () => {
    let arr: number[] = [10, 20, 30, 40];

    function findElement(arr1: number[], ele: number) {
        for (let i = 1; i < arr1.length; i++) {
            if(arr1[1]===ele){
                console.log(`Element is found in the array :${arr1[i]}`);
                break;
            }

        }

    }
    findElement(arr,20);


})