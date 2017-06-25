'use strict';

const ValNumber = (screen) =>{
	const section = $('<section class="register"></section>');
	const img = $('<img class="logo" src="img/icons/phone.png">');
	const h2 = $('<h2 class="title2">Para comenzar validemos tu número</h2>');
	const p = $('<p>Recibirás un SMS con un código de validación</p>');
	const div =$('<div class="ingreso"></div>');
	const input = $('<input class="phone" type="number" maxlength="9" pattern="[0-9]{9}">');
	const icon = $('<img class= "icons " src="img/icons/phoneandnumber.png">');
	const check = $('<input class="checkit" type="checkbox">');
	const span = $('<span>Acepto los <span style="color:blue">Términos y condiciones</span></span>');
	
	const btn = $('<button id="continuar" class="btn next" >CONTINUAR</button>');

	section.append(img);
	section.append(h2);
	section.append(p);
	div.append(icon);
	div.append(input);
	section.append(div);
	section.append(check);
	section.append(span);
	section.append(btn);

	check.change((event)=> {
		event.preventDefault();
		if($('input.checkit').prop('checked') && ($('.phone').val().length == 9)){
		$('#continuar').prop('disabled',false).css("background","orange");
		}
		
	});

	btn.on('click', (e) =>{
		e.preventDefault();
		state.selectScreen = 2;//= no me sirve :/
		$.post('/api/registerNumber',{
		phone: $('.phone').val(),
		terms: true
       
		},
		(response) => { 
			console.log(response.data.code);
			
		});

		$('section').replaceWith(IngCodigo($('.phone').val()));

	});
	
	

	return section;
}

