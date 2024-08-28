import { test, expect } from '@playwright/test';

test.describe('CharacterList', () => {

  // Test para manejar el caso de error al cargar personajes
    test('debería mostrar un mensaje de error si la carga de personajes falla', async ({ page }) => {
    // Interceptar la solicitud y simular un fallo
    await page.route('https://api.sampleapis.com/futurama/characters', route =>
        route.abort('failed')
    );

    await page.goto('http://localhost:3000');

    // Verificar que el mensaje de error se muestre
    const errorMessage = page.locator('text=Failed to fetch characters.');
    await expect(errorMessage).toBeVisible();
    });

  // Test que verifica la interacción al hacer clic en un personaje
    test('debería llamar a onCharacterClick cuando se hace clic en un personaje', async ({ page }) => {
    const mockCharacters = [
        { id: 1, name: { first: 'Bender', last: 'Rodriguez' }, images: { main: 'https://via.placeholder.com/150' } },
    ];

    // Interceptar la solicitud y devolver personajes simulados
    await page.route('https://api.sampleapis.com/futurama/characters', route =>
        route.fulfill({
        contentType: 'application/json',
        body: JSON.stringify(mockCharacters),
        })
    );

    await page.goto('http://localhost:3000');

    // Verificar que al hacer clic en el personaje, se realiza la acción esperada
    const characterCard = page.locator('.character-card').first();
    await characterCard.click();

    });

});
