'use strict';

const CreaUser = () =>{
	const section = $('<section class="register"></section>');
	const img = $('<img class="logo" src="img/icons/lockone.png">');
	const h2 = $('<h2 class="title2">Crea tu usuario Yape</h2>');
	const p = $('<p>Ingresa un nombre, email y clave de usuario<span class="codigo"></span></p>');
	const div =$('<div class="form"></div>');
	const input = $('<input type="text" placeholder ="Nombre">');
	const icon = $('<img class= "icons lock" src="img/icons/user.png">');

	const div2 =$('<div class="form"></div>');
	const input2 = $('<input type="email" placeholder="correo@ejemplo.com">');
	const icon2 = $('<img class= "icons lock" src="img/icons/message-gray.png">');

	const div3 =$('<div class="form"></div>');
	const input3 = $('<input type="password" maxlength="6" pattern="[0-9]" placeholder="Ingresa clave de 6 dígitos">');
	const icon3 = $('<img class= "icons lock" src="img/icons/lock.png">');

	const span = $('<span>Cuida esta clave como oro, es tu acceso a Yape</span>');
	
	section.append(img);
	section.append(h2);
	section.append(p);
	div.append(icon);
	div.append(input);
	div2.append(icon2);
	div2.append(input2);
	div3.append(icon3);
	div3.append(input3);
	section.append(div);
	section.append(div2);
	section.append(div3);
	section.append(span);

	return section;

}