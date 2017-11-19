/*drag start function, used to set 
image of basketball to thing 
being dragged*/
function dragStart(event) {
    event.dataTransfer.setData("../images/image.jpg", event.target.id);
}

/*sets text when div 1 is being dragged to div2 */
function dragging(event) {
    document.getElementById("text").innerHTML = "Shooting!!!";
}

/*sets text when div 2 is being dragged to div1 */
function dragging2(event) {
    document.getElementById("text").innerHTML = "Returning ball to player..";
}

/*allows divs to be dropped*/
function allowDrop(event) {
    event.preventDefault();
}

/*function drop tells what happens when div 2 
is dropped in div 1*/
/* appends local var data to target*/
/*sets text to Shoot Again when div 2 is dragged back to div 1*/
function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("../images/image.jpg");
    event.target.appendChild(document.getElementById(data));
    document.getElementById("text").innerHTML = "Shoot Again!!";
}


/*function drop2 tells what happens when div 1 
is dropped in div 2*/
/* appends local var data to target*/
/*sets text to Shoot Again when div 2 is dragged to div 2*/
function drop2(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("../images/image.jpg");
    event.target.appendChild(document.getElementById(data));
    document.getElementById("text").innerHTML = "You made the basket!!";
}