fetch("https://jsonplaceholder.typicode.com/todos").then(res=>res.json()).then(data=>displayTodos(data))

function displayTodos(todos){

    console.log(todos);

    let htmlData=``

    for(let t of todos){

        htmlData+=`<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${t.title}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">${t.completed}</h6>
    <p class="card-text"></p>
  </div>
</div>`
    }

    document.querySelector("#root").innerHTML=htmlData
}