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
            enabled:true,
            formatter: function () {
                var numExercises = this.point.y;
                var outputText = " workshop exercises";
                
                if (numExercises <= 1) 
                {
                    outputText = " workshop exercise"
                }
                var s = '<b>' + numExercises + outputText + '</b>';

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
                name: 'BUSINESS',
                y: 5,
                drilldown: 'businessConcepts',
                dataLabels:{
                    enabled:true
                }
            }, {
                name: 'CODING',
                y: 16,
                drilldown: 'codingConcepts',
                dataLabels:{
                    enabled:true
                }
            }, {
                name: 'DESIGN',
                y: 6,
                drilldown: 'designConcepts',
                dataLabels:{
                    enabled:true
                }
            }]
           
            
            
        }],
        drilldown: {
            series: [{
                id: 'businessConcepts',
                data: [
                    {name:'BUSINESS CONCEPT 1: Identifying Your Value Proposition', y:3, color: 'orange'},
                    {name:'BUSINESS CONCEPT 2: Marketing Your Product', y: 2, color: 'gray' }
                    
                ]
            }, {
                id: 'codingConcepts',
                data: [
                    
                    {name:'CODING CONCEPT 1: Leveraging Modern Mock-Up Tools', y:1, color: 'grey'},
                    {name:'CODING CONCEPT 2: Launching a live site', y:3, color: 'orange'},
                    {name:'CODING CONCEPT 3: Working with web visuals', y:1, color: 'blue'},
                    {name:'CODING CONCEPT 4: Implementing a user accounts system', y:4, color: 'green'},
                    {name:'CODING CONCEPT 5: Storing, retrieving, and displaying database data', y:7, color: 'purple'},

                ]
                
            }, {
                id: 'designConcepts',
                data: [
                    {name:'Basic Mock-Up Principles', y:1, color: 'orange'},
                    {name:'Managing user experiences', y:3, color: 'blue'},
                    {name:'Beautifying with bootstrap', y:2, color: 'green'},

                ]
            }]
        }
    });
}

// This is run on page load
//
$(function () {
    
    // Main colors for three topics: Business, Coding, Design
    //
    Highcharts.setOptions({
     colors: ['#50B432', '#ED561B', '#DDDF00']
    });
  
    businessColors = [];
    
    codingColors = [];
    
    designColors = [];
    
    
    
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
