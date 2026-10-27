import { test, expect } from '@playwright/test';
import fs from 'fs';

const path = JSON.parse(fs.readFileSync('test-Data/sample1.json', 'utf-8'));

const BASE_URL = 'https://restful-booker.herokuapp.com'

test('create booking thrugh external JSON file',{tag:['@sanity','@regression','@API']}, async ({ request }) => {

    const response = await request.post(`${BASE_URL}/booking`, { data: path });
    const responseBody = await response.json();
    expect(response.status()).toBe(200);
    expect(response.statusText()).toBe('OK');
    expect(path.firstname).toBe(responseBody.booking.firstname);
    console.log(`Booking ID: `, responseBody.bookingid);



})
