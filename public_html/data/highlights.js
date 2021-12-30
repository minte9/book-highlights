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
        "title": "Coders at work",
        "name": "Jamie Zawinski",
        "tags": "netscape, mozilla",
        "wiki": "https://en.wikipedia.org/wiki/Jamie_Zawinski"
    },
    {
        "title": "Coders at work",
        "name": "Brad Fitzpatrick",
        "tags": "live journal, memcached, google",
        "wiki": "https://en.wikipedia.org/wiki/Brad_Fitzpatrick"
    },
    {
        "title": "Coders at work",
        "name": "Douglas Crockford",
        "tags": "javaScript, json, yahoo",
        "wiki": "https://en.wikipedia.org/wiki/Douglas_Crockford"
    },
    {
        "title": "Passionate Programmer",
        "name": "Chad Fowler",
        "tags": "ruby and rails, jazz performer",
        "wiki": "https://www.slush.org/person/chad-fowler/"
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
                        "text": "Then I really enjoyed reading code, because\nwhenever I didn't understand some pattern. I was\nlike, <i>\u201cWait, why the fuck did they do it like this?\u201d\nand I would look around more, and I'd be like,\n\u201cWow, that is a really clever way to do this. I see\nhow that pays off.\u201d</i> I would've done that earlier but\nI was afraid to do it because I was thinking that if it\n\u2018wasn't my code. I wouldn't understand it."
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
                        "text": "Some are purists. They would just do abstraction\non abstraction on abstractions. They would go\nreally slowly and are very religious about their\nstyle. <i>They're like, \u201cI'm an artisan programmer.\u201d\nAnd I was like, \u201cYour code doesn't run. It's not\nefficient and it doesn't look like any of the other\ncode</i> that you're interacting with.\u201d"
                    },
                    {
                        "name": "13_people_motivations.txt",
                        "text": "Other people I eventually figured out what\nmotivated them. One guy was really good at\ntinkering and getting a prototype working. He\nwrote sysadmin Perl. <i>He could wire stuff together,\nwrite shell scripts, and write really bad Perl and\nreally bad C, but kind of get it working.</i> Then we\nwould be like, \u201cHoly crap, you researched all this\nstuff, you got all these components talking to each\nother?\u201d"
                    },
                    {
                        "name": "14_side_projects.txt",
                        "text": "Fitzpatrick: I often look for people that have done,\nlike, a lot of stuff on their own that wasn't asked\nof them. <i>Not just their school project or just what\ntheir previous employer had them do. Somebody\nwho was passionate about something and had\nsome side project.</i> How did they maintain it and\nhow serious did they get with it? Or do they do a lot\nof quick hacks and abandon them?"
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
                    },
                    {
                        "name": "08_ADsafe.txt",
                        "text": "What ADsafe does is it creates a safe subset\nof JavaScript. <i>So it disallows access to anything\nthat's global and anything that's dangerous. And\nit turns out there's still a useful language in that\nsubset.</i> Because all the lambda power is there. And\nlambdas can do a lot. So it's an unconventional"
                    },
                    {
                        "name": "09_GWT_abstraction.txt",
                        "text": "As far as GWT goes, and other transforming\nthings. I'm really pragmatic. <i>This environment is\nso hard to work in\u2014if you can find something that\nworks, then great.</i> I'm fearful of using it myself\nbecause I worry about the abstraction leakage. If"
                    },
                    {
                        "name": "10_GWT_js_ignorant.txt",
                        "text": "because I worry about the abstraction leakage. If\n<i>there's a problem in your Java code or in GWT or\nin what it produces on the other side, you may or\nmay not have a place to stand to deal with that.</i>\nParticularly if you took the approach that you can\nafford to be completely ignorant about JavaScript\nbecause the language is hidden from you. Then"
                    },
                    {
                        "name": "11_js_smaller.txt",
                        "text": "Crockford: I think the best way to make JavaScript\nbetter would be to make it smaller. <i>If we could\njust get it down to what it does really well and\nremove the features that add little or no value,\nit's actually a better language.</i> And I think we can"
                    },
                    {
                        "name": "12_ajax_libraries.txt",
                        "text": "Where we do have a problem is that <i>there are too\nmany Ajax libraries. That was a consequence of the\nfact that JavaScript is so powerful and the need\nis so profound and that they're easy to make.</i> So\nfor a while everybody was making them. I've been"
                    },
                    {
                        "name": "13_jquery_selector.txt",
                        "text": "One thing that we're seeing now is that the Ajax\nlibraries are converging. <i>jQuery came up with\na notation for using CSS selectors for getting a\nlist of objects from the DOM and then providing\nmethods for manipulating the objects en masse.</i>\nAnd that turns out to be a really good idea and\nit's something that JavaScript does very effectively."
                    },
                    {
                        "name": "14_code_reading.txt",
                        "text": "Crockford: One of the things I've been pushing is\ncode reading. <i>I think that is the most useful thing\nthat a community of programmers can do for\neach other\u2014spend time on a regular basis reading\neach other's code.</i> There's a tendency in project"
                    },
                    {
                        "name": "15_code_review.txt",
                        "text": "or, \u201cThis comment doesn't seem to describe the\ncode.\u201d <i>That kind of stuff can be so valuable\nbecause as a programmer you stop reading your\nown comments and you're not aware that you're\nmisdirecting the reader.</i> Having the people you\nwork with helping to keep your code clean is\na huge service\u2014you find defects that you never"
                    },
                    {
                        "name": "15_strong_reader.txt",
                        "text": "Ithink an hour of code reading is worth two weeks\nof QA. <i>It's just a really effective way of removing\nerrors. If you have someone who is strong reading,\nthen the novices around them are going to learn a\nlot</i> that they wouldn't be learning otherwise, and if"
                    },
                    {
                        "name": "16_code_reading_schedule.txt",
                        "text": "the end. Back in the old days, we would schedule\na code reading just as we were finishing a project\nand usually it would be canceled because we were\nlate. <i>I now believe that code reading should be\nhappening all the time throughout the life of the\nproject.</i> That's something that took me a while to"
                    },
                    {
                        "name": "17_almost_done.txt",
                        "text": "I've managed projects where we're up against a\ndeadline and we had people saying, <i>\u201cYeah. I'm\nalmost done,\u201d and then you get the code, and\nthere's nothing there, or it's crap, or whatever, and\nthey're nowhere close to done.</i> In management,\nthose are the experiences you hate the most and I\nthink code reading is the best way of not getting\ntrapped like that."
                    },
                    {
                        "name": "18_short_names.txt",
                        "text": "I'm going back through my old code and <i>I see the\nnames are too short, if I have time. I'll change\nthem.</i> Some things, like my loop counters, will\nprobably always be i. I don't think I'll ever fix\nthat, but there are a lot of others that are just\ninexcusable."
                    },
                    {
                        "name": "19_plus_plus.txt",
                        "text": "through be the default was wrong\u2014<i>they shouldn't\nhave done that. ++ has huge security problems\u2014it\nencourages you to be way too tricky, to try to do too\nmuch in one line.</i> In that compulsion to do it in one\nline, you make code which is hard to understand\nand which is likely to lead to things like buffer\noverrun errors. So most of the security problems"
                    },
                    {
                        "name": "20_continue.txt",
                        "text": "It makes certain kinds of complicated structures\neasier to write. But I found that I can always\nimprove the structure if I can find a way to factor\nit out. <i>So as part of my personal discipline. I don't\nuse continue ever.</i> If I see a continue in my"
                    },
                    {
                        "name": "21_good_code.txt",
                        "text": "it's really difficult to write good code in a sloppy\nmanner. <i>By good code. I mean it's going to be\nreadable. At one level, it doesn't matter what it\ndoes to a machine if I can't figure out what it does</i>,\nso it might turn out that the code is amazing in\nterms of its efficiency, or its compactness, or some\nother metric which I don't care about."
                    },
                    {
                        "name": "22_rewrite.txt",
                        "text": "time. Management finds out a lot later. <i>The team is\ngetting beat up pretty regularly, making too many\nbugs; the code's too big, it's too slow; we're falling\nbehind. They know why.</i> It's not because they\nbecame stupider or lazier. It's because the code\nbase is no longer serving the purpose that it needs"
                    },
                    {
                        "name": "23_second_system.txt",
                        "text": "The fallacy is that it's going to take that amount\nof time again, though there are counterexamples.\n<i>You've got the second-system problem where\npeople who've had some success are given a blank\nslate and allowed to do whatever they want.</i>\nGenerally, they will fail because they'll be too\nambitious, they won't understand the limits. And"
                    },
                    {
                        "name": "24_compatibility_problems.txt",
                        "text": "Those sort of specification errors are really, really\nhard. And we have them in the Ajax world. <i>Most\nof our problems in the Ajax world are due to the\ndifferences at the browser level. Doing the cross-\nbrowser stuff is much harder than it should be</i>\nbecause the Web is not specified well and because\nthe implementations are so variable."
                    },
                    {
                        "name": "25_all_in_your_head.txt",
                        "text": "that I couldn't program anymore because I just\ncouldn't keep enough stuff in my head. <i>A lot\nof programming is you keep stuff in your head\nuntil you can get it written down and structured\nproperly.</i> And I just couldn't do it."
                    },
                    {
                        "name": "27_flexibility.txt",
                        "text": "You can't anticipate everything that's going to\nbe done with it <i>but you try to build in enough\nflexibility that it's likely to adapt to whatever\nyou're going to do</i>. So that's what I'm thinking.\nHow do I not write myself into a corner too much?"
                    },
                    {
                        "name": "28_js_refactoring.txt",
                        "text": "That's one of the things that I discovered I really\nlike about JavaScript. <i>Refactoring in JavaScript, 1\nfind, is really easy.</i> Whereas refactoring a deep\nclass hierarchy can be really, really painful."
                    },
                    {
                        "name": "29_soft_objects.txt",
                        "text": "Crockford: I've become a really big fan of soft\nobjects. <i>In JavaScript, any object is whatever you\nsay it is. That's alarming to people who come at\nit from a classical perspective</i> because without a\nclass, then what have you got? It turns out you\njust have what you need, and that's really useful."
                    },
                    {
                        "name": "30_discipline.txt",
                        "text": "good to be scared because it is scary and it is\nreal. It requires discipline</i>. <i>In most of the classical\nlanguages, the language is the thing imposing the\ndiscipline</i>. In JavaScript you have to bring your\nown discipline</i>."
                    },
                    {
                        "name": "31_js_as_java.txt",
                        "text": "I understand why people are frustrated with the\nlanguage. <i>If you try to write in JavaScript as\nthough it is Java, it'll keep biting you. I did this.</i>\nOne of the first things I did in the language was\nto figure out how to simulate something that\nlooked sort of like a Java class, but at the edges it\ndidn't work anything like it. And I would always\neventually get pushed up against those edges and\nget hurt."
                    },
                    {
                        "name": "32_js_no_classes.txt",
                        "text": "Eventually I figured out <i>I just don't need these\nclasses at all and then the language started\nworking for me.</i> Instead of fighting it. I found I was\nbeing empowered by it."
                    },
                    {
                        "name": "33_js_tools.txt",
                        "text": "There is much less need of formal tools like you\nhave in other languages. <i>The browser just wants a\nsource file, and so you send it a source file, and the\ncompiler is built into the browser, so there's really\nnothing to do</i>. You don't have a linker. You don't\nhave a compiler. You don't have any of that stuff. It\njust all runs on the browser."
                    },
                    {
                        "name": "34_worst_bugs.txt",
                        "text": "In my experience, <i>the worst bugs are the real-\ntime bugs, which have to do with interactions\nwith multiple threads.</i> My approach to those bugs\nis to avoid making them. So I don't like threads.</i>"
                    },
                    {
                        "name": "35_browser_one_thread.txt",
                        "text": "One of the things I like about the browser model is\nthat we only get one thread. <i>Some people complain\nabout that\u2014if you lock up that thread, then the\nbrowser's locked up</i>. So you just don't do that.\nThere are constantly calls for putting threads into\nJavaScript and so far we've resisted that. I'm really\nglad we have."
                    },
                    {
                        "name": "36_google_gears.txt",
                        "text": "where it breaks down is if you have some process\nthat takes too long. <i>I really like the approach that\nGoogle has taken in Gears to solving that, where\nthey have a separate process which is completely\nisolated that you can send a program to and it'll\nrun there.</i> When it's finished, it'll tell you the result\nand the result comes back as an event. That's a\nbrilliant model."
                    },
                    {
                        "name": "37_json.txt",
                        "text": "when XML was proposed as a data-interchange\nformat, my first impression of that was, \u201c<i>My god,\nthis is way, way, way too complicated. We don't\nneed all of this stuff just to move data back and\nforth</i>.\u201d And so I proposed another way to do it,\nand it won. JSON is now the preferred way of"
                    },
                    {
                        "name": "38_programming_timeline.txt",
                        "text": "Looking at where we've come on the timeline\nof programming</i>, <i>we started with machine codes\nand then we took a leap to symbolic assembly\nlanguage and then we took a leap to high-level\nlanguages and then we took a leap to structured\nprogramming</i> and then we took a leap to object-"
                    },
                    {
                        "name": "39_underappreciated_technology.txt",
                        "text": "Crockford: Lisp and Smalltalk, you've just\nmentioned. <i>That's brilliant stuff, and we're now\nfinally seeing those ideas being factored into\nmodern languages</i>, so we're doing a lot of work"
                    },
                    {
                        "name": "40_the_next_leap.txt",
                        "text": "I think the next leap, we don't know what the\nname of it is yet, but I think it's <i>something related\nto mash-ups where we can casually take bits of\nprogram and put them together</i> and immediately\nmake new programs. We've been talking for\ndecades about a model of programming in which"
                    },
                    {
                        "name": "41_lego_mashup.txt",
                        "text": "we snapped programs together like LEGO and\nmake stuff. <i>That hasn't happened yet. But I think\nit is starting to happen now and the place it's\nhappening is in JavaScript</i>, which is the least likely\nplace."
                    },
                    {
                        "name": "42_hiring.txt",
                        "text": "Crockford: I'm looking for quality of presentation.\n<i>I want to see what he thinks is something he's\nproud of. <i>I want to see evidence that in fact he is\nthe author of the thing that he's defending.</i> I find\nthat is much more effective than asking them to\nsolve puzzles or trivia questions. I see all that kind\nof stuff as useless. But how effectively they can\ncommunicate, that's a skill that I'm hiring for."
                    },
                    {
                        "name": "43_generalists.txt",
                        "text": "not much else you can do. I tend not to look\nfor that kind of overspecialization unless I have a\nreally specific niche. Generally. <i>I prefer generalists.\nI want someone who's capable of learning any of\nthose APIs but isn't necessarily skilled</i> in any one."
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
                    },
                    {
                        "name": "16_try_to_teach.txt",
                        "text": "If you want to really learn something, try teaching\nit to someone else. <i>There\u2019s no better way to\ncrystallize your understanding of something than\nto force yourself to express it to someone else</i>\nso that they can understand it. The simple act of"
                    },
                    {
                        "name": "17_programming_practice.txt",
                        "text": "Several years back. I started experimenting with\nprogramming exercises modeled after my musical\npractice sessions. <i>Rule number one was that the\nsoftware I was developing couldn't be something I\nwanted to use. I didn\u2019t want to cut corners, rushing\nto an end goal.</i> So, | wrote software that wasn\u2019t\nuseful."
                    },
                    {
                        "name": "18_not_practice.txt",
                        "text": "saxophone, if I sat down to practice and nothing\nbut pretty sounds came out. I\u2019d know I wasn\u2019t\npracticing. <i>Likewise, if I sit down to practice\ncoding and nothing but elegant code comes out,\nI\u2019m probably sitting somewhere near the center of\nmy current capabilities instead of the edges</i>, where\na good practice session should place me."
                    },
                    {
                        "name": "19_powerful_libraries.txt",
                        "text": "lists? Most modern programming languages offer\nrich and powerful libraries in all of these areas, <i>but\nsoftware developers tend to learn a small subset,\nwith which they can less efficiently write the same\ncode</i> they could have written if they had mastered\nthe full set of tools available to them."
                    },
                    {
                        "name": "20_code_kata.txt",
                        "text": "and made something...well, pragmatic out\nof it. <i>He created a series of what he\ncalls Code Kata, which are small, thought-\nprovoking exercises that programmers can do\nin the language of their choice.</i> Each kata\nemphasizes a specific technique or thought"
                    },
                    {
                        "name": "21_do_it_faster.txt",
                        "text": "Parkinson\u2019s law is an empirical observation\u2014\nnot an unescapable human mandate. <i>A sense of\nurgency, even if manufactured, is enough to easily\ndouble or triple your productivity. Try it, and you'll\nsee. You can do it faster. You can do it now.</i> You can\nget it done instead of talking about getting it done."
                    },
                    {
                        "name": "22_dont_guess.txt",
                        "text": "You might take it upon yourself to change\na feature your customers did ask for in\na way that, unexpectedly to you, makes it\nless functional or desirable to the customer.\n<i>Beware of guessing when it comes to user\ninterfaces especially.</i>"
                    },
                    {
                        "name": "23_manager_role.txt",
                        "text": "things get difficult. The role of a good manager is\nto <i>set priorities for the team, make sure the team\nhas what it needs to get the job done, and do what\nit takes to keep the team motivated and productive</i>,\nultimately getting done what needs to get done. A\njob well done by the team is a job well done by the\nmanager."
                    },
                    {
                        "name": "24_frustrating_employee.txt",
                        "text": "As a manager. <i>I can tell you that the most\nfrustrating thing to deal with is an employee\nwho's always aiming for the next rung on the\nladder</i>. You know the guy: you can\u2019t sit with\nhim for lunch without him bringing up who got\nwhat promotion. He always has some kind of\noffice gossip to spread, and he seems to cling to"
                    },
                    {
                        "name": "25_leave_the_company.txt",
                        "text": "to leave. Some even live out your daydream and\nwalk out with no notice. But in few cases do the\ncompanies they leave actually feel a significant\nimpact as a result of their departure. <i>In most cases,\neven in critical positions, the effect is surprisingly\nlow. Your presence on the job is, to the company,\nlike a pebble in a bucket of water.</i> Sure, the water\nlevel is higher as a result. You get things done. You"
                    },
                    {
                        "name": "26_bad_sign.txt",
                        "text": "Feeling irreplaceable is a bad sign, especially as\na software developer. <i>If you can\u2019t be replaced, it\nprobably means you perform tasks in such a way\nthat others can\u2019t also do them.</i> Although we'd all\nlike to claim some kind of special genius, few"
                    },
                    {
                        "name": "27_unmaintainable_code.txt",
                        "text": "I\u2019ve heard lots of programmers half-joking about\ncreating \u201cjob security\u201d with unmaintainable code.\n<i>And. I\u2019ve seen actual programmers attempt to do\nit. In every case, these people have become targets.</i>\nSure, it was scary for the company to finally let\ngo of them. Ultimately, though, fear is the worst"
                    },
                    {
                        "name": "28_attempt_irreplaceable.txt",
                        "text": "go of them. Ultimately, though, fear is the worst\nthat ever came of it. <i>Attempting to be irreplaceable\nis a defensive maneuver that creates a hostile\nrelationship with your employer</i> (and your co-\nworkers) where one may not have already existed."
                    },
                    {
                        "name": "29_refactoring_code.txt",
                        "text": "Each of these items goes on your to-do\nlist. <i>Document, automate, or refactor each\npiece of code or task so that it could be\neasily understood by anyone on your team.</i>\nDo this until you\u2019ve depleted your original\nlist. Proactively share these documents with\nyour team and your leader. Make sure the"
                    },
                    {
                        "name": "30_old_systems.txt",
                        "text": "scratch. We started with an empty building\nand were tasked with hiring and filling out an\nentire development organization. <i>In setting up\nthis development center, we faced a challenge we\nnever expected. Everyone wanted to make new\nsystems. Nobody wanted to maintain old systems.</i>\nWe wanted to create a new environment with an"
                    }
                ]
            }
        ]
    }
];

