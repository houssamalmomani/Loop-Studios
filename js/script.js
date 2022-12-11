const btn = document.getElementById('menu-btn');

const items = document.getElementById('menu');

btn.addEventListener('click', navToggle);

function navToggle() {
	btn.classList.toggle('open');
	items.classList.toggle('flex');
	items.classList.toggle('hidden');
}
