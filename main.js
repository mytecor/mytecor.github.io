
let language = navigator.languages.includes('ru')? 'ru' : 'en'

function locale(obj) {
	return obj[language]
}


// Sidebar
function Link({children, href}) {
	return Comp('a', {
		className: 'button',
		innerHTML: children,
		href
	})
}

function Sidebar(links) {
	return Comp('div', {
		className: 'sidebar',
		children: [
			Comp('img', {
				className: 'logo',
				src: 'https://avatars.githubusercontent.com/u/20505643',
				alt: 'Logo'
			}),
			Comp('center', {
				children: locale({
					en: 'Inquisitive mind',
					ru: 'Пытливость ума'
				})
			}),
			Comp('div', {
				className: 'links',
				children: links.map(Link)
			})
		]
	})
}


// Content
function Title(children) {
	return Comp(children.tag || 'h2', {children: locale(children)})
}

function About() {
	let
		dob = new Date(2001, 11, 14),
		now = new Date,
		nowDate = now.getDate(),
		nowMonth = now.getMonth(),
		today = nowMonth == dob.getMonth() && nowDate == dob.getDate()? '🎉' : ''

	now = new Date(now.getFullYear(), nowMonth, nowDate)

	let born = dob.toLocaleString(undefined, {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	})

	let age = Math.floor((now - dob) / (86400000 * 365.2425))

	return Comp('section', {
		className: 'about',
		children: [
			Title({
				tag: 'h1',
				en: 'Some about me:',
				ru: 'Немного обо мне:'
			}),
			Comp('p', {
				className: 'about',
				innerHTML: locale({
					en: `Hi, I'm Vlad<br>
						Born ${born} (${today + age} y.o.) in Moscow<br>
						From about the age of 11, I became interested in programming<br>
						Well this is just the beginning`,
					ru: `Привет, я Влад<br>
						Родился ${born} (${today + age} y.o.) в Москве<br>
						Примерно с 11 лет я увлёкся программированием<br>
						Ну это только начало (๑˃ᴗ˂)ﻭ`
				})
			})
		]
	})
}

function Button(project) {
	return Comp('a', {
		className: 'button',
		href: project.href,
		children: [
			Comp('h3', {
				children: project.name
			}),
			Comp('p', {
				children: locale(project)
			})
		]
	})
}

function ProjectsList(projects) {
	return Comp('section', {
		className: 'projects',
		children: projects.map(Button)
	})
}

function Content() {
	return Comp('div', {
		className: 'content',
		children: [
			About(),
			Title({
				en: 'Projects that aren\'t so bad:',
				ru: 'То, за что не так стыдно:'
			}),
			ProjectsList([
				{
					name: 'rmce',
					en: 'React mini code editor',
					ru: 'Мини редактор кода для React',
					href: 'https://mytecor.github.io/rmce'
				},
				{
					name: 'live-example',
					en: 'React live code preview',
					ru: 'Предпросмотр jsx кода в реальном времени',
					href: 'https://mytecor.github.io/live-example'
				},
				{
					name: 'node-sauce',
					en: 'SauceNAO api wrapper that is able to circumvent the restrictions',
					ru: 'Обертка для апи SauceNAO, обходит ограничения',
					href: 'https://github.com/mytecor/node-sauce'
				},
				{
					name: 'hotkeys-nano',
					en: 'Simple lightweight JS keyboard hotkeys library',
					ru: 'Простая библиотека для работы с клавиатурными сокращениями',
					href: 'https://github.com/mytecor/hotkeys'
				},
				{
					name: 'vse-zadachi',
					en: 'Answers to problems obtained using sql injections',
					ru: 'Ответы на задачи, которые я однажды слил с пары сайтов через sql инъенкцию',
					href: 'https://mytecor.github.io/vse-zadachi'
				}
			]),
			Title({
				en: 'Denpo - nodejs telegram client',
				ru: 'Denpo - nodejs telegram клиент'
			}),
			ProjectsList([
				{
					name: 'denpo-entities',
					en: 'Markdown to telegram entities parser',
					ru: 'Парсер Markdown в telegram сущности',
					href: 'https://github.com/denpojs/denpo-entities'
				}
			]),
			Title({
				en: 'Also... (in dev)',
				ru: 'Ещё немного... (в разработке)'
			}),
			ProjectsList([
				{
					name: 'sherumi',
					en: 'It will be epic',
					ru: 'Это будет эпично',
					href: 'https://mytecor.github.io/sherumi'
				}
			])
		]
	})
}

