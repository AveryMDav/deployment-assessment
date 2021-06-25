import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})


describe('Game Testing', function(){

    test('I can start a game', async () => {
        let button = await (await driver).findElement(By.id('start-game'));
        await button.click();
    });

    test('Can I add an X', async () => {
        let square7 = await driver.findElement(By.id('cell-7'));
        await square7.click()
        expect(await square7.getText()).toEqual('X')
    });

    test('Check if O selects a box', async ()=>{
        let square0 = await (await driver).findElement(By.id('cell-0'));
        expect(await square0.getText()).toEqual('O');
    });

    test('Adding another X, with Xpath', async () => {
        driver.navigate().refresh();
        await driver.sleep(1000);
        let button = await (await driver).findElement(By.id('start-game'));
        await button.click();
        await driver.sleep(1000);

        let square6 = await driver.findElement(By.xpath("//td[@id='cell-6']"));
        await square6.click()
        expect(await square6.getText()).toEqual('X')
        await driver.sleep(2000)
    });
})

