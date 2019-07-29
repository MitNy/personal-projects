$(document).ready(function() {
    $(".submit").click(function() {
        var values;
        values = getRadioItems();
        alert(values);
    });
});

function getRadioItems() {
    var result = 
        $(".content > .box > input:radio:checked").get();
    
    var items = $.map(result, function(element) {
        return $(element).attr("id"); 
    });
    return items.join(",");
}