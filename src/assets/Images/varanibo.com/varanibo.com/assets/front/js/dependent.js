// _________All___________//
//District
$(document).ready(function() {
    var $select1 = $('#Division');
    var $select2 = $('.Divisiondistrict');
    var $options2 = $select2.find('option');


    $select1.on('change', function(event) {
        $select2.html(
            $options2.filter(
                function() {
                    return $(this).data('section1') == $select1[0].selectedOptions[0].value;
                }
            )
        );
        $select2.trigger('change');
    }).trigger('change');

});

//upazila
$(document).ready(function() {
    var $select1 = $('#District');
    var $select2 = $('.Districtupazila');
    var $options2 = $select2.find('option');


    $select1.on('change', function(event) {
        $select2.html(
            $options2.filter(
                function() {
                    return $(this).data('section1') == $select1[0].selectedOptions[0].value;
                }
            )
        );
        $select2.trigger('change');
    }).trigger('change');

});

//Are
$(document).ready(function() {
    var $select1 = $('#upazila');
    var $select2 = $('.upazilaArea');
    var $options2 = $select2.find('option');


    $select1.on('change', function(event) {
        $select2.html(
            $options2.filter(
                function() {
                    return $(this).data('section1') == $select1[0].selectedOptions[0].value;
                }
            )
        );
        $select2.trigger('change');
    }).trigger('change');

});
// _________Home Rent___________//
//District
$(document).ready(function() {
    var $select1 = $('#Division-home');
    var $select2 = $('.Divisiondistrict-home');
    var $options2 = $select2.find('option');


    $select1.on('change', function(event) {
        $select2.html(
            $options2.filter(
                function() {
                    return $(this).data('section1') == $select1[0].selectedOptions[0].value;
                }
            )
        );
        $select2.trigger('change');
    }).trigger('change');

});
//upazila
$(document).ready(function() {
    var $select1 = $('#District-home');
    var $select2 = $('.Districtupazila-home');
    var $options2 = $select2.find('option');


    $select1.on('change', function(event) {
        $select2.html(
            $options2.filter(
                function() {
                    return $(this).data('section1') == $select1[0].selectedOptions[0].value;
                }
            )
        );
        $select2.trigger('change');
    }).trigger('change');

});
//Are
$(document).ready(function() {
    var $select1 = $('#upazila-home');
    var $select2 = $('.upazilaArea-home');
    var $options2 = $select2.find('option');


    $select1.on('change', function(event) {
        $select2.html(
            $options2.filter(
                function() {
                    return $(this).data('section1') == $select1[0].selectedOptions[0].value;
                }
            )
        );
        $select2.trigger('change');
    }).trigger('change');

});
// _________Commercial Rent___________//
//District
$(document).ready(function() {
    var $select1 = $('#com-Division');
    var $select2 = $('.com-Divisiondistrict');
    var $options2 = $select2.find('option');


    $select1.on('change', function(event) {
        $select2.html(
            $options2.filter(
                function() {
                    return $(this).data('section1') == $select1[0].selectedOptions[0].value;
                }
            )
        );
        $select2.trigger('change');
    }).trigger('change');

});

//upazila
$(document).ready(function() {
    var $select1 = $('#com-District');
    var $select2 = $('.com-Districtupazila');
    var $options2 = $select2.find('option');


    $select1.on('change', function(event) {
        $select2.html(
            $options2.filter(
                function() {
                    return $(this).data('section1') == $select1[0].selectedOptions[0].value;
                }
            )
        );
        $select2.trigger('change');
    }).trigger('change');

});

//Are
$(document).ready(function() {
    var $select1 = $('#com-upazila');
    var $select2 = $('.com-upazilaArea');
    var $options2 = $select2.find('option');


    $select1.on('change', function(event) {
        $select2.html(
            $options2.filter(
                function() {
                    return $(this).data('section1') == $select1[0].selectedOptions[0].value;
                }
            )
        );
        $select2.trigger('change');
    }).trigger('change');

});

// _________Indoor Game___________//

