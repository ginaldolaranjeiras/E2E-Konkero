import { test, expect } from '@playwright/test';
test('Pesquisa', async ({ page }) => {
  // Go to https://www.konkero.com.br/
  await page.goto('https://www.konkero.com.br/');
  // Click [placeholder="Pesquisar"]
  await page.click('[placeholder="Pesquisar"]');
  // Press CapsLock
  await page.press('[placeholder="Pesquisar"]', 'CapsLock');
  // Fill [placeholder="Pesquisar"]
  await page.fill('[placeholder="Pesquisar"]', 'Crédito Consignado');
  // Click [placeholder="Pesquisar"]
  
  // Press Enter
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://www.konkero.com.br/search/Cr%C3%A9dito%20Consignado' }*/),
    page.press('[placeholder="Pesquisar"]', 'Enter')
  ]);

  await page.screenshot({ path: 'screenshots/pesquisa.png' });

  // Click text=próxima
  await page.click('text=próxima');
  await expect(page).toHaveURL('https://www.konkero.com.br/search/Cr%C3%A9dito%20Consignado?page=2');

  await  page.screenshot({ path: 'screenshots/pesquisa_pag_2.png' });
  // Click :nth-match(a:has-text("3"), 4)
  await page.click(':nth-match(a:has-text("3"), 4)');
  await expect(page).toHaveURL('https://www.konkero.com.br/search/Cr%C3%A9dito%20Consignado?page=3');
  // Click text=Voltar
  await page.click('text=Voltar');
  await expect(page).toHaveURL('https://www.konkero.com.br/search/Cr%C3%A9dito%20Consignado?page=2');
  // Click text=Voltar1 2 3 próxima >> :nth-match(a, 2)
  await page.click('text=Voltar1 2 3 próxima >> :nth-match(a, 2)');
  await expect(page).toHaveURL('https://www.konkero.com.br/search/Cr%C3%A9dito%20Consignado?page=1');

  
  // Click text=O que é crédito consignado? Entenda como funciona esse empréstimo
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://www.konkero.com.br/posts/o-que-e-credito-consignado-entenda-como-funciona-esse-emprestimo' }*/),
    page.click('text=O que é crédito consignado? Entenda como funciona esse empréstimo')
  ]);

  await page.screenshot({ path: 'screenshots/pesquisa_click_index_2.png' });
  // Go to https://www.konkero.com.br/search/Cr%C3%A9dito%20Consignado?page=1
  await page.goto('https://www.konkero.com.br/search/Cr%C3%A9dito%20Consignado?page=1');

  
});