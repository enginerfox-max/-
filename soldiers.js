let soldiers = get("soldiers");
let tasks = get("tasks");

/* حفظ */
function save(){

    set("soldiers", soldiers);

}

/* إضافة */
function add(){

    let soldier = {

        id: Date.now(),

        name:
        document.getElementById("name").value,

        rank:
        document.getElementById("rank").value,

        age:
        document.getElementById("age").value,

        status: "ready"

    };

    soldiers.push(soldier);

    save();

    render();

    toast("تم إضافة جندي");

}

/* حذف */
function del(id){

    soldiers =
    soldiers.filter(
        s => s.id !== id
    );

    save();

    render();

    toast("تم حذف الجندي");

}

/* تغيير الحالة */
function setStatus(id,status){

    let soldier =
    soldiers.find(
        s => s.id === id
    );

    if(soldier){

        soldier.status = status;

    }

    save();

    render();

}

/* بحث */
function search(query){

    let filtered =
    soldiers.filter(
        s => s.name.includes(query)
    );

    render(filtered);

}

/* عرض */
function render(list = soldiers){
    let tasks = get("tasks"); // جلب آخر بيانات المهام (للتحديث الفوري)
    let table = document.getElementById("table");
    table.innerHTML = "";

    list.forEach(s => {
        // ابحث عن مهمة مسندة لهذا الجندي
        let assignedTask = tasks.find(t => t.assigned == s.id);
        let statusText = assignedTask ? `📋 ${assignedTask.name}` : "بلا مهمة";
        let statusClass = assignedTask ? "task" : "ready";

        table.innerHTML += `
        <tr>
            <td>${s.name}</td>
            <td>${s.rank}</td>
            <td>${s.age}</td>
            <td class="${statusClass}">${statusText}</td>
            <td>
                
                
                <button onclick="del(${s.id})">حذف</button>
            </td>
        </tr>`;
    });
}

render();