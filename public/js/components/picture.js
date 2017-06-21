'use strict';

const Header = () => {
	const header = $('<header class = "pictures"></header>');
	const img = $('<img src="img/icons/icon-people.png" alt="imagen1">');
	const img1 = $('<img src="img/icons/group-people.png" alt="imagen2">');
	const img2 = $('<img src="img/icons/happy-person.png" alt="imagen3">');
	const h3 = $('<h3>Paga a tu amigos</h3>');
	const p = $('<p>Paga a quien quieras desde donde quieras, sin usar efectivo</p>');
	const btn = $('<button class="btn" >REGISTRAME</button>');


	header.append(img);
	header.append(h3);
	header.append(p);
	header.append(btn);

	return header;

}