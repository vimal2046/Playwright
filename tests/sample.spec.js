const {test,expect} = require('@playwright/test')

test("myFirstTest",async function ({page}) {
    expect(12).toBe(12)
})

test.skip('my second test', async function ({page}) {
    expect(122).toBe(232)
})

test("my third test", async function ({page}) {
    expect(-3).toBe(-3)
})

test('fourth test',async function ({page}) {
    expect("vimal chandar".includes("vimal")).toBeTruthy
})