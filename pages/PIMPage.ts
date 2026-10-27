import { Locator, Page } from "@playwright/test";

export class PIMPage {

    readonly page: Page;
    readonly addButton: Locator;
    readonly firstNameInput: Locator;
    readonly middleNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly saveButton: Locator;
    readonly nameText: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addButton = page.getByRole('button', { name: 'Add' });
        this.firstNameInput = page.getByPlaceholder('First Name');
        this.middleNameInput = page.getByPlaceholder('Middle Name');
        this.lastNameInput = page.getByPlaceholder('Last Name');
        this.saveButton = page.getByRole('button', { name: 'Save' });
        this.nameText = page.locator('div.orangehrm-edit-employee-name')
    }

    async createNewEmployee(firstnmae: string, middlename: string, lastname: string) {
        await this.addButton.click();
        await this.firstNameInput.fill(firstnmae);
        await this.middleNameInput.fill(middlename);
        await this.lastNameInput.fill(lastname);
        await this.saveButton.click();

    }
}