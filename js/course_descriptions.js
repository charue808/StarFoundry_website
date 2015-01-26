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
            description =   " <p>In this 3-day workshop, you'll learn how to quickly launch an application prototype. \
                               We'll give you hands on practice with modern tools that let you deploy a secure, data-driven, \
                               performant web and near-native application in <em>hours</em> instead of weeks or month </p>\
                               <p>Using meteor.js as our framework, we show you how to take advantage of the latest technologies \
                               to perform such feats as creating stunning, low-lag visuals by speaking directly to the GPU, \
                               implementing automatic reactivity so that data changes are seamlessly published without browser \
                               refreshes, and creating a locally cached database for lightning fast user experiences, all \
                               <em>using javascript</em>.</p> \
                               <p><b>Requirements:</b> 1-5 years of software development experience.</p>";
            break;
        case "Rapid Prototyping for MBAs" :
            description =   "<p>In just 10 weeks, you'll learn how to turn an idea into your very own web product. \
                                You'll gain the skills to build an early version of the world changing web \
                                application, Facebook, from scratch. This version was so successful, it grew into \
                                the 2nd most visited site on earth today.</p> \
                             <p>Along the way we'll build the skills to launch the three major pieces of just about \
                                every web solution we use: <b>collecting</b>, <b>processing</b>, and <b>presenting data</b> \
                                (AirBnB, for example, <b>collects</b> client preference and location information, \
                                <b>processes</b> it to figure out which locations match with which client preferences, \
                                and <b>presents</b> those findings to clients looking for a place to stay).</p> \
                             <p>We'll even show you how to quickly solve the design challenges inherent to any \
                                launch, while also giving you the key business tools to reach and keep your customers.</p>";
            break;
        case "Rapid Prototyping for Designers" :
            description =   "<p>In this 2-weekend workshop, you'll learn how to quickly launch an application \
                                prototype and test out your ideas with real (not &ldquo;mock&rdquo;) user experiences, without \
                                requiring large IT investments. </p>\
                             <p>Learn how to take advantage of the latest technologies to create stunning visual \
                                stories based on live user data. We'll give you hands on practice with modern \
                                tools that let you deploy a secure, fast-acting web and near-native mobile \
                                application in <em>hours</em> instead of weeks or months.</p> \
                             <p><b>Requirements:</b>Some design experience, knowledge of basic HTML, CSS concepts.</p>";
            break;
        case "Tinkering with Twitter (for Students)" :
            description =   "<p>In this course, our students dive right into the real world of building \
                                world-changing products, by developing a version of the popular web tools, Twitter \
                                from the ground up. This version of Twitter was so successful, it evolved into one \
                                of the top 10 most used sites in the world today.</p> \
                             <p>This hands-on workshop will give participants familiarity with &ldquo;rapid prototyping&rdquo; \
                                concepts, which focus on how to launch quickly, efficiently, and effectively. We'll \
                                explore topics such as web tools, visual design, managing data in the cloud, \
                                creating engagement and interactivity through animations, customizing \
                                experiences, and keeping your data safe. </p>\
                             <p>Students will gain tools to launch web products of their own, and will apply \
                                their curiosity to current trends in digital literacy and authorship. This is a play-based course, \
                                designed to hone &ldquo;tinkering&rdquo; and exploration habits, by giving students practice building \
                                useful tools that they can show off to friends and family.</p>";
            break;
        default:
            description = "course title not found";
    }
    
 // DEBUG   
 //   console.log(courseTitle);
 //   console.log("Tinkering with Twitter");
 
    return description;

}

