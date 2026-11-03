# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: web\creste-employee.spec.ts >> Employee creation
- Location: tests\web\creste-employee.spec.ts:9:5

# Error details

```
TimeoutError: locator.click: Timeout 15000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'PIM' })
    - locator resolved to <a data-v-6475d26d="" class="oxd-main-menu-item" href="/web/index.php/pim/viewPimModule">…</a>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <div data-v-c93bdbf3="" data-v-04c617d8="" class="oxd-grid-item oxd-grid-item--gutters orangehrm-dashboard-widget">…</div> from <div data-v-edf1c7c7="" class="oxd-layout-container">…</div> subtree intercepts pointer events
  - retrying click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - element is outside of the viewport
  - retrying click action
    - waiting 20ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <div data-v-edf1c7c7="" class="oxd-layout-context">…</div> from <div data-v-edf1c7c7="" class="oxd-layout-container">…</div> subtree intercepts pointer events
  2 × retrying click action
      - waiting 100ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div data-v-c93bdbf3="" data-v-04c617d8="" class="oxd-grid-item oxd-grid-item--gutters orangehrm-dashboard-widget">…</div> from <div data-v-edf1c7c7="" class="oxd-layout-container">…</div> subtree intercepts pointer events
  5 × retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - element is outside of the viewport
    - retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div data-v-edf1c7c7="" class="oxd-layout-context">…</div> from <div data-v-edf1c7c7="" class="oxd-layout-container">…</div> subtree intercepts pointer events
    - retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div data-v-c93bdbf3="" data-v-04c617d8="" class="oxd-grid-item oxd-grid-item--gutters orangehrm-dashboard-widget">…</div> from <div data-v-edf1c7c7="" class="oxd-layout-container">…</div> subtree intercepts pointer events
    - retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div data-v-c93bdbf3="" data-v-04c617d8="" class="oxd-grid-item oxd-grid-item--gutters orangehrm-dashboard-widget">…</div> from <div data-v-edf1c7c7="" class="oxd-layout-container">…</div> subtree intercepts pointer events
  - retrying click action
    - waiting 500ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - element is outside of the viewport
  - retrying click action
    - waiting 500ms

```

# Page snapshot

