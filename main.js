const formTitle = `
    <div>
        <h1>Fill out the form to set up your character</h1>
    </div>
`

const inputElement = (type, name, label, req = "") => {
    return `
        <div class="${type}">
            <label for="${name}">${label}</label>
            <input type="${type}" name="${name}" id="${name}" ${req}>
        </div>
    `
}

const nameFields = [
    {
        type: "text",
        name: "firstName",
        label: "Add your firstname:",
        required: "required"
    },
    {
        type: "text",
        name: "lastName",
        label: "Add your lastname (optional):"
    }
];

const selectElement = (type, name, label, selectOptions) => {
    let optionElemnts = "";

    for (const option of selectOptions) {
        optionElemnts += `
        <option> ${option}</option>
        `
    };

    return `
        <div>
            <label>${label}</label>
            <${type} name="${name}">
                ${optionElemnts}
            </${type}>
        </div>
    `
}

const formElement = (nfs, id) => {
    let setForm = "";

    for (const nf of nfs) {
        setForm += inputElement(nf.type, nf.name, nf.label, nf.required);
    }

    return `
        <form id="${id}">
            ${setForm}

            ${selectElement("select", "gender", "Choose your gender from the dropdown menu:", ["Male", "Female", "Non-binary"])}
            ${selectElement("select", "race", "Choose your race from the dropdown menu:", ["Tabaxi", "Kenku", "Reborn", "Shifter", "Harengon", "Hexblood", "Elf"])}
            ${selectElement("select", "class", "Choose your character's class from the drop down menu below. Be aware, that it has an impact on your starting point:", ["Noble", "Servant", "Citizen", "Nomad"])}
            
            <button>Create my avatar</button>
        </form>
    `

}

//Ez mit csinál nekem és miért jó
const formSubmit = (event) => {
    console.log(event);
    event.preventDefault();
    const et = event.target;
    et.classList.add("submitted");
    const etValue = et.querySelector(`select[name="gender"]`).value;
    //console.log(etValue);
}

//Ez mit csinál nekem és miért jó
const inputEvent = (event) => {
    //console.log(event.target.name);
    console.log(event);
    //const fName = document.querySelector(`input[name="firstName"]`);
    //const lName = document.querySelector(`input[name="lastName"]`);
    let tryForm = event.target.closest('#form');
    
    if (event.target.getAttribute("name") === "firstName") {
        document.getElementById("inputValueFirst").innerHTML = event.target.value;
    }

    if (event.target.getAttribute("name") === "lastName") {
        document.getElementById("inputValueLast").innerHTML = event.target.value;
    }
}

function loadEvent() {
    //console.log(e);
    const root = document.getElementById("root");
    root.insertAdjacentHTML("beforeend", formTitle);
    root.insertAdjacentHTML("beforeend", formElement(nameFields, "form"));
    root.insertAdjacentHTML("beforeend", `
        <div class="result">
            Your character's first name: <span id="inputValueFirst"></span>
        </div> 
    `);
    root.insertAdjacentHTML("beforeend", `
        <div class="result">
            Your character's last name: <span id="inputValueLast"></span>
        </div> 
    `);


    const form = document.getElementById("form");
    form.addEventListener("submit", formSubmit);

    const inputList = form.querySelectorAll("input");
    for (const input of inputList) {
        input.addEventListener("input", inputEvent);
    }

}

window.addEventListener("load", loadEvent);