import { Builder, Capabilities, By } from "selenium-webdriver"
// const { counterMove } = require('./server');

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

    test('I can select boxs', async () => {
        let square = await (await driver).findElement(By.id('cell-7'));
        await square.click()
    });

    // test('Check if O selects a box', async ()=>{
    //     expect(counterMove).toBeTruthy()
    //     // let square = await (await driver).findElement(By.id('cell-0'));
    //     // console.log(square)
    // });

    // test('')

    test('I can select boxs', async () => {
        let square1 = await (await driver).findElement(By.id('cell-6'));
        let square2 = await (await driver).findElement(By.id('cell-2'));
        await square1.click()
        await square2.click()
        await driver.sleep(5000)
    });
})

