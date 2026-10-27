import { test, expect } from '../../fixtures/pom-fixtures'
import { config } from "dotenv";

config();

test("Login with valid credentials", { tag: ['@sanity', '@regression', '@web'] }, async ({ page, loginpage, dashboard }) => {
    //const login = new LoginPage(page);
    //console.log(process.env.BASE_URL_WEB);
    await loginpage.navigateToUrl(`${process.env.BASE_URL_WEB}/web/index.php/auth/login`);
    await loginpage.login(process.env.USER_NAME!, process.env.PASSWORD!);
    await page.waitForURL(`${process.env.BASE_URL_WEB}/web/index.php/dashboard/index`);
    await expect(page).toHaveURL(`${process.env.BASE_URL_WEB}/web/index.php/dashboard/index`);
    await expect(dashboard.dashboadrtText).toHaveText('Dashboard');



})