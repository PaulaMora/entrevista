// import { test, expect } from '@playwright/test';

// test('has title and buttons', async ({ page }) => {
//   await page.goto('http://localhost:3000');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle('React App');
//   await expect(page.getByText('Ir a Banca.me')).toBeVisible();
//   await expect(page.getByText('Ir a Material UI')).toBeVisible();
// });

// test('get started link and redirect', async ({ page, context }) => {
//   await page.goto('http://localhost:3000');
//   const pagePromise = context.waitForEvent('page');
//   // Click the get started link.
//   await page.getByRole('link', { name: 'Learn react' }).click();
//   const newPage = await pagePromise;
//   await expect(page).toHaveTitle('React App');
//   await expect(newPage).toHaveTitle('React');
//   // Expects page to have a heading with the name of Installation.
//   await expect(newPage.getByRole('heading', { name: 'React', exact: true })).toBeVisible();
// });
