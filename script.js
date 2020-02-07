

//when I open the Work Day Scheduler the currentTime will appear

var currentDay = document.getElementById("currentDay")

var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").append(currentTime)
console.log(currentTime)

//When I add a task to the scheduler it should append and remain there when we push the "saveBtn".
