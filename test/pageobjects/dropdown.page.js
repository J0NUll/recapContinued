

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class drpdwn extends Page {

    get Menu () {
        return $('#dropdown')

    }
    
    get Optn1 () {
    return $('#dropdown > option:nth-child(2)')

    }


    get Display () {
        return $('#dropdown')
    
        }





    open () {
        return super.open('/dropdown');
    }
}

export default new drpdwn();
