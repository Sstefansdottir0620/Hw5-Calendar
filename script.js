


$(document).ready(function () {
    $(".saveBtn").on("click", function() {
        var value = $(this).siblings("textarea").val();
        var time = $(this).siblings().attr("id");

        localStorage.setItem(time, value);
        
    })

    $("#hour-8 textarea").val(localStorage.getItem("hour-8"));
    $("#hour-9 textarea").val(localStorage.getItem("hour-9"));
    $("#hour-10 textarea").val(localStorage.getItem("hour-10"));
    $("#hour-11 textarea").val(localStorage.getItem("hour-11"));
    $("#hour-12 textarea").val(localStorage.getItem("hour-12"));
    $("#hour-13 textarea").val(localStorage.getItem("hour-13"));
    $("#hour-14 textarea").val(localStorage.getItem("hour-14"));
    $("#hour-15 textarea").val(localStorage.getItem("hour-15"));
    $("#hour-16 textarea").val(localStorage.getItem("hour-16"));
    $("#hour-17 textarea").val(localStorage.getItem("hour-17"));
    $("#hour-18 textarea").val(localStorage.getItem("hour-18"));

//when I open the Work Day Scheduler the currentTime will appear





function hourUpdate(){
    var currentHour = (moment().hours());
    console.log($(".time-block"));
    $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id").split("-")[1]);
        console.log("test")
        
        if (blockHour < currentHour) {
            $(this).addClass("past");
            
        }

        else if (blockHour === currentHour) {
            $(this).addClass("past");
            $(this).addClass("present");
        }

        else{
            $(this).addClass("past");
            $(this).addClass("present");
            $(this).addClass("future");
        }
        
    });

}

hourUpdate();


var interval = setInterval(hourUpdate, 15000);

$("#hour-8 .textarea").val(localStorage.getItem("hour-8"));
$("#hour-9 .textarea").val(localStorage.getItem("hour-9"));
$("#hour-10 .textarea").val(localStorage.getItem("hour-10"));
$("#hour-11 .textarea").val(localStorage.getItem("hour-11"));
$("#hour-12 .textarea").val(localStorage.getItem("hour-12"));
$("#hour-13 .textarea").val(localStorage.getItem("hour-13"));
$("#hour-14 .textarea").val(localStorage.getItem("hour-14"));
$("#hour-15 .textarea").val(localStorage.getItem("hour-15"));
$("#hour-16 .textarea").val(localStorage.getItem("hour-16"));
$("#hour-17 .textarea").val(localStorage.getItem("hour-17"));
$("#hour-18 .textarea").val(localStorage.getItem("hour-18"));

var currentHour = moment().format('MMMM Do YYYY, h:mm:ss a');

$("#currentDay").append(currentHour)

});
