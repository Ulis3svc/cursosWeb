//Vamos a comenzar!
var color=$(".selected").css("background-color");
var $canvas = $("canvas");
var context =$canvas[0].getContext("2d");
var lastEvent;
var mouseDown=false;

$(".controls").on("click","li",function(){
	$(this).siblings().removeClass("selected");
	$(this).addClass("selected");
	color=$(this).css("background-color");
});
//Cuando "Nuevo Color" sea presionado
$('#revelarColor').click(function() {
	// body...
	changeColor();
	$('#colorSelect').toggle();
});
//Actualizar color
function changeColor(){
	var r = $('#red').val();
	var g = $('#green').val();
	var b = $('#blue').val();

	$("#newColor").css("background-color","rgb("+r+","+g+","+b+")");
}

$("input[type=range]").change(changeColor);
//Cuando "Agregar color" sea presionado
$('#addColor').click(function(){
	//Agregar el color a los controles ya asignados
	var $newColor=$("<li></li>");
	$newColor.css("background-color", $("#newColor").css("background-color"));
	$(".controls ul").append($newColor);

	$newColor.click();

});
//Cuando demos click en el área de Canvas

$canvas.mousedown(function(e){
	lastEvent = e
	mouseDown = true;
}).mousemove(function(e) {
	/* Para dibujar líneas */
	if (mouseDown)  //True
		{
			context.beginPath(); //comienza la ruta
			context.moveTo(lastEvent.offsetX,lastEvent.offsetY);
			context.lineTo(e.offsetX, e.offsetY);
			context.strokeStyle=color;
			context.stroke();
			lastEvent=e;
		};

}).mouseup(function() {
	/* Act on the event */
	mouseDown=false;
}).mouseleave(function() {
	/* Act on the event */
	$canvas.mouseup();
});