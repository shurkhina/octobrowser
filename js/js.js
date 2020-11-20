// Polyfill for IE11 missing NodeList.forEach 
if ('NodeList' in window && !NodeList.prototype.forEach) {
    console.info('polyfill for IE11');
    NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;
      for (var i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this);
    }
};
};

// menu
if(document.querySelector('.hamburger')){
	let btnMenu = document.querySelector('.hamburger'),
		menuMob = document.querySelector('.nav_mob'),
		overlyMenu = document.querySelector('.overly'),
		body = document.body;

	btnMenu.addEventListener('click', function(){
		if(btnMenu.classList.contains('is-active') === true){
		btnMenu.classList.remove('is-active');
		menuMob.classList.remove('nav_mob__open');
		body.classList.remove('body__scroll');
		overlyMenu.style.display = 'none';
		this.setAttribute('aria-expanded', false);
	} else {
		btnMenu.classList.add('is-active');
		menuMob.classList.add('nav_mob__open');
		body.classList.add('body__scroll');
		overlyMenu.style.display = 'block';
		this.setAttribute('aria-expanded', true);
	}
	})

	overlyMenu.addEventListener('click', function(){
		btnMenu.classList.remove('is-active');
		menuMob.classList.remove('nav_mob__open');
		body.classList.remove('body__scroll');
		overlyMenu.style.display = 'none';
	});
}

// click navigation
if(document.querySelector('.nav_mob')){
	let menuMob = document.querySelector('.nav_mob'),
		overlyMenu = document.querySelector('.overly'),
		btnMenu = document.querySelector('.hamburger'),
		body = document.body,
		navMoblis = document.querySelectorAll('.nav_mob li');

		navMoblis.forEach(function(el){
			el.addEventListener('click', function(){
				menuMob.classList.remove('nav_mob__open');
				body.classList.remove('body__scroll');
				overlyMenu.style.display = 'none';
				btnMenu.classList.remove('is-active');
			});
		});
}