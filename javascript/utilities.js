$("el").removeClass (function (index, css) {
    return (css.match (/(^|\s)partial-\S+/g) || []).join(' ');
});
