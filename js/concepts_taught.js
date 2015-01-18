/*
 * For great examples of highcharts:
 * http://jsfiddle.net/zaheerahmed/7xEhW/
 * http://jsfiddle.net/KNFJE/36/
 */
function destroyChart(container){
    $(container).highcharts().destroy();
}






function drawChart(container, conceptsObject){
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
    var concepts = "";
    
    switch(courseTitle) {
        case "Tinkering with Twitter":
            description =   " <p>Dive right into the real world of building world-changing products, by \
                            developing the version of the popular web tool, Twitter, from the ground up. \
                            </p>\
                            <p>This version of Twitter was so successful, it is now one of the top 10 most used sites in the world.</p> \
                            <p>This hands-on workshop will give students familiarity with \"rapid prototyping\" concepts, which are most concerned \
                            with how to launch quickly, efficiently, and effectively. We will explore topics such as web tools, visual design, \
                            managing data in the cloud, creating user engagement and interactivity through animations and javascript, customizing \
                            user experiences, and keeping your application data safe.</p>";

            break;
        case "Rapid Prototyping Fundamentals" :
            description =   " ....."
            break;
        case "Rapid Prototyping for Developers" :
            description =   " ....."
            break;
        case "Rapid Prototyping for MBAs" :
            description =   "....."
            break;
        case "Rapid Prototyping for Intrapreneurs" :
            description =   "....."
            break;
        case "Global Dreamers Institute" :
            description =   "....."
            break;
        default:
            description = "course title not found";
    }
    
 // DEBUG   
 //   console.log(courseTitle);
 //   console.log("Tinkering with Twitter");
 
    return description;

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
  
    // Flat Colors Source: http://www.flatuicolorpicker.com/
    
    var businessColors = ['#4183D7', '#59ABE3 ', '#81CFE0 ', '#52B3D9', '#22A7F0', '#3A539B'];
    var codingColors = ['#9A12B3', '#BF55EC', '#BE90D4', '#8E44AD', '#9B59B6', '#663399'];    
    var designColors = ['#D24D57', '#F22613', '#D91E18', '#96281B', '#EF4836', '#D64541', '#C0392B'];
    
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
    

    // To activate a chart when a page loads, make two calls like the draw and destroy functions
    // below for each modal to have a chart drawn on it:
    // 
    $('#courseInfoModal').on('shown.bs.modal', function (e) {
       drawChart('#concepts_taught_twt_container', tinkeringWithTwitterConcepts);
    })
    
    $('#courseInfoModal').on('hidden.bs.modal', function (e) {
       destroyChart('#concepts_taught_twt_container');
    })
    
    
});
