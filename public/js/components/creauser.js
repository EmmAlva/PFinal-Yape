'use strict';

const creaUser = () =>{
	const section = $('<section class="register"></section>');
	const img = $('<img class="logo" src="img/icons/lockone.png">');
	const h2 = $('<h2 class="title2">Crea tu usuario Yape</h2>');
	const p = $('<p>Ingresa un nombre, email y clave de usuario<span class="codigo"></span></p>');
	const div =$('<div class="ingreso"></div>');
	const input = $('<input type="text">');
	const icon = $('<img class= "icons lock" src="img/icons/user.png">');


	const input2 = $('<input type="email">');
	const icon2 = $('<img class= "icons lock" src="img/icons/message-gray.png">');

	const input3 = $('<input type="password" maxlength="6" pattern="[0-9]">');
	const icon3 = $('<img class= "icons lock" src="img/icons/lock.png">');

	const span = $('<span>Cuida esta clave como oro,, es tu acceso a Yape</span>');
	
	section.append(img);
	section.append(h2);
	section.append(p);
	div.append(icon);
	div.append(input);
	div.append(icon2);
	div.append(input2);
	div.append(icon3);
	div.append(input3);
	section.append(div);
	section.append(span);

}