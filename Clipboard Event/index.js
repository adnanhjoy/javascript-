const input = document.querySelector('input');
const p = document.querySelector('p');

input.addEventListener('copy', copied);
input.addEventListener('cut', cuted);
input.addEventListener('paste', pasted);

function copied(){
    p.innerHTML = 'You Have Copy';
};

function cuted(){
    p.innerHTML = 'You Have Cut';
};

function pasted(){
    p.innerHTML = 'You Have Paste';

};