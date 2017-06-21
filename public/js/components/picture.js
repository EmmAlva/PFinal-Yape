'use strict';

const Header = () => {
	const header = $('<header class = "pictures"></header>');
	const row = $('<div class="row"></div>');
	const colum = $('<div class= "large-12 columns"></div>');
	const owlCarousel = $('<div class="owl-carousel owl-theme"></div>');
	const items = $('<div class="item"></div>');
	const img = $('<img class="slider" src="img/icons/icon-people.png" alt="imagen1">');
	const h3 = $('<h2>Paga a tu amigos</h2>');
	const p = $('<p>Paga a quien quieras desde donde quieras, sin usar efectivo.</p>');

	const items1 = $('<div class="item"></div>');
	const img1 = $('<img class="slider" src="img/icons/group-people.png" alt="imagen2">');
	const h31 = $('<h2>Gratis y Seguro</h2>');
	const p1 = $('<p>La transferencia es inmediata y gratuita de una cuenta a otra.</p>');
	
	const items2 = $('<div class="item"></div>');
	const img2 = $('<img class="slider" src="img/icons/happy-person.png" alt="imagen3">');
	const h32 = $('<h2>Sin número de cuenta</h2>');
	const p2 = $('<p>Elige a quién pagar desde tu lista de contactos</p>');
	

	const btn = $('<button class="btn" >REGISTRAME</button>');

	header.append(row);
	row.append(colum);
	colum.append(owlCarousel);
	owlCarousel.append(items);
	owlCarousel.append(items1);
	owlCarousel.append(items2);

	items.append(img);
	items.append(h3);
	items.append(p);

	items1.append(img1);
	items1.append(h31);
	items1.append(p1);

	items2.append(img2);
	items2.append(h32);
	items2.append(p2);

	header.append(btn);

	btn.on('click', (e) =>{
		e.preventDefault();
	    state.selectedScreen = null;
	    update();

	})

	return header;

}