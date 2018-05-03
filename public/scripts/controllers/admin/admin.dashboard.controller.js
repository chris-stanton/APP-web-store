
// Copyright (c) 2018 Christopher J. Stanton
myApp.controller('AdmindashboardController',['EmailFactory', 'alertify', '$scope', function(EmailFactory, alertify, $scope) {

  const self = this;

// US state map
  function tooltip(n, d){
		return "<h1>"+n+"</h1>"+
			     "<h5>Money Generated: </td><td>$"+(d.totalSalesAmount)+".00</h5>"+
			     "<h5># Units sold: </td><td>"+(d.unitsSold)+"</h5>";
	};
	let testData = [];
	["HI", "AK", "FL", "SC", "GA", "AL", "NC", "TN", "RI", "CT", "MA",
	"ME", "NH", "VT", "NY", "NJ", "PA", "DE", "MD", "WV", "KY", "OH",
	"MI", "WY", "MT", "ID", "WA", "DC", "TX", "CA", "AZ", "NV", "UT",
	"CO", "NM", "OR", "ND", "SD", "NE", "IA", "MS", "IN", "IL", "MN",
	"WI", "MO", "AR", "OK", "KS", "LS", "VA"]
		.forEach(function(d){
			let totalSalesAmount = Math.round(100*Math.random());
			let	unitsSold = Math.round(100*Math.random());
			    testData[d] = {
            totalSalesAmount: d3.min([unitsSold]),
            unitsSold: d3.max([totalSalesAmount]),
					  avg: Math.round((totalSalesAmount)),
            color: d3.interpolate("#00ff40", "#193fb3")(totalSalesAmount/100)
          };
		});
	/* draw states on id #statesvg */
	uStates.draw("#statesvg", testData, tooltip);




}]); // end myAPP.controller
