import drpdwn from '../pageobjects/dropdown.page.js'

describe('Dropdown page test', () => {
    xit('Click the dropdown menu', async () => {
        await drpdwn.open()
        
        await browser.pause(3000)
        await (drpdwn.Menu).click()
        




    })

    it('Selecting Option 1', async () => {
        await drpdwn.open()

        //await browser.pause(3000)
        //await (drpdwn.Menu).click()
        //await browser.pause(5000)
        //await (drpdwn.Optn1).click()
        await browser.pause(5000)
        await (drpdwn.Display).selectByVisibleText('Option 1')
        await browser.pause(5000)



    })

    xit('Selecting Option 2', async () => {
        await drpdwn.open()

        await browser.pause(5000)
        await (drpdwn.Display).selectByVisibleText('Option 2')
        await browser.pause(5000)



    })









})


