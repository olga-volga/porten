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


	// Modal Login / Sign up

	const loginBtn = document.querySelector('[data-login]'),
		  modal = document.querySelector('.modal'),
		  close = document.querySelector('[data-close]');

	function showModal() {
		modal.style.display = 'block';
		document.body.style.overflow = 'hidden';
		hideTabContant();
		showTabContent();
	}

	function closeModal() {
		modal.style.display = 'none';
		document.body.style.overflow = '';
	}

	loginBtn.addEventListener('click', (e) => {
		e.preventDefault();
		showModal();
	});

	close.addEventListener('click', closeModal);
	modal.addEventListener('click', (e) => {
		if (e.target === modal) {
			closeModal();
		}
	});

	// Modal Login / Sign up Tabs

	const headersParent = document.querySelector('.modal__headers'),
		  headers = headersParent.querySelectorAll('.modal__title'),
		  tabsContent = document.querySelectorAll('.form-content'),
		  signupBtn = document.querySelector('[data-signup]');

	function hideTabContant() {
		tabsContent.forEach(item => {
			item.style.display = 'none';
		});
		headers.forEach(item => {
			item.classList.remove('modal__title--active');
		});

	}

	function showTabContent(i=0) {
		tabsContent[i].style.display = 'block';
		headers[i].classList.add('modal__title--active');
	}

	headersParent.addEventListener('click', (e) => {

		if (e.target && e.target.classList.contains('modal__title')) {
			headers.forEach((item, index) => {
				if (e.target === item) {
					hideTabContant();
					showTabContent(index);
				}
			});
		}
	});

	signupBtn.addEventListener('click', () => {
		hideTabContant();
		showTabContent(1);
	});


	// Modal Email

	const emailBtn = document.querySelector('.submit__btn'),
		  modalEmail = document.querySelector('.modal-email'),
		  closeEmail = document.querySelector('.modal-email__close');

	function showModalEmail() {
		modalEmail.style.display = 'block';
		document.body.style.overflow = 'hidden';
	}

	function closeModalEmail() {
		modalEmail.style.display = 'none';
		document.body.style.overflow = '';
	}

	emailBtn.addEventListener('click', showModalEmail);
	closeEmail.addEventListener('click', closeModalEmail);

	modalEmail.addEventListener('click', (e) => {
		if (e.target === modalEmail) {
			closeModalEmail();
		}
	});

});