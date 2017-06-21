'use strict';

//CAROUSEL
  $(document).ready(function(){
  $('.owl-carousel').owlCarousel({
      loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
          0: {
            items: 1,
            nav: true
          },
          600: {
            items: 3,
            nav: false
          },
          1000: {
            items: 5,
            nav: true,
            loop: false,
            margin: 20
          }
        }
})

});


const root = $("#root");

const state = {
  screen:null,
  selectScreen:null
}

const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(Header());
  root.append(wrapper);    


const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(Header());
  console.log(Header());
  
  root.append(wrapper);
  render(root);
}

/*$( _ => {
  getUser((err,data)=> {
    if(err) console.log(err);
    const root = $("#root");
    render(root);
  });
})*/


