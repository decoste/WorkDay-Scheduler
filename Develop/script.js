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
    