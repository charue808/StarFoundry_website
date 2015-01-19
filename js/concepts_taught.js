/*
 * For great examples of highcharts:
 * http://jsfiddle.net/zaheerahmed/7xEhW/
 * http://jsfiddle.net/KNFJE/36/
 */


/*
 * To add new course concept graphs, you only need to modify this function
 */
function getCourseConcepts(courseTitle) {

    /* Default variables */
    
    // Flat Colors Source: http://www.flatuicolorpicker.com/

    var businessColors = ['#4183D7', '#59ABE3 ', '#81CFE0 ', '#52B3D9', '#22A7F0', '#3A539B'];
    var codingColors = ['#9A12B3', '#BF55EC', '#BE90D4', '#8E44AD', '#9B59B6', '#663399'];    
    var designColors = ['#D24D57', '#F22613', '#D91E18', '#96281B', '#EF4836', '#D64541', '#C0392B'];

    var conceptsObject = {};
   
    
    /* Basic pattern for adding course concepts: */
    
    switch(courseTitle) {
        case "Tinkering with Twitter":
            var tinkeringWithTwitterConcepts = {};

            tinkeringWithTwitterConcepts.business = [
                {name:'Business Unit 1: Identifying Your Value Proposition', y:3, color: businessColors[0]},
                {name:'Business Unit 2: Marketing Your Product', y: 2, color: businessColors[1] }
            ];
            tinkeringWithTwitterConcepts.business_total = 5

            tinkeringWithTwitterConcepts.coding = [              
                {name:'Coding Unit 1: Leveraging Modern Mock-Up Tools', y:1, color: codingColors[0]},
                {name:'Coding Unit 2: Launching a live site', y:3, color: codingColors[1]},
                {name:'Coding Unit 3: Working with web visuals', y:1, color: codingColors[2]},
                {name:'Coding Unit 4: Implementing user accounts systems', y:4, color: codingColors[3]},
                {name:'Coding Unit 5: Storing, retrieving, and displaying database data', y:7, color: codingColors[4]},
            ];
            tinkeringWithTwitterConcepts.coding_total = 16

            tinkeringWithTwitterConcepts.design = [
                {name:'Design Unit 1: Basic Mock-Up Principles', y:1, color: designColors[0]},
                {name:'Design Unit 2: Managing user experiences', y:3, color: designColors[1]},
                {name:'Design Unit 3: Beautifying with bootstrap', y:2, color: designColors[2]},
            ];
            tinkeringWithTwitterConcepts.design_total = 6

            conceptsObject = tinkeringWithTwitterConcepts;
            break;
        case "Turn Ideas into Real Apps Fast" :
            var turnideasintorealAppsFastConcepts = {};
            
            turnideasintorealAppsFastConcepts.business = [
                {name: 'Business Unit 1: Buying and Setting Up Your Custom Domain', y:1, color: businessColors[0]},
                {name: 'Business Unit 2: Setting Up User Analysis Tools', y:1, color: businessColors[1]},
                {name: 'Business Unit 3: Optimizing Your Application for Search Engines', y:1, color: businessColors[2]},
                {name: 'Business Unit 4: Accepting Credit Card Payments', y:1, color: businessColors[3]},
                {name: 'Business Unit 5: Running Social Media Marketing Campaigns', y:1, color: businessColors[4]},
                {name: 'Business Unit 6: Best of breed Workflow + CRM Tools', y:1, color: businessColors[5]},
                {name: 'Business Unit 7: Discovering the Right Marketing Message with A/B Testing', y:1, color: businessColors[6]},
            ];
            turnideasintorealAppsFastConcepts.business_total = 7
            
            turnideasintorealAppsFastConcepts.coding = [
                {name: 'Coding Unit 1: Setting Up your Development Environment', y:1, color: codingColors[0]},
                {name: 'Coding Unit 2: Creating Project Save Points to Avoid Lost Work', y:1, color: codingColors[1]},
                {name: 'Coding Unit 3: Just the HTML, CSS, & Javascript you need to know', y:1, color: codingColors[2]},
                {name: 'Coding Unit 4: Collecting, Storing, and Retrieving Data on the Web', y:1, color: codingColors[3]},
                {name: 'Coding Unit 5: Tailoring Web Experiences to Your Customers', y:1, color: codingColors[4]},
                {name: 'Coding Unit 6: Presenting Customized Information', y:1, color: codingColors[5]},
                {name: 'Coding Unit 7: Speeding Up Your Web Applicatio\'n Performance', y:1, color: codingColors[6]},
                {name: 'Coding Unit 8: Changing Your Customer\'s Data', y:1, color: codingColors[7]},
                {name: 'Coding Unit 9: Troubleshooting Issues', y:1, color: codingColors[8]},
                {name: 'Coding Unit 10: Creating Site Notificiations', y:1, color: codingColors[9]},
            ];
            turnideasintorealAppsFastConcepts.coding_total = 10
            
            turnideasintorealAppsFastConcepts.design = [
                {name: 'Design Unit 1: Launching a Professional Company Landing Page', y:1, color: designColors[0]},
                {name: 'Design Unit 2: Customizing the Design of Your Landing Page', y:1, color: designColors[1]},
                {name: 'Design Unit 3: Essential Visual Design Principles', y:1, color: designColors[2]},
                {name: 'Design Unit 4: Essential Customer Experience Principles', y:1, color: designColors[3]},
                {name: 'Design Unit 5: Enhance the Feel of Your Site with Transitions and Animations', y:1, color: designColors[4]},
            ];
            turnideasintorealAppsFastConcepts.design_total = 5
            
            conceptsObject = turnideasintorealAppsFastConcepts;
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
    
    return conceptsObject;

}

/*
 * The following functions are helper functions (i.e., no need to modify)
 * 
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
                y: conceptsObject.business_total,
                drilldown: 'businessConcepts',
                dataLabels:{
                    enabled:true
                }
            }, {
                name: 'Coding',
                y: conceptsObject.coding_total,
                drilldown: 'codingConcepts',
                dataLabels:{
                    enabled:true
                }
            }, {
                name: 'Design',
                y: conceptsObject.design_total,
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
