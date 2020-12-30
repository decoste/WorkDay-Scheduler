//Get current date by using moment.js
$("#currentDay").text(moment().format('dddd, MMMM Do'))


$(document).ready(function () {
    // save button
    $(".saveBtn").on("click", function () {
        //Source:https://stackoverflow.com/questions/
        //7463242/how-do-i-select-a-sibling-element-using-jquery
        let timeID = $(this).parent().attr("id");
        let input = $(this).siblings(".description").val();
       
        // Save text in local storage
        localStorage.setItem(timeID, input);
    })
    
    // Get item from local storage
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));

   
    function hourlyTask() {
        //Get current time
        var currentTime = moment().hour();
        console.log(currentTime)


        $(".time-block").each(function () {
            var taskTime = parseInt($(this).attr("id"));
            console.log(taskTime)

            
        })
    }

    hourlyTask();
})