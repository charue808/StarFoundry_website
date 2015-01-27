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
        case "Turn Ideas into Apps Fast" :
            var turnideasintoAppsFastConcepts = {};
            
            turnideasintoAppsFastConcepts.business = [
                {name: 'Business Unit 1: Buying and Setting Up Your Custom Domain', y:1, color: businessColors[0]},
                {name: 'Business Unit 2: Setting Up User Analysis Tools', y:1, color: businessColors[1]},
                {name: 'Business Unit 3: Optimizing Your Application for Search Engines', y:2, color: businessColors[2]},
                {name: 'Business Unit 4: Accepting Credit Card Payments', y:4, color: businessColors[3]},
                {name: 'Business Unit 5: Running Social Media Marketing Campaigns', y:3, color: businessColors[4]},
                {name: 'Business Unit 6: Best of breed Workflow + CRM Tools', y:5, color: businessColors[5]},
                {name: 'Business Unit 7: Discovering the Right Marketing Message with A/B Testing', y:6, color: businessColors[6]},
            ];
            turnideasintoAppsFastConcepts.business_total = 22
            
            turnideasintoAppsFastConcepts.coding = [
                {name: 'Coding Unit 1: Setting Up your Development Environment', y:1, color: codingColors[0]},
                {name: 'Coding Unit 2: Creating Project Save Points to Avoid Lost Work', y:3, color: codingColors[1]},
                {name: 'Coding Unit 3: Just the HTML, CSS, & Javascript you need to know', y:5, color: codingColors[2]},
                {name: 'Coding Unit 4: Collecting, Storing, and Retrieving Data on the Web', y:6, color: codingColors[3]},
                {name: 'Coding Unit 5: Tailoring Web Experiences to Your Customers', y:3, color: codingColors[4]},
                {name: 'Coding Unit 6: Presenting Customized Information', y:3, color: codingColors[5]},
                {name: 'Coding Unit 7: Speeding Up Your Web Applicatio\'n Performance', y:2, color: codingColors[6]},
                {name: 'Coding Unit 8: Changing Your Customer\'s Data', y:3, color: codingColors[7]},
                {name: 'Coding Unit 9: Troubleshooting Issues', y:4, color: codingColors[8]},
                {name: 'Coding Unit 10: Creating Site Notificiations', y:4, color: codingColors[9]},
            ];
            turnideasintoAppsFastConcepts.coding_total = 34
            
            turnideasintoAppsFastConcepts.design = [
                {name: 'Design Unit 1: Launching a Professional Company Landing Page', y:3, color: designColors[0]},
                {name: 'Design Unit 2: Customizing the Design of Your Landing Page', y:2, color: designColors[1]},
                {name: 'Design Unit 3: Essential Visual Design Principles', y:4, color: designColors[2]},
                {name: 'Design Unit 4: Essential Customer Experience Principles', y:3, color: designColors[3]},
                {name: 'Design Unit 5: Enhance the Feel of Your Site with Transitions and Animations', y:4, color: designColors[4]},
            ];
            turnideasintoAppsFastConcepts.design_total = 16
            
            conceptsObject = turnideasintoAppsFastConcepts;
            break;
        case "Rapid Prototyping for Developers" :
            var rapidProtoypingForDevsConcepts = {};
            
            rapidProtoypingForDevsConcepts.business = [
                {name: 'Business Unit 1: Creating User Feedback Channels', y:3, color: businessColors[0]},
                {name: 'Business Unit 2: Experimenting through A/B Testing', y:5, color: businessColors[1]},
                {name: 'Business Unit 3: Implementing Virality', y:6, color: businessColors[2]}
            ];
            rapidProtoypingForDevsConcepts.business_total = 14
            
            rapidProtoypingForDevsConcepts.design = [
                {name:'Design Unit 1: Rapidly Deploying a Well-Designed Landing Page to Show Off Your Product', y: 6, color: designColors[0]},
                {name:'Design Unit 2: Rapidly Deploying an Administration Back-End Site Panel for Admin Users', y: 9, color: designColors[1]},
                {name:'Design Unit 3: Transitions and Animations in Meteor', y:4, color: designColors[2]}
            ];
            rapidProtoypingForDevsConcepts.design_total = 19
            
            rapidProtoypingForDevsConcepts.coding = [
                {name: 'Coding Unit 1: Meteor.js Fundamentals', y:7, color:codingColors[0]},
                {name: 'Coding Unit 2: Authenticating Users', y:5, color: codingColors[1]},
                {name: 'Coding Unit 3: Storing Data Reactively', y:4, color: codingColors[2]},
                {name: 'Coding Unit 4: Collecting Data', y:3, color: codingColors[3]},
                {name: 'Coding Unit 5: Publishing and Subscribing Reactively', y:5, color: codingColors[4]},
                {name: 'Coding Unit 6: Notificiations', y:4, color: codingColors[5]},
                {name: 'Coding Unit 7: Security Considerations', y:5, color:codingColors[6]},
                {name: 'Coding Unit 8: Performance Tuning', y:6, color:codingColors[7]},
                {name: 'Coding Unit 9: Scaling with Modulus', y:3, color:codingColors[8]},
                {name: 'Coding Unit 10: Unit Testing', y:4, color:codingColors[9]},
                {name: 'Coding Unit 11: Error Handling', y:6, color:codingColors[10]},
                {name: 'Coding Unit 12: Reactive Data Visualization with D3', y:7, color:codingColors[11]},
                {name: 'Coding Unit 13: Accessing the GPU', y:8, color:codingColors[12]},
                {name: 'Coding Unit 14: Leveraging Node Packages', y:6, color:codingColors[13]},
                {name: 'Coding Unit 15: Cross-Platform Deployment', y:8, color:codingColors[14]}
            ];
            rapidProtoypingForDevsConcepts.coding_total = 69
            conceptsObject = rapidProtoypingForDevsConcepts;
            break;
        case "Rapid Prototyping for MBAs" :
            var rapidPrototypingForMBAsConcepts = {};
            
            rapidPrototypingForMBAsConcepts.business = [
                {name: 'Business Unit 1: Buying and Setting Up Your Custom Domain', y:2, color:businessColors[0]},
                {name: 'Business Unit 2: Setting Up User Analysis Tools', y:3, color:businessColors[1]},
                {name: 'Business Unit 3: Optimizing Your Application For Seach Engines', y:4, color:businessColors[2]},
                {name: 'Business Unit 4: Accepting Credit Card Payments', y:3, color:businessColors[3]},
                {name: 'Business Unit 5: Running Social Media Marketing Campaigns', y:5, color:businessColors[4]},
                {name: 'Business Unit 6: Best of Breed Workflow + CRM tools', y:4, color:businessColors[5]},
                {name: 'Business Unit 7: Discover the Right Marketing Message with A/B Testing', y:3, color:businessColors[6]}
            ];
            rapidPrototypingForMBAsConcepts.business_total = 24
                
            rapidPrototypingForMBAsConcepts.coding = [
                {name: 'Coding Unit 1: Setting Up Your Development Environment', y:2, color:codingColors[0]},
                {name: 'Coding Unit 2: Creating Project Save Points to Avoid Lost Work', y:4, color:codingColors[1]},
                {name: 'Coding Unit 3: Just the HTML, CSS, Javascript You Need to Know', y:4, color:codingColors[2]},
                {name: 'Coding Unit 4: Collecting, Storing, and Retrieving Data on the Web', y:6, color:codingColors[3]},
                {name: 'Coding Unit 5: Tailoring Web Experiences to Your Customer', y:5, color:codingColors[4]},
                {name: 'Coding Unit 6: Presenting Customized Information', y:4, color:codingColors[5]},
                {name: 'Coding Unit 7: Speeding Up Your Web Applications Performance', y:3, color:codingColors[6]},
                {name: 'Coding Unit 8: Changing Your Customer\'s Data', y:3, color:codingColors[7]},
                {name: 'Coding Unit 9: Troubleshooting Issues', y:3, color:codingColors[8]},
                {name: 'Coding Unit 10 Creating Notifications', y:4, color:codingColors[9]}
            ];
            rapidPrototypingForMBAsConcepts.coding_total = 38
            
            rapidPrototypingForMBAsConcepts.design = [
                {name: 'Design Unit 1: Launching a Professional Company Landing Page', y:3, color:designColors[0]},
                {name: 'Design Unit 2: Customizing the Design of Your Landing Page', y:4, color:designColors[1]},
                {name: 'Design Unit 3: Essential Visual Design Principles', y:5, color:designColors[2]},
                {name: 'Design Unit 4: Essential Customer Experience Principles', y:4, color:designColors[3]},
                {name: 'Design Unit 5: Enhance the Feel of Your Site with Transitions and Animations', y:6, color:designColors[4]}
            ];
            rapidPrototypingForMBAsConcepts.design_total = 22
            
            conceptsObject = rapidPrototypingForMBAsConcepts;
            break;
        case "Prototyping Tools for Designers" :
            var rapidPrototypingForDesignersConcepts = {};
            
            rapidPrototypingForDesignersConcepts.business = [
                {name: 'Business Unit 1: Setting Up User Analysis Tools', y:3, color:businessColors[0]},
                {name: 'Business Unit 2: Creating User Feedback Channels', y:4, color:businessColors[1]},
                {name: 'Business Unit 3: Finding the Design that Resonates with Users through A/B Testing', y:3, color:businessColors[2]}
            ];
            rapidPrototypingForDesignersConcepts.business_total = 10
            
            rapidPrototypingForDesignersConcepts.coding = [
                {name: 'Coding Unit 1: Setting Up Your Code Portfolio', y:4, color:codingColors[0]},
                {name: 'Coding Unit 2: Deploying Your Own Live Web Server in Minutes', y:4, color:codingColors[1]},
                {name: 'Coding Unit 3: Creating Project Save Points to Avoid Lost Work', y:5, color:codingColors[2]},
                {name: 'Coding Unit 4: Just the HTML, CSS and Javascript You Need to Know', y:6, color:codingColors[3]},
                {name: 'Coding Unit 5: Collecting, Storing and Retrieving Data on the Web', y:3, color:codingColors[4]},
                {name: 'Coding Unit 6: Tailoring Web Experiences to Your Customer', y:3, color:codingColors[5]},
                {name: 'Coding Unit 7: Presenting Customized Information', y:3, color:codingColors[6]},
                {name: 'Coding Unit 8: Changing You Customer\'s Data', y:4, color:codingColors[7]}
            ];
            rapidPrototypingForDesignersConcepts.coding_total = 32
            
            rapidPrototypingForDesignersConcepts.design = [
                {name: 'Design Unit 1: Transitions and Animations in Meteor.js', y:4, color:designColors[0]},
                {name: 'Design Unit 2: Launching a Professional Landing Page', y:3, color:designColors[1]},
                {name: 'Design Unit 3: Customizing the Design of Your Landing Page', y:3, color:designColors[2]},
                {name: 'Design Unit 4: Enhance the Feel of Your Site with Transitions and Animations', y:4, color:designColors[3]},
                {name: 'Design Unit 5: Creating Engaging Visual Stories with d3', y:6, color:designColors[4]}
            ];
            rapidPrototypingForDesignersConcepts.design_total = 20
            
            conceptsObject = rapidPrototypingForDesignersConcepts;
            break;
        case "Tinkering with Twitter (for Schools)" :
            var tinkeringWithTwitterSchoolsConcepts = {};
            
            tinkeringWithTwitterSchoolsConcepts.business = [
                {name: 'Business Unit 1: Core Business Concepts', y:4, color:businessColors[0]},
                {name: 'Business Unit 2: Recruiting Users', y:5, color:businessColors[1]}
            ];
            tinkeringWithTwitterSchoolsConcepts.business_total = 9
            
            tinkeringWithTwitterSchoolsConcepts.coding = [
                {name: 'Coding Unit 1: Modern Mock-Up Tools', y:3, color:codingColors[0]},
                {name: 'Coding Unit 2: Launching a Live Site', y:4, color:codingColors[1]},
                {name: 'Coding Unit 3: Working with Web Visuals', y:4, color:codingColors[2]},
                {name: 'Coding Unit 4: Implementing a User Accounts System', y:3, color:codingColors[3]},
                {name: 'Coding Unit 5: Storing, Retrieving, and Displaying Database Data', y:5, color:codingColors[4]}
            ];
            tinkeringWithTwitterSchoolsConcepts.coding_total = 19
            
            tinkeringWithTwitterSchoolsConcepts.design = [
                {name: 'Design Unit 1: Basic Mock-Up Principles', y:4, color:designColors[0]},
                {name: 'Design Unit 2: Managing User Experiences', y:5, color:designColors[1]},
                {name: 'Design Unit 3: Beautifying with Bootstrap', y:6, color:designColors[2]}
            ];
            tinkeringWithTwitterSchoolsConcepts.design_total = 15
            conceptsObject = tinkeringWithTwitterSchoolsConcepts;
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
            backgroundColor:'rgba(255, 255, 255, 0.1)',
            
    
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
