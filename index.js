const p = document.querySelector('p');
const div = document.createElement('div');
const header = document.createElement('h1');
header.innerText = 'Start JS';
header.classList.add('test');
div.appendChild(header);

document.body.appendChild(div);

const a = document.createElement('a');
a.href = 'https://developer.mozilla.org/en-US/docs/Web/JavaScript';
a.innerText = 'MDN';
div.appendChild(a);
console.log(div);

const aTag = document.querySelector('a');
console.log(aTag);

// aTag.addEventListener('click', function() {

// })

// --- scroll ---
const scroll = document.querySelector('.output');
let countScroll = 0;

document.addEventListener('scroll', () =>{
    countScroll +=1;
    output.textContent = countScroll;
})