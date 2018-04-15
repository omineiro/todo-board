let inputElement = document.querySelector('input');
let listElement = document.querySelector('.app ul');

//Transformando nossos dados Salvos no LocalStorage
const tasks = JSON.parse(localStorage.getItem('my_tasks')) || [];


function renderTodos() {
    //Temos que limpar sempre a lista
    //Para que quando adicionarmos uma nova task, ela não seja renderizada novamente
    listElement.innerHTML = '';

    for(task of tasks){
        //Criando a Lista de tarefas
        let todoElement = document.createElement('li');
        let todoTask = document.createTextNode(task);

        //Descobrir o Indice para removermos o Elemento
        //Estamos procurando a posicao de task do nosso for, dentro do array de tarefas tasks
        let posicao = tasks.indexOf(task);

        //Adicionando os valores da LI
        todoElement.appendChild(todoTask);
        listElement.appendChild(todoElement);

        //Personalizando a li
        todoElement.className = 'list-group-item';
        todoElement.style.width = '25%';

        //Criando o icone da Lista
        let iconList = document.createElement('i');
        iconList.className = 'fas fa-trash';
        iconList.style.color = 'red';
        iconList.style.marginLeft = '40px';
        todoElement.appendChild(iconList);
        //Removendo uma tarefa
        //Adicionamos o atributo onclick para quando o usuário clicar, ele chame a funcao e remova
        iconList.setAttribute('onclick', 'removeTodo(' + posicao +')');

    }
}

renderTodos()

function addTodo() {
    let valueTodo = inputElement.value;
    tasks.push(valueTodo);
    inputElement.value = '';
    renderTodos();
    saveStorage();

}

function removeTodo(position) {
    tasks.splice(position, 1)
    renderTodos();
    saveStorage();

}

function saveStorage() {
    localStorage.setItem('my_tasks', JSON.stringify(tasks))
}