
google.load("visualization", "1", {packages:["corechart", "charteditor"]});

$(document).ready(function() {
    $("#insighttable").empty();

    var insight_table_html = '';
           $.ajax({
            type: "GET",
            url: "http://localhost:3000/transactions.json",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            success: function (data) {
		
                   var jsonData = data.data;

                      insight_table_html += '<table id="example" class="display" cellspacing="0" width="100%"><thead><tr><th>Transaction ID</th><th>Username</th><th>Product Zone</th><th>Product</th><th>Brand</th><th>Model</th><th>Quantity</th><th>Amount</th><th>Date</th></tr></thead><tbody>';
			for (key in jsonData) {
			       if (jsonData.hasOwnProperty(key)) {

			 insight_table_html += '<tr><td>'+jsonData[key].txnid+'</td><td>'+jsonData[key].username+'</td><td>'+jsonData[key].product_zone+'</td><td>'+jsonData[key].product+'</td><td>'+jsonData[key].brand +'</td><td>'+jsonData[key].model+'</td><td>'+jsonData[key].quantity+'</td><td>'+jsonData[key].amount+'</td><td>'+jsonData[key].date+'</td>';
			       }
         		}

                insight_table_html += '</tbody></table>';
              $('#insighttable').append(insight_table_html);
			$('#example').dataTable( {
			  "pageLength": 30,
                          "aLengthMenu": [[30, 60, 90, 120], [30, 60, 90, 120]],
			} );



             // start of pivot chart


  

 $(function(){
var derivers = $.pivotUtilities.derivers;
var objpivouitil = $.pivotUtilities.renderers;
var objghart = $.pivotUtilities.gchart_renderers;
delete objpivouitil["Col Heatmap"];
delete objpivouitil["Row Heatmap"];
delete objghart["Scatter Chart"];
delete objghart["Stacked Bar Chart"];
console.log(objghart);
var renderers = $.extend(objpivouitil,objghart);


var tpl = $.pivotUtilities.aggregatorTemplates;
      
                $("#pivotgpoutput").pivotUI(jsonData, {
                    rows: ["username"], cols: ["amount"],
                   hiddenAttributes: ["id"],
                    aggregators: {
                    "Total":      function() { return tpl.sum()(["amount"]) },
                    "Average": function() { return tpl.average()(["amount"]) },
                    "Minmum":      function() { return tpl.min()(["amount"]) },
                    "Maximum": function() { return tpl.max()(["amount"]) },
                    "Count Of Product By User": function() { return tpl.sum()(["quantity"]) },
                    "Total User transcation": function() { return tpl.count()(["txnid"]) },
                    "Users Count": function() { return tpl.count()(["username"]) },
                    "Total Revenue": function() { return tpl.sum()(["amount"]) },
                },
                });
       
     });

            // end of pivot chart





            },
            error: function (textStatus, errorThrown) {
              alert("Api service down!.")
            }

        });           
        
});
