import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker/locale/af_ZA';
import { DateTime } from 'luxon';

const requestPayload = {
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
/**
 * Fetch the booking using the created ID
 */

test('Fetch booking data using its created ID',{tag:['@sanity','@regression','@API']}, async ({ request }) => {
    const response = await request.post(`${BASE_URL}/booking`, { data: requestPayload });
    expect(response.status()).toBe(200);
    expect(response.statusText()).toBe('OK');

    const responseBody = await response.json();
    const bookingId = responseBody.bookingid;
    console.log(`Boking ID: ${bookingId}`);
    expect(responseBody.booking.firstname).toBe(requestPayload.firstname);
    expect(requestPayload.lastname).toBe(responseBody.booking.lastname);
    expect(bookingId).toBeTruthy();
    expect(requestPayload.bookingdates).toMatchObject(responseBody.booking.bookingdates);

    const responseID = await request.get(`${BASE_URL}/booking/${bookingId}`);
    expect(responseID.status()).toBe(200);

    const responseBodyID = await responseID.json();
    expect(requestPayload.firstname).toBe(responseBodyID.firstname);
    expect(requestPayload.lastname).toBe(responseBodyID.lastname);
    expect(requestPayload.totalprice).toBe(responseBodyID.totalprice);
    expect(requestPayload.additionalneeds).toBe(responseBodyID.additionalneeds);
    expect(requestPayload.bookingdates).toMatchObject(responseBodyID.bookingdates);
})


