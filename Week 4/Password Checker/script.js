$(document).ready(function(){
    $("#myForm").click(function(event){
        event.preventDefault();
        var data = $("#myForm").serializeArray():
        console.log(data);
    });
});