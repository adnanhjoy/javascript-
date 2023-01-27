const textarea = document.querySelector('div');
const p = document.querySelector('p');

p.addEventListener('dragstart', function(e){
    e.dataTransfer.setData('Text', e.target.id);
});

textarea.addEventListener('dragover', function(e){
    e.preventDefault();
});

textarea.addEventListener('drop', function(e){
    let id = e.dataTransfer.getData("Text");
    textarea.appendChild(document.getElementById(id));
    e.preventDefault();
});