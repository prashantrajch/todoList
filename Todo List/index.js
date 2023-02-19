const form = document.querySelector("form");
const todoInput = document.querySelector('input');
const submitBtn = document.getElementById("submitBtn");
const todoBox = document.getElementById('todoBox');


submitBtn.addEventListener("click", (e) => {
    if(todoInput.value != ''){
        showTodo(todoInput.value);
    }
    todoInput.value = ``;
});

function showTodo(value){
    let li = `
        <li class="todo" onclick="checkTodo(this)">
        <div class="content" >
            <div class="iconBox">
                <i class="fa-solid fa-check check"></i>
            </div>
            <p>${value}</p>
        </div>
        <i class="fa-solid fa-xmark closeBtn" id="closeBtn" onclick="deleteTodo(this)"></i>
    </li>
        `;
    todoBox.innerHTML += li;

}

function checkTodo(e) {
    e.classList.toggle("active");
}

function deleteTodo(e){

    e.parentElement.remove();
}




