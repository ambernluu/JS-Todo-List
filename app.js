const form = document.getElementById('form');
const item = document.getElementById('item');
const list = document.getElementById('list');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const newItem = document.createElement('li');
    newItem.append(item.value);
    const removeBtn = document.createElement('button');
    removeBtn.innerText = 'Remove';
    newItem.append(removeBtn);
    list.append(newItem);
    form.reset();
})

list.addEventListener('click', function(e){
    if(e.target.tagName === 'BUTTON'){
        e.target.parentNode.remove();
        }
    else if(e.target.tagName === 'LI'){
        e.target.classList.toggle('completed');
    }
    
})


