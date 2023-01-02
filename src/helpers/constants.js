// export const baseApiUrl = process.env["REACT_APP_API_URL "];
export const baseApiUrl = 'https://jacoborodicio.com/api/v1';

// const baseApiUrl = 'http://localhost:9000/api/v1/';
// const baseApiProdUrl = 'http://jacoborodicio:9000/api/v1/';
// const baseApiUrl = 'https://jacoborodicio:9000/api/v1/';

// export const allPlacesApi = () => `${baseApiUrl}/places`;
// export const deletePlaceByIdApi = id => `${baseApiUrl}/places/${id}`;


// OLD?
// export const mainTopics = [
//     {
//         id: 1,
//         title: 'Css grid',
//         image: './defaultCodeImg.png',
//         imageDescription: '',
//         description: 'Collection of examples of how to properly use grids in css',
//         stars: 12, // Number of reputation stars
//         ratio: 3, // Global valuation from 0-5
//         link: '/css-grid'
//     },
//     {
//         id: 2,
//         title: 'React Spring Animations',
//         image: './assets/defaultCodeImg.png',
//         imageDescription: '',
//         description: 'Couple of examples of how we can improve usability through animations with @react-spring',
//         stars: 29, // Number of reputation stars
//         ratio: 3.5, // Global valuation from 0-5
//         link: '/spring-animations'
//     },
//     {
//         id: 3,
//         title: 'React hooks',
//         image: './assets/defaultCodeImg.png',
//         imageDescription: '',
//         description: 'Explanation of each type of hook we can use as well as how we can combine them to affront any situation',
//         stars: 201, // Number of reputation stars
//         ratio: 5, // Global valuation from 0-5
//         link: '/hooks'
//     },
//     {
//         // TODO: Include main topic Components & select-field as one of them
//         id: 4,
//         title: 'Select fields, the misunderstood star',
//         image: './assets/defaultCodeImg.png',
//         imageDescription: '',
//         description: 'Collection of examples of how much we can do in relation of using own coded select fields',
//         stars: 2615, // Number of reputation stars
//         ratio: 4.89, // Global valuation from 0-5
//         link: '/select-field'
//     },
//     {
//         id: 5,
//         title: 'Mini animations',
//         image: './assets/defaultCodeImg.png',
//         imageDescription: '',
//         description: 'Collection of examples of small animations to use in our day a day',
//         stars: 112, // Number of reputation stars
//         ratio: 4, // Global valuation from 0-5
//         link: '/mini-animations'
//     },
//     {
//         id: 6,
//         title: 'JS common functions',
//         image: './assets/defaultCodeImg.png',
//         imageDescription: '',
//         description: 'Collection & analysis of how the functions we use every day really work',
//         stars: 312, // Number of reputation stars
//         ratio: 5, // Global valuation from 0-5
//         link: '/js-commons'
//     },
//     {
//         id: 7,
//         title: 'Mutability',
//         image: './assets/defaultCodeImg.png',
//         imageDescription: '',
//         description: 'Collection of examples of how to avoid mutability in React & common operations',
//         stars: 12, // Number of reputation stars
//         ratio: 3, // Global valuation from 0-5
//         link: '/mutability'
//     },
//     {
//         id: 8,
//         title: 'Theming',
//         image: './assets/defaultCodeImg.png',
//         imageDescription: '',
//         description: 'Rules, notes, technics, best practices when extending MUI Theme and use it in production',
//         stars: 325, // Number of reputation stars
//         ratio: 4, // Global valuation from 0-5
//         link: '/theming'
//     },
//     {
//         id: 9,
//         title: 'Redux',
//         image: './assets/defaultCodeImg.png',
//         imageDescription: 'Redux section image',
//         description: 'Explaining Redux with hooks in newest version',
//         stars: 23, // Number of reputation stars
//         ratio: 3.5, // Global valuation from 0-5
//         link: '/redux'
//     },
//     {
//         id: 10,
//         title: 'Developing helper',
//         image: './assets/defaultCodeImg.png',
//         imageDescription: 'A place to try stuff while developing the rest of Code School',
//         description: 'Some backup code, some tries... Just stuff to delete once the feature is done',
//         stars: 0, // Number of reputation stars
//         ratio: 0, // Global valuation from 0-5
//         link: '/dev-place'
//     }
// ]
// export const testimonials = [
//     {
//         id: 'testimonial#1',
//         name: 'Daniel clifford',
//         image: 'daniel',
//         position: 'Verified Graduate',
//         message: 'I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.',
//         declaration: "I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup."
//     },
//     {
//         id: 'testimonial#2',
//         name: 'Jonathan Walters',
//         image: 'jonathan',
//         position: 'IT-Engineer',
//         message: 'The team was very supportive and kept me motivated',
//         declaration: "I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself."
//     },
//     {
//         id: 'testimonial#3',
//         name: 'Jeanette Harmon',
//         image: 'jeanette',
//         position: 'Product Owner',
//         message: 'An overall wonderful and rewarding experience',
//         declaration: "Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love."
//     },
//     {
//         id: 'testimonial#4',
//         name: 'Patrick Abrams',
//         image: 'patrick',
//         position: 'Java Expert',
//         message: 'Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.',
//         declaration: "The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people."
//     },
//     {
//         id: 'testimonial#5',
//         name: 'Kira Whittle',
//         image: 'kira',
//         position: 'Designer',
//         message: 'Such a life-changing experience. Highly recommended!',
//         declaration: "Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend!"
//     },
// ]
// export const testimonialResources = {
//     daniel: require('../images/image-daniel.jpg'),
//     jonathan: require('../images/image-jonathan.jpg'),
//     jeanette: require('../images/image-jeanette.jpg'),
//     patrick: require('../images/image-patrick.jpg'),
//     kira: require('../images/image-kira.jpg'),
//     quoteLogo: require('../images/bg-pattern-quotation.svg')
// }
