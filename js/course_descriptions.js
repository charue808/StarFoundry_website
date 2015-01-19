/**
* Created with Merge January 17.
* User: jayqueue
* Date: 2015-01-18
* Time: 05:04 AM
*/


function getCourseDescription(courseTitle) {
    var description = "";
    
    switch(courseTitle) {
        case "Tinkering with Twitter":
            description =   " <p>Dive right into the real world of building world-changing products, by \
                            developing a version of the popular web tool, Twitter, from the ground up. \
                            </p>\
                            <p>This version of Twitter was so successful, it evolved into one of the top 10 most used sites in the world.</p> \
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

