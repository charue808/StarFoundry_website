/**
* Created with StarFoundry_website.
* User: charue808
* Date: 2015-01-20
* Time: 09:27 AM
* To change this template use Tools | Templates.
*/

$(document).ready(function() {
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
});