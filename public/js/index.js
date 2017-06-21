'use strict';

const root = $("#root");
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


