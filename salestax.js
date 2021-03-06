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
    for (var companies in salesData) {
      var totals = 0;
      for (i = 0; i < salesData[companies].sales.length; i++) {
        totals += salesData[companies].sales[i];
      }
      salesData[companies].totalSales = totals;
    }
    var totals = 0;
    for (prov in salesData) {
      var provcode = salesData[prov].province;
      salesData[prov].rate = salesTaxRates[provcode];
    }
    for (calc in salesData) {
      salesData[calc].totalTaxes = salesData[calc].totalSales * salesData[calc].rate

    }
    for (last in salesData) {
        console.log(salesData[last].name + " has " + salesData[last].totalSales + " in total Sales and " + salesData[last].totalTaxes + " in sales tax due.");
      }

    // return (salesData);
  }


var results = calculateSalesTax(companySalesData, salesTaxRates);
// console.log(results);
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