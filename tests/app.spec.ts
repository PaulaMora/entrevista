import { test, expect } from '@playwright/test';

test.describe('App', () => {

  test('debería mostrar el título y el logo correctamente', async ({ page }) => {
    await page.goto('http://localhost:3000'); 

    // Verifica que el título de la página esté presente
    const header = page.locator('h1');
    await expect(header).toHaveText('Futurama Characters');

    // Verifica que el logo de Futurama esté visible
    const logo = page.locator('img[alt="Futurama Logo"]');
    await expect(logo).toBeVisible();
    });

    test('debería mostrar los detalles del personaje al hacer clic', async ({ page }) => {
    await page.goto('http://localhost:3000');

    // Espera a que la lista de personajes esté visible
    const firstCharacter = page.locator('.character-card').first();
    await firstCharacter.waitFor(); // Espera a que el primer personaje sea visible
    await firstCharacter.click();

    // Verifica que los detalles del personaje se muestren
    const characterDetail = page.locator('.character-detail');
    await expect(characterDetail).toBeVisible();
    });

});
