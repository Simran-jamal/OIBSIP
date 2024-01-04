let calculation = '';
        function updateCalculation(value) {
            calculation += value;

            displayCalculation();
            
            localStorage.getItem('calculation', calculation);
        }
        function displayCalculation() {
            document.querySelector('.display').innerHTML = calculation;
        }


