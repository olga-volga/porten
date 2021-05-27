"use strict";

window.addEventListener('DOMContentLoaded', () => {

	// Header Mobile Menu

	const body = document.querySelector('body'),
		  menu = body.querySelector('.header__menu'),
		  burgerBtn = body.querySelector('.header__burger');

	function openMenu() {
		burgerBtn.classList.toggle('active');
		menu.classList.toggle('active');
		body.classList.toggle('lock');
	}

	function closeMenu() {
		burgerBtn.classList.remove('active');
		menu.classList.remove('active');
		body.classList.remove('lock');
	}

	burgerBtn.addEventListener('click', openMenu);
	menu.addEventListener('click', closeMenu);

});