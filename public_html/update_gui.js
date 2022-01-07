/**
 * Get random highlight and update GUI 
 */
 jQuery(function() {

	curr = {
		seenHighlights: [],
		authorHighlightsLeft: 0,
		book: null,
		author: null,
	}
	
	$("#dropdown-menu-bh").append('<li class="dropdown-divider"></li>');
	DATA.books.forEach(book => {
		DATA.authors.filter(x => x.title == book.title).forEach((author) => {
			let totals = DATA.highlights
				.filter(x => x.name == book.title)[0].children
				.filter(x => x.name == author.name)[0].children.length;
			$("#dropdown-menu-bh").append(`
				<li>
					<a class="dropdown-item" 
						onClick="change_author('${book.title}', '${author.name}');" title='${author.tags}'>
							<i class="bi bi-check-circle-fill"></i>
							${author.name} 
							<span class='dropdown-book'>${book.title}
								<span class='dropdown-author-totals'>${totals}</span> 
							</span> 
					</a>
				</li>
			`);
		});	
		$("#dropdown-menu-bh").append('<li class="dropdown-divider"></li>');
	});	
	
	enableTooltips();
	update_gui(get_rand(true));

	$('.text-bh, .next-bh').click(function() {
		update_gui(get_rand());
	});
});

function get_rand(seed=false) {

	let data = {};
	const date = new Date();
	const today = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDay();
	let myrng = new Math.seedrandom(today);
	let rand = myrng.quick();

	if (curr.book == null) {
		curr.book = DATA.books[Math.floor(rand * DATA.books.length)];
	}

	data = DATA.highlights.filter(x => x.name == curr.book.title);
	data = data[0].children;
	
	if (curr.author == null) {
		let rand_author = Math.floor(rand * data.length);
		curr.author = DATA.authors.filter(x => x.name == data[rand_author].name)[0];
	}

	data = data.filter(x => x.name == curr.author.name)[0];
	data = data.children;

	data = data.filter(x => ! curr.seenHighlights.includes(x.id));

	if (data.length == 0 ) { // no more left
		return; 
	} 

	let highlight_index = Math.floor(rand * data.length)
	let highlight = data[highlight_index];

	DATA.highlights.forEach(v => {
		v.children.forEach(vv => {
			vv.children.forEach(vvv => {
				if (vvv.name ==  highlight.name) {
					curr.seenHighlights.push(vvv.id);
					curr.authorHighlightsLeft = data.length - 1;
				}
			});
		});
	});

	return { "book": curr.book, "author": curr.author, "highlight": highlight, "book_highlights": data.length };
}

function update_gui(obj) {

	$('.text-bh').html(obj.highlight.text);
	$('.author-bh').text(obj.author.name + " / ");
	$('.more-bh').text(curr.authorHighlightsLeft);
	$('.book-bh').text(obj.book.title);

	$('.bi-file-earmark-check').attr('data-bs-original-title', obj.highlight.name + '<br>' + 'No. ' + obj.highlight.id);
	$('.bi-person-circle').attr('data-bs-original-title', obj.author.name);
	$('.bi-person-circle').parent().attr('href', obj.author.wiki);
	$('.bi-book').attr('data-bs-original-title', obj.book.title);
	$('.bi-book').parent().attr('href', obj.book.link);
	$('.bi-github').attr('data-bs-original-title', 'Github');
	$('.bi-github').parent().attr('href', 'https://github.com/minte9/book-highlights');
}

function change_author(b, a) {

	curr.book = DATA.books.filter(x => x.title == b)[0];	
	curr.author = DATA.authors.filter(x => x.name == a)[0];
	update_gui(get_rand());
}

function enableTooltips() { // Enable tooltips everywhere

	let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
	let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
		return new bootstrap.Tooltip(tooltipTriggerEl)
	});
}
