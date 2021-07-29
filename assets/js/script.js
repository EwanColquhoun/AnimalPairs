

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
        
    for (let button of buttons) {
        button.addEventListener("click", function() {
            console.log('welldone');
            alert("You clicked a button!");
        })
    }
})