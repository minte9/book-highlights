/**
 * Get random highlight and update GUI 
 */
 jQuery(function() {

	/**
	 * Get current highlight by id (if set in GET params)
	 */
	const url = new URL(window.location.href);
	const paramId = url.searchParams.get("id");
	const paramCatg = url.searchParams.get("catg");

	curr = {
		seenHighlights: [],
		authorHighlightsLeft: 0,
		book: null,
		author: null,
		paramId: paramId,
		catg: paramCatg ? paramCatg : 'programming',
	};

	colors = { 
		orange: '#ffb366', 
		green: 'green', 
		gray: '#888' 
	};

	if (curr.catg) {
		DATA.authors = DATA.authors.filter(x => x.catg.includes(curr.catg));
		let bookIds = DATA.authors.map(x => { return x.bookId } );

		DATA.books = DATA.books.filter(x => bookIds.includes(x.id));
		DATA.authors = DATA.authors.filter(x => bookIds.includes(x.bookId));
	}
	
	enableTooltips();

	/**
	 * Keep history (default on) will be saved in cookie.
	 * Highlights id will be saved in cookie (based on keep_history flag)
	 * Bootstrap switch used to save/remove ids from cookie.
	 */
	keep_history = Cookies.get('keep_history') === undefined ? 'on' : Cookies.get('keep_history');
	$('#flexSwitchCheckChecked').prop('checked', keep_history == 'on');
	Cookies.set('keep_history', keep_history, {expires: 30});

	$('#flexSwitchCheckChecked').on('change', function (event) {
		if (event.target.checked == false) {
			keep_history = 'off';
			Cookies.remove('ids');
			cookieIds = [];
		} else {
			keep_history = 'on';	
		}
		update_gui();
		Cookies.set('keep_history', keep_history, {expires: 30});
	});

	cookieIds = [];
	if (keep_history == 'on' && Cookies.get('ids') !== undefined) {
		cookieIds = JSON.parse(Cookies.get('ids'));
	}
	
	/**
	 * Populate book/author dropdown.
	 * Totals filtered by cookie ids.
	 */
	DATA.books.forEach((book, i) => {
		DATA.authors.filter(x => x.title == book.title).forEach((author, j) => {
			let highlights = DATA.highlights
				.filter(x => x.name == book.title)[0].children
				.filter(x => x.name == author.name)[0].children
				.filter(x => ! cookieIds.includes(x.id));
			let totals = highlights.length;

			if (j == 0) {
				$("#dropdown-menu-bh").append('<li class="dropdown-divider"></li>');
			}
			$("#dropdown-menu-bh").append(`
				<li>
					<a class="dropdown-item" 
						onClick="change_author('${book.title}', '${author.name}');">
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
	});	
	$("#dropdown-menu-bh").append('<li class="dropdown-divider"></li>');

	/**
	 * Update gui (by paramId or random)
	 * User 
	 */
	if (curr.paramId) {
		update_gui(get_id(curr.paramId));
	} else {
		update_gui(get_rand(true));
	}

	$('.text-bh, .next-bh').click(function() {
		update_gui(get_rand());
	});
});

/**
 * Get random highlight (seeded)
 */
function get_rand() {

	/**
	 * Seed random (by today date)
	 */
	let data = {};
	const date = new Date();
	const today = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDay();
	let myrng = new Math.seedrandom(today);
	let rand = myrng.quick();

	/**
	 * Get current book from random seed.
	 * Skipped if already set (user click on next button).
	 */
	if (curr.book == null) {
		curr.book = DATA.books[Math.floor(rand * DATA.books.length)];
		DATA.authors = DATA.authors.filter(x => x.bookId == curr.book.id);
	}

	data = DATA.highlights.filter(x => x.name == curr.book.title);
	data = data[0].children;
	
	/**
	 * Get current author from current book (with random seed).
	 * Skipped if already set (user clicked on next button).
	 */
	if (curr.author == null) {
		let rand_author = Math.floor(rand * DATA.authors.length);
		curr.author = DATA.authors.filter(x => x.name == DATA.authors[rand_author].name)[0];
	}

	data = data.filter(x => x.name == curr.author.name)[0];
	data = data.children;

	/**
	 * Filter highlights by cookie Ids
	 * If no ids left choose one random for current book / author
	 */
	data = data.filter(x => ! cookieIds.includes(x.id));

	if (data.length == 0 ) {
		data = DATA.highlights
			.filter(x => x.name == curr.book.title)[0].children
			.filter(x => x.name == curr.author.name)[0].children;
		index = Math.floor(Math.random() * data.length);
		return get_id(data[index].id);
	}

	// let highlight_index = Math.floor(rand * data.length);
	let highlight = data[0]; // no random - get in order

	DATA.highlights.forEach((v) => {
		v.children.forEach((vv) => {
			vv.children.forEach(vvv => {
				if (vvv.name ==  highlight.name) {
					curr.seenHighlights.push(vvv.id);
					curr.authorHighlightsLeft = data.length - 1;
					book_highlights = data.length;
				}
			});
		});
	});

	return { 
		"book": curr.book, 
		"author": curr.author, 
		"highlight": highlight, 
		"book_highlights": book_highlights 
	};
}

/**
 * Get highlight by param id
 */
function get_id(id) {

	DATA.highlights.forEach((v) => {
		v.children.forEach((vv) => {
			vv.children.forEach(vvv => {
				if (vvv.id ==  id) {
					data = vv.children.filter(x => ! cookieIds.includes(x.id));
					curr.seenHighlights.push(id);
					curr.authorHighlightsLeft = data.length > 0 ? data.length - 1 : data.length;
					curr.book = DATA.books.filter(x => x.title == v.name)[0];
					curr.author = DATA.authors.filter(x => x.name == vv.name)[0];
					highlight = vvv;
					book_highlights = v.children.length;
				}
			});
		});
	});

	return { 
		"book": curr.book, 
		"author": curr.author, 
		"highlight": highlight, 
		"book_highlights": book_highlights 
	};
}

/**
 * Update gui when user click on next button
 * When cookie switch is used, highlights in not updated (obj = null)
 */
function update_gui(obj=null) {

	if (obj) {
		$('.text-bh').html(obj.highlight.text);
		$('.author-bh').text(obj.author.name + " / ");
		$('.more-bh').text(curr.authorHighlightsLeft);
		$('.book-bh').text(obj.book.title);
		
		$('.bi-file-earmark-check').attr('data-bs-original-title', 'No. ' + obj.highlight.id + '<br>' + obj.highlight.name);
		$('.bi-person-circle').attr('data-bs-original-title', obj.author.name + ' /<br>' + obj.author.tags);
		$('.bi-person-circle').parent().attr('href', obj.author.wiki);
		$('.bi-book').attr('data-bs-original-title', obj.book.title + ' /<br>' + obj.book.subtitle);
		$('.bi-book').parent().attr('href', obj.book.link);
		$('.bi-github').attr('data-bs-original-title', 'Github');
		$('.bi-github').parent().attr('href', 'https://github.com/minte9/book-highlights');
		$('#file_highlight').parent().attr('href', '?catg=' + curr.catg + '&id=' + obj.highlight.id);
		
		if(! cookieIds.includes(obj.highlight.id)) {
			cookieIds.push(obj.highlight.id);
		}

		if (keep_history === 'on') {
			Cookies.set('ids', JSON.stringify(cookieIds), {expires: 30});
		}
	}

	/**
	 * Update totals and check icons colors
	 * If keep_history is off icons are gray
	 * When there are no more highlights to display ...
	 * the author's icon became green
	 */
	DATA.books.forEach((book, i) => {
		DATA.authors.filter(x => x.title == book.title).forEach((author, j) => {

			let highlights = DATA.highlights
				.filter(x => x.name == book.title)[0].children
				.filter(x => x.name == author.name)[0].children;
			let totals = highlights.length;
			highlights = highlights.filter(x => ! cookieIds.includes(x.id));
			let highlightsLeft = highlights.length;

			if (keep_history === 'on') {
				$('#totals_' + i + '_'+ j).text(highlightsLeft > 0 ? highlightsLeft : totals);
				$('#check_' + i + '_'+ j).css('color', highlightsLeft > 0 ? colors.orange : colors.green);
				$('#check_fill_' + i + '_'+ j).css('color', highlightsLeft > 0 ? colors.orange  : colors.green);
				
				if ($('#curr-author').text().includes(author.name) 
						&& $('.book-bh').text().includes(book.title)) {
							$('#check-curr-author').css('color', 
								highlightsLeft > 0 ? colors.orange  : colors.green
							);
				}
			}

			if (keep_history == 'off') {
				$('#check_' + i + '_'+ j).css('color', colors.gray);
				$('#check_fill_' + i + '_'+ j).css('color', colors.gray);
				$('#check-curr-author').css('color', colors.gray);
			}
		});
	});
}

/**
 * Dropdown action author change
 */
function change_author(b, a) {

	curr.book = DATA.books.filter(x => x.title == b)[0];	
	curr.author = DATA.authors.filter(x => x.name == a)[0];
	update_gui(get_rand());
}

/**
 * Enable bootstrap tooltips everywhere
 */
function enableTooltips() {

	let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
	let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
		return new bootstrap.Tooltip(tooltipTriggerEl)
	});
}
