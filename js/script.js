const tabButton = document.querySelectorAll('[data-tab]');
const contentBoxes = document.querySelectorAll('[ data-tab-content]');

tabButton.forEach(function (item) {
	item.addEventListener('click', function () {
		const contentBox = document.querySelector('#' + this.dataset.tab)
		contentBoxes.forEach(function (item) {
			item.classList.add('hidden')

		})
		contentBox.classList.remove('hidden');

	})

})



const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,

	// If we need pagination


	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	// And if we need scrollbar

});


const iconMenu = document.querySelector('.menu__icon')
if (iconMenu) {
	const menuBody = document.querySelector('.menu__body')
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('lock');
		iconMenu.classList.toggle('active');
		menuBody.classList.toggle('active');
	})
}