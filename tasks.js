let tasks = get("tasks");

let soldiers = get("soldiers");

/* حفظ */
function save(){

    set("tasks", tasks);

}

/* إضافة مهمة */
function addTask(){

    let task = {

        id: Date.now(),

        name:
        document.getElementById("task").value,

        assigned: null

    };

    tasks.push(task);

    save();

    render();

    toast("تمت إضافة المهمة");

}

/* تعيين */
function assign(taskId){

    let task =
    tasks.find(
        t => t.id === taskId
    );

    let soldierId =
    document.getElementById(
        "t"+taskId
    ).value;

    if(task){

        task.assigned = soldierId;

    }

    save();

    render();

    toast("تم تعيين المهمة");

}

/* عرض */
function render(){

    let box =
    document.getElementById("box");

    box.innerHTML = "";

    tasks.forEach(t => {

        let assignedSoldier =
        soldiers.find(
            s => s.id == t.assigned
        );

        box.innerHTML += `

        <div class="card">

        <h3>${t.name}</h3>

        <select id="t${t.id}">

        ${soldiers.map(s => `

        <option value="${s.id}">
        ${s.name}
        </option>

        `).join("")}

        </select>

        <button
        onclick="assign(${t.id})">

        تعيين

        </button>

        <p>

        المكلف:
        ${
            assignedSoldier
            ? assignedSoldier.name
            : "لا يوجد"
        }

        </p>

        </div>
        `;

    });

}

render();