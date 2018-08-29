import { Selector } from 'testcafe'; // first import testcafe selectors

fixture `Test Exjs App`// declare the fixture
    .page `http://examples.sencha.com/extjs/6.6.0/examples/admin-dashboard/`;  // specify the start page


//then create a test and place your code there
test('My first test', async t => {
    const button = Selector('.x-treelist-item-text').withExactText('Email');
    await t
        .click(button)
    });
