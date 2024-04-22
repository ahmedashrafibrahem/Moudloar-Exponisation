document.addEventListener('DOMContentLoaded', function() {
    const calculateButton = document.getElementById('calculateButton');
    const baseInput = document.getElementById('base');
    const exponentInput = document.getElementById('exponent');
    const modulusInput = document.getElementById('modulus');
    const resultElement = document.getElementById('result');

    calculateButton.addEventListener('click', calculate);

    function calculate() {
        const base = parseInt(baseInput.value);
        const exponent = parseInt(exponentInput.value);
        const modulus = parseInt(modulusInput.value);

        if (!isNaN(base) && !isNaN(exponent) && !isNaN(modulus)) {
            const result = modExp(base, exponent, modulus);
            resultElement.textContent = `Modular Exponentiation result: ${result}`;
        } else {
            resultElement.textContent = 'Please enter valid numbers for all inputs.';
        }
    }

    function modExp(base, exponent, modulus) {
        if (modulus === 1) return 0; // Any number modulo 1 is 0

        let result = 1;
        base = base % modulus;

        while (exponent > 0) {
            if (exponent % 2 === 1) {
                result = (result * base) % modulus;
            }
            exponent = exponent >> 1;
            base = (base * base) % modulus;
        }

        return result;
    }

  
    
    



});


document.addEventListener("DOMContentLoaded", function() {
    var h1 = document.querySelector(".navbar h1");
    h1.classList.add("loaded");
});
