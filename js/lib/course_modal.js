/**
* Created with StarFoundry_website.
* User: charue808
* Date: 2015-01-20
* Time: 09:16 AM
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
            case "TurnIdeasIntoRealAppsFast":
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
            case "TurnIdeasIntoRealAppsFast":
                title = 'Turn Ideas into Real Apps Fast' ;
                break;
            default:
                title = '';
    }
    return title;
}
$(document).ready(function() {
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
    
    
});