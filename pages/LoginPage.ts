import { Locator, Page } from '@playwright/test'
export class LoginPage {
    readonly page: Page;
    readonly userNameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;


    constructor(page: Page) {
        this.page = page;
        this.userNameInput = page.getByRole('textbox', { name: 'Username' });
        this.passwordInput = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Login' });
    }

    /**
     * Navigate to the web URL
     * @param url 
     */
    async navigateToUrl(url: string) {
        await this.page.goto(url);
    }
    /**
     * Filling the username and password navigate to the dashboard page.
     * @param Username 
     * @param Password 
     */
    async login(Username: string, Password: string) {
        await this.userNameInput.fill(Username);
        await this.passwordInput.fill(Password);
        await this.loginButton.click();
    }



}