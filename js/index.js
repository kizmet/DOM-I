import  {siteContent} from './siteContent.js'; // or './module'
let val =siteContent;  // val is "Hello";

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])




let headerNav = document.querySelector("header nav");
let newA = document.createElement("a");
headerNav.append(newA);

let preA = document.createElement("a");
headerNav.prepend(preA);

let navs = document.querySelectorAll("header nav a");
let navContent = siteContent["nav"];
navContent['nav-item-7']="Blog"
navContent['nav-item-0']="Login"
navs.forEach((nav,i) => {
	nav.textContent = navContent[`nav-item-${i}`],
	nav.style.color = "green";
	nav.href = "#0"
} );


let ctaSection = document.querySelector(".cta");
let ctaH1 = ctaSection.querySelector('h1')
let h1List = siteContent["cta"]["h1"].split(' ');
// ctaH1.textContent = siteContent["cta"]["h1"].split(' \r\n');
ctaH1.textContent = h1List[0];
let s= document.createElement("span");
s.setAttribute('style', "display: block");
s.textContent = h1List[1];
ctaH1.append(s)

let s1= document.createElement("span");
s1.setAttribute('style', "display: block");
s1.textContent = h1List[2];
ctaH1.append(s1)


let ctaButton = ctaSection.querySelector('button');
ctaButton.textContent = siteContent["cta"]["button"];
let ctaImg = ctaSection.querySelector('img');
ctaImg.setAttribute('src', siteContent['cta']['img-src'])


let mainContent = siteContent['main-content'];

let topContent = document.querySelector(".top-content");
topContent.firstElementChild.firstElementChild.textContent = mainContent['features-h4']
topContent.firstElementChild.lastElementChild.textContent = mainContent['features-content']
topContent.lastElementChild.firstElementChild.textContent = mainContent['about-h4']
topContent.lastElementChild.lastElementChild.textContent = mainContent['about-content']
topContent.nextElementSibling.setAttribute('src',mainContent["middle-img-src"])

let bottomContent = document.querySelector(".bottom-content");
bottomContent.firstElementChild.firstElementChild.textContent = mainContent['services-h4']
bottomContent.firstElementChild.lastElementChild.textContent = mainContent['services-content']
bottomContent.children[1].firstElementChild.textContent = mainContent['product-h4']
bottomContent.children[1].lastElementChild.textContent = mainContent['product-content']
bottomContent.lastElementChild.firstElementChild.textContent = mainContent['vision-h4']
bottomContent.lastElementChild.lastElementChild.textContent = mainContent['vision-content']

let contact = document.querySelector("section.contact");
contact.children[0].textContent = siteContent["contact"]["contact-h4"]
contact.children[1].textContent = siteContent["contact"]["address"]
contact.children[2].textContent = siteContent["contact"]["phone"]
contact.children[3].textContent = siteContent["contact"]["email"]

let footer = document.querySelector("footer p")
footer.textContent = siteContent['footer']['copyright']

