const canvas = document.getElementById("jscanvas");
const ctx = canvas.getContext("2d");
ctx.strokeStlye = "#2c2c2c";
ctx.lineWidth = 2.5;


let painting = false;

function stopPainting(){
    painting = false;
}
function startPainting(){
    painting = true;
    }
function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    if (!painting) {
        ctx.beginPath(); 
        // 경로생성
        ctx.moveTo(x, y);
        // 선 시작 좌표
    } 
    // 경로를 만든다
    else {
        ctx.lineTo(x, y);
        // 선 끝 좌표
        ctx.stroke();
        // 선 그리기
    }
    // 그린다
}
if(canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}