// @ts-check
const{test,expect}=require('@playwright/test');
test('Login test', async({page})=>{
    
    await page.goto('https://github.com/login');
    await page.fill('input [name="username"]','your username');
    await page.fill('input[name="password"]', 'your-password');
    await page.click('button[type="submit"]');
    await expect(page).toHaveURL('https://github.com/login');
    

});