// Create a form with two inputs: a number input (or range input) for count 
// and a select input for the type of coin: Penny, Nickel, Dime, or Quarter.
"use strict"; {
    function calculateCoin(coinNumber, coinType) {
        if coinType = 'penny' {
            return (0.01 * coinNumber)
        } else if coinType = 'nickel' {
            return (0.05 * coinNumber)
        } else if coinType = 'dime' {
            return (0.10 * coinNumber)
        } else if coinType = 'quarter' {
            return (0.25 * coinNumber)
        }
    }

    function addCoins(coinNumber, coinType) {
        for (let i = 1; i <= coinNumber; i++) {
            const drop = document.createElement('div');
            drop.className = 'coinHolder';
            drop.innerText = `${i} ${coinType}`
            document.getElementById('coinHolder').appendChild(drop)
        }

        const form = document.getElementById('theForm');

        form.addEventListener('submit', e => {
            const data = new FormData(form);
            let coinNumber = data.get('coinNumber');
            let coinType = data.get('coinValue');
            e.preventDefault();
        })
    }