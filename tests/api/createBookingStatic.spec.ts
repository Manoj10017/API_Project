import { test, expect } from '@playwright/test';


const BASE_URL = 'https://restful-booker.herokuapp.com'
test('Create booking using the static data', { tag: ['@sanity', '@API'] }, async ({ request }) => {

    const requestPayload = {
        firstname: "Jim",
        lastname: "Brown",
        totalprice: 111,
        depositpaid: true,
        bookingdates: {
            checkin: "2018-01-01",
            checkout: "2019-01-01"
        },
        additionalneeds: "Breakfast"
    }

    const response = await request.post(`${BASE_URL}/booking`, { data: requestPayload });
    const responseBody = await response.json()

    console.log('Response body', responseBody);

    expect(response.status()).toBe(200);
    expect(response.statusText()).toBe("OK");
    expect(responseBody).toHaveProperty('bookingid');
    expect(requestPayload.firstname).toBe(responseBody.booking.firstname);
    const bookingId = responseBody.bookingid;
    console.log('Booking ID:', bookingId);

})