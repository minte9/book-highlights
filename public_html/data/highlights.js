let books = 
[
    {
        "title":    "Coders at work",
        "subtitle": "Reflections on the Craft of Programming",
        "link":     "https://www.amazon.com/gp/product/B00ACC2536"
    },
    {
        "title":    "Passionate Programmer",
        "subtitle": "Creating a Remarkable Career in Software Development",
        "link":     "https://www.amazon.com/gp/product/B00AYQNR5U"
    }
]
;

let authors = 
[
    {
        "name": "Jamie Zawinski",
        "tags": "Netscape Navigator, Mozzila",
        "wiki": "https://en.wikipedia.org/wiki/Jamie_Zawinski"
    },
    {
        "name": "Brad Fitzpatrick",
        "tags": "LiveJournal, Memcached, Google",
        "wiki": "https://en.wikipedia.org/wiki/Brad_Fitzpatrick"
    },
    {
        "name": "Douglas Crockford",
        "tags": "JavaScript, Json, Yahoo",
        "wiki": "https://en.wikipedia.org/wiki/Douglas_Crockford"
    },
    {
        "name": "Chad Fowler",
        "tags": "My Job Went to India",
        "wiki": "https://www.linkedin.com/in/fowlerchad"
    }
]
;

let highlights = 
[
    {
        "name": "Coders at work",
        "children": [
            {
                "name": "Brad Fitzpatrick",
                "children": [
                    {
                        "name": "01_maintainer_for_life.txt",
                        "text": "I've also done a lot of testing since LiveJournal.\n<i>Once I started working with other people\nespecially. And once I realized that code I write\nnever fucking goes away and I'm going to be a\nmaintainer for life.</i> I get comments about blog\nposts that are almost 10 years old. \u201cHey. I found\nthis code. I found a bug,\u201d and I'm suddenly\nmaintaining code."
                    },
                    {
                        "name": "02_tests_to_guard.txt",
                        "text": "to tell them that they messed up. <i>I had to force\na lot of people to write tests, mostly people who\nwere working for me. I would write tests to guard\nagainst my own code breaking, and then once they\nwrote code. I was like, \u201cAre you even sure that\nworks? Write a test. Prove it to me.\u201d</i> At a certain\npoint, people realize, \u201cHoly crap, it does pay off,\u201d\nespecially maintenance costs later."
                    },
                    {
                        "name": "03_about_memcached.txt",
                        "text": "memcached until like right after college, right\nwhen I moved out. <i>I remember coming up with\nthe idea. I was in my shower one day. The site\nwas melting down and I was showering and then\nI realized we had all this free memory all over the\nplace.</i> I whipped up a prototype that night, wrote\nthe server in Perl and the client in Perl, and the"
                    },
                    {
                        "name": "04_win_a_race.txt",
                        "text": "mediocrity required not to get fired. It\u2019s about\nbeing awesome. It\u2019s about winning. <i>You don\u2019t win a\nrace by trying not to lose. And you don\u2019t win at life\nby trying not to suck</i>. Fortunately, the content of\nthe book has never been about trying not to suck</i>. I\ncan\u2019t think that way, and neither should you."
                    },
                    {
                        "name": "04_write_something_complex.txt",
                        "text": "Fitzpatrick: Oh, yeah. I definitely try to find an\nexcuse to use anything, to learn it. <i>Because you\nnever learn something until you have to write\nsomething in it, until you have to live and breathe\nit.</i> It's one thing to go learn a language for fun, but\nuntil you write some big, complex system in it, you\ndon't really learn it."
                    },
                    {
                        "name": "05_formal_education.txt",
                        "text": "terminology. Prior to that. I knew programming\npretty well but I didn't have the vocabulary to\ndescribe what it was I was doing. Or <i>I would make\nup my own terminology for it and people would\nthink I didn't know what I was talking about.</i>\nFormal C.S. education helped me be able to talk\nabout it."
                    },
                    {
                        "name": "06_hard_parts_first.txt",
                        "text": "Fitzpatrick: Sometimes. But I've started with the\nhard bits or the parts I was unsure of, and tried\nto implement those parts first. <i>I try not to put\noff anything hard or surprising to the end; I enjoy\ndoing the hard things first.</i> The projects that I\nnever finish\u2014my friends give me shit that it's a\nwhole bunch\u2014it's because I did the hard part and"
                    },
                    {
                        "name": "07_reading_code.txt",
                        "text": "Then I really enjoyed reading code, because\nwhenever I didn't understand some pattern. I was\nlike, <i>\u201cWait, why the fuck did they do it like this?\u201d\nand I would look around more, and I'd be like,\n\u201cWow, that is a really clever way to do this. I see\nhow that pays off.\u201d</i> I would've done that earlier but\nIwas afraid to do it because I was thinking that if it\n\u2018wasn't my code. I wouldn't understand it."
                    },
                    {
                        "name": "08_strict_style_guide.txt",
                        "text": "having worked at Google with really strict style\nguidelines in all languages. <i>On our top six or seven\nlanguages, there's a really strict style guide that\nsays</i>, \u201cThis is how we lay out our code. This is how\nwe name variables. This is how we do spacing and\nindentation, and these patterns and conventions\nyou use, and this is how you declare a static field.\u201d"
                    },
                    {
                        "name": "09_fear_driven_advice.txt",
                        "text": "Your parents would rather you be OK than have a\nremarkable career at the cost of great personal risk.\n<i>More than any other third party you might look\nto, your parents are going to give you fear-driven\nadvice. Fear-driven advice is geared toward not\nlosing.</i> Thinking about not losing is not the way to\nwin! Winners take risks. They think about where\nthey want to go\u2014not where the rest of the pack is."
                    },
                    {
                        "name": "09_night_coding.txt",
                        "text": "time. During the day, there's always something\ncoming up, like another meal is coming up, or a\nclass, or maybe you get a phone call. There's always\nsome interruption. I can't relax. <i>If I go into work\ntwo hours before some meeting, that two hours is\nless productive than if I didn't have that meeting\nthat day or if the meeting was the first thing in the\nmorning.</i> Knowing that I have nothing coming up\nto bug me. I'm so much more relaxed."
                    },
                    {
                        "name": "10_google_deadlines.txt",
                        "text": "like, \u201cYay! A deadline!\u201d and I get so excited that\nthe adrenaline kicks in, and I work, and I finish\nthe damn thing. <i>Nothing with Google is really a\ndeadline. With Google it's like, \u201cWhat do you think\nabout launching this? How does that feel?\u201d</i> It's rare\nthat there's some real deadline. Most of them, we\nthink it'd be nice to"
                    },
                    {
                        "name": "11_people_complacency.txt",
                        "text": "all be self-driven like me. <i>That was a learning\nexperience in HR, that some people just do what\nthey're told and don't really have a passion\nfor excellence</i>. They're just like, \u201cDone. Next\nassignment,\u201d Or they don't tell you and just browse\nthe Web. So I had a couple of painful experiences.\nBut I think after a year or two of that. I learned that\npeople are different."
                    },
                    {
                        "name": "12_purist_programmers.txt",
                        "text": "Some are purists. <i>They would just do abstraction\non abstraction on abstractions. <i>They would go\nreally slowly and are very religious about their\nstyle. They're like, \u201cI'm an artisan programmer.\u201d</i>\nAnd I was like, \u201cYour code doesn't run. It's not\nefficient and it doesn't look like any of the other\ncode that you're interacting with.\u201d"
                    },
                    {
                        "name": "13_people_motivations.txt",
                        "text": "Other people I eventually figured out what\nmotivated them. One guy was really good at\ntinkering and getting a prototype working. He\nwrote sysadmin Perl. <i>He could wire stuff together,\nwrite shell scripts, and write really bad Perl and\nreally bad C, but kind of get it working.</i> Then we\nwould be like, \u201cHoly crap, you researched all this\nstuff, you got all these components talking to each\nother?\u201d"
                    },
                    {
                        "name": "14_side_projects.txt",
                        "text": "Fitzpatrick: I often look for people that have done,\nlike, a lot of stuff on their own that wasn't asked\nof them. <i>Not just their school project or just what\ntheir previous employer had them do. Somebody\nwho was passionate about something and had\nsome side project.</i> How did they maintain it and\nhow serious did they get with it? Or do they doa lot\nof quick hacks and abandon them?"
                    },
                    {
                        "name": "15_real_understanding.txt",
                        "text": "someone could teach you something and you're\nlike, <i>\u201cYeah, yeah, sure. I understand.\u201d You delude\nyourself but once you actually have to get down\nand do it at a real level and understand all the\ncorner cases, it forces you to actually learn the\nthing.</i> But I don't know if that would work for\neveryone."
                    },
                    {
                        "name": "16_smaller_parts.txt",
                        "text": "But a lot of times lately, if there's something weird\ngoing on. I'm like, <i>\u201cOK, that function is too big;\nlet's break that up into smaller parts and unit-test\neach one of them separately to figure out where my\nassumptions are wrong</i>, rather than just sticking\nin random printIns.\u201d"
                    },
                    {
                        "name": "17_about_optimization.txt",
                        "text": "Fitzpatrick: <i>Optimization is fun because it's not\nnecessary. If you're doing that, you've got your\nthing working and nothing else is more important</i>\nand you're either saving money or doing it\nbecause it's like a Perl golf contest\u2014how short"
                    },
                    {
                        "name": "18_logic_and_statistics.txt",
                        "text": "Fitzpatrick: You don't need that much math. <i>For\nmost programmers, day to day, statistics is a lot\nmore important.</i> If you're doing graphics stuff,\nmath is a lot more important but most people\ndoing Java enterprise stuff or web stuff, it's not.\nLogic helps and statistics comes up a lot."
                    },
                    {
                        "name": "19_social_kid.txt",
                        "text": "a general life thing, right? <i>There was some study\nabout who was successful after high school. Was it\nthe smart kids or the social kids?</i> It turned out that\nit was the social kids who ended up making all the\nmoney in life, not the people with the good grades.\nI thought that was interesting."
                    },
                    {
                        "name": "20_bridge_engineer.txt",
                        "text": "I have a friend who's a structural engineer\nand he went to school forever and took all\nthis engineering certification stuff. <i>It's kind of\ncomforting to know that the people who build the\nbridges I'm on studied this shit forever</i> and took\ntons of tests and stayed up all the time studying."
                    },
                    {
                        "name": "21_competing.txt",
                        "text": "stop and work on fun things on my own. <i>I don't\nfeel like I'm competing with anyone right now\nand I don't really care if other people are better\nbecause I feel like there are tons of people who are\nbetter already.</i> I figure we are always in the middle\nanyway, so I'm happy to stay in the middle."
                    }
                ]
            },
            {
                "name": "Douglas Crockford",
                "children": [
                    {
                        "name": "01_language_changes.txt",
                        "text": "have the potential costs of disruption which, as\nyou become bigger, become unacceptable. <i>When\nyou're really successful, you need to be extremely\ncautious in any changes that you make.</i> Whereas\nif you haven't made it yet, you have a lot more\nfreedom in changing it around."
                    },
                    {
                        "name": "02_ajax_accident.txt",
                        "text": "got frozen in 1999 and then should have gone\ninto neglect and died. <i>But instead, by accident,\nAjax happened and suddenly it's the world's most\nimportant programming language.</i>"
                    },
                    {
                        "name": "03_js_worst_feature.txt",
                        "text": "The worst feature of JavaScript, without question,\nis its dependence on a global object. <i>It doesn't have\nlinkers, it doesn't have any kind of information\nhiding between compilation units.</i> It all gets\ndumped together into a common global object. So"
                    },
                    {
                        "name": "05_easy_hack.txt",
                        "text": "anywhere. <i>So it's really easy for an evildoer to take\nsome script and put it in a URL, put it in a piece of\nstyle and put that in some HTML</i> and put that in\nanother script, and so on."
                    },
                    {
                        "name": "06_mashups.txt",
                        "text": "take something from Yahoo! and something from\nGoogle and something of yours and something of\nsomeone else's and put them all together and make\nan application, and it's great. And it all happens\non the browser, right in front of your eyes. <i>Except\nthat each of those components has access to the\nsame stuff. So now we are intentionally creating\nXSS exploits.</i> And the browser's security model did\nnot anticipate any of this goodness and does not"
                    },
                    {
                        "name": "07_ES4_efforts.txt",
                        "text": "It's solving the problem that people hate\nJavaScript. <i>And I can appreciate Brendan Eich's\nposition there because he did some brilliant work\nbut he rushed it and he was mismanaged and so\nbad stuff got out.</i> And he's been cursed and vilified\nfor the last dozen years about how stupid he is and"
                    }
                ]
            },
            {
                "name": "Jamie Zawinski",
                "children": [
                    {
                        "name": "01_cross_platform_releases.txt",
                        "text": "welll port it later.\u201d Which is what many other\nfailed companies have done. If you're trying to\nship a cross-platform product, history really shows\nthat's how you don't do it. <i>If you want it to\nreally be cross-platform, you have to do them\nsimultaneously.</i> The porting thing results in a\ncrappy product on the second platform."
                    },
                    {
                        "name": "02_multithreading_in_java.txt",
                        "text": "where it was writing some big file. <i>We took really\ngood advantage of multithreading in Java, which\nwas less painful than I had expected it to be. It was\njust really pleasant to work on.</i> From the API we\nhad designed we saw all these directions it could\ngrow."
                    },
                    {
                        "name": "03_academic_approach.txt",
                        "text": "only display plain text. <i>They were being extremely\nacademic about their project. <i>They were trying to\napproach it from the DOM/DTD side of things. \u201cOh,\nwell, what we need to dois add another abstraction\nlayer here and have a delegate for this delegate for\nthis delegate.</i> And eventually a character will show\nup on the screen.\u201d"
                    },
                    {
                        "name": "04_ship_the_product.txt",
                        "text": "Zawinski: Yeah. At the end of the day, ship the\nfucking thing! <i>It's great to rewrite your code and\nmake it cleaner and by the third time it'll actually\nbe pretty. But that's not the point</i>\u2014you're not here\nto write code; you're here to ship products."
                    },
                    {
                        "name": "05_competitor_crap_code.txt",
                        "text": "Your competitor's six-month 1.0 has crap code and\n<i>they're going to have to rewrite it in two years but</i>,\nguess what: they can rewrite it because you don't\nhave ajob anymore."
                    },
                    {
                        "name": "06_inherit_code_rewrite.txt",
                        "text": "you have to cut your losses. And this always feels\nwrong to me, <i>but when you inherit code from\nsomeone else, sometimes it's faster to write your\nown than to reuse theirs.</i> Because it's going to take\nacertain amount of time to understand their code\nand learn how to use it and understand it well"
                    },
                    {
                        "name": "07_one_file_version.txt",
                        "text": "<i>When I'm just writing the first version of the\nprogram. I tend to put everything in one file.\nAnd then I start seeing structure in that file.</i>\nLike there's this block of things that are pretty\nsimilar. That's a thousand lines now, so why don't\nI move that into another file. And the API sort of\nbuilds up organically that way. The design process"
                    },
                    {
                        "name": "08_quick_use.txt",
                        "text": "I think one of the most important things, for\nme anyway, <i>when building something from the\nground up like that is, as quickly as possible,\ngetting the program to a state that you, the\nprogrammer, can use it. Even a little bit.</i> Because\nthat tells you where to go next in a really visceral\nway. Once the thing's on the screen and you've got\nthe one button hooked up that does one thing, now"
                    },
                    {
                        "name": "09_error_messages.txt",
                        "text": "<i>A lot of programmers have the instinct of, \u201cYou've\ngot to present the error message!\u201d No you don't.\nNo one cares about that.</i> That sort of stuff is\na lot easier to manage in languages like Java\nthat actually have an exception system. Where,\nat the top loop of your idle state, you just catch\neverything and you're done. No need to bother the\nuser with telling them that some value was zero."
                    },
                    {
                        "name": "10_more_comments.txt",
                        "text": "<i>I always wish people would comment more,\nthough the thing that makes me cringe is when the\ncomment is the name of the function rephrased.</i>\nFunction's called push_stack and the comment\nsays, \u201cThis pushes to the stack.\u201d Thank you."
                    },
                    {
                        "name": "11_long_variable_names.txt",
                        "text": "<i>Long variable names. I'm not a fan of Hungarian\nnotation, but I think using actual English words\nto describe things, except for loop iterators</i>, where\nit's obvious. Just as much verbosity as possible. I\nguess."
                    },
                    {
                        "name": "12_ability_to_argue.txt",
                        "text": "fine. <i>Certainly with the folks I've worked with,\nability to argue their point was important because\nwe all ended up being a pretty argumentative\nbunch</i>. With that environment, that helped a lot.\nThat certainly doesn't have anything to do with\nprogramming ability. That's just interpersonal-\ndynamics stuff."
                    },
                    {
                        "name": "13_ignorance_fear.txt",
                        "text": "asking questions. I think one thing that's really\nimportant is to not be afraid of your ignorance. <i>If\nyou don't understand how something works, ask\nsomeone who does. A lot of people are skittish\nabout that. And that doesn't help anybody.</i> Not\nknowing something doesn't mean you're dumb\u2014it\njust means you don't know it yet."
                    },
                    {
                        "name": "14_design_patterns_book.txt",
                        "text": "Then there was <i>another book that everybody\nthought was the greatest thing ever in that same\nperiod\u2014Design Patterns\u2014which I just thought was\ncrap.</i> It was just like, programming via cut and\npaste. Rather than thinking through your task\nyou looked through the recipe book and found\nsomething that maybe, kinda, sorta felt like it, and\nthen just aped it. That's not programming; that's"
                    },
                    {
                        "name": "15_books_terminology.txt",
                        "text": "love it. <i>Then in meetings they'd be tossing around\nall this terminology they got out of that book.</i>\nLike, the inverse, reverse, double-back-flip pattern\n\u2014whatever. Oh, you mean a loop? OK."
                    },
                    {
                        "name": "16_under_the_hood.txt",
                        "text": "Zawinski: Well, curiosity\u2014taking things apart.\nWanting to know what's going on under the hood.\n<i>I think that's really the basis of it. Without that I\ndon't think you get very far. That's your primary\nway of acquiring knowledge.</i> Taking something\napart and looking at it is how you learn to build\nyour own. At least for me. I've read very few books"
                    }
                ]
            }
        ]
    },
    {
        "name": "Passionate Programmer",
        "children": [
            {
                "name": "Chad Fowler",
                "children": [
                    {
                        "name": "01_low_expectations.txt",
                        "text": "our careers. Most of us are content to go with the\nflow. <i>Our expectations have been lowered for us\nby the media and by our friends, acquaintances,\nand family members</i>. So, leading a remarkable life\nis something you have to discover as even being a\nreasonable goal. It\u2019s not obvious."
                    },
                    {
                        "name": "02_loving_your_work.txt",
                        "text": "<i>If your life is primarily consumed by your work,\nthen loving your work is one of the most\nimportant keys to loving your life.</i> Challenging,\nmotivating, rewarding work is more likely to make\nyou want to get up in the morning than dull,\naverage tasks. Doing your job well means that the\nactivity you do for 50 percent of your available\ntime is something you're good at. Conversely, if you"
                    },
                    {
                        "name": "03_higher_salary.txt",
                        "text": "take to achieve that goal. A higher salary might\nactually be desirable and lead toward happiness.</i>\n<i>But if you take your eyes off the primary goal,\nyou can find yourself driving toward a higher\nsalary at the expense of your happiness.</i> It sounds\nridiculous, but I\u2019ve done it. And so have you. Think\nabout it."
                    },
                    {
                        "name": "04_business_purpose.txt",
                        "text": "is a business. <i>As software developers, we are\nbusinesspeople. Our companies don\u2019t employ us\nbecause they love us.</i> They never have, and they\nnever will. That\u2019s not the job of a business.\nBusinesses don\u2019t exist so we can have a place to go\nevery day. The purpose of a business is to make"
                    },
                    {
                        "name": "05_old_systems.txt",
                        "text": "systems are replaced in stages. <i>In those stages,\nthe old systems have to talk to the new systems.\nSomeone has to know how to make the new speak\nto the old, and vice versa.</i> Typically, the young\ntykes don\u2019t know (or want to know) how to make\nthe old systems listen. Nor do the crusty old"
                    },
                    {
                        "name": "06_business_language.txt",
                        "text": "<i>You might be \u201cjust a programmer,\u201d but being able\nto speak to your business clients in the language\nof their business domain is a critical skill.</i> Imagine\nhow much easier life would be if everyone you\nhad to work with really understood how software\ndevelopment works. You wouldn't have to explain"
                    },
                    {
                        "name": "07_candidate_pool.txt",
                        "text": "<i>The addition of Smalltalk to the requirements list\nyielded a candidate pool that was tiny in contrast\nto our previous list.</i> These people were diamonds\nin the rough. They really understood object-\noriented programming. They were aware that Java"
                    },
                    {
                        "name": "08_take_opportunity.txt",
                        "text": "It drives me crazy to ask people whether\nthey've seen or used certain not-quite-mainstream\ntechnologies only to hear, <i>\u201cI haven't been given the\nopportunity to work on that\u201d in return. Given the\nopportunity? Neither was I!</i> I took the opportunity\nto learn."
                    },
                    {
                        "name": "09_unix_guy.txt",
                        "text": "<i>Another artificial (and inexcusable) line gets\ndrawn around platforms or operating systems.</i>\nBeing a UNIX Guy who refuses to do Windows\nis increasingly more impractical. The same goes"
                    },
                    {
                        "name": "10_developer_environment.txt",
                        "text": "deploy their applications. <i>It\u2019s rare, and refreshing,\nto find a developer who truly understands\nthe platform on which he or she is working.</i>\nApplications are better and work gets done faster\nas aresult."
                    },
                    {
                        "name": "11_rate_himself.txt",
                        "text": "I was looking for really good Java programmers. To\nstart the interview. I asked this person (and all the\nothers I had interviewed that week) to rate himself\nona scale of one to ten. He said nine. I\u2019m expecting\na star here. <i>If this guy rates himself so high, why\ncan\u2019t he think of a single abusive programming\ntrick that would cause a JVM to crash?</i>"
                    },
                    {
                        "name": "12_specializing_in_something.txt",
                        "text": "<i>Too many of us seem to believe that specializing\nin something simply means you don\u2019t know about\nother things.</i> I could, for example, call my mother\na Windows specialist, because she has never used.\nLinux or OS X. Or. I could say that my relatives out\nin the countryside in Arkansas are country music\nspecialists, because they\u2019ve never heard anything\nelse."
                    },
                    {
                        "name": "13_changing_computer_industry.txt",
                        "text": "This is the kind of specialist who will survive\nin the changing computer industry. If you're\na .NET specialist, it\u2019s not just an excuse for not\nknowing anything except .NET. <i>It means that if\nit has to do with .NET, you are the authority. IIS\nservers hanging and needing to be rebooted? \u201cNo\nproblem.\u201d Source control integration with Visual\nStudio .NET? \u201cI\u2019ll show you how.\u201d</i> Customers\nthreatening to pull the plug because of obscure"
                    },
                    {
                        "name": "14_impostor_syndrome.txt",
                        "text": "<i>When I showed up on the job. I was paranoid\nI would be discovered as the charlatan I really\nwas. What is this saxophone player doing here with\nus trained professionals?</i> After all. I was working\nwith people who had advanced computer science\ndegrees. And, here I was with only part of a music\ndegree trying to fit in as if I knew something."
                    },
                    {
                        "name": "15_master_degree_notes.txt",
                        "text": "Within a few days of work, the truth started to\nsink in. <i>These people don\u2019t know what the hell they\u2019ve\ndoing! In fact, some people were watching me work\nand taking notes!</i> People with master\u2019s degrees in\ncomputer science!"
                    }
                ]
            }
        ]
    }
];

