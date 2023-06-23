document.getElementById('tipForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Get the values from the form
    const billAmount = parseFloat(document.getElementById('billAmount').value);
    const tipPercentage = parseFloat(document.getElementById('tipPercentage').value);
  
    // Calculate the tip amount and total bill amount
    const tipAmount = billAmount * tipPercentage;
    const totalBillAmount = billAmount + tipAmount;
  
    // Display the result on the webpage
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
      <p>Tip Amount: $${tipAmount.toFixed(2)}</p>
      <p>Total Bill Amount: $${totalBillAmount.toFixed(2)}</p>
    `;
  });
  