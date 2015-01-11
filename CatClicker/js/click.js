$(document).ready(function(){
    var count = 0;
    
    $('#catImg1').click(function(e){
        count++;        
        $("#clicks1").text(count);
    });
    
    $('#catImg2').click(function(e){
        count++;        
        $("#clicks2").text(count);
    });    
    
    $("#catName1").text("Tay");
    $("#catName2").text("Jessica");
})