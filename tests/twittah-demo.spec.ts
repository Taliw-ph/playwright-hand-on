import { expect, test } from "@playwright/test";

test("Visit Twittah", async ({ page }) => {
    await page.goto("https://twittah.web.app");
    await expect(page.getByTestId("app-name")).toBeVisible();
    await expect(page.getByTestId("app-name")).toHaveText("Twittah!");
});

test("Login Twittah", async ({ page }) => {
    await page.goto("https://twittah.web.app/");
    await page.getByTestId("login-field").fill("taliw");
    await page.getByTestId("password-field").fill("123456");
    await page.getByTestId("login-button").click();
    await expect(page.getByTestId("user-profile-display-name")).toBeVisible();
    await expect(page.getByTestId("user-profile-display-name")).toHaveText(
        "taliw"
    );
});

test("Post message in Twittah", async ({ page }) => {
    // ARRANGE
    await page.goto("https://twittah.web.app");
    await page.getByTestId("login-field").fill("taliw");
    await page.getByTestId("password-field").fill("123456");
    await page.getByTestId("login-button").click();

    // ACT
    await page.getByTestId("message-field").fill("Taliw from Playwright");
    await page.getByTestId("post-button").click();

    await page.waitForTimeout(2000);

    // ASSERT
    await expect(page.getByText("Taliw from Playwright")).toBeVisible();
});

// test("Logout Twittah", async ({ page }) => {
//     // ARRANGE
//     await page.goto("https://twittah.web.app/");
//     await page.getByTestId("login-field").fill("taliw");
//     await page.getByTestId("password-field").fill("123456");
//     await page.getByTestId("login-button").click();

//     // ACT
//     await page.getByTestId("menu-signout").click();

//     // ASSERT
//     await expect(page.getByTestId("app-name")).toBeVisible();
//     await expect(page.getByTestId("app-name")).toHaveText("Twittah!");
// });
