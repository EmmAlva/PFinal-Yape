'use strict';
const IngCodigo = () =>{
	const section = $('<section class="register"></section>');
	const img = $('<img class="logo" src="img/icons/message.png">');
	const h2 = $('<h2 class="title2">Para comenzar validemos tu número</h2>');
	const p = $('<p>Revibirás un SMS con un código de validación</p>');
	const div =$('<div class="ingreso"></div>');
	const input = $('<input type="number" maxlength="9" pattern="[0-9]">');
	const icon = $('<img class= "icons" src="img/icons/phoneandnumber.png">');
	const check = $('<input type="checkbox">');
	const span = $('<span>Acepto los <span style="color:blue">Términos y condiciones</span></span>');
	
	section.append(img);

	return section;
}