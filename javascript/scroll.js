/**
Has the window reached <distance> from the bottom of the document.

@param {integer} distance Distance in pixels from the floor to return true. Defaults to 350.
@returns {boolean} True if document is within provided param (in px) from the bottom of the page. False otherwise.
*/
function reached_floor(distance) {
    distance = distance || 350;
    return ($(document).height() - ($(window).height() + $(window).scrollTop())) < distance;
}

/**
Checks if an element is inside of the viewport

@link http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport/7557433#7557433
@example See link (above)
*/
function isElementInViewport (el) {

    //special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }

    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    );
}
