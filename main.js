

document.addEventListener("dragstart", function(event){
    event.dataTransfer.setData("Text", event.target.id)
    document.getElementById("message").innerHTML = "We are on the move";
    event.target.style.opacity = ".4"
})

document.addEventListener("drag", function(event){
    document.getElementById("message").style.color = "red";
})

document.addEventListener("dragend", function(event){
    document.getElementById("message").innerHTML = "Phew We are DONE!";
    event.target.style.opacity = "1";
})

document.addEventListener("dragenter", function(event){
    if(event.target.className == "box"){
        event.target.style.border = "3px dotted orangered";
    }
})

document.addEventListener("dragover", function(event) {
    event.preventDefault();
})

document.addEventListener("dragleave", function(event) {
    if(event.target.className == "box"){
        event.target.style.border = "";
    }
})

document.addEventListener("drop", function(event){
    event.preventDefault();
    if(event.target.className == "box"){
        document.getElementById("message").style.color = "";
        event.target.style.border = "";
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
    }
})