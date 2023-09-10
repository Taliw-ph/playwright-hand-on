import { test, expect } from "@playwright/test";

// test("test", async ({ page }) => {
//     await page.goto("https://twitter.com/");
//     await page.getByText("Happening now").click();
//     await page.getByTestId("loginButton").click();
//     await page.getByLabel("Phone, email, or username").click();
//     await page.getByLabel("Phone, email, or username").fill("naphohopx");
//     await page.getByRole("button", { name: "Next" }).click();
//     await page.getByLabel("Password", { exact: true }).click();
//     await page.getByLabel("Password", { exact: true }).fill("taliw311043");
//     await page.getByTestId("LoginForm_Login_Button").click();
//     await page.getByTestId("tweetTextarea_0").locator("div").nth(2).click();
//     await page
//         .locator("div")
//         .filter({ hasText: /^ทุกคน$/ })
//         .first()
//         .click();
//     await page.getByTestId("tweetTextarea_0").locator("div").nth(2).click();
//     await page
//         .getByRole("main")
//         .locator("div")
//         .filter({
//             hasText:
//                 "หน้าแรกสำหรับคุณกําลังติดตามดูโพสต์ใหม่ทุกคนมีอะไรเกิดขึ้นบ้างทุกคนสามารถตอบกลับ",
//         })
//         .nth(2)
//         .click();
//     await page.getByTestId("app-bar-back").click();
//     await page.locator("label > div > .css-901oao > .css-1dbjc4n").click();
//     await page.getByTestId("tweetTextarea_0").fill("test post with playwright");
//     await page.getByTestId("tweetButtonInline").click();
//     await page.getByText("test post with playwright").click();
//     await page.getByText("test post with playwright").click();
//     // tweetTextarea_0RichTextInputContainer
// });

test("Visit Twitter", async ({ page }) => {
    await page.goto("https://twitter.com");
    await expect(page.getByText("Happening now")).toBeVisible();
    await expect(page.getByTestId("loginButton")).toBeVisible();
});

test("Login Twitter", async ({ page }) => {
    await page.goto("https://twitter.com");
    await page.getByTestId("loginButton").click();
    await page.getByLabel("Phone, email, or username").fill("naphohopx");
    await page.getByRole("button", { name: "Next" }).click();
    await page.getByLabel("Password", { exact: true }).fill("taliw311043");
    await page.getByTestId("LoginForm_Login_Button").click();

    await expect(page).toHaveURL("https://twitter.com/home");
});

test("Post in Twitter", async ({ page }) => {
    await page.goto("https://twitter.com");
    await page.getByTestId("loginButton").click();
    await page.getByLabel("Phone, email, or username").fill("naphohopx");
    await page.getByRole("button", { name: "Next" }).click();
    await page.getByLabel("Password", { exact: true }).fill("taliw311043");
    await page.getByTestId("LoginForm_Login_Button").click();

    await page.getByTestId("tweetTextarea_0").fill("Taliw post with Playwright");
    await page.getByTestId("tweetButtonInline").click();

    await expect(page.getByText("Taliw post with Playwright")).toBeVisible();
});
