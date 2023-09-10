import { expect, test } from "@playwright/test";
import { LoginPage } from "../pom/login.page";
import { invalidUsers, validUser } from "../fixtures/user";
import { HomePage } from "../pom/home.page";

test.describe("Login page of Twittah", () => {
    let loginPage: LoginPage;
    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        homePage = new HomePage(page);

        await loginPage.visit();
    });

    test("Visit Twittah", async ({ page }) => {
        await loginPage.shouldBeDisplayed();
    });

    test("Login success", async ({ page }) => {
        await loginPage.loginWith(validUser.credential);

        await homePage.shouldBeDisplayed();
        await homePage.shouldDisplayUserProfileOf(validUser);
    });

    for (const user of invalidUsers) {
        test(`Login failed: ${user.credential.login} ${user.credential.password}`, async ({
            page,
        }) => {
            await loginPage.loginWith(user.credential);
            await loginPage.shouldBeDisplayed();
            await loginPage.shouldContainErrorMessage(user.errorMessage || "");
        });
    }
});

test.describe("Home page of Twittah", () => {
    let loginPage: LoginPage;
    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        homePage = new HomePage(page);

        await loginPage.visit();
        await loginPage.loginWith(validUser.credential);
        await homePage.shouldBeDisplayed();
    });

    test("Visit home", async ({ page }) => {
        await homePage.shouldDisplayUserProfileOf(validUser);
    });

    test("Post message", async ({ page }) => {
        const message: string = `Taliw from Playwright at ${new Date().toLocaleString()}`;

        await homePage.postMessage(message);

        await page.waitForTimeout(2000);
        await expect(page.getByText(message)).toBeVisible();
    });

    test("Logout Twittah", async ({ page }) => {
        await homePage.logout();

        await loginPage.shouldBeDisplayed();
    });
});
