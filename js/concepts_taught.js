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
        case "Building Your Own Apps: Session 1":
            var buildingYourOwnApps1Concepts = {};

            buildingYourOwnApps1Concepts.business = [
                {name:'Business Unit 1: Identifying your value proposition', y:3, color: businessColors[0]},
                {name:'Business Unit 2: Marketing your product', y: 2, color: businessColors[1]}
            ];
            buildingYourOwnApps1Concepts.business_total = 5

            buildingYourOwnApps1Concepts.coding = [              
                {name:'Coding Unit 1: Leveraging modern mock-up tools', y:1, color: codingColors[0]},
                {name:'Coding Unit 2: Launching a live site', y:3, color: codingColors[1]},
                {name:'Coding Unit 3: Working with web visuals', y:1, color: codingColors[2]},
                {name:'Coding Unit 4: Implementing user accounts systems', y:4, color: codingColors[3]},
                {name:'Coding Unit 5: Storing, retrieving, and displaying database data', y:7, color: codingColors[4]},
            ];
            buildingYourOwnApps1Concepts.coding_total = 16

            buildingYourOwnApps1Concepts.design = [
                {name:'Design Unit 1: Basic mock-up principles', y:1, color: designColors[0]},
                {name:'Design Unit 2: Managing user experiences', y:3, color: designColors[1]},
                {name:'Design Unit 3: Beautifying with Bootstrap', y:2, color: designColors[2]},
            ];
            buildingYourOwnApps1Concepts.design_total = 6

            conceptsObject = buildingYourOwnApps1Concepts;
            break;
        case "Building Your Own Apps: Session 2":
            var buildingYourOwnApps2Concepts = {};
            
            buildingYourOwnApps2Concepts.business = [
                {name:'Business Unit 1: Identifying your value proposition', y:3, color: businessColors[0]},
                {name:'Business Unit 2: Marketing your product', y: 2, color: businessColors[1]}
            ];
            buildingYourOwnApps2Concepts.business_total = 5
            
            buildingYourOwnApps2Concepts.coding = [
                {name:'Coding Unit 1: Leveraging modern mock-up tools', y:1, color: codingColors[0]},
                {name:'Coding Unit 2: Launching a live site', y:3, color: codingColors[1]},
                {name:'Coding Unit 3: Working with web visuals', y:1, color: codingColors[2]},
                {name:'Coding Unit 4: Implementing user accounts systems', y:4, color: codingColors[3]},
                {name:'Coding Unit 5: Storing, retrieving, and displaying database data', y:7, color: codingColors[4]}
            ];
            buildingYourOwnApps2Concepts.coding_total = 16
            
            buildingYourOwnApps2Concepts.design = [
                {name:'Design Unit 1: Basic mock-up principles', y:1, color: designColors[0]},
                {name:'Design Unit 2: Managing user experiences', y:3, color: designColors[1]},
                {name:'Design Unit 3: Beautifying with Bootstrap', y:2, color: designColors[2]}
            ];
            buildingYourOwnApps2Concepts.design_total = 6
            
            conceptsObject = buildingYourOwnApps2Concepts;
            break;
        case "Building Your Own Apps: Session 3":
            var buildingYourOwnApps3Concepts = {};
            
            buildingYourOwnApps3Concepts.business = [
                {name:'Business Unit 1: Identifying your value proposition', y:3, color: businessColors[0]},
                {name:'Business Unit 2: Marketing your product', y: 2, color: businessColors[1]}
            ];
            buildingYourOwnApps3Concepts.business_total = 5
            
            buildingYourOwnApps3Concepts.coding = [
                {name:'Coding Unit 1: Leveraging modern mock-up tools', y:1, color: codingColors[0]},
                {name:'Coding Unit 2: Launching a live site', y:3, color: codingColors[1]},
                {name:'Coding Unit 3: Working with web visuals', y:1, color: codingColors[2]},
                {name:'Coding Unit 4: Implementing user accounts systems', y:4, color: codingColors[3]},
                {name:'Coding Unit 5: Storing, retrieving, and displaying database data', y:7, color: codingColors[4]}
            ];
            buildingYourOwnApps3Concepts.coding_total = 16
            
            buildingYourOwnApps3Concepts.design = [
                {name:'Design Unit 1: Basic mock-up principles', y:1, color: designColors[0]},
                {name:'Design Unit 2: Managing user experiences', y:3, color: designColors[1]},
                {name:'Design Unit 3: Beautifying with Bootstrap', y:2, color: designColors[2]}
            ];
            buildingYourOwnApps3Concepts.design_total = 6
            
            conceptsObject = buildingYourOwnApps3Concepts;
            break;
        case "Building Your Own Apps: Session 4":
            var buildingYourOwnApps4Concepts = {};
            
            buildingYourOwnApps4Concepts.business = [
                {name:'Business Unit 1: Identifying your value proposition', y:3, color: businessColors[0]},
                {name:'Business Unit 2: Marketing your product', y: 2, color: businessColors[1]}
            ];
            buildingYourOwnApps4Concepts.business_total = 5
            
            buildingYourOwnApps4Concepts.coding = [
                {name:'Coding Unit 1: Leveraging modern mock-up tools', y:1, color: codingColors[0]},
                {name:'Coding Unit 2: Launching a live site', y:3, color: codingColors[1]},
                {name:'Coding Unit 3: Working with web visuals', y:1, color: codingColors[2]},
                {name:'Coding Unit 4: Implementing user accounts systems', y:4, color: codingColors[3]},
                {name:'Coding Unit 5: Storing, retrieving, and displaying database data', y:7, color: codingColors[4]}
            ];
            buildingYourOwnApps4Concepts.coding_total = 16
            
            buildingYourOwnApps4Concepts.design = [
                 {name:'Design Unit 1: Basic mock-up principles', y:1, color: designColors[0]},
                {name:'Design Unit 2: Managing user experiences', y:3, color: designColors[1]},
                {name:'Design Unit 3: Beautifying with Bootstrap', y:2, color: designColors[2]}
            ];
            buildingYourOwnApps4Concepts.design_total = 6
            
            conceptsObject = buildingYourOwnApps4Concepts;
            break;
        case "Changemaker Apprenticeship Program":
            var ucBerkeleyVolunteersBuildingAppsConcepts = {};
            
            ucBerkeleyVolunteersBuildingAppsConcepts.business = [
                {name: 'Business Unit 1: Buying and setting up your custom domain', y:1, color: businessColors[0]},
                {name: 'Business Unit 2: Setting up user analysis tools', y:1, color: businessColors[1]},
                {name: 'Business Unit 3: Optimizing your application for search engines', y:2, color: businessColors[2]},
                {name: 'Business Unit 4: Accepting credit card payments', y:4, color: businessColors[3]},
                {name: 'Business Unit 5: Running social media marketing campaigns', y:3, color: businessColors[4]},
                {name: 'Business Unit 6: &ldquo;Best of Breed&rdquo; workflow + CRM tools', y:5, color: businessColors[5]},
                {name: 'Business Unit 7: Discovering the right marketing message with A/B testing', y:6, color: businessColors[6]},
            ];
          
            ucBerkeleyVolunteersBuildingAppsConcepts.business_total = 22
            
            ucBerkeleyVolunteersBuildingAppsConcepts.coding = [
                {name: 'Coding Unit 1: Setting up your development environment', y:1, color: codingColors[0]},
                {name: 'Coding Unit 2: Creating project save points to avoid lost work', y:3, color: codingColors[1]},
                {name: 'Coding Unit 3: Just the HTML, CSS, & Javascript you need to know', y:5, color: codingColors[2]},
                {name: 'Coding Unit 4: Collecting, storing, and retrieving data on the web', y:6, color: codingColors[3]},
                {name: 'Coding Unit 5: Tailoring web experiences to your customers', y:3, color: codingColors[4]},
                {name: 'Coding Unit 6: Presenting customized information', y:3, color: codingColors[5]},
                {name: 'Coding Unit 7: Speeding up your web application\'s performance', y:2, color: codingColors[6]},
                {name: 'Coding Unit 8: Changing your customer\'s data', y:3, color: codingColors[7]},
                {name: 'Coding Unit 9: Troubleshooting issues', y:4, color: codingColors[8]},
                {name: 'Coding Unit 10: Creating site notificiations', y:4, color: codingColors[9]},
            ];
            ucBerkeleyVolunteersBuildingAppsConcepts.coding_total = 34
            
            ucBerkeleyVolunteersBuildingAppsConcepts.design = [
                {name: 'Design Unit 1: Launching a professional company landing page', y:3, color: designColors[0]},
                {name: 'Design Unit 2: Customizing the design of your landing page', y:2, color: designColors[1]},
                {name: 'Design Unit 3: Essential visual design principles', y:4, color: designColors[2]},
                {name: 'Design Unit 4: Essential customer experience principles', y:3, color: designColors[3]},
                {name: 'Design Unit 5: Enhance the feel of your site with transitions and animations', y:4, color: designColors[4]},
            ];
            ucBerkeleyVolunteersBuildingAppsConcepts.design_total = 16
            
            conceptsObject = ucBerkeleyVolunteersBuildingAppsConcepts;
            break;
        case "Turn Ideas into Apps Fast" :
            var turnideasintoAppsFastConcepts = {};
            
            turnideasintoAppsFastConcepts.business = [
                {name: 'Business Unit 1: Buying and setting up your custom domain', y:1, color: businessColors[0]},
                {name: 'Business Unit 2: Setting up user analysis tools', y:1, color: businessColors[1]},
                {name: 'Business Unit 3: Optimizing your application for search engines', y:2, color: businessColors[2]},
                {name: 'Business Unit 4: Accepting credit card payments', y:4, color: businessColors[3]},
                {name: 'Business Unit 5: Running social media marketing campaigns', y:3, color: businessColors[4]},
                {name: 'Business Unit 6: &ldquo;Best of Breed&rdquo; workflow + CRM tools', y:5, color: businessColors[5]},
                {name: 'Business Unit 7: Discovering the right marketing message with A/B testing', y:6, color: businessColors[6]},
            ];
            turnideasintoAppsFastConcepts.business_total = 22
            
            turnideasintoAppsFastConcepts.coding = [
                {name: 'Coding Unit 1: Setting up your development environment', y:1, color: codingColors[0]},
                {name: 'Coding Unit 2: Creating project save points to avoid lost work', y:3, color: codingColors[1]},
                {name: 'Coding Unit 3: Just the HTML, CSS, & Javascript you need to know', y:5, color: codingColors[2]},
                {name: 'Coding Unit 4: Collecting, storing, and retrieving data on the web', y:6, color: codingColors[3]},
                {name: 'Coding Unit 5: Tailoring web experiences to your customers', y:3, color: codingColors[4]},
                {name: 'Coding Unit 6: Presenting customized information', y:3, color: codingColors[5]},
                {name: 'Coding Unit 7: Speeding up your web application\'s performance', y:2, color: codingColors[6]},
                {name: 'Coding Unit 8: Changing your customer\'s data', y:3, color: codingColors[7]},
                {name: 'Coding Unit 9: Troubleshooting issues', y:4, color: codingColors[8]},
                {name: 'Coding Unit 10: Creating site notificiations', y:4, color: codingColors[9]},
            ];
            turnideasintoAppsFastConcepts.coding_total = 34
            
            turnideasintoAppsFastConcepts.design = [
                {name: 'Design Unit 1: Launching a professional company landing page', y:3, color: designColors[0]},
                {name: 'Design Unit 2: Customizing the design of your landing page', y:2, color: designColors[1]},
                {name: 'Design Unit 3: Essential visual design principles', y:4, color: designColors[2]},
                {name: 'Design Unit 4: Essential customer experience principles', y:3, color: designColors[3]},
                {name: 'Design Unit 5: Enhance the feel of your site with transitions and animations', y:4, color: designColors[4]},
            ];
            turnideasintoAppsFastConcepts.design_total = 16
            
            conceptsObject = turnideasintoAppsFastConcepts;
            break;
        case "Rapid Prototyping for Developers" :
            var rapidProtoypingForDevsConcepts = {};
            
            rapidProtoypingForDevsConcepts.business = [
                {name: 'Business Unit 1: Creating user feedback channels', y:3, color: businessColors[0]},
                {name: 'Business Unit 2: Experimenting through A/B testing', y:5, color: businessColors[1]},
                {name: 'Business Unit 3: Implementing virality', y:6, color: businessColors[2]}
            ];
            rapidProtoypingForDevsConcepts.business_total = 14
            
            rapidProtoypingForDevsConcepts.design = [
                {name:'Design Unit 1: Rapidly deploying a well-designed landing page to show off your product', y: 6, color: designColors[0]},
                {name:'Design Unit 2: Rapidly deploying an administration back-end site panel for admin users', y: 9, color: designColors[1]},
                {name:'Design Unit 3: Transitions and animations in Meteor.js', y:4, color: designColors[2]}
            ];
            rapidProtoypingForDevsConcepts.design_total = 19
            
            rapidProtoypingForDevsConcepts.coding = [
                {name: 'Coding Unit 1: Meteor.js fundamentals', y:7, color:codingColors[0]},
                {name: 'Coding Unit 2: Authenticating users', y:5, color: codingColors[1]},
                {name: 'Coding Unit 3: Storing data reactively', y:4, color: codingColors[2]},
                {name: 'Coding Unit 4: Collecting data', y:3, color: codingColors[3]},
                {name: 'Coding Unit 5: Publishing and subscribing reactively', y:5, color: codingColors[4]},
                {name: 'Coding Unit 6: Notificiations', y:4, color: codingColors[5]},
                {name: 'Coding Unit 7: Security considerations', y:5, color:codingColors[6]},
                {name: 'Coding Unit 8: Performance tuning', y:6, color:codingColors[7]},
                {name: 'Coding Unit 9: Scaling with Modulus', y:3, color:codingColors[8]},
                {name: 'Coding Unit 10: Unit testing', y:4, color:codingColors[9]},
                {name: 'Coding Unit 11: Error handling', y:6, color:codingColors[10]},
                {name: 'Coding Unit 12: Reactive data visualization with d3', y:7, color:codingColors[11]},
                {name: 'Coding Unit 13: Accessing the GPU', y:8, color:codingColors[12]},
                {name: 'Coding Unit 14: Leveraging Node packages', y:6, color:codingColors[13]},
                {name: 'Coding Unit 15: Cross-platform deployment', y:8, color:codingColors[14]}
            ];
            rapidProtoypingForDevsConcepts.coding_total = 69
            conceptsObject = rapidProtoypingForDevsConcepts;
            break;
        case "Rapid Prototyping for MBAs" :
            var rapidPrototypingForMBAsConcepts = {};
            
            rapidPrototypingForMBAsConcepts.business = [
                {name: 'Business Unit 1: Buying and setting up your custom domain', y:2, color:businessColors[0]},
                {name: 'Business Unit 2: Setting up user analysis tools', y:3, color:businessColors[1]},
                {name: 'Business Unit 3: Optimizing your application for seach engines', y:4, color:businessColors[2]},
                {name: 'Business Unit 4: Accepting credit card payments', y:3, color:businessColors[3]},
                {name: 'Business Unit 5: Running social media marketing campaigns', y:5, color:businessColors[4]},
                {name: 'Business Unit 6: &ldquo;Best of Breed&rdquo; workflow + CRM tools', y:4, color:businessColors[5]},
                {name: 'Business Unit 7: Discover the right marketing message with A/B testing', y:3, color:businessColors[6]}
            ];
            rapidPrototypingForMBAsConcepts.business_total = 24
                
            rapidPrototypingForMBAsConcepts.coding = [
                {name: 'Coding Unit 1: Setting up your devlopment environment', y:2, color:codingColors[0]},
                {name: 'Coding Unit 2: Creating project save points to avoid lost work', y:4, color:codingColors[1]},
                {name: 'Coding Unit 3: Just the HTML, CSS, & Javascript you need to know', y:4, color:codingColors[2]},
                {name: 'Coding Unit 4: Collecting, storing, and retrieving data on the web', y:6, color:codingColors[3]},
                {name: 'Coding Unit 5: Tailoring web experiences to your customer', y:5, color:codingColors[4]},
                {name: 'Coding Unit 6: Presenting customized information', y:4, color:codingColors[5]},
                {name: 'Coding Unit 7: Speeding up your web application\'s performance', y:3, color:codingColors[6]},
                {name: 'Coding Unit 8: Changing your customer\'s data', y:3, color:codingColors[7]},
                {name: 'Coding Unit 9: Troubleshooting issues', y:3, color:codingColors[8]},
                {name: 'Coding Unit 10 Creating notifications', y:4, color:codingColors[9]}
            ];
            rapidPrototypingForMBAsConcepts.coding_total = 38
            
            rapidPrototypingForMBAsConcepts.design = [
                {name: 'Design Unit 1: Launching a professional company landing page', y:3, color:designColors[0]},
                {name: 'Design Unit 2: Customizing the design of your landing page', y:4, color:designColors[1]},
                {name: 'Design Unit 3: Essential visual design principles', y:5, color:designColors[2]},
                {name: 'Design Unit 4: Essential customer experience principles', y:4, color:designColors[3]},
                {name: 'Design Unit 5: Enhance the feel of your site with transitions and animations', y:6, color:designColors[4]}
            ];
            rapidPrototypingForMBAsConcepts.design_total = 22
            
            conceptsObject = rapidPrototypingForMBAsConcepts;
            break;
        case "Prototyping Tools for Designers" :
            var rapidPrototypingForDesignersConcepts = {};
            
            rapidPrototypingForDesignersConcepts.business = [
                {name: 'Business Unit 1: Setting up user analysis tools', y:3, color:businessColors[0]},
                {name: 'Business Unit 2: Creating user feedback channels', y:4, color:businessColors[1]},
                {name: 'Business Unit 3: Finding the design that resonates with users through A/B testing', y:3, color:businessColors[2]}
            ];
            rapidPrototypingForDesignersConcepts.business_total = 10
            
            rapidPrototypingForDesignersConcepts.coding = [
                {name: 'Coding Unit 1: Setting up your code portfolio', y:4, color:codingColors[0]},
                {name: 'Coding Unit 2: Deploying your own live web server in minutes', y:4, color:codingColors[1]},
                {name: 'Coding Unit 3: Creating project save points to avoid lost work', y:5, color:codingColors[2]},
                {name: 'Coding Unit 4: Just the HTML, CSS, & Javascript you need to know', y:6, color:codingColors[3]},
                {name: 'Coding Unit 5: Collecting, storing and retrieving data on the web', y:3, color:codingColors[4]},
                {name: 'Coding Unit 6: Tailoring web experiences to your customer', y:3, color:codingColors[5]},
                {name: 'Coding Unit 7: Presenting customized information', y:3, color:codingColors[6]},
                {name: 'Coding Unit 8: Changing your customer\'s data', y:4, color:codingColors[7]}
            ];
            rapidPrototypingForDesignersConcepts.coding_total = 32
            
            rapidPrototypingForDesignersConcepts.design = [
                {name: 'Design Unit 1: Transitions and animations in Meteor.js', y:4, color:designColors[0]},
                {name: 'Design Unit 2: Launching a professional landing page', y:3, color:designColors[1]},
                {name: 'Design Unit 3: Customizing the design of your landing page', y:3, color:designColors[2]},
                {name: 'Design Unit 4: Enhance the feel of your site with transitions and animations', y:4, color:designColors[3]},
                {name: 'Design Unit 5: Creating engaging visual stories with d3', y:6, color:designColors[4]}
            ];
            rapidPrototypingForDesignersConcepts.design_total = 20
            
            conceptsObject = rapidPrototypingForDesignersConcepts;
            break;
        case "Tinkering with Twitter (for Schools)" :
            var tinkeringWithTwitterSchoolsConcepts = {};
            
            tinkeringWithTwitterSchoolsConcepts.business = [
                {name: 'Business Unit 1: Core business concepts', y:4, color:businessColors[0]},
                {name: 'Business Unit 2: Recruiting users', y:5, color:businessColors[1]}
            ];
            tinkeringWithTwitterSchoolsConcepts.business_total = 9
            
            tinkeringWithTwitterSchoolsConcepts.coding = [
                {name: 'Coding Unit 1: Modern mock-up tools', y:3, color:codingColors[0]},
                {name: 'Coding Unit 2: Launching a live site', y:4, color:codingColors[1]},
                {name: 'Coding Unit 3: Working with web visuals', y:4, color:codingColors[2]},
                {name: 'Coding Unit 4: Implementing a user accounts system', y:3, color:codingColors[3]},
                {name: 'Coding Unit 5: Storing, retrieving, and displaying database data', y:5, color:codingColors[4]}
            ];
            tinkeringWithTwitterSchoolsConcepts.coding_total = 19
            
            tinkeringWithTwitterSchoolsConcepts.design = [
                {name: 'Design Unit 1: Basic mock-up principles', y:4, color:designColors[0]},
                {name: 'Design Unit 2: Managing user experiences', y:5, color:designColors[1]},
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
