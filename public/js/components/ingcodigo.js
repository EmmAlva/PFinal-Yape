'use strict';
const IngCodigo = () =>{
	const section = $('<section class="register"></section>');
	const img = $('<img class="logo" src="img/icons/message.png">');
	const h2 = $('<h2 class="title2">Ahora ingresa tu codigo</h2>');
	const p = $('<p>ENviamos un SMS con el código de validación al númer <span class="codigo"></span></p>');
	const div =$('<div class="ingreso"></div>');
	const input = $('<input type="number" maxlength="4" pattern="[0-9]">');
	const icon = $('<img class= "icons lock" src="img/icons/lock.png">');
	const span = $('<span>Reintentar en <img class= "lock" src="img/icons/clock.png"> 21s</span>');
	
	section.append(img);
	section.append(h2);
	section.append(p);
	div.append(icon);
	div.append(input);
	section.append(div);
	section.append(span);

	if($('input').length, (e) =>{
		e.preventDefault();
		state.selectScreen = 2;//= no me sirve :/
		$('section').replaceWith(creaUser());
	});




	return section;
}