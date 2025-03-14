const { test, expect } = require("playwright");
const { email, password } = require("…/tests/user");


test("test", async ({ page }) => {
  await page.goto("https://netology.ru/");
  await page.getByRole("link", { name: "Войти" }).click();
  await page.getByRole("textbox", { name: "Email" }).click();
  await page
    .getByRole("textbox", { name: "Email" })
    .fill("sunjuly82@yandex.ru");
  await page.getByRole("textbox", { name: "Пароль" }).click();
  await page.getByRole("textbox", { name: "Пароль" }).fill("18102017");
  await page.getByTestId("login-submit-btn").click();

  const heading = page.locator("//h2");

  await expect.heading.toContainText('Моё обучение');
});


test("test", async ({ page }) => {
  await page.goto("https://netology.ru/");
  await page.getByRole("link", { name: "Войти" }).click();
  await page.getByRole("textbox", { name: "Email" }).click();
  await page
    .getByRole("textbox", { name: "Email" })
    .fill("sunjuly82@yandex.ru");
  await page.getByRole("textbox", { name: "Пароль" }).click();
  await page.getByRole("textbox", { name: "Пароль" }).fill("12345678");
  await page.getByTestId("login-submit-btn").click();

 

  const heading = page.locator("login-error-hint");

  await expect.heading.toContainText("Вы ввели неправильно логин или пароль");
});
