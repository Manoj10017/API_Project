import { expect, test } from '../../fixtures/pom-fixtures'
import { LeftNavigationPage } from '../../pages/LeftNavigationPage';
import { PIMPage } from '../../pages/PIMPage';
import data from "../../test-Data/orane-hrm.json"

test('Employee creation', async ({ page, loginpage }) => {
    const leftNavigation = new LeftNavigationPage(page);
    await leftNavigation.pimLink.click();

    const pimPage = new PIMPage(page);
    pimPage.createNewEmployee(data.firstName, data.middlename, data.lastname);
    expect(pimPage.nameText).toHaveValue(`${data.firstName} ${data.lastname}`)





})