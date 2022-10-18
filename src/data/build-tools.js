export const buildtoolsCollection = {
	name: "Build tools",
	areas: [
		{
			skills: [
				{
					name: "Package Managers",
					description: {
						text: "패키지 관리자에 대해 알아보고 종속성을 보다 쉽게 관리하는 방법에 대해 알아보십시오.",
						links: [
							["Freecodecamp - How JavaScript package managers work", "https://www.freecodecamp.org/news/javascript-package-managers-101-9afd926add0a/"],
							["Guide to JavaScript frontend package managers", "https://www.javascriptstuff.com/javascript-frontend-package-managers/"],
						]
					},
					skills: [
						{
							name: "NPM",
							description: {
								text: "NPM에 대해 알아보고 NPM을 사용하여 종속성을 관리하는 방법에 대해 알아보십시오.",
								links: [
									["npmjs - About npm", "https://docs.npmjs.com/about-npm/"],
									["npmjs - Getting started", "https://docs.npmjs.com/getting-started/"],
									["Introduction to npm and basic npm commands", "https://medium.com/beginners-guide-to-mobile-web-development/introduction-to-npm-and-basic-npm-commands-18aa16f69f6b"],
									["An Absolute Beginner's Guide to Using npm", "https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/"],
								]
							},
						},
						{
							name: "Yarn",
							description: {
								text: "Yarn에 대해 알아보고 Yarn을 사용하여 종속성을 관리하는 방법을 알아보십시오.",
								links: [
									["Yarnpkg - Getting Started", "https://yarnpkg.com/en/docs/getting-started"],
									["Facebook Engineering - Yarn", "https://engineering.fb.com/web/yarn-a-new-package-manager-for-javascript/"],
								]
							},
						}
					]
				},
				{
					name: "Module Bundlers",
					description: {
						text: "모듈 번들러에 대해 알아보고 이러한 번들이 코드 번들에 어떻게 도움이 되는지 알아보십시오.",
						links: [
							["dev.to - What is a module bundler?", "https://dev.to/tanhauhau/what-is-module-bundler-and-how-does-it-work-3gp2"],
							["Freecodecamp - Let’s learn how module bundlers work", "https://www.freecodecamp.org/news/lets-learn-how-module-bundlers-work-and-then-write-one-ourselves-b2e3fe6c88ae/"],
							["JavaScript Bundlers, a Comparison", "https://medium.com/@ajmeyghani/javascript-bundlers-a-comparison-e63f01f2a364"],
						]
					},
					skills: [
						{
							name: "Rollup",
							description: {
								text: "롤업을 사용하여 코드를 번들하는 방법에 대해 알아보십시오.",
								links: [
									["Rollup - Introduction", "https://rollupjs.org/guide/en/"],
									["How to Bundle JavaScript With Rollup", "https://lengstorf.com/learn-rollup-js/"],
								]
							},
						},
						{
							name: "Webpack",
							description: {
								text: "웹 팩을 사용하여 코드를 번들링하는 방법에 대해 알아보십시오.",
								links: [
									["Webpack - Getting Started", "https://webpack.js.org/guides/getting-started/"],
									["Webpack: A Gentle Introduction to the Module Bundler", "https://auth0.com/blog/webpack-a-gentle-introduction/"],
								]
							},
						},
						{
							name: "Parcel",
							description: {
								text: "Parcel을 사용하여 코드를 번들하는 방법에 대해 알아보십시오.",
								links: [
									["Parcel - Getting Started", "https://parceljs.org/getting_started.html"],
									["Parcel, a simpler webpack", "https://flaviocopes.com/parcel/"]
								]
							},
						},
						{
							name: "Snowpack",
							description: {
								text: "개발 중에 Snowpack이 기존 앱 번들을 어떻게 대체할 수 있는지 알아보십시오.",
								links: [
									["Snowpack", "https://www.snowpack.dev/"],
									["Snowpack - Quickstart", "https://www.snowpack.dev/#quickstart"],
									["Github - Snowpack", "https://github.com/pikapkg/snowpack"],
									["Pika - About", "https://www.pika.dev/about/"],
									["A Future Without Webpack", "https://www.pika.dev/blog/pika-web-a-future-without-webpack/"],
								]
							},
						}
					]
				},
				{
					name: "Linters and formatters",
					description: {
						text: "린터 및 포맷터를 사용하여 코드 품질을 개선할 수 있는 방법에 대해 알아보십시오.",
						links: [
							["Improve Your JavaScript Code Quality With Linters", "https://www.gistia.com/javascript-linters-formatter-prettier-eslint/"],
							["Why you should always use a Linter", "https://medium.com/dailyjs/why-you-should-always-use-a-linter-and-or-pretty-formatter-bb5471115a76"],
						]
					},
					skills: [
						{
							name: "Prettier",
							description: {
								text: "Prettier를 사용하여 코드를 포맷하는 방법에 대해 알아보십시오.",
								links: [
									["Prettier - What is Prettier?", "https://prettier.io/docs/en/index.html"],
									["Let the computer do the formatting", "https://blog.bitsrc.io/let-the-computer-do-the-formatting-ddb799e8a068"],
									["Prettier - Playground", "https://prettier.io/playground/"],
									["Prettier - Integrating with Linters", "https://prettier.io/docs/en/integrating-with-linters.html"] 
								]
							},
						},
						{
							name: "ESLint",
							description: {
								text: "ESLint를 사용하여 코드를 린트하는 방법에 대해 알아보십시오.",
								links: [
									["Eslint - Getting Started", "https://eslint.org/docs/user-guide/getting-started"],
									["Streamline Code Reviews with ESLint + Prettier", "https://medium.com/javascript-scene/streamline-code-reviews-with-eslint-prettier-6fb817a6b51d"],
									["Prettier vs ESLint: What’s The Difference?", "https://www.futurehosting.com/blog/prettier-vs-eslint-whats-the-difference/"]
								]
							},
						}
					]
				},
				{
					name: "Task Runners",
					description: {
						text: "작업 실행자에 대해 알아보고 코드 실행을 자동화하는 방법을 알아보십시오.",
						links: [
							["The Advantages of Using Task Runners", "https://www.dbswebsite.com/blog/the-advantages-of-using-task-runners/"],
							["Being Productive With Task Runners", "https://www.smashingmagazine.com/2016/06/harness-machines-productive-task-runners/"],
						]
					},
					skills: [
						{
							name: "NPM Scripts",
							description: {
								text: "NPM 스크립트에 대해 알아보고 NPM 스크립트를 실행하는 방법을 알아보십시오.",
								links: [
									["CSS Tricks - Why npm Scripts?", "https://css-tricks.com/why-npm-scripts/"],
									["Helpers and tips for npm run scripts", "https://michael-kuehnel.de/tooling/2018/03/22/helpers-and-tips-for-npm-run-scripts.html"],
								]
							},
						}
					]
				},
				{
					name: "Transpilers",
					description: {
						text: "트랜스필러가 무엇이고 왜 필요한지 알아보십시오.",
						links: [
							["Scotch - Javascript Transpilers", "https://scotch.io/tutorials/javascript-transpilers-what-they-are-why-we-need-them"],
							["What JavaScript Programmers Need to Know about Transpilers", "https://thenewstack.io/javascript-transpilers-need-know/"],
							["Wikipedia - Source-to-source compiler", "https://en.wikipedia.org/wiki/Source-to-source_compiler"],
						]
					},
					skills: [
						{
							name: "Babel",
							description: {
								text: "Babel에 대해 알아보고 코드를 변환하는 방법을 알아보십시오.",
								links: [
									["Complete Babel 7 Guide for Beginners", "https://medium.com/@onlykiosk/complete-babel-7-guide-for-beginners-in-2019-7dd78214c464"],
									["Babel - What is Babel?", "https://babeljs.io/docs/en/"],
									["Babel - Usage Guide", "https://babeljs.io/docs/en/usage"],
									["A Beginner’s Guide to Babel", "https://www.sitepoint.com/babel-beginners-guide/"],
									["Moving to ES6 — Babel and Transpilers", "https://hackernoon.com/moving-to-es6-babel-and-transpilers-337921c025b1"],
								]
							}
						},
						{
							name: "Typescript",
							description: {
								text: "유형 스크립트를 사용하는 방법과 코드 유형을 안전하게 만드는 방법에 대해 알아봅니다.",
								links: [
									["Typescript - Documentation", "http://www.typescriptlang.org/docs/home.html"],
									["Typescript: Why should one use i?", "https://medium.com/tech-tajawal/typescript-why-should-one-use-it-a539faa92010"],
									["Why TypeScript is the best way to write Front-end in 2019", "https://medium.com/@jtomaszewski/why-typescript-is-the-best-way-to-write-front-end-in-2019-feb855f9b164"]
								]
							},
						}
					]
				},
				{
					name: "CSS Pre-processors",
					description: {
						text: "CSS 전 프로세서에 대해 그리고 우리가 왜 그것들이 필요한지 알아보세요.",
						links: [
							["MDN - CSS preprocessor", "https://developer.mozilla.org/en-US/docs/Glossary/CSS_preprocessor"],
							["Advantages of Using a Preprocessor", "https://medium.com/swlh/advantages-of-using-a-preprocessor-sass-in-css-eb7310179944"],
							["Deconfusing Pre- and Post-processing", "https://medium.com/@ddprrt/deconfusing-pre-and-post-processing-d68e3bd078a3"],
						]
					},
					skills: [
						{
							name: "SASS",
							description: {
								text: "SASS와 이를 사용하여 스타일을 단순화하는 방법에 대해 알아보십시오.",
								links: [
									["SASS - Guide", "https://sass-lang.com/guide"],
									["10 Reasons to Use a CSS Preprocessor in 2018", "https://raygun.com/blog/10-reasons-css-preprocessor/"],
								]
							}
						},
						{
							name: "PostCSS",
							description: {
								text: "PostCSS에 대해 알아보고 CSS 빌드 파이프라인을 확장하기 위해 PostCS의 플러그인 에코시스템을 사용하는 방법을 알아보십시오.",
								links: [
									["PostCSS", "https://postcss.org/"],
									["What is PostCSS?", "https://www.sitepoint.com/an-introduction-to-postcss/"],
									["Introduction to PostCSS", "https://flaviocopes.com/postcss/"],
									["Getting started with PostCSS in 2019", "https://blog.logrocket.com/getting-started-with-postcss-in-2019-484262a4d725/"]
								]
							}
						}
					]
				},
				{
					name: "Node.js",
					description: {
						text: "Node.js 사용 방법에 대해 알아봅니다.",
						links: [
							["Node.js", "https://nodejs.org"],
							["Introduction to Node.js", "https://nodejs.dev/"],
							["Node.js - Guides", "https://nodejs.org/en/docs/guides/"],
							["W3Schools - Node.js tutorial", "https://www.w3schools.com/nodejs/"]
						]
					}
				}
			]
		}
	]
}