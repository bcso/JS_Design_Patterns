$(document).ready(function(){
    var count = 0;
    
    $('.cat').click(function(e){
        count++;        
        $("#clicks").text(count);
    });
    
    $("#catName1").text("Tay");
    $("#catName2").text("Jessica");
})