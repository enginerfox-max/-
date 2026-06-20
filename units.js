let units = get("units");

let soldiers = get("soldiers");

/* حفظ */
function save(){

    set("units", units);

}

/* إضافة وحدة */
function addUnit(){

    let unit = {

        id: Date.now(),

        name:
        document.getElementById("unit").value,

        soldiers: []

    };

    units.push(unit);

    save();

    render();

    toast("تم إنشاء وحدة");

}

/* إضافة جندي للوحدة */
function assign(unitId){

    let unit =
    units.find(
        u => u.id === unitId
    );

    let soldierId =
    document.getElementById(
        "s"+unitId
    ).value;

    if(unit){

        unit.soldiers.push(soldierId);

    }

    save();

    render();

    toast("تم إضافة الجندي");

}

/* عرض */
function render(){

    let box =
    document.getElementById("box");

    box.innerHTML = "";

    units.forEach(u => {

        box.innerHTML += `

        <div class="card">

        <h3>${u.name}</h3>

        <select id="s${u.id}">

        ${soldiers.map(s => `

        <option value="${s.id}">
        ${s.name}
        </option>

        `).join("")}

        </select>

        <button
        onclick="assign(${u.id})">

        إضافة جندي

        </button>

        <p>

        عدد الجنود:
        ${u.soldiers.length}

        </p>

        </div>
        `;

    });

}

render();