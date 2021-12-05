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
            <${type} name="${name}" class="${name}">
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

            ${selectElement("select", "gender", "Choose your gender from the dropdown menu:", ["none", "Male", "Female", "Non-binary"])}
            ${selectElement("select", "race", "Choose your race from the dropdown menu:", ["none", "Tabaxi", "Kenku", "Reborn", "Shifter", "Harengon", "Hexblood", "Elf"])}
            ${selectElement("select", "class", "Choose your character's class from the drop down menu below. Be aware, that it has an impact on your starting point:", ["none", "Noble", "Servant", "Citizen", "Nomad"])}
            
            <button>Create my avatar</button>
        </form>
    `

}

const formSubmit = (event) => {
    console.log(event);
    event.preventDefault();
    const et = event.target;
    et.classList.add("submitted");
    const etValue = et.querySelector(`select[name="gender"]`).value;
    //console.log(etValue);
}

const inputEvent = (event) => {
    //console.log(event.target.name);
    console.log(event);
    
    if (event.target.getAttribute("name") === "firstName") {
        document.getElementById("inputValueFirst").innerHTML = event.target.value;
    }

    if (event.target.getAttribute("name") === "lastName") {
        document.getElementById("inputValueLast").innerHTML = event.target.value;
    }
}

const selectGenderOption = (event) => {
    const resultGenderImg = document.querySelector('#selectValueGenderImg');
    //const resultGender = document.querySelector('#selectValueGender');
    //resultGender.textContent = event.target.value;

    if (event.target.value == "Female") {
        resultGenderImg.innerHTML = `<img src="https://cdn1.iconfinder.com/data/icons/genders-4/24/female-512.png">`
    } else if (event.target.value == "Male") {
        resultGenderImg.innerHTML = `<img src="https://cdn1.iconfinder.com/data/icons/genders-4/24/male-512.png">`
    } else if (event.target.value == "Non-binary") {
        resultGenderImg.innerHTML = `<img src="https://cdn1.iconfinder.com/data/icons/genders-4/24/nonbinary-512.png">`
    } else {
        resultGenderImg.textContent = "You didn't choose gender."
    }
};

const selectRaceOption = (event) => {
    const resultRaceImg = document.querySelector('#selectValueRaceImg');

    if (event.target.value == "Tabaxi") {
        resultRaceImg.innerHTML = `<img src="https://5e.tools/img/races/VGM/Tabaxi.png">`
    } else if (event.target.value == "Kenku") {
        resultRaceImg.innerHTML = `<img src="https://5e.tools/img/races/VGM/Kenku.png">`
    } else if (event.target.value == "Reborn") {
        resultRaceImg.innerHTML = `<img src="https://5e.tools/img/races/VRGR/Reborn.png">`
    } else if (event.target.value == "Shifter") {
        resultRaceImg.innerHTML = `<img src="https://5e.tools/img/races/ERLW/Shifter%20001.png">`
    } else if (event.target.value == "Harengon") {
        resultRaceImg.innerHTML = `<img src="https://5e.tools/img/races/WBtW/Harengon.png">`
    } else if (event.target.value == "Hexblood") {
        resultRaceImg.innerHTML = `<img src="https://5e.tools/img/races/VRGR/Hexblood.png">`
    } else if (event.target.value == "Elf"){
        resultRaceImg.innerHTML = `<img src="https://5e.tools/img/races/PHB/Elf.png">`
    } else {
        resultRaceImg.textContent = "You didn't choose race."
    }
}

const selectClassOption = (event) => {
     const resultClassImg = document.querySelector('#selectValueClassImg');

     if (event.target.value == "Noble") {
         resultClassImg.innerHTML = `<img src="https://cdn0.iconfinder.com/data/icons/business-collection-2027/60/rich-512.png">`
     } else if (event.target.value == "Servant") {
        resultClassImg.innerHTML = `<img src="https://cdn0.iconfinder.com/data/icons/business-collection-2027/57/poor-512.png">`
    } else if (event.target.value == "Citizen") {
        resultClassImg.innerHTML = `<img src="https://cdn2.iconfinder.com/data/icons/winter-town/64/TREE_HOUSE-property-buildings-home-construction-512.png">`
    } else if (event.target.value == "Nomad") {
        resultClassImg.innerHTML = `<img src="https://cdn3.iconfinder.com/data/icons/travelling-icon-set/800/foot-512.png">`
    } else {
        resultClassImg.textContent = "You didn't choose class."
    }
}

function loadEvent() {
    //console.log(e);
    const root = document.getElementById("root");
    root.insertAdjacentHTML("beforeend", formTitle);
    root.insertAdjacentHTML("beforeend", formElement(nameFields, "form"));
    root.insertAdjacentHTML("beforeend", `
        <div class="characterSheet">
            <div class="firstName">
                Your character's first name: <span id="inputValueFirst"></span>
            </div> 

            <div class="lastName">
                Your character's last name: <span id="inputValueLast"></span>
            </div> 

            <div class="gender">
                Your character's gender: <span id="selectValueGender"></span><span id="selectValueGenderImg"></span>
            </div>

            <div class="race">
                Your character's race: <div id="selectValueRaceImg"></div>
            </div>

            <div class="class">
                Your character's class: <div id="selectValueClassImg"></div>
            </div>
        </div> 
    `);

    const form = document.getElementById("form");
    form.addEventListener("submit", formSubmit);

    const inputList = form.querySelectorAll("input");
    for (const input of inputList) {
        input.addEventListener("input", inputEvent);
    }

    const selectGender = document.querySelector('.gender');
    selectGender.addEventListener('change', selectGenderOption);

    const selectRace = document.querySelector('.race');
    selectRace.addEventListener('change', selectRaceOption);

    const selectClass = document.querySelector('.class');
    selectClass.addEventListener('change', selectClassOption);
}

window.addEventListener("load", loadEvent);