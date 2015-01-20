/**
* Created with StarFoundry_website.
* User: charue808
* Date: 2015-01-20
* Time: 10:18 AM
* To change this template use Tools | Templates.
*/

$(document).ready(function() {
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
});