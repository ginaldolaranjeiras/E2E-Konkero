import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://www.konkero.com.br/financiamento-carro/calculadora-de-financiamento-de-veiculo-simula-prestacao-seu-carro
  await page.goto('https://www.konkero.com.br/financiamento-carro/calculadora-de-financiamento-de-veiculo-simula-prestacao-seu-carro');

  // Click [placeholder="R\$"]
  await page.click('[placeholder="R\\$"]');

  // Fill [placeholder="R\$"]
  await page.fill('[placeholder="R\\$"]', 'R$5000.00');

  // Press Tab
  await page.press('[placeholder="R\\$"]', 'Tab');

  // Fill :nth-match([placeholder="R\$"], 2)
  await page.fill(':nth-match([placeholder="R\\$"], 2)', 'R$1000.00');

  // Press Tab
  await page.press(':nth-match([placeholder="R\\$"], 2)', 'Tab');

  // Fill [placeholder="\%"]
  await page.fill('[placeholder="\\%"]', '1.4');

  // Press Tab
  await page.press('[placeholder="\\%"]', 'Tab');

  // Fill [placeholder="Meses"]
  await page.fill('[placeholder="Meses"]', '24');

  // Click button:has-text("Calcular")
  await page.click('button:has-text("Calcular")');

  // Click text=Valor total com a entrada: R$ 5.737,24
  await page.click('text=Valor total com a entrada: R$ 5.737,24');

  // Click text=Valor total com a entrada: R$ 5.737,24
  await page.click('text=Valor total com a entrada: R$ 5.737,24');

});