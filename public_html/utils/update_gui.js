/**
 * Get random highlight and ...
 * update GUI 
 */
jQuery(function() {

	obj = get_rand();
	update_gui();

	$('#bh-m9').on('click', function() {
		obj = get_rand(false);
		update_gui();
	});
});

function get_rand(seed=true) {

	let rand = Math.random();
	let book = books[Math.floor(rand * books.length)];

	if (seed) { // seeded book - one per day, first page
		const date = new Date();
		const today = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDay();
		let myrng = new Math.seedrandom(today);
		rand = myrng.quick();
		book = books[Math.floor(rand * books.length)];
	}

	let data = highlights.filter(x => x.name == book.title);
	data = data[0].children;

	const rand_a = Math.floor(Math.random() * data.length);
	let author = authors.filter(x => x.name == data[rand_a].name)[0];

	data = data[rand_a].children;
	let highlight = data[Math.floor(rand * data.length)];

	// console.log(book.title);
	// console.log(author.name);
	// console.log(highlight.text);
	// console.log("");

	return { "book": book, "author": author, "highlight": highlight, "book_highlights": data.length };
}

function update_gui() {

	let number = obj.highlight.name.split('_')[0];
	let title = obj.highlight.name.split('.txt')[0];
	title = title.replace(/_/g, ' ');
	title = title.replace(/\d/g, '').trim();
	title = title.charAt(0).toUpperCase() + title.slice(1);

	$('#bh-m9-text').html(obj.highlight.text);
	$('#bh-m9-wiki').attr({'href': obj.author.wiki, 'title': obj.author.tags});
	$('#bh-m9-author').text(obj.author.name);
	$('#bh-m9-title').text(number + " from " + obj.book_highlights + " ... " + title);
	$('#bh-m9-reference').attr({'href': obj.book.link, title: obj.book.subtitle});
	$('#bh-m9-book').text(' / ' + obj.book.title);
}