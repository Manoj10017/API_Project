import { test, expect } from '@playwright/test';
import { DateTime } from 'luxon';
import { faker } from '@faker-js/faker';

const requstPayload = {
    firstname: faker.person.firstName(),
    lastname: faker.person.lastName(),
    totalprice: faker.number.int({ min: 100, max: 999 }),
    depositpaid: faker.datatype.boolean(),
    bookingdates: {
        checkin: DateTime.now().toFormat('yyyy-MM-dd'),
        checkout: DateTime.now().plus({ days: 5 }).toFormat('yyyy-MM-dd')
    },
    additionalneeds: "Breakfast"
}

const BASE_URL = 'https://restful-booker.herokuapp.com';
let bookingID='';

test('Creating the user for the firstname and lastname',{tag:['@sanity','@regression','@API']}, async ({ request }) => {

    const response = await request.post(`${BASE_URL}/booking`, { data: requstPayload });
    const responseBody = await response.json();

    const firstName = responseBody.firstname;
    console.log(` firstname is: ${firstName}`);
    const lastName = responseBody.lastname;
    console.log(`lastname is:${lastName}`);
     bookingID=responseBody.bookingid;
    console.log(`booking id :${bookingID}`)

})
test('fetching the booking ID using the firstname and lastname', async ({ request }) => {

    const response = await request.get(`${BASE_URL}/booking`, { params: {
        firstname: requstPayload.firstname,
        lastname: requstPayload.lastname
    } });

    const responseBody=await response.json();
    for (let item of responseBody){
     bookingID=responseBody.bookingid;
        expect(item).toHaveProperty('bookingid')
        expect(typeof(item.bookingid)).toBe('number');
        expect(item.bookingid).toBeGreaterThan(0);
        console.log(`Booking id: ${item.bookingid}`)
    }
    

})
