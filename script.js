function calculate(operation) {
    document.getElementById('c').addEventListener("submit", function(event){
        event.preventDefault();

        const num1 = parseFloat(document.getElementById('num1').value);
        const num2 = parseFloat(document.getElementById('num2').value);
        
        if(operation === '+'){
            const num3 = parseFloat(document.getElementById('num3').value);
                const result = num1 + num2 + num3;
                document.getElementById('result').textContent = result;
        }else if(operation === '*'){
            const num3 = parseFloat(document.getElementById('num3').value);
        const result = num1 * num2 *num3;
        document.getElementById('result').textContent = result;
        }else if(operation === '-'){
            const result = num1 - num2;
            document.getElementById('result').textContent = result;
        }else {
            const result = num1 / num2;
            document.getElementById('result').textContent = result;
        }
    })
   
}
