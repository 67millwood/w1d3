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
      companySalesData[companies].totalSales = totals;
    }
    var totals = 0;
    for (prov in companySalesData) {
      var provcode = companySalesData[prov].province;
      companySalesData[prov].rate = salesTaxRates[provcode];
    }
    for (calc in companySalesData) {
      companySalesData[calc].totalTaxes = companySalesData[calc].totalSales * companySalesData[calc].rate

    }
    var happy = {}
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