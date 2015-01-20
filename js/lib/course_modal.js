/**
* Created with StarFoundry_website.
* User: charue808
* Date: 2015-01-20
* Time: 09:16 AM
* To change this template use Tools | Templates.
*/

$(document).ready(function() {
    
            // Varying course info modal content based on trigger button
            //
            $('#courseInfoModal').on('show.bs.modal', function (event) {
                var button = $(event.relatedTarget); // Button that triggered the modal

                // Extract info from data-* attributes
                // If necessary, you could initiate an 
                // AJAX request here (and then do the updating in a callback).
                // 
                var title = button.data('name'); 
                
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

                // Extract info from data-* attributes
                // If necessary, you could initiate an 
                // AJAX request here (and then do the updating in a callback).
                // 
                var title = button.data('name'); 

                drawChart(title);
            });

            $('#courseInfoModal').on('hidden.bs.modal', function (e) {
                destroyChart();
            });
});