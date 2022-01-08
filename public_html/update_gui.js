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

	//Cookies.remove('keep_history');

	keep_history = Cookies.get('keep_history') === undefined ? 1 : Cookies.get('keep_history');
	//console.log(keep_history);
	$('#flexSwitchCheckChecked').prop('checked', keep_history == 1);
	
	$('#flexSwitchCheckChecked').on('change', function (event) {
		if (event.target.checked == false) {
			keep_history = 0;
			Cookies.remove('ids');
			cookieIds = [];
		} else {
			keep_history = 1;	
		}
		update_gui();
		Cookies.set('keep_history', keep_history, {expires: 30});
	});

	cookieIds = [];
	if (keep_history && Cookies.get('ids') !== undefined) {
		cookieIds = JSON.parse(Cookies.get('ids'));
	}
	
	$("#dropdown-menu-bh").append('<li class="dropdown-divider"></li>');
	DATA.books.forEach((book, i) => {
		DATA.authors.filter(x => x.title == book.title).forEach((author, j) => {

			let highlights = DATA.highlights
				.filter(x => x.name == book.title)[0].children
				.filter(x => x.name == author.name)[0].children
				.filter(x => ! cookieIds.includes(x.id));
			let totals = highlights.length - 1;

			$("#dropdown-menu-bh").append(`
				<li>
					<a class="dropdown-item" 
						onClick="change_author('${book.title}', '${author.name}');" title='${author.tags}'>
							<i class="bi bi-check-circle-fill" id='check_fill_${i}_${j}'></i>
							${author.name} 
							<span class='dropdown-check' id='check_${i}_${j}'>
								<i class="bi bi-check"></i>
							</span>
							<span class='dropdown-author-totals' id='totals_${i}_${j}'>
								${totals} 
							</span> 
							<span class='dropdown-book'>${book.title}</span> 
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

	data = data.filter(x => ! cookieIds.includes(x.id));

	if (data.length == 0 ) { // no more left
		return; 
	} 

	let highlight_index = Math.floor(rand * data.length)
	let highlight = data[highlight_index];

	DATA.highlights.forEach((v, k) => {
		v.children.forEach((vv, kk) => {
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

function update_gui(obj=null) {

	if (obj) {
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

		if (obj.book_highlights > 1) { // don't add last to cookie
			if(! cookieIds.includes(obj.highlight.id)) {
				cookieIds.push(obj.highlight.id);
			}

			if (keep_history === 1) {
				Cookies.set('ids', JSON.stringify(cookieIds), {expires: 30});
			}
		}
	}

	//console.log(keep_history);
	//console.log(cookieIds);

	// update totals
	DATA.books.forEach((book, i) => {
		DATA.authors.filter(x => x.title == book.title).forEach((author, j) => {
			let highlights = DATA.highlights
				.filter(x => x.name == book.title)[0].children
				.filter(x => x.name == author.name)[0].children;
			let totals = highlights.length;
			highlights = highlights.filter(x => ! cookieIds.includes(x.id));
			let totals_cookie = highlights.length;
			$('#totals_' + i + '_'+ j).text(totals_cookie > 1 ? totals_cookie : totals);
			$('#check_' + i + '_'+ j).css('color', totals_cookie > 1 ? '#ffb366' : 'green');
			$('#check_fill_' + i + '_'+ j).css('color', totals_cookie > 1 ? '#ffb366' : 'green');
			if ($('#curr-author').text().includes(author.name)) {
				$('#check-curr-author').css('color', totals_cookie > 1 ? '#ffb366' : 'green');
			}
		});
	});
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
