let btn = document.querySelector('#btn');
let input = document.querySelector('#add');
let holder = document.getElementById("holder")

btn.addEventListener('click', () => {
    let txt = input.value;
    if (txt === "") {
        alert('You must write something');
    } else {
        let id = document.getElementById('holder').getElementsByTagName('div').length;
        let task = `<div class="content" id=${id}>
                        <input type="checkbox" class="checkbox" onclick="checkTask('${id}')" id=${"checkbox"+id}> 
                        <p class="delete" id=${"task"+id}>${txt}</p> 
                        <img src="http://ae01.alicdn.com/kf/HTB1qtibocbI8KJjy1zdq6ze1VXae.jpg_q50.jpg" onclick="delTask('${id}')" class="delete" >
                    </div>`
        holder.insertAdjacentHTML('afterbegin', task);
        input.value = '';
    }
})
list.addEventListener('click', e =>{
    if(e.target.tagName == 'LI'){
        e.target.classList.toggle('checked');
    }
})
document.getElementsByIdName('add_btn')[0].addEventListener('click',function(e){
    e.preventDefault();
    addElem(document.getElementsByIdName('add_text')[0].value);
});
function delTask(id) {
    let task = document.getElementById(id);
    task.remove();
}

function checkTask(id){
    let task = document.getElementById("task"+id);
    let checkbox = document.getElementById("checkbox"+id);
    if(checkbox.checked) {
        task.style.textDecorationLine = "line-through"
    } else {
        task.style.textDecorationLine =  "none";
    }
}
 
