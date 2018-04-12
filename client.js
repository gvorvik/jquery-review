//jQuery affects the DOM, not the html file!!! It's main thing is DOM manipulation
//Breakpoints in debugger run before the line on which they are.
//$() is called a selector

console.log('Jquery Lecture');

//document.ready waits for the document to be ready before it loads the code
//.ready() holds a callback function, which is a function that gets called at a later point in time, in this case when .ready() is run
//passing onReady without parenthesis passes the whole function, whereas calling onReady() passes what the onReady function returns
$(document).ready(onReady);



function onReady() {
    console.log('jquery is ready');
    $('h1').css('color', 'red');
    $('h1').addClass('funny');

    //getters and setters - pay attention to GET vs SET
    $('h2').text(); //GET text value of h2
    $('h2').text('You have been set!!!!'); //SET the value of h2 text
    
    //inputs (also getters and setters)
    //.text() is for most things, .val() is ONLY for inputs
    $('#nameInput').val('Greg Orvik'); //SETS the value of an input
    console.log($('#nameInput').val()); //GETS val and logs it to console
    
    //events
    //event handler
    $('#addPersonButton').on('click', function() {
        let name = $('#nameInput').val();
        $('#nameList').append(`<li>${name} 
            <button class='deleteButton'>
            Delete</button></li>`);
    });

    // $(this) refers to the element we just selected
    $('#nameList').on('click', '.deleteButton', function() {
        console.log('Delete Button was clicked.');
        $(this).parent().remove();
    });

    $('#clicked').on('click', function() {
        console.log('I was clicked');
    });
}
