/**
* Created with Merge January 17.
* User: jayqueue
* Date: 2015-01-18
* Time: 05:04 AM
*/


function getCourseDescription(courseTitle) {
    var description = "";
    
    switch(courseTitle) {
        case "Building Your Own Apps: Level 1":
            description =   "<h3>Overview</h3>\
                            <p>Build Your Own Apps is a 4 session series that provides \
                            entrepreneurs and community members a hands-on, collaborative \
                            environment in which to explore powerful new tools for building \
                            web and mobile applications.</p> \
                            <p>This course is for Entrepreneurs who are new to the world of \
                            coding, but might have an idea for a web and mobile product they \
                            would like to build. This course is especially for changemakers who\
                            would like: <ul><li>The knowledge to build an app from the ground up, or</li> \
                            <li>The technical know-how to manage a freelance developer</li></ul></p>\
                            <h3>What to expect in Session 1</h3>\
                            <p>During our first session you'll be learning how to use HTML, CSS and javaScript\
                            to build interactive websites and learn about the free, fast tools for modern,\
                            professional, highly polished websites</p>\
                            <button><a target=\"_blank\" href=\"http://www.harvestlearninggroup.com\">Reserve Now\
                            </a></button>";

            break;
        case "Building Your Own Apps: Level 2":
            description = "<h3>Overview</h3>\
                          <p>Build Your Own Apps is a 4 session series that provides \
                            entrepreneurs and community members a hands-on, collaborative \
                            environment in which to explore powerful new tools for building \
                            web and mobile applications.</p>\
                           <p>This course is for Entrepreneurs who are new to the world of \
                            coding, but might have an idea for a web and mobile product they \
                            would like to build. This course is especially for changemakers who\
                            would like: <ul><li>The knowledge to build an app from the ground up, or</li> \
                            <li>The technical know-how to manage a freelance developer</li></ul></p>\
                           <h3>What to expect in Session 2</h3>\
                           <p>We'll be looking at getting the web to work for you, \
                            leasing and controlling a server for free and undertanding a powerful\
                            new tool to build \"cross-platform\" apps.</p>\
                           <button><a target=\"_blank\" href=\"http://www.harvestlearninggroup.com\">Reserve Now\
                           </a></button>";
            
            break;
        case "Building Your Own Apps: Level 3":
            description = "<h3>Overview</h3>\
                          <p>Build Your Own Apps is a 4 session series that provides \
                            entrepreneurs and community members a hands-on, collaborative \
                            environment in which to explore powerful new tools for building \
                            web and mobile applications.</p>\
                           <p>This course is for Entrepreneurs who are new to the world of \
                            coding, but might have an idea for a web and mobile product they \
                            would like to build. This course is especially for changemakers who\
                            would like: <ul><li>The knowledge to build an app from the ground up, or</li> \
                            <li>The technical know-how to manage a freelance developer</li></ul></p>\
                           <h3>What to expect in Session 3</h3>\
                           <p>In session 3 we'll be turning your website you build in session 1\
                            into a web application, add logic for user interactions, revamp the \
                            visual flow and change the structure dynamically.</p>\
                           <button><a target=\"_blank\" href=\"http://www.harvestlearninggroup.com\">Reserve Now\
                           </a></button>";
            
            break;
        case "Building Your Own Apps: Level 4":
            description = "<h3>Overview</h3>\
                          <p>Build Your Own Apps is a 4 session series that provides \
                            entrepreneurs and community members a hands-on, collaborative \
                            environment in which to explore powerful new tools for building \
                            web and mobile applications.</p>\
                           <p>This course is for Entrepreneurs who are new to the world of \
                            coding, but might have an idea for a web and mobile product they \
                            would like to build. This course is especially for changemakers who\
                            would like: <ul><li>The knowledge to build an app from the ground up, or</li> \
                            <li>The technical know-how to manage a freelance developer</li></ul></p>\
                           <h3>What to expect in Session 4</h3>\
                           <p>In our final session we'll be installing a user login system, \
                            manage lasting data, secure your app and convert your app into a \
                            mobile application</p>\
                           <button><a target=\"_blank\" href=\"http://www.harvestlearninggroup.com\">Reserve Now\
                           </a></button>";
            
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
                              <p><b>Minimal requirements:</b> We ask that all students first attend our four session series <b>Building Your Own Apps</b> \
                              course, and bring a wireless internet-enabled device with a keyboard.</p>\
                              </p>";
            break;
             case "UC-Berkeley Volunteers Building Apps":
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
                              <p><b>Minimal requirements:</b> We ask that all students first attend our four session series <b>Building Your Own Apps</b> \
                              course, and bring a wireless internet-enabled device with a keyboard.</p>\
                              <h6>Sponsored by the Berkeley Student Technology Fund</h6>";
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
            description =   "<p>In just 12 weeks, you'll learn how to turn an idea into your very own web product. \
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
        case "Prototyping Tools for Designers" :
            description =   "<p>In this 2-weekend workshop, you'll learn how to quickly launch an application \
                                prototype and test out your ideas with real (not &ldquo;mock&rdquo;) user experiences, without \
                                requiring large IT investments. </p>\
                             <p>Learn how to take advantage of the latest technologies to create stunning visual \
                                stories based on live user data. We'll give you hands on practice with modern \
                                tools that let you deploy a secure, fast-acting web and near-native mobile \
                                application in <em>hours</em> instead of weeks or months.</p> \
                             <p><b>Requirements:</b> Some design experience, knowledge of basic HTML + CSS</p>";
            break;
        case "Tinkering with Twitter (for Schools)" :
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

