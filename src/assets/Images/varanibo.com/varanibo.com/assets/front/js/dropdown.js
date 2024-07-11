// Home Rent Modal

// Admin Panel
// Home Rent Modal
var elements = $(document).find("select.form_select_admin");
for (var i = 0, l = elements.length; i < l; i++) {
    var $select = $(elements[i]),
        $label = $select.parents(".form_div_admin").find("label");

    $select.select2({
        allowClear: false,
        minimumResultsForSearch: 0,
        theme: "bootstrap",
        width: "90%",
    });
}

// User Dash & Home Rent Modal
var elements = $(document).find("select.Uhome_form_select");
for (var i = 0, l = elements.length; i < l; i++) {
    var $select = $(elements[i]),
        $label = $select.parents(".home_form_div").find("label");

    $select.select2({
        allowClear: false,
        minimumResultsForSearch: 0,
        theme: "bootstrap",
        width: "100%",
        selectOnClose: true,
    });
}
// Com-Rent Modal
var elements = $(document).find("select.Ucom_form_select");
for (var i = 0, l = elements.length; i < l; i++) {
    var $select = $(elements[i]),
        $label = $select.parents(".com_form_div").find("label");

    $select.select2({
        allowClear: false,
        minimumResultsForSearch: 0,
        theme: "bootstrap",
        width: "100%",
        selectOnClose: true,
    });
}
// Indoor Rent Modal
var elements = $(document).find("select.indoor_form_select");
for (var i = 0, l = elements.length; i < l; i++) {
    var $select = $(elements[i]),
        $label = $select.parents(".indoor_form_div").find("label");

    $select.select2({
        allowClear: false,
        minimumResultsForSearch: 0,
        theme: "bootstrap",
        width: "100%",
        selectOnClose: true,
    });
}