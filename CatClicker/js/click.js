$(document).ready(function(){
    var count = 0;
    
    $('#catImg').click(function(e){
        count++;        
        $("#clicks").text(count);
    });
});