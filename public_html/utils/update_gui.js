/**
 * Get random highlight and update GUI 
 */
 jQuery(function() {

	seenHighlights = [];
	authorHighlightsLeft = 0;
	book = null;
	author = null;
	tooltipTriggerList = null;
	tooltipList = null;
	
	books.forEach(book => {
		authors.filter(x => x.title == book.title).forEach(author => {
			$("#dropdown-menu-bh").append(`
				<li><a class="dropdown-item" 
						onClick="change_author('${book.title}', '${author.name}');">
					${author.name}<font color='#aaa'>, ${author.tags}</font>
				</a></li>
			`);
		});			
	});	
	
	enableTooltips();

	obj = get_rand();
	update_gui();

	$('.text-bh, .next-bh').click(function() {
		obj = get_rand(false);
		update_gui();
	});
});

function get_rand(seed=true) {

	const date = new Date();
	const today = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDay();
	let myrng = new Math.seedrandom(today);
	rand = myrng.quick();

	let data = [];

	if (book == null) {
		book = books[Math.floor(rand * books.length)];
	}

	data = highlights.filter(x => x.name == book.title);
	data = data[0].children;
	
	if (author == null) {
		let rand_author = Math.floor(rand * data.length);
		author = authors.filter(x => x.name == data[rand_author].name)[0];
	}

	data = data.filter(x => x.name == author.name)[0];
	data = data.children;

	data = data.filter(x => ! seenHighlights.includes(x.name));

	if (data.length == 0 ) { // no more left
		return; 
	} 

	let highlight_index = Math.floor(rand * data.length)
	let highlight = data[highlight_index];

	highlights.forEach(v => {
		v.children.forEach(vv => {
			vv.children.forEach(vvv => {
				if (vvv.name ==  highlight.name) {
					seenHighlights.push(vvv.name);
					authorHighlightsLeft = data.length - 1;
				}
			});
		});
	});

	return { "book": book, "author": author, "highlight": highlight, "book_highlights": data.length };
}

function update_gui() {

	let number = obj.highlight.name.split('_')[0];
	let title = obj.highlight.name.split('.txt')[0];

	title = title.replace(/_/g, ' ');
	title = title.replace(/\d/g, '').trim();
	title = title.charAt(0).toUpperCase() + title.slice(1);

	$('.text-bh').html(obj.highlight.text);
	$('.author-bh').text(obj.author.name);
	$('.title-bh').text(title + " ... ");
	$('.more-bh').text(authorHighlightsLeft);
	$('.book-bh').text(" / " + obj.book.title);

	$('.title-bh').attr('data-bs-original-title', 'No. ' + number);
	$('.bi-person-circle').attr('data-bs-original-title', obj.author.name);
	$('.bi-person-circle').parent().attr('href', obj.author.wiki);
	$('.bi-book').attr('data-bs-original-title', obj.book.title);
	$('.bi-book').parent().attr('href', obj.book.link);
	$('.bi-github').attr('data-bs-original-title', 'Github');
	$('.bi-github').parent().attr('href', 'https://github.com/minte9/book-highlights');
}

function change_author(b, a) {

	book = books.filter(x => x.title == b)[0];	
	author = authors.filter(x => x.name == a)[0];
	obj = get_rand(false);
	update_gui();
}

function enableTooltips() { // Enable tooltips everywhere

	var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
	var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
		return new bootstrap.Tooltip(tooltipTriggerEl)
	});
}
