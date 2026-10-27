import { test, expect } from '../../fixtures/pom-fixtures';

import { config } from "dotenv";

config();

test("Global login", async ({ page, loginpage, dashboard }) => {

    await loginpage.navigateToUrl(`${process.env.BASE_URL_WEB}/web/index.php/auth/login`);
    await loginpage.login(process.env.USER_NAME!, process.env.PASSWORD!);

    await expect(page).toHaveURL(`${process.env.BASE_URL_WEB}/web/index.php/dashboard/index`);
    await expect(dashboard.dashboadrtText).toHaveText('Dashboard');
    await page.context().storageState({ path: "./playwright/.auth/auth.json" });

})