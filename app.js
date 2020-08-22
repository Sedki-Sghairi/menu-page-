const menu = [
	{
		id: 1,
		title: 'buttermilk pancakes',
		category: 'breakfast',
		price: 15.99,
		img: './images/item-1.jpeg',
		desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `
	},
	{
		id: 2,
		title: 'avocado sunshine',
		category: 'lunch',
		price: 13.99,
		img: './images/item-2.jpeg',
		desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `
	},
	{
		id: 3,
		title: 'godzilla milkshake',
		category: 'shakes',
		price: 6.99,
		img: './images/item-3.jpeg',
		desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`
	},
	{
		id: 21,
		title: 'strawberry paradise',
		category: 'shakes',
		price: 5.99,
		img: './images/item-17.jpeg',
		desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`
	},
	{
		id: 4,
		title: 'country delight',
		category: 'breakfast',
		price: 20.99,
		img: './images/item-4.jpeg',
		desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `
	},
	{
		id: 5,
		title: '500g rib eye steak',
		category: 'lunch',
		price: 22.99,
		img: './images/item-5.jpeg',
		desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `
	},
	{
		id: 16,
		title: '500g rib eye steak',
		category: 'dinner',
		price: 22.99,
		img: './images/item-5.jpeg',
		desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `
	},
	{
		id: 6,
		title: 'oreo dream',
		category: 'shakes',
		price: 18.99,
		img: './images/item-6.jpeg',
		desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`
	},
	{
		id: 15,
		title: 'signature soup',
		category: 'lunch',
		price: 10.99,
		img: './images/item-15.jpeg',
		desc: 'Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday'
	},
	{
		id: 17,
		title: 'signature soup',
		category: 'dinner',
		price: 10.99,
		img: './images/item-15.jpeg',
		desc: 'Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday'
	},
	{
		id: 7,
		title: 'bacon overflow',
		category: 'breakfast',
		price: 8.99,
		img: './images/item-7.jpeg',
		desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `
	},
	{
		id: 8,
		title: 'salmon fillet',
		category: 'dinner',
		price: 12.99,
		img: './images/item-8.jpeg',
		desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `
	},
	{
		id: 18,
		title: 'salmon fillet',
		category: 'lunch',
		price: 12.99,
		img: './images/item-8.jpeg',
		desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `
	},
	{
		id: 9,
		title: 'quarantine buddy',
		category: 'shakes',
		price: 16.99,
		img: './images/item-9.jpeg',
		desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`
	},
	{
		id: 10,
		title: 'cappuccino',
		category: 'breakfast',
		price: 2,
		img: './images/item-13.jpeg',
		desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`
	},
	{
		id: 11,
		title: 'espresso',
		category: 'breakfast',
		price: 1.5,
		img: './images/item-14.jpeg',
		desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`
	},
	{
		id: 20,
		title: 'breakfast tea',
		category: 'breakfast',
		price: 2.5,
		img: './images/item-16.jpeg',
		desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`
	},
	{
		id: 12,
		title: 'club sandwich',
		category: 'dinner',
		price: 11.5,
		img: './images/item-12.jpeg',
		desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`
	},
	{
		id: 13,
		title: 'our signature salad',
		category: 'dinner',
		price: 9.5,
		img: './images/item-11.jpeg',
		desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`
	},
	{
		id: 19,
		title: 'our signature salad',
		category: 'lunch',
		price: 9.5,
		img: './images/item-11.jpeg',
		desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`
	},
	{
		id: 14,
		title: '200g steak',
		category: 'lunch',
		price: 9.5,
		img: './images/item-10.jpeg',
		desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`
	},
	{
		id: 19,
		title: '200g steak',
		category: 'dinner',
		price: 9.5,
		img: './images/item-10.jpeg',
		desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`
	}
];

const sectionCenter = document.getElementById('section-center');
const btnContainer = document.getElementById('btn-container');

window.addEventListener('DOMContentLoaded', function() {
	makeBtns(menu);
	showMenu(makeUniqueTitles(menu));
	const btns = document.querySelectorAll('.filter-btn');
	btns.forEach((btn) => {
		btn.addEventListener('click', function() {
			let iMenu = [];
			for (let i = 0; i < menu.length; i++) {
				if (btn.getAttribute('data-id') === menu[i].category) {
					iMenu.push(menu[i]);
				}
			}
			iMenu.length == 0 ? showMenu(makeUniqueTitles(menu)) : showMenu(iMenu);
		});
	});
});
function makeBtns(menue) {
	let categories = menue.reduce(
		function(acc, item) {
			if (!acc.includes(item.category)) {
				acc.push(item.category);
			}
			return acc;
		},
		[ 'all' ]
	);
	const x = categories
		.map(function(item) {
			return `<button type="button" class="filter-btn" data-id="${item}">${item}</button>`;
		})
		.join('');
	btnContainer.innerHTML = x;
}

function showMenu(menuItems) {
	let displayMenu = menuItems.map(function(item) {
		return `<article class="menu-item">
			<img src=${item.img} alt=${item.title} class="photo" />
			<div class="item-info">
			<header>
			<h4>${item.title}</h4>
			<h4 class="price">$${item.price}</h4>
			</header>
			<p class="item-text">
			${item.desc}
			</p>
			</div>
			</article>`;
	});
	displayMenu = displayMenu.join('');
	sectionCenter.innerHTML = displayMenu;
}
function makeUniqueTitles(x) {
	let myMenu = [ ...x ];
	for (let i = 0; i < myMenu.length; i++) {
		for (let j = i + 1; j < myMenu.length; j++) {
			if (myMenu[i].title === myMenu[j].title) myMenu.splice(j, 1);
		}
	}
	return myMenu;
}

const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
	let btn = question.querySelector('.question-btn');
	btn.addEventListener('click', function() {
		questions.forEach((element) => {
			if (element !== question) {
				element.classList.remove('show-text');
			}
		});
		question.classList.toggle('show-text');
	});
});
