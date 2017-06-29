
$(document).ready(function () {
	$("#irarticulo1").click(function () {
		var posicion = $("#articulo1").offset().top
		posicion = posicion - 60;
		$("html,body").animate({
			scrollTop: posicion
			/* stuff to do after animation is complete */
		},800);
		/*%("algo").animate({
			//que quiero que haga
		}, speed,tiempoenmiliseg y quehagodespués)*/

	})
})