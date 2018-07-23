document.addEventListener("DOMContentLoaded", function(){
  const canvasEl = document.getElementById("mycanvas");
  canvasEl.width = 500;
  canvasEl.height = 500;

  const ctx = canvasEl.getContext("2d");

  ctx.fillStyle = "purple";
  ctx.fillRect(0, 0, 500, 500);

  ctx.beginPath();
  ctx.arc(250,250,200,0,2*Math.PI);
  ctx.lineWidth = 30;
  ctx.stroke();
  ctx.fillStyle = "green";
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(250, 250);
  ctx.lineTo(0, 100);
  ctx.lineTo(100, 100);
  ctx.lineWidth = 1;
  ctx.stroke();
  ctx.fillStyle = "pink";
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(250, 250);
  ctx.lineTo(0, 400);
  ctx.lineTo(100, 100);
  ctx.lineWidth = 1;
  ctx.stroke();
  ctx.fillStyle = "pink";
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(250, 250);
  ctx.lineTo(0, 100);
  ctx.lineTo(100, 100);
  ctx.lineWidth = 1;
  ctx.stroke();
  ctx.fillStyle = "pink";
  ctx.fill();

});
