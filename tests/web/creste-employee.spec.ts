import { expect, test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { LeftNavigationPage } from '../../pages/LeftNavigationPage';
import { PIMPage } from '../../pages/PIMPage';
import data from "../../test-Data/orane-hrm.json";
import dotenv from 'dotenv';
dotenv.config();

test('Employee creation', async ({ page }) => {
   const baseUrl = process.env.BASE_URL_WEB;
   const username = process.env.USER_NAME;
   const password = process.env.PASSWORD;

   if (!baseUrl || !username || !password) {
      throw new Error('BASE_URL_WEB, USER_NAME, and PASSWORD must be configured to run the employee creation test.');
   }

   const loginpage = new LoginPage(page);
   await loginpage.navigateToUrl(`${baseUrl}/web/index.php/auth/login`);
   await loginpage.login(username, password);
   await page.waitForURL(`${baseUrl}/web/index.php/dashboard/index`);

   const leftNavigation = new LeftNavigationPage(page);
   await leftNavigation.pimLink.click();

   const pimPage = new PIMPage(page);
   await pimPage.createNewEmployee(data.firstName, data.middlename, data.lastname);

   await expect(pimPage.firstNameText).toHaveValue(data.firstName);
   await expect(pimPage.lastNameText).toHaveValue(data.lastname);
})