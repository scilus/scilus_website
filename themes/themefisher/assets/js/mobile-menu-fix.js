// Fix for mobile navbar toggler not working
// This ensures Bootstrap's collapse plugin initializes properly
(function($) {
    'use strict';
    
    // Wait for DOM to be ready
    $(document).ready(function() {
        // Manually attach click handler to navbar toggler
        $('.navbar-toggler').on('click', function(e) {
            e.preventDefault();
            var target = $(this).data('target');
            $(target).collapse('toggle');
        });
        
        // Ensure Bootstrap data-api works on mobile
        if (typeof $ !== 'undefined' && typeof $.fn.collapse !== 'undefined') {
            console.log('Bootstrap collapse plugin loaded successfully');
        } else {
            console.error('Bootstrap collapse plugin not found');
        }
    });
})(jQuery);
