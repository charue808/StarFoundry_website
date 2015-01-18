/*
 * For great examples of highcharts:
 * http://jsfiddle.net/zaheerahmed/7xEhW/
 * http://jsfiddle.net/KNFJE/36/
 */
function destroyChart(){
    $('#concepts_taught_twt_container').highcharts().destroy();
}


function drawChart(title){
    dataLabelStyle = 
        { 
        fontWeight: 'bold', 
        fontSize:'18px',  
        width: '150px'
    };
    
    //DEBUG
    //
    console.log("Debug 1");
    
     var $conceptReporting = $('#conceptReporting');
     var conceptsObject = getCourseConcepts(title);
    
    // Create the chart
    $('#concepts_taught_twt_container').highcharts({
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
                var outputText = " exercises";
                
                if (numExercises <= 1) 
                {
                    outputText = " exercise"
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
                        $conceptReporting.empty();
                       // $conceptReporting.html('<i>(Select a Slice to View Details)</i>');

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
                y: 5,
                drilldown: 'businessConcepts',
                dataLabels:{
                    enabled:true
                }
            }, {
                name: 'Coding',
                y: 16,
                drilldown: 'codingConcepts',
                dataLabels:{
                    enabled:true
                }
            }, {
                name: 'Design',
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
                data: conceptsObject.business
            }, {
                id: 'codingConcepts',
                data: conceptsObject.coding
                
            }, {
                id: 'designConcepts',
                data: conceptsObject.design
            }]
        }
    });
}





function getCourseConcepts(courseTitle) {
   
    var conceptsObject = {};
   
            
    // Flat Colors Source: http://www.flatuicolorpicker.com/

    var businessColors = ['#4183D7', '#59ABE3 ', '#81CFE0 ', '#52B3D9', '#22A7F0', '#3A539B'];
    var codingColors = ['#9A12B3', '#BF55EC', '#BE90D4', '#8E44AD', '#9B59B6', '#663399'];    
    var designColors = ['#D24D57', '#F22613', '#D91E18', '#96281B', '#EF4836', '#D64541', '#C0392B'];

    
    switch(courseTitle) {
        case "Tinkering with Twitter":
            tinkeringWithTwitterConcepts = {};

            tinkeringWithTwitterConcepts.business = [
                {name:'Business Unit 1: Identifying Your Value Proposition', y:3, color: businessColors[0]},
                {name:'Business Unit 2: Marketing Your Product', y: 2, color: businessColors[1] }
            ];

            tinkeringWithTwitterConcepts.coding = [              
                {name:'Coding Unit 1: Leveraging Modern Mock-Up Tools', y:1, color: codingColors[0]},
                {name:'Coding Unit 2: Launching a live site', y:3, color: codingColors[1]},
                {name:'Coding Unit 3: Working with web visuals', y:1, color: codingColors[2]},
                {name:'Coding Unit 4: Implementing user accounts systems', y:4, color: codingColors[3]},
                {name:'Coding Unit 5: Storing, retrieving, and displaying database data', y:7, color: codingColors[4]},
            ];


            tinkeringWithTwitterConcepts.design = [
                {name:'Design Unit 1: Basic Mock-Up Principles', y:1, color: designColors[0]},
                {name:'Design Unit 2: Managing user experiences', y:3, color: designColors[1]},
                {name:'Design Unit 3: Beautifying with bootstrap', y:2, color: designColors[2]},
            ];

            conceptsObject = tinkeringWithTwitterConcepts;
            break;
        case "Rapid Prototyping Fundamentals" :
            conceptsObject = {};
            break;
        case "Rapid Prototyping for Developers" :
            conceptsObject = {};
            break;
        case "Rapid Prototyping for MBAs" :
            conceptsObject = {};
            break;
        case "Rapid Prototyping for Intrapreneurs" :
            conceptsObject = {};
            break;
        case "Global Dreamers Institute" :
            conceptsObject = {};
            break;
        default:
            description = "course title not found";
    }
    
 // DEBUG   
 //   console.log(courseTitle);
 //   console.log("Tinkering with Twitter");
 
    return conceptsObject;

}






// This is run on page load
//
$(function () {
    
    // Main colors for three topics: Business, Coding, Design
    //  Business = Blue
    //  Coding = Orange
    //  Design = Green
    Highcharts.setOptions({
     colors: ['#446CB3', '#674172', '#DB0A5B']
    });
  

    
});
