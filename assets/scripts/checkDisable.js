$(document).ready(function() {
    const userId = sessionStorage.getItem('currentUserId');

    if (!userId) {
        $('.disable').each(function() {
            $(this).attr('id', 'null');
            $(this).attr('href', '#');
        });
    }
});