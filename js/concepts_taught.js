/*
 * For great examples of highcharts:
 * http://jsfiddle.net/zaheerahmed/7xEhW/
 * http://jsfiddle.net/KNFJE/36/
 */


$(function () {
    Highcharts.setOptions({
     colors: ['#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263',  '#6AF9C4']
    });
    
    // Create the chart
    $('#concepts_taught_twt').highcharts({
        chart: {
            type: 'pie',
            backgroundColor:'rgba(255, 255, 255, 0.1)'
        },
        credits:{
            enabled:false
            
        },
        title: {
            text: 'Concepts Taught'
        },
        tooltip: {
            enabled:false
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
                    enabled: true
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
                drilldown: 'businessConcepts'
            }, {
                name: 'Coding',
                y: 5,
                drilldown: 'codingConcepts'
            }, {
                name: 'Design',
                y: 3,
                drilldown: 'designConcepts'
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
});
