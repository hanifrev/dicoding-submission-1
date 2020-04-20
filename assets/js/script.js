const headcolor = document.querySelector('.header');
headcolor.style.backgroundColor = '#0B56A4';
headcolor.style.color = '#F0FFFF';

const navcolor = document.querySelector('.nav');
navcolor.style.backgroundColor = '#0A2F57';
// navcolor.style.color = '#F0FFFF';

const article = document.querySelector('.article1');
article.style.backgroundColor = 'white';

const aside = document.querySelector('.aside');
aside.style.backgroundColor = '#DCDCDC';

const foot = document.querySelector('.footer');
foot.style.backgroundColor = '#0B56A4';
foot.style.color = 'white';

const linkcolor = document.querySelectorAll('a');
	var i;
	for (i = 0; i < linkcolor.length; i++) {
 		 linkcolor[i].style.color = "#F0FFFF";

 
 		}