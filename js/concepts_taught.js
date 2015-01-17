/*
 * For great examples of highcharts:
 * http://jsfiddle.net/zaheerahmed/7xEhW/
 * http://jsfiddle.net/KNFJE/36/
 */
function destroyChart(container){
    $(container).highcharts().destroy();
}

function drawChart(container){
    dataLabelStyle = 
        { 
        fontWeight: 'bold', 
        fontSize:'18px',  
        width: '150px'
    };
    
     var $conceptReporting = $('#conceptReporting');
    
    // Create the chart
    $(container).highcharts({
        chart: {
            type: 'pie',
            backgroundColor:'rgba(255, 255, 255, 0.1)'
        },
        credits:{
            enabled:false
            
        },
        title: {
            text:null,
            style: {
                fontSize:'28px',
                paddingBottom:'60px'
            }
        },
        tooltip: {
            enabled:false,
            formatter: function () {
                var s = '<b>' + this.point.name + '</b>';

                return s;
            },
            style: dataLabelStyle
           
        },
        xAxis: {
            type: 'category'
        },

        legend: {
            enabled: false
        },

        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: false,
                    style: dataLabelStyle,
                },
                
                
                 point: {
                    events: {
                        mouseOver: function () {
                            $conceptReporting.html(this.name);
                        }
                    }
                },
                events: {
                    mouseOut: function () {
                       // $conceptReporting.empty();
                        $conceptReporting.html('<i>(Select a Slice to View Details)</i>');

                    }
                }
            
                
            }
        },

        series: [{
            type: 'pie',
            name: 'Main Concepts',
            colorByPoint: true,
            data: [{
                name: 'Business',
                y: 2,
                drilldown: 'businessConcepts',
               // dataLabels:{
                //    enabled:false
               // }
            }, {
                name: 'Coding',
                y: 5,
                drilldown: 'codingConcepts',
               // dataLabels:{
               //     enabled:false
               // }
            }, {
                name: 'Design',
                y: 3,
                drilldown: 'designConcepts'
              //  dataLabels:{
              //      enabled:false
              //  }
            }]
           
            
            
        }],
        drilldown: {
            series: [{
                id: 'businessConcepts',
                data: [
                    {name:'Identifying Your Value Proposition', y:1, color: 'orange'},
                    {name:'Marketing Your Product', y: 1, color: 'gray' }
                    
                ]
            }, {
                id: 'codingConcepts',
                data: [
                    
                    {name:'Modern Mock-Up Tools', y:1, color: 'grey'},
                    {name:'Launching a live site', y:1, color: 'orange'},
                    {name:'Working with web visuals', y:1, color: 'blue'},
                    {name:'Implementing a user accounts system', y:1, color: 'green'},
                    {name:'Storing, retrieving, and displaying database data', y:1, color: 'purple'},

                ]
                
            }, {
                id: 'designConcepts',
                data: [
                    {name:'Basic Mock-Up Principles', y:1, color: 'orange'},
                    {name:'Managing user experiences', y:1, color: 'blue'},
                    {name:'Beautifying with bootstrap', y:1, color: 'green'},

                ]
            }]
        }
    });
}

// This is run on page load
//
$(function () {
  //  Highcharts.setOptions({
  //   colors: ['#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263',  '#6AF9C4']
  //  });
  
    tinkeringWithTwitterConcepts = {};
    
    tinkeringWithTwitterConcepts.business = [];
    
    tinkeringWithTwitterConcepts.business.push({name:'Identifying Your Value Proposition', y:1, color: 'orange'});
    
    tinkeringWithTwitterConcepts.coding = [];
    tinkeringWithTwitterConcepts.design = [];
    

    $('#tinkeringWithTwitterModal').on('shown.bs.modal', function (e) {
       drawChart('#concepts_taught_twt_container');
    })
    
    $('#tinkeringWithTwitterModal').on('hidden.bs.modal', function (e) {
       destroyChart('#concepts_taught_twt_container');
    })
    
    
});
