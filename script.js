//------------fetch the data from html to js--------------
let fetchNoteFromUser = document.querySelector("textarea");
let addNoteButton = document.querySelector("button");
let main2 = document.querySelector(".main2");
let selectedcColor = document.querySelector("input");




//--------------------------click event on button for adding notes and additional feature-------------
addNoteButton.addEventListener('click', () => {
    //give animation to button
    setTimeout(giveAnimationToButton,100);
    addNoteButton.style.transform = "scale(1.4)";
    function giveAnimationToButton(){
        addNoteButton.style.transition = "0.2s"
        addNoteButton.style.transform = "scale(1)"
    }
    addNotesToDiv();
});

//----------------------fetch text from user in textarea--------------------------------
let inputvar = "";
fetchNoteFromUser.addEventListener('input', () => {
    inputvar = fetchNoteFromUser.value;
    console.log(inputvar);
});

//---------------------function which are add to notes to div------------------------------
function addNotesToDiv() {
    //--------------create new div for sticky notes------------
    let newDiv = document.createElement("div");
    //create delete button for sticy note div
    let removeNote = document.createElement("button");

    //-----------fetch color from user input--------------------------
    var colorCode = "";
    selectedcColor.addEventListener('input', (e) => {
        colorCode = selectedcColor.value;
        console.log(colorCode);
        newDiv.style.backgroundColor = colorCode;
        
    })
    
    newDiv.style.padding = "20px";
    newDiv.style.height = "fit-content"
    newDiv.innerText = "" + inputvar;
    newDiv.setAttribute("class", "sticyNotes");
    // newDiv.style.backgroundColor = colorCode;
    main2.appendChild(newDiv);
    removeNote.innerText = "Delete";
    newDiv.appendChild(removeNote);

    if(inputvar.length === 0){
        alert("add text");
        removeNote.remove();
        newDiv.remove();
    }
    inputvar = "";
    fetchNoteFromUser.value = "";
    // click event for div to give user selected color
    removeNote.addEventListener('click', (e) => 
    {
        newDiv.remove();
        removeNote.remove();
    }) 
    
}







