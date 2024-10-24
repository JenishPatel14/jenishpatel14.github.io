<script>document.addEventListener('DOMContentLoaded', function () {
  const calculateBtn = document.getElementById('calculateBtn');
  const clearBtn = document.getElementById('clearBtn');
  const resultDiv = document.getElementById('resultDiv');

  calculateBtn.addEventListener('click', function () {
    const unit1 = parseFloat(document.getElementById("units1").value);
    const price1 = parseFloat(document.getElementById("Price1").value);
    const unit2 = parseFloat(document.getElementById("units2").value);
    const price2 = parseFloat(document.getElementById("Price2").value);

    if (isNaN(unit1) || isNaN(price1) || isNaN(unit2) || isNaN(price2)) {
      return;
    }

    const totalAmount = ((unit1 * price1) + (unit2 * price2)).toFixed(2);
    const totalUnits = unit1 + unit2;
    const averagePrice = (((unit1 * price1) + (unit2 * price2)) / totalUnits).toFixed(2);
    const amountInvested1 = (unit1 * price1).toFixed(2);
    const amountInvested2 = (unit2 * price2).toFixed(2);

    resultDiv.innerHTML = `
      <div style="color:green;">Amount invested in first purchase: <strong>${amountInvested1}</strong></div>
      <hr style="color:green";><div style="color:green";>Amount invested in second purchase: <strong>${amountInvested2}</strong></div>
      <hr style="color:green";><div>Total Units Purchased: <strong>${totalUnits}</strong></div>
      <div>Average Stock Price: <strong>${averagePrice}</strong></div>
      <div>Total Amount Invested: <strong>${totalAmount}</strong></div>
    `;

    resultDiv.style.display = "block"; // Show the result div
  });

  clearBtn.addEventListener('click', function () {
    document.getElementById("units1").value = '';
    document.getElementById("Price1").value = '';
    document.getElementById("units2").value = '';
    document.getElementById("Price2").value = '';
    resultDiv.innerHTML = '';
    resultDiv.style.display = "none"; // Hide the result div
  });
});

</script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous" defer></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossorigin="anonymous" defer></script>
<script>function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  mobileMenu.style.display = (mobileMenu.style.display === 'block') ? 'none' : 'block';
}</script>
