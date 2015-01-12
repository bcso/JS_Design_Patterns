var num = 3;
var nums = new Array(num);
var names = ["Tay", "Jessica", "George"];
var prev = 0;

$(document).ready(function(){
    
    //Attach all the listeners and display all images
    addCats(nums);
    
    //Initiate the array of clicks
    for (var i = 0; i < nums.length; i++){
        nums[i] = 0;
    }
})

var addCats = function(nums){
    
    
    for (var i = 0; i<nums.length; i++){
        $(".catsBar").append('<img src="res/meow' + i + '.jpg" id="catImg' + i + 'bar">');
        $(".catsMain").append('<div id = "clicks' + i + '"></div><p class="catName" id="catName' + i + '"></p><img src="res/meow' + i + '.jpg" id="catImg' + i + 'main">');        
        $("#catImg" + i + "main").hide();
        
        //add the click listener
        $("#catImg" + i + "bar").click(function(e){            
            var $selection = $(this).attr('id');
            var catID = parseInt($selection.substr(6,7)); //get the image ID
            
            hideAllImgs();
            
            updateClick(catID);            
            
            $("#" + $selection.substr(0,7) + "main").show();
            $("#clicks" + catID).show();
        });
    }
};

//Increment the click count and draw it for specified image
var updateClick = function(catID){
    nums[catID] = nums[catID] + 1;   
    
    $("#clicks" + catID ).text(names[catID] + ": " + nums[catID]);
};

var hideAllImgs = function(){
    for (var i = 0; i < nums.length; i ++){
        $("#catImg" + i + "main").hide();
        $("#clicks" + i).hide();
    }
}