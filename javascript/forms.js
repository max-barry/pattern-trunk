/**
Cross browser prevent default.
*/
if (event.preventDefault) {
    event.preventDefault();
} else {
    event.returnValue = false;
}
