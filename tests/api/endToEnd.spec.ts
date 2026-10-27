import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { DateTime } from 'luxon';
import * as fs from 'node:fs';
import dotenv, { config } from 'dotenv';
dotenv.config();

//const BASE_URL = 'https://restful-booker.herokuapp.com';

function readFile(path: string) {
    const filePath = path;
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}
const createBooking = {

    "firstname": faker.person.firstName(),
    "lastname": faker.person.lastName(),
    "totalprice": faker.number.int({ min: 100, max: 999 }),
    "depositpaid": faker.datatype.boolean(),
    "bookingdates": {
        "checkin": DateTime.now().toFormat('yyyy-MM-dd'),
        "checkout": DateTime.now().plus({ days: 5 }).toFormat('yyyy-MM-dd')
    },
    "additionalneeds": "Breakfast"
}

test('Create get update and delete the request', { tag: ['@regression', '@web'] }, async ({ request }) => {
    const createResponse = await request.post(`${process.env.BASE_URL}/booking`, { data: createBooking });
    const createResponseBody = await createResponse.json();

    expect(createResponse.status()).toBe(200);
    expect(createResponse.statusText()).toBe("OK");

    const bookingID = createResponseBody.bookingid;
    console.log(`Created booking ID: ${bookingID}`);

    // Get the booking using the booking ID

    const bookingData = await request.get(`${process.env.BASE_URL}/booking/${bookingID}`);
    const bookingDataBody = await bookingData.json();

    expect(bookingData.status()).toBe(200);
    expect(bookingData.statusText()).toBe("OK");
    console.log(`Booking details using the GET request is :`, bookingDataBody);

    //create the token 
    const authFile = readFile("test-Data/auth.json");
    const tokenResponse = await request.post(`${process.env.BASE_URL}/auth`, { data: authFile });
    const tokenResponseBody = await tokenResponse.json();

    expect(tokenResponse.status()).toBe(200);
    expect(tokenResponse.statusText()).toBe("OK");
    const token = tokenResponseBody.token;
    console.log(`Created token id : ${token}`);

    //Partial update 
    const PartialUpdateData =
    {
        "firstname": faker.person.firstName(),
        "lastname": faker.person.lastName()
    }

    const partialResponse = await request.patch(`${process.env.BASE_URL}/booking/${bookingID}`, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Cookie': `token=${token}`
        },
        data: PartialUpdateData
    });
    const partialResponseBody = await partialResponse.json();
    expect(partialResponse.status()).toBe(200);
    expect(partialResponse.statusText()).toBe("OK");
    console.log(`Partial update response is :`, partialResponseBody);


    //full update
    const fullUpdate = {
        "firstname": faker.person.firstName(),
        "lastname": faker.person.lastName(),
        "totalprice": faker.number.int({ min: 111, max: 999 }),
        "depositpaid": faker.datatype.boolean(),
        "bookingdates": {
            "checkin": DateTime.now().toFormat('yyyy-MM-dd'),
            "checkout": DateTime.now().plus({ days: 5 }).toFormat('yyyy-MM-dd')
        },

        "additionalneeds": "Breakfast"
    }

    const fullUpdareResponse = await request.put(`${process.env.BASE_URL}/booking/${bookingID}`, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Cookie': `token=${token}`
        }, data: fullUpdate
    })

    const fullUpdareResponseBody = await fullUpdareResponse.json();
    console.log(`Full update data:`, fullUpdareResponseBody);

    //Delete the request 

    const deleteResponse = await request.delete(`${process.env.BASE_URL}/booking/${bookingID}`, {
        headers: {
            'Content-Type': 'application/json',
            'Cookie': `token=${token}`
        }
    })

    expect(deleteResponse.status()).toBe(201);
    expect(deleteResponse.statusText()).toBe("Created");
    console.log("Booking is succeessfully deleted")

})