//District
$(document).ready(function() {
    var $select1 = $('#indoor-Division');
    var $select2 = $('.indoor-Divisiondistrict');
    var $options2 = $select2.find('option');


    $select1.on('change', function(event) {
        $select2.html(
            $options2.filter(
                function() {
                    return $(this).data('section1') == $select1[0].selectedOptions[0].value;
                }
            )
        );
        $select2.trigger('change');
    }).trigger('change');

});

//upazila
$(document).ready(function() {
    var $select1 = $('#indoor-District');
    var $select2 = $('.indoor-Districtupazila');
    var $options2 = $select2.find('option');


    $select1.on('change', function(event) {
        $select2.html(
            $options2.filter(
                function() {
                    return $(this).data('section1') == $select1[0].selectedOptions[0].value;
                }
            )
        );
        $select2.trigger('change');
    }).trigger('change');

});

//Are
$(document).ready(function() {
    var $select1 = $('#indoor-upazila');
    var $select2 = $('.indoor-upazilaArea');
    var $options2 = $select2.find('option');


    $select1.on('change', function(event) {
        $select2.html(
            $options2.filter(
                function() {
                    return $(this).data('section1') == $select1[0].selectedOptions[0].value;
                }
            )
        );
        $select2.trigger('change');
    }).trigger('change');

});

// _________User Home Post___________//
// Create Post & Front Home Rent Modal
//District
$(document).ready(function() {
    var $select1 = $('#Uhome_Division');
    var $select2 = $('.Uhome_Divisiondistrict');
    var $options2 = $select2.find('option');


    $select1.on('change', function(event) {
        $select2.html(
            $options2.filter(
                function() {
                    return $(this).data('section1') == $select1[0].selectedOptions[0].value;
                }
            )
        );
        $select2.trigger('change');
    }).trigger('change');

});

//upazila
$(document).ready(function() {
    var $select1 = $('#Uhome_District');
    var $select2 = $('.Uhome_Districtupazila');
    var $options2 = $select2.find('option');


    $select1.on('change', function(event) {
        $select2.html(
            $options2.filter(
                function() {
                    return $(this).data('section1') == $select1[0].selectedOptions[0].value;
                }
            )
        );
        $select2.trigger('change');
    }).trigger('change');

});

//Are
$(document).ready(function() {
    var $select1 = $('#Uhome_upazila');
    var $select2 = $('.Uhome_upazilaArea');
    var $options2 = $select2.find('option');


    $select1.on('change', function(event) {
        $select2.html(
            $options2.filter(
                function() {
                    return $(this).data('section1') == $select1[0].selectedOptions[0].value;
                }
            )
        );
        $select2.trigger('change');
    }).trigger('change');

});
// Update Post 
//District
$(document).ready(function() {
    var $select1 = $('#Uhome_DivisionU');
    var $select2 = $('.Uhome_DivisiondistrictU');
    var $options2 = $select2.find('option');


    $select1.on('change', function(event) {
        $select2.html(
            $options2.filter(
                function() {
                    return $(this).data('section1') == $select1[0].selectedOptions[0].value;
                }
            )
        );
        $select2.trigger('change');
    }).trigger('change');

});

//upazila
$(document).ready(function() {
    var $select1 = $('#Uhome_DistrictU');
    var $select2 = $('.Uhome_DistrictupazilaU');
    var $options2 = $select2.find('option');


    $select1.on('change', function(event) {
        $select2.html(
            $options2.filter(
                function() {
                    return $(this).data('section1') == $select1[0].selectedOptions[0].value;
                }
            )
        );
        $select2.trigger('change');
    }).trigger('change');

});

//Are
$(document).ready(function() {
    var $select1 = $('#Uhome_upazilaU');
    var $select2 = $('.Uhome_upazilaAreaU');
    var $options2 = $select2.find('option');


    $select1.on('change', function(event) {
        $select2.html(
            $options2.filter(
                function() {
                    return $(this).data('section1') == $select1[0].selectedOptions[0].value;
                }
            )
        );
        $select2.trigger('change');
    }).trigger('change');

});