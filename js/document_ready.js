/**
* Created with StarFoundry_website.
* User: charue808
* Date: 2015-01-22
* Time: 11:34 PM
* To change this template use Tools | Templates.
*/

/*Function to find Hash and to confirm if it matches other titles */

function isTitle(titleHash) {
    var titleFound = false;
    if(titleHash) {
        switch(titleHash.substring(1)) {
            case "TinkeringWithTwitter":
                titleFound = true;
                break;
            case "TurnIdeasintoAppsFast":
                titleFound = true;
                break;
            default:
                titleFound = false;
        } 
    }
    return titleFound;  
}

/* Function to convert Hash that was found into the actual title of course decriptions */

function convertHashToTitle(titleHash) {
    switch(titleHash.substring(1)) {
            case "TinkeringWithTwitter":
                title = 'Tinkering with Twitter';
                break;
            case "TurnIdeasintoAppsFast":
                title = 'Turn Ideas into Apps Fast' ;
                break;
            default:
                title = '';
    }
    return title;
}
 

$(function() {
       //Reset for Company Contact Form
        $('#_form_1029')[0].reset();
      //Reset for Contact Us Form
        $('#_form_1013')[0].reset();
      //Reset for Event List Subscription Form
        $('#_form_1015')[0].reset();
    
    
            /* To switch information in course modals and to use links to open other course modals*/
            
            //  Global variable keeps track of if we saw the Hash Modal
                referComplete = false;
            // Varying course info modal content based on trigger button
            //
            $('#courseInfoModal').on('show.bs.modal', function (event) {
                var button = $(event.relatedTarget); // Button that triggered the modal
                var title = '';
                var hash = window.location.hash;
                    if (isTitle (hash) && !referComplete) {
                        title = convertHashToTitle(hash);
                    } else {
                        // Extract info from data-* attributes
                        // If necessary, you could initiate an 
                        // AJAX request here (and then do the updating in a callback).
                        // 
                        title = button.data('name'); 
                    }
                
                
                var description = getCourseDescription(title);
                

                // Update the modal's content. We'll use jQuery here, 
                // but you could use a data binding library or other methods instead.
                //
                var modal = $(this);
                modal.find('.modal-title').text(title);
                
                modal.find('#courseDescription').html(description);
            });
            
           
            // To activate a chart when a page loads, make two calls like the draw and destroy functions
            // below for each modal to have a chart drawn on it:
            // 
            $('#courseInfoModal').on('shown.bs.modal', function (event) {
                var button = $(event.relatedTarget); // Button that triggered the modal
                var title = '';
                var hash = window.location.hash;
                    if (isTitle (hash) && !referComplete) {
                        title = convertHashToTitle(hash);
                        referComplete = true;
                    } else {
                        // Extract info from data-* attributes
                        // If necessary, you could initiate an 
                        // AJAX request here (and then do the updating in a callback).
                        // 
                        title = button.data('name'); 
                    }
              
                
                drawChart(title);
            });

            $('#courseInfoModal').on('hidden.bs.modal', function (e) {
                destroyChart();
            });
      
    if  (isTitle(window.location.hash) ) {
        $('#courseInfoModal').modal('show');
        
    }
    
    
    /* COMPANY CONTACT MODAL*/
    
    // Make life easier for the company course user
    // by pre-selecting the appropriate dropdown in the
    // company contact us modal
    //
           $('#companyContactModal').on('show.bs.modal', function(event) {
              var button = $(event.relatedTarget);
              var selection = button.data('course');

              var modal = $(this);
              modal.find('.modal-body select').val(selection);
 
           });
           
    
    /* Community Course Data tables*/
    $('#communityCourses').dataTable(
          {
            // For more options, see: https://datatables.net/reference/option/
            // To add sort arrows, see 'portfolio.css', line 670
            "paging": false,
            "searching":false,
            "info": false,
            "sorting": false

           }
      );
    
       
    /* Tool-Tip placement*/
     $("[rel=tooltip]").tooltip({ placement: 'top'});
    
       
});