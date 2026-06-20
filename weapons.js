let weapons = get("weapons");

let soldiers = get("soldiers");

/* حفظ */
function save(){

    set("weapons", weapons);

}

/* إضافة */
function add(){

    let weapon = {

        id: Date.now(),

        name:
        document.getElementById("weapon").value,

        owner: null

    };

    weapons.push(weapon);

    save();

    render();

    toast("تمت إضافة السلاح");

}

/* تسليم */
function assign(weaponId){

    let weapon =
    weapons.find(
        w => w.id === weaponId
    );

    let soldierId =
    document.getElementById(
        "w"+weaponId
    ).value;

    if(weapon){

        weapon.owner = soldierId;

    }

    save();

    render();

    toast("تم تسليم السلاح");

}

/* عرض */
function render(){

    let box =
    document.getElementById("box");

    box.innerHTML = "";

    weapons.forEach(w => {

        let owner =
        soldiers.find(
            s => s.id == w.owner
        );

        box.innerHTML += `

        <div class="card">

        <h3>${w.name}</h3>

        <select id="w${w.id}">

        ${soldiers.map(s => `

        <option value="${s.id}">
        ${s.name}
        </option>

        `).join("")}

        </select>

        <button
        onclick="assign(${w.id})">

        تسليم

        </button>

        <p>

        المستلم:
        ${
            owner
            ? owner.name
            : "غير مخصص"
        }

        </p>

        </div>
        `;

    });

}

render();