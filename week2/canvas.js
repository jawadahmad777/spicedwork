var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext("2d");
c.strokeStyle = "#777";
c.lineWidth = "7";
c.beginPath();
c.arc(475, 275, 50, 0, 2 * Math.PI);
c.stroke();

c.beginPath();
c.moveTo(475, 325);
c.lineTo(475, 475);
c.stroke();

c.beginPath();
c.moveTo(475, 380);
c.lineTo(370, 330);
c.stroke();

c.beginPath();
c.moveTo(475, 380);
c.lineTo(570, 335);
c.stroke();

c.beginPath();
c.moveTo(475, 475);
c.lineTo(385, 550);
c.stroke();

c.beginPath();
c.moveTo(475, 475);
c.lineTo(550, 550);
c.stroke();
