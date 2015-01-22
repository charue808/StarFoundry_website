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
        case "Turn Ideas into Apps Fast":
            description =   " <p>In just 12 weeks, you'll learn how to turn a dream into your very own web \
                              product. You'll gain the skills to build an early version of the world changing web \
                              application, Facebook, from scratch. This version was so successful it grew \
                              into the 2nd most visited site on earth today. </p> \
                              <p>Along the way we'll build the skills to launch the three major pieces of just about \
                              every web solution we use: <b>collecting</b>, <b>processing</b>, and <b>presenting data</b> \
                              (AirBnB, for example, <b>collects</b> client preference and location information,\
                              <b>processes</b> it to figure out which locations match with which clients preferences, \
                              and <b>presents</b> those findings to clients looking for a place to stay).</p>  \
                              <p>We'll even show you how to quickly solve the design challenges inherent to any launch, \
                              while also giving you the key business tools to reach and keep your customers. </p> \
                              <p><b>Minimal requirements:</b> We ask that all students first attend our free <a target='_blank' href='http://nelson-common.codio.io/#TinkeringWithTwitter'>Tinkering with Twitter</a> \
                              course, and bring a wireless internet-enabled device with a keyboard.</p>";
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

