import { expect, test } from '../../fixtures/pom-fixtures'
import { LoginPage } from '../../pages/LoginPage';
import { LeftNavigationPage } from '../../pages/LeftNavigationPage';
import { PIMPage } from '../../pages/PIMPage';
import data from "../../test-Data/orane-hrm.json"

test('Employee creation', async ({ browser }) => {
   const context = await browser.newContext({ storageState: './storage_data/data.json' });
   const page = await context.newPage();
   const loginpage = new LoginPage(page);
   await loginpage.navigateToUrl(`${process.env.BASE_URL_WEB}/web/index.php/auth/login`);
   //await loginpage.login(process.env.USER_NAME!, process.env.PASSWORD!);

   const leftNavigation = new LeftNavigationPage(page);
   await leftNavigation.pimLink.click();

   const pimPage = new PIMPage(page);
   await pimPage.createNewEmployee(data.firstName, data.middlename, data.lastname);

   await expect(pimPage.firstNameText).toHaveValue(data.firstName);
   await expect(pimPage.lastNameText).toHaveValue(data.lastname);
})