```yaml
- generic [ref=f1e3]:
  - generic:
    - complementary:
      - navigation "Sidepanel":
        - generic:
          - link [ref=f1e4] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f1e6]
          - generic [ref=f1e7] [cursor=pointer]: 
        - generic:
          - generic [ref=f1e8]:
            - generic [ref=f1e9]:
              - textbox "Search" [ref=f1e12]
              - text: 
            - separator
          - list [ref=f1e13]:
            - listitem:
              - link "Admin" [ref=f1e14] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem:
              - link "PIM" [ref=f1e18] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem:
              - link "Leave" [ref=f1e33] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem:
              - link "Time" [ref=f1e37] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem:
              - link "Recruitment" [ref=f1e44] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem:
              - link "My Info" [ref=f1e51] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem:
              - link "Performance" [ref=f1e58] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem:
              - link "Dashboard" [ref=f1e67] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem:
              - link "Directory" [ref=f1e71] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem:
              - link "Maintenance" [ref=f1e75] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem:
              - link "Claim" [ref=f1e80] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem:
              - link "Buzz" [ref=f1e88] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f1e92]:
      - generic [ref=f1e93]:
        - generic [ref=f1e94]:
          - generic [ref=f1e95] [cursor=pointer]: 
          - heading "Dashboard" [level=6] [ref=f1e97]
        - link [ref=f1e99]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f1e100] [cursor=pointer]
        - list [ref=f1e106]:
          - listitem [ref=f1e107]:
            - generic [ref=f1e108] [cursor=pointer]:
              - img "profile picture" [ref=f1e109]
              - generic [ref=f1e110]: 
      - navigation "Topbar Menu" [ref=f1e112]:
        - list [ref=f1e113]:
          - button "" [ref=f1e115] [cursor=pointer]
  - generic [ref=f1e117]:
    - generic [ref=f1e119]:
      - generic [ref=f1e121]:
        - generic [ref=f1e123]:
          - generic [ref=f1e124]: 
          - paragraph [ref=f1e125]: Time at Work
        - separator [ref=f1e126]
        - generic [ref=f1e128]:
          - generic [ref=f1e129]:
            - img "profile picture" [ref=f1e131]
            - generic [ref=f1e132]:
              - paragraph [ref=f1e133]: Punched Out
              - paragraph [ref=f1e134]: "Punched Out: Today at 11:48 AM (GMT 7)"
          - generic [ref=f1e135]:
            - generic [ref=f1e136]: 0h 1m Today
            - button "" [ref=f1e137] [cursor=pointer]
          - separator [ref=f1e139]
          - generic [ref=f1e140]:
            - generic [ref=f1e141]:
              - paragraph [ref=f1e142]: This Week
              - paragraph [ref=f1e143]: Nov 02 - Nov 08
            - generic [ref=f1e144]:
              - generic [ref=f1e145]: 
              - paragraph [ref=f1e146]: 0h 1m
      - generic [ref=f1e150]:
        - generic [ref=f1e152]:
          - generic [ref=f1e153]: 
          - paragraph [ref=f1e154]: My Actions
        - separator [ref=f1e155]
        - generic [ref=f1e157]:
          - img "No Content" [ref=f1e158]
          - paragraph [ref=f1e159]: No Pending Actions to Perform
      - generic [ref=f1e161]:
        - generic [ref=f1e163]:
          - generic [ref=f1e164]: 
          - paragraph [ref=f1e165]: Quick Launch
        - separator [ref=f1e166]
        - generic [ref=f1e168]:
          - generic [ref=f1e169]:
            - button "Assign Leave" [ref=f1e170] [cursor=pointer]
            - generic "Assign Leave" [ref=f1e173]:
              - paragraph [ref=f1e174]: Assign Leave
          - generic [ref=f1e175]:
            - button "Leave List" [ref=f1e176] [cursor=pointer]
            - generic "Leave List" [ref=f1e183]:
              - paragraph [ref=f1e184]: Leave List
          - generic [ref=f1e185]:
            - button "Timesheets" [ref=f1e186] [cursor=pointer]
            - generic "Timesheets" [ref=f1e192]:
              - paragraph [ref=f1e193]: Timesheets
          - generic [ref=f1e194]:
            - button "Apply Leave" [ref=f1e195] [cursor=pointer]
            - generic "Apply Leave" [ref=f1e198]:
              - paragraph [ref=f1e199]: Apply Leave
          - generic [ref=f1e200]:
            - button "My Leave" [ref=f1e201] [cursor=pointer]
            - generic "My Leave" [ref=f1e206]:
              - paragraph [ref=f1e207]: My Leave
          - generic [ref=f1e208]:
            - button "My Timesheet" [ref=f1e209] [cursor=pointer]
            - generic "My Timesheet" [ref=f1e212]:
              - paragraph [ref=f1e213]: My Timesheet
      - generic [ref=f1e215]:
        - generic [ref=f1e217]:
          - generic [ref=f1e218]: 
          - paragraph [ref=f1e219]: Buzz Latest Posts
        - separator [ref=f1e220]
        - generic [ref=f1e222]:
          - generic [ref=f1e223]:
            - generic [ref=f1e224] [cursor=pointer]:
              - img "profile picture" [ref=f1e226]
              - generic [ref=f1e227]:
                - paragraph [ref=f1e228]: Dori Bernard Bear
                - paragraph [ref=f1e229]: 2026-03-11 10:41 AM
            - separator [ref=f1e230]
            - paragraph [ref=f1e231]: HI All this is Scripts - good mng
          - generic [ref=f1e232]:
            - generic [ref=f1e233] [cursor=pointer]:
              - img "profile picture" [ref=f1e235]
              - generic [ref=f1e236]:
                - paragraph [ref=f1e237]: Dori Bernard Bear
                - paragraph [ref=f1e238]: 2020-08-10 09:08 AM
            - separator [ref=f1e239]
            - paragraph [ref=f1e240]: "Hi All; Linda has been blessed with a baby boy! Linda: With love, we welcome your dear new baby to this world. Congratulations!"
          - generic [ref=f1e241]:
            - generic [ref=f1e242] [cursor=pointer]:
              - img "profile picture" [ref=f1e244]
              - generic [ref=f1e245]:
                - paragraph [ref=f1e246]: Sania Shaheen
                - paragraph [ref=f1e247]: 2020-08-10 09:08 AM
            - separator [ref=f1e248]
            - paragraph [ref=f1e249]: "World Championship: What makes the perfect snooker player? Mark Selby: Robertson has one of the best techniques in the game. It is very, very straight and he fully commits to every single shot he plays. John Higgins: Every shot is repetitive. He always keeps the same technique and cues through the ball bang straight. Barry Hawkins: Robertson is textbook with his grip and has a ramrod solid cue action, delivering it in a straight line. Honourable mentions: Shaun Murphy, Ding Junhui, Jack Lisowski."
          - generic [ref=f1e250]:
            - generic [ref=f1e251] [cursor=pointer]:
              - img "profile picture" [ref=f1e253]
              - generic [ref=f1e254]:
                - paragraph [ref=f1e255]: Rebecca Harmony
                - paragraph [ref=f1e256]: 2020-08-10 09:04 AM
            - separator [ref=f1e257]
            - paragraph [ref=f1e258]: Throwback Thursdays!!
          - generic [ref=f1e260]:
            - generic [ref=f1e261] [cursor=pointer]:
              - img "profile picture" [ref=f1e263]
              - generic [ref=f1e264]:
                - paragraph [ref=f1e265]: Russel Hamilton
                - paragraph [ref=f1e266]: 2020-08-10 09:03 AM
            - separator [ref=f1e267]
            - paragraph [ref=f1e268]: Live SIMPLY Dream BIG Be GREATFULL Give LOVE Laugh LOT.......
      - generic [ref=f1e270]:
        - generic [ref=f1e271]:
          - paragraph [ref=f1e276]: Employees on Leave Today
          - generic [ref=f1e277] [cursor=pointer]: 
        - separator [ref=f1e278]
        - generic [ref=f1e280]:
          - img "No Content" [ref=f1e281]
          - paragraph [ref=f1e282]: No Employees are on Leave Today
      - generic [ref=f1e284]:
        - generic [ref=f1e286]:
          - generic [ref=f1e287]: 
          - paragraph [ref=f1e288]: Employee Distribution by Sub Unit
        - separator [ref=f1e289]
        - list [ref=f1e294]:
          - listitem [ref=f1e295] [cursor=pointer]:
            - generic "Engineering" [ref=f1e297]
          - listitem [ref=f1e298] [cursor=pointer]:
            - generic "Human Resources" [ref=f1e300]
          - listitem [ref=f1e301] [cursor=pointer]:
            - generic "Administration" [ref=f1e303]
          - listitem [ref=f1e304] [cursor=pointer]:
            - generic "Client Services" [ref=f1e306]
          - listitem [ref=f1e307] [cursor=pointer]:
            - generic "Unassigned" [ref=f1e309]
      - generic [ref=f1e311]:
        - generic [ref=f1e313]:
          - generic [ref=f1e314]: 
          - paragraph [ref=f1e315]: Employee Distribution by Location
        - separator [ref=f1e316]
        - list [ref=f1e321]:
          - listitem [ref=f1e322] [cursor=pointer]:
            - generic "Texas R&D" [ref=f1e324]
          - listitem [ref=f1e325] [cursor=pointer]:
            - generic "New York Sales Office" [ref=f1e327]
          - listitem [ref=f1e328] [cursor=pointer]:
            - generic "Unassigned" [ref=f1e330]
    - generic [ref=f1e331]:
      - paragraph [ref=f1e332]: OrangeHRM OS 5.9
      - paragraph [ref=f1e333]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f1e334] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  1  | import { expect, test } from '@playwright/test';
  2  | import { LoginPage } from '../../pages/LoginPage';
  3  | import { LeftNavigationPage } from '../../pages/LeftNavigationPage';
  4  | import { PIMPage } from '../../pages/PIMPage';
  5  | import data from "../../test-Data/orane-hrm.json";
  6  | import dotenv from 'dotenv';
  7  | dotenv.config();
  8  | 
  9  | test('Employee creation', { tag: ['@web'] }, async ({ page }) => {
  10 |    const baseUrl = process.env.BASE_URL_WEB;
  11 |    const username = process.env.USER_NAME;
  12 |    const password = process.env.PASSWORD;
  13 | 
  14 |    if (!baseUrl || !username || !password) {
  15 |       throw new Error('BASE_URL_WEB, USER_NAME, and PASSWORD must be configured to run the employee creation test.');
  16 |    }
  17 | 
  18 |    const loginpage = new LoginPage(page);
  19 |    await loginpage.navigateToUrl(`${baseUrl}/web/index.php/auth/login`);
  20 |    await loginpage.login(username, password);
  21 |    await page.waitForURL(`${baseUrl}/web/index.php/dashboard/index`);
  22 | 
  23 |    const leftNavigation = new LeftNavigationPage(page);
> 24 |    await leftNavigation.pimLink.click();
     |                                 ^ TimeoutError: locator.click: Timeout 15000ms exceeded.
  25 | 
  26 |    const pimPage = new PIMPage(page);
  27 |    await pimPage.createNewEmployee(data.firstName, data.middlename, data.lastname);
  28 | 
  29 |    await expect(pimPage.firstNameText).toHaveValue(data.firstName);
  30 |    await expect(pimPage.lastNameText).toHaveValue(data.lastname);
  31 | })
```