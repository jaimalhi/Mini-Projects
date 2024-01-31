const btn = document.querySelector('.button');
const allBtns = document.querySelectorAll('.button');

//* Event Listener
btn.addEventListener('click', () => {
    console.log('clicked');
    document.body.style.backgroundColor = 'red'; //this changes UI directly
});

//* Module bundler
//when you end up presenting a site you may have a lot of components that need to be put together
//for this we can use module bundler's such as 'veet'

//we can use dynamic imports to only import files when needed such as
const lazyBundle = await import('./lazy.js');