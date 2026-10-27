import { Locator, Page } from "@playwright/test";

export class DashboardPage{
    readonly page:Page;
    readonly dashboadrtText:Locator;


    constructor(page:Page){
        this.page=page;
        this.dashboadrtText=page.locator('.oxd-topbar-header-title');
    }

}