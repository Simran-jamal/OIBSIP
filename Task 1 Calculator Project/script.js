let calculation = '';
        function updateCalculation(value) {
            calculation += value;
            // console.log(calculation);
            displayCalculation();
            localStorage.getItem('calculation', calculation);
        }
        function displayCalculation() {
            document.querySelector('.display').innerHTML = calculation;
        }


