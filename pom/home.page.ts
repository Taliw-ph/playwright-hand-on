import { Locator, Page, expect } from "@playwright/test";
import { app } from "../fixtures/app";
import { User } from "../interfaces/user";

export class HomePage {
    readonly _page: Page;
    readonly _pageUrl: string;
    readonly _userProfileDisplayName: Locator;
    readonly _messageField: Locator;
    readonly _postButton: Locator;
    readonly _signoutButton: Locator;

    constructor(page: Page) {
        this._page = page;
        this._pageUrl = `${app.baseUrl}/home`;
        this._userProfileDisplayName = page.getByTestId(
            "user-profile-display-name"
        );
        this._messageField = page.getByTestId("message-field");
        this._postButton = page.getByTestId("post-button");
        this._signoutButton = page.getByTestId("menu-signout");
    }

    async shouldBeDisplayed() {
        await this._page.waitForURL(this._pageUrl);
        expect(this._page.url()).toEqual(this._pageUrl);
    }

    async shouldDisplayUserProfileOf(user: User) {
        await expect(this._userProfileDisplayName).toBeVisible();
        await expect(this._userProfileDisplayName).toHaveText(user.displayName);
    }

    async postMessage(message: string) {
        await this._messageField.fill(message);
        await this._postButton.click();
    }

    async logout() {
        await this._signoutButton.click();
    }
}
