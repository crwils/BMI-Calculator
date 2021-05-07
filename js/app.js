document.addEventListener('DOMContentLoaded', () => {
    console.log('JS loaded');

    const pageHeader = document.createElement('h1');
    pageHeader.innerText = 'BMI Calculator';
    const formid = document.getElementById('form');
    formid.insertBefore(pageHeader, formid.childNodes[0]);

    const body = document.querySelector('body');
    body.style.fontFamily = 'Verdana';

    const form = document.querySelector('#form');
    form.addEventListener('submit', handleFormSubmit);

    const createUnorderedList = document.createElement('ul');
    createUnorderedList.classList.add('ulist');
    body.appendChild(createUnorderedList);

})

const submitName = function (event) {
    const firstName = event.target.form_first_name_input.value;
    const surname = event.target.form_surname_input.value;
    const nameListItem = document.createElement('li');
    nameListItem.textContent = (`${firstName} ${surname}`);
    nameListItem.classList.add('name');
    return nameListItem;
};

const submitAge = function (event) {
    const age = event.target.form_age_input.value;
    const ageListItem = document.createElement('li');
    ageListItem.textContent = `${age} years old`;
    return ageListItem;
};

const submitHeight = function (event) {
    const height = event.target.form_height_input.value;
    const heightListItem = document.createElement('li');
    heightListItem.textContent = `${height}cm`;
    return heightListItem;
}

const submitWeight = function (event) {
    const weight = event.target.form_weight_input.value;
    const weightListItem = document.createElement('li');
    weightListItem.textContent = `${weight}kg`;
    return weightListItem;
}

const calculateBMI = function (event) {
    const height = event.target.form_height_input.value;
    const weight = event.target.form_weight_input.value;
    const bmiListItem= document.createElement('h2');
    const result = weight * (height*height);
    bmiListItem.textContent = `Your BMI is: ${result}`
    return bmiListItem
}

const handleFormSubmit = function (event) {
    event.preventDefault();
    const ulist = document.querySelector('ul');
    ulist.appendChild(submitName(event));
    ulist.appendChild(submitAge(event));
    ulist.appendChild(submitHeight(event));
    ulist.appendChild(submitWeight(event));
    ulist.appendChild(calculateBMI(event));
    document.getElementById('form').reset();
};



