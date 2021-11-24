document.querySelector("#btn").onclick = function () {
  var loan_amt = document.querySelector("#lp").value;
  var tenure = document.querySelector("#tenure").value;
  var interest = document.querySelector("#roi").value;

  loan_amt = +loan_amt;
  tenure = +tenure;
  interest = +interest;

  var months = tenure * 12;
  var roi_month = interest / 1200;
  //   console.log(roi_month);
  var monthly_interest;
  var begainig_bal = loan_amt;
  var emi;
  var principal;
  var out_bal;
  var int_sum = 0;

  var trData = `<thead>
    <tr>
       <th>Months</th>
       <th>Begaining Balance</th>
       <th>EMI</th>
       <th>Principal</th>
       <th>Monthly Interest</th>
       <th>Outstanding Balance</th>
    </th>
</thead>
<tbody>`;

  for (i = 1; i <= months; i++) {
    monthly_interest = begainig_bal * roi_month;

    emi =
      loan_amt *
      roi_month *
      (Math.pow(1 + roi_month, months) / (Math.pow(1 + roi_month, months) - 1));

    principal = emi - monthly_interest;

    int_sum = int_sum + monthly_interest;

    out_bal = begainig_bal - principal;

    trData =
      trData +
      ` <tr>
        <td>${i}</td>
        <td>${Math.round(begainig_bal)}</td>
        <td>${Math.round(emi)}</td>
        <td>${Math.round(principal)}</td>
        <td>${Math.round(monthly_interest)}</td>
        <td>${Math.round(out_bal)}</td>
      </tr>`;

    begainig_bal = out_bal;
  }

  trData = trData + `</tbody>`;

  //   console.log(trData);

  document.querySelector("#tab_record").innerHTML = trData;

  document.querySelector("#emid").innerHTML = `<h4>EMI</h4>
  <p>₹ ${Math.round(emi)}</p>`;

  document.querySelector(
    "#int_d"
  ).innerHTML = `<h4>Total interest payable over the loan term</h4>
  <p>₹ ${Math.round(int_sum)}</p>`;

  document.querySelector(
    "#tot_d"
  ).innerHTML = `<h4>Total interest payable over the loan term</h4>
    <p>₹ ${Math.round(int_sum + loan_amt)}</p>`;
};
