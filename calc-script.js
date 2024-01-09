function calculate() {
    let principalAmount = document.getElementById("principal");
    let RateAmount = document.getElementById("interest");
    let years = document.getElementById("years");

    let principal = Number(principalAmount.value);
    let rate = Number(RateAmount.value / 100);
    let year = Number(years.value);

    if (principal < 0 || isNaN(principal)) {
      principal = 0;
      principalAmount.value = 0;
    }
    if (rate < 0 || isNaN(rate)) {
      rate = 0;
      RateAmount.value = 0;
    }
    if (year < 0 || isNaN(year)) {
      year = 0;
      years.value = 0;
    }

    let result = principal * rate * year;
    console.log(result);
    let totalAmount = document.getElementById("totalAmount");
    totalAmount.textContent = result.toLocaleString(undefined, {
      style: "currency",
      currency: "PKR",
    });
  }