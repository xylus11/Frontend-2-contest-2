const canvas = document.getElementById("canvas");

canvas.width = window.innerWidth ;
canvas.height = window.innerHeight ;


const c = canvas.getContext("2d");

let drawingColor = "black";
let previousPosition = null ;

function onMouseDown(e) {
    previousPosition = [ e.clientX , e.clientY];
    c.strokeStyle = drawingColor;
    c.lineWidth = 2; 
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseup", onMouseUp); 
}

function onMouseMove(e){  
    let currentPosition = [ e.clientX , e.clientY ];
    c.beginPath();
    c.moveTo(...previousPosition);
    c.lineTo(...currentPosition);
    c.stroke();
    c.closePath();
    previousPosition = currentPosition ;
}

function onMouseUp(e){ 
    canvas.removeEventListener("mousemove", onMouseMove);
}
function erase(event) {
    var canvas = document.getElementById("canvas");
    var c = canvas.getContext("2d");
    c.globalCompositeOperation = "destination-out";
    c.clearRect(event.clientX, event.clientY, 20, 20);
  }
//   function onMouseDown(event) {
//     let {clientX , clientY} = event; 
//     // {clientX, clientY} is position where use makes the mousedown.
//     c.beginPath(); 
//     c.moveTo(clientX, clientY);// stats the line at this position
//     c.lineWidth = 4 ;
//     c.strokeStyle = "blue"; 
// }

// function onMouseUp(event){
//     let {clientX, clientY} = event ;
//     // {clientX, clientY} is the position where user makes the mouseup.
//     // console.log(clientX, clientY);
//     c.lineTo(clientX, clientY);
//     c.stroke();
//     c.closePath();
// }
// canvas.addEventListener("mousedown", onMouseDown); 
// canvas.addEventListener("mouseup", onMouseUp);