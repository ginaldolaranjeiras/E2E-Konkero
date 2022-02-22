import { test, expect } from '@playwright/test';

test('Deve carregar a página', async ({ page }) => {
  await page.goto('http://www.konkero.com.br', {timeout: 3000}, );
  const title = page.locator('head > title');
  await expect(title).toHaveText('Konkero - Conteúdo sobre assuntos que envolvem dinheiro');
  await page.screenshot({ path: 'screenshots/page.png' });
});

test('Deve conter a barra de índices', async({ page }) => {
  await page.goto('http://www.konkero.com.br');
  const indice = page.locator('#__next > div > div:nth-child(1) > div > div');
  await expect(indice).toBeVisible();
  await indice.screenshot({ path: 'screenshots/indice.png' });
});
