/**
Has the window reached <distance> from the bottom of the document.

@param {integer} distance Distance in pixels from the floor to return true. Defaults to 350.
@returns {boolean} True if document is within provided param (in px) from the bottom of the page. False otherwise.
*/
function reached_floor(distance) {
    distance = distance || 350;
    return ($(document).height() - ($(window).height() + $(window).scrollTop())) < distance;
}
