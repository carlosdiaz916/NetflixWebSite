jQuery(document).ready(function() {
    // Existing code...

    // Example of film items - adjust selector as needed
    jQuery('.film-item').on('click', function(e) {
        e.preventDefault();

        // Get the video URL from the clicked film item
        var videoUrl = jQuery(this).data('video-url');

        // Set the video source and show the video player
        jQuery('#video-source').attr('src', videoUrl);
        jQuery('#video-player')[0].load();
        jQuery('#video-player-container').show();
    });

    // Close video player
    jQuery('#close-video-player').on('click', function() {
        jQuery('#video-player-container').hide();
        jQuery('#video-player')[0].pause();
    });
});