function Root() {
	return Comp('div', {
		className: 'row',
		children: [
			Sidebar([
				{
					children: `<svg viewBox="0 0 16 16">
						<path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
					</svg>
					GitHub`,
					href: 'https://github.com/mytecor?tab=repositories'
				},
				{
					children: `<svg viewBox="0 0 622 622">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M37.3284 305.722C183.089 242.217 280.285 200.35 328.917 180.122C467.773 122.367 496.625 112.335 515.431 112.004C519.568 111.931 528.816 112.956 534.806 117.817C539.865 121.921 541.257 127.466 541.923 131.357C542.589 135.249 543.418 144.114 542.759 151.041C535.234 230.102 502.675 421.965 486.111 510.515C479.102 547.984 465.301 560.548 451.941 561.777C422.905 564.449 400.856 542.588 372.733 524.153C328.727 495.306 303.866 477.349 261.15 449.2C211.784 416.669 243.786 398.789 271.919 369.569C279.282 361.921 407.215 245.556 409.691 235C410.001 233.68 410.288 228.759 407.365 226.16C404.441 223.562 400.126 224.45 397.012 225.157C392.599 226.159 322.298 272.625 186.11 364.556C166.155 378.259 148.081 384.935 131.887 384.585C114.034 384.199 79.6928 374.491 54.1636 366.192C22.8511 356.014 -2.03552 350.632 0.131547 333.346C1.26029 324.343 13.6592 315.135 37.3284 305.722Z"/>
					</svg>
					Telegram`,
					href: 'https://t.me/mytecor'
				},
				{
					children: `<svg viewBox="0 0 273.5 222.3">
						<path d="M273.5 26.3a109.77 109.77 0 0 1-32.2 8.8 56.07 56.07 0 0 0 24.7-31 113.39 113.39 0 0 1-35.7 13.6 56.1 56.1 0 0 0-97 38.4 54 54 0 0 0 1.5 12.8A159.68 159.68 0 0 1 19.1 10.3a56.12 56.12 0 0 0 17.4 74.9 56.06 56.06 0 0 1-25.4-7v.7a56.11 56.11 0 0 0 45 55 55.65 55.65 0 0 1-14.8 2 62.39 62.39 0 0 1-10.6-1 56.24 56.24 0 0 0 52.4 39 112.87 112.87 0 0 1-69.7 24 119 119 0 0 1-13.4-.8 158.83 158.83 0 0 0 86 25.2c103.2 0 159.6-85.5 159.6-159.6 0-2.4-.1-4.9-.2-7.3a114.25 114.25 0 0 0 28.1-29.1"/>
					</svg>
					Twitter`,
					href: 'https://t.me/mytecor'
				},
				{
					children: `<svg viewBox="0 0 33 19">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M5.00091 0H1.5001C0.499865 0 0.299805 0.4708 0.299805 0.9898C0.299805 1.9169 1.48666 6.5148 5.826 12.5959C8.7189 16.7488 12.7947 19 16.5036 19C18.7289 19 19.0042 18.5 19.0042 17.6388V14.5C19.0042 13.5 19.215 13.3004 19.9196 13.3004C20.4389 13.3004 21.329 13.56 23.406 15.5623C25.7797 17.9354 26.171 19 27.5061 19H31.0069C32.0072 19 32.5073 18.5 32.2188 17.5133C31.9031 16.5299 30.7698 15.103 29.266 13.4117C28.45 12.4476 27.2261 11.4094 26.8552 10.8902C26.336 10.2228 26.4843 9.9261 26.8552 9.3329C26.8552 9.3329 31.1204 3.3259 31.5655 1.2866C31.788 0.5449 31.5655 0 30.5068 0H27.006C26.1159 0 25.7055 0.4708 25.4829 0.9898C25.4829 0.9898 23.7027 5.3282 21.1807 8.1463C20.3647 8.962 19.9938 9.2216 19.5487 9.2216C19.3262 9.2216 19.0041 8.962 19.0041 8.2205V1.2866C19.0041 0.3966 18.7458 0 18.0039 0H12.5026C11.9464 0 11.6118 0.413 11.6118 0.8045C11.6118 1.6481 12.8728 1.8427 13.0028 4.2158V9.37C13.0028 10.5 12.7986 10.7049 12.3536 10.7049C11.1668 10.7049 8.27991 6.3471 6.56771 1.3607C6.23221 0.391501 5.89561 0 5.00091 0V0Z"/>
					</svg>
					VK`,
					href: 'https://vk.com/mytecor'
				}
			]),
			Content()
		]
	})
}

Render(Root(), document.querySelector('.root'))
