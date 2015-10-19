/*
    Signup Form Script
    This script will load the state select list and validate the form before submission
*/

document.addEventListener("DOMContentLoaded", populateStates);

function populateStates () {
    var signup = document.getElementById("signup");
    var state = signup.elements.state;
    
    for (var i = 0; i < usStates.length; i++) {
        var option = document.createElement("OPTION");
        option.innerHTML = usStates[i].name;
        option.value = usStates[i].value;
        state.appendChild(option);
    }
}

