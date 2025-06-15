document.getElementById("guest-form").addEventListener("submit",function(event){
    event.preventDefault(); // Prevent the default form submission

    let guestInput = document.getElementById("guest-name");
    let guestName = guestInput.value.trim();

    if (guestName === "") return; // Ignore empty input 

    addGuest(guestName);
    guestInput.value = ""; // Clear input field 
});


function addGuest(name){
    let guestlist = document.getElementById("guest-list");

    // Enforce a maximum of 10 guests 
    if (guestlist.children.length >= 10) {
        alert("Maximum of 10 guests reached.");
        return; // Stop if the maximum is reached
    }
    
    
    // Create a new list item for the guest
    let listItem = document.createElement("li");
    listItem.textContent = name; // Set the text content to the guest's name
    
    //Add Remove Button 
    let removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => listItem.remove());

    
    listItem.appendChild(removeButton);
    guestlist.appendChild(listItem);

}


     