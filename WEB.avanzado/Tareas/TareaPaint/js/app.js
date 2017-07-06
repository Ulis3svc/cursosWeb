//Vamos a comenzar!
var color=$(".selected").css("background-color");
var $canvas = $("canvas");
var context =$canvas[0].getContext("2d");
var lastEvent;
var mouseDown=false;
var borrar=false;
var paint = true;
var accion=false;

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
//Cuando el boton Borrar es presionado
$('#borrar').click(function() {
	borrar=true;
	paint = false;
	$("canvas").css("cursor","url(img/eraser.png), crosshair");
	accion = true;
});
$('#pencil').click(function() {
	paint=true;
	borrar=false;
	$("canvas").css("cursor","url(img/pencil2.png), crosshair");
	accion=true;
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
	lastEvent = e;
	mouseDown = true;
}).mousemove(function(e) {
	/* Para dibujar líneas */

	if (mouseDown && borrar==false && paint)  //True
		{
			context.beginPath(); //comienza la ruta
			context.moveTo(lastEvent.offsetX,lastEvent.offsetY);
			context.lineTo(e.offsetX, e.offsetY);
			context.globalCompositeOperation = "source-over"; /*Se agrega esta opción para
												regresar de la goma a colorear*/

			context.strokeStyle=color;
			context.lineWidth=3;

			context.stroke();
			lastEvent=e;
		}else if (mouseDown && borrar && paint==false) {//Para borrar

			context.beginPath(); //comienza la ruta
			context.moveTo(lastEvent.offsetX,lastEvent.offsetY);
			context.lineTo(e.offsetX, e.offsetY);
			context.lineWidth=25;
			context.globalCompositeOperation = "destination-out"; /*Se utiliza este atributo para
														sustituir el coloreado */
			//context.strokeStyle=color;
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

