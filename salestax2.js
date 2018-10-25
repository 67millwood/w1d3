var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates) {
  // Implement your code here
  // companytotals : function () {
    var final = {};
    for (var companies in salesData) {
      var totals = 0;
      for (i = 0; i < salesData[companies].sales.length; i++) {
        totals += salesData[companies].sales[i];
      }
      var tempname = salesData[companies].name;
      // console.log(tempname);
      var provcode = salesData[companies].province;
      var taxesdue = totals * taxRates[provcode];
      // console.log(salesData[companies].name + " " + totals + " " + taxesdue);
          if(Object.keys(final).indexOf(tempname) === -1) {
          final[tempname] = {
          totalSales: totals,
          totalTaxes: taxesdue
          }
          }
          else {
            final[tempname].totalSales += totals;
            final[tempname].totalTaxes += taxesdue;
          }
    }
    var totals = 0;
    return (final);
  }

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);
/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/