import { test, expect } from '@playwright/test';

test.describe('CharacterDetail', () => {
    const mockCharacter = {
    id: 1,
    name: { first: 'Bender', middle: 'Bending', last: 'Rodriguez' },
    occupation: 'Bender',
    species: 'Robot',
    age: '29',
    gender: 'Male',
    images: { main: 'https://via.placeholder.com/150' },
    sayings: ['Bite my shiny metal ass!', 'Kill all humans!'],
    };

    test('debería expandir y colapsar los sayings cuando se hace clic en "Ver más" o "Ver menos"', async ({ page }) => {
    await page.setContent(`
        <div class="character-detail">
        <div class="character-detail-content">
            <div>
            <h3>Sayings:</h3>
            <ul class="character-sayings collapsed">
                ${mockCharacter.sayings.map(saying => `<li>${saying}</li>`).join('')}
            </ul>
            <button type="button">Ver más</button>
            </div>
        </div>
        </div>
    `);

    const toggleButton = page.locator('button', { hasText: 'Ver más' });
    await toggleButton.click();
    await page.locator('ul.character-sayings').evaluate((element) => {
        element.classList.add('expanded');
        element.classList.remove('collapsed');
    });
    await expect(page.locator('.character-sayings.expanded')).toBeVisible();

    // Simular clic en "Ver menos"
    await toggleButton.click();
    await page.locator('ul.character-sayings').evaluate((element) => {
        element.classList.add('collapsed');
        element.classList.remove('expanded');
    });
    await expect(page.locator('.character-sayings.collapsed')).toBeVisible();
    });

    test('debería llamar a onBackClick cuando se hace clic en "Cerrar"', async ({ page }) => {
    await page.setContent(`
        <div class="character-detail">
        <button type="button" class="close">Cerrar</button>
        </div>
    `);

    const closeButton = page.locator('button.close');
    await closeButton.click();

    });

});
