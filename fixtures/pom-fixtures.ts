import {test as baseTest} from'@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { DashboardPage } from '../pages/DashboardPage'
import { from } from 'node:stream/iter'

type pomfixtute={
    loginpage:LoginPage,
    dashboard:DashboardPage
}

export const test=baseTest.extend<pomfixtute>({
    loginpage:async({page},use)=>{
       // await use(new LoginPage(page));

       const loginpage=new LoginPage(page);
       use(loginpage);
    },
    dashboard:async({page},use)=>{
        const dashboard=new DashboardPage(page);
        use(dashboard);

    }
})
export { expect } from '@playwright/test';