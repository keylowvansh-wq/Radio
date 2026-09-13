var cvs = document.getElementById('vis');
var ctx = cvs.getContext('2d');
var fDisp = document.getElementById('freq-display');
var mBox = document.getElementById('msg-box');
var sig = document.getElementById('sig-bar');
var blk = document.getElementById('blocker');
var running = false;
var analyser = null;
var dataArray = null;
cvs.width = cvs.offsetWidth;
cvs.height = cvs.offsetHeight;
blk.addEventListener('click', function(){
blk.style.display = 'none';
running = true;
draw();
});

function draw(){
if(!running)
return;
requestAnimationFrame(draw);

ctx.fillStyle = 'rgba(10, 10, 10, 0.3)';
ctx.fillRect(0, 0, cvs.width, cvs.height);
ctx.lineWidth = 2;
ctx.strokeStyle = '#ffb000';
ctx.beginPath();
var x = 0;
var y = cvs.height / 2;
ctx.moveTo(x, y);
ctx.lineTo(cvs.width, y);
ctx.stroke();
}

window.addEventListener('resize', function(){
cvs.width = cvs.offsetWidth;
cvs.height = cvs.offsetHeight;
});