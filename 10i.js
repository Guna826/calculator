let calculation=localStorage.getItem('calculation') || '';

displayCalculation();
        function updateCalculation(value)
        {
          calculation+=value;
         console.log(calculation);
         let first = document.querySelector('.polo');
         let second=calculation;

         displayCalculation();
         localStorage.setItem('calculation',calculation);
        }

        function displayCalculation()
        {
            document.querySelector('.new-one').innerHTML=calculation;
        }
        