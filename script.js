// Create a form with two inputs: a number input (or range input) for count 
// and a select input for the type of coin: Penny, Nickel, Dime, or Quarter.
"use strict"; {
    const form = document.getElementById('theForm');

    form.addEventListener('submit', e => {
        const data = new FormData(form);
        let coinNumber = data.get('coinNumber');
        let coinValue = data.get('coinValue');
        e.preventDefault();
    })

    function calculateCoin(coinNumber, coinValue) {
        if (coinValue = 'penny') {
            return (0.01 * coinNumber)
        } else if (coinValue = 'nickel') {
            return (0.05 * coinNumber)
        } else if (coinValue = 'dime') {
            return (0.10 * coinNumber)
        } else if (coinValue = 'quarter') {
            return (0.25 * coinNumber)
        }
    }
    // is the if statement targeting coinValue correctly?

    function addCoins(coinNumber, coinValue) {
        for (let i = 1; i <= coinNumber; i++) {
            const drop = document.createElement('div');
            if (coinValue = 'penny') {
                drop.className = 'penny'
            } else if (coinValue = 'nickel') {
                drop.className = 'nickel'
            } else if (coinValue = 'dime') {
                drop.className = 'dime'
            } else if (coinValue = 'quarter') {
                drop.className = 'quarter'
            }
            // if statement to differentiate className by the coinType input
            document.getElementById('coinHolder').appendChild(drop)
        }



        //whenever a coin is clicked, remove just that the clicked coin from the page.
        function removeCoin('click', () => {
            // click action should remove element
        })
    }