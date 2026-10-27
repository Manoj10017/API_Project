import { test, expect } from '@playwright/test';
import { Faker } from '@faker-js/faker';
import { faker } from '@faker-js/faker/locale/af_ZA';
// @ts-ignore: Could not find a declaration file for module 'luxon'.
import { DateTime } from 'luxon'

const BASE_URL = 'https://restful-booker.herokuapp.com'

const requestPayload = {
    firstname: faker.person.firstName(),
    lastname: faker.person.lastName(),
    totalprice: faker.number.int({ min: 100, max: 1000 }),
    depositpaid: faker.datatype.boolean(),
    bookingdates: {
        checkin: DateTime.now().toFormat('yyyy-MM-dd'),
        checkout: DateTime.now().plus({ days: 3 }).toFormat('yyyy-MM-dd'),
    },
    additionalneeds: 'Breakfast',
};

test('Generating the random test data', async ({ request }) => {
    console.log(requestPayload);

    const response = await request.post(`${BASE_URL}/booking`, { data: requestPayload });
    const responseBody = await response.json();
    expect(response.status()).toBe(200);
    expect(response.statusText()).toBe('OK');

    expect(requestPayload.firstname).toBe(responseBody.booking.firstname);

});

