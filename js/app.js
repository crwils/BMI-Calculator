document.addEventListener('DOMContentLoaded', () => {
    console.log('JS loaded');

    const pageHeader = document.createElement('h1');
    pageHeader.innerText = `BMI Calculator`;
    const formid = document.getElementById('form');
    formid.insertBefore(pageHeader, formid.childNodes[0]);

    const body = document.querySelector('body');
    body.style.fontFamily = 'Verdana';

    const form = document.querySelector('#form');
    form.addEventListener('submit', handleFormSubmit);

    const createUnorderedList = document.createElement('ul');
    createUnorderedList.classList.add('ulist');
    body.appendChild(createUnorderedList);

    const deleteButton = document.querySelector('#delete_button');
    deleteButton.addEventListener('click', handleDeleteButton);

});

const submitName = function (event) {
    const firstName = event.target.form_first_name_input.value;
    const surname = event.target.form_surname_input.value;
    const nameListItem = document.createElement('li');
    nameListItem.innerText = (`${firstName} ${surname}`);
    nameListItem.classList.add('listItem');
    return nameListItem;
};

const submitAge = function (event) {
    const age = event.target.form_age_input.value;
    const ageListItem = document.createElement('li');
    ageListItem.innerText = `${age} years old`;
    ageListItem.classList.add('listItem');
    return ageListItem;
};

const submitHeight = function (event) {
    const height = event.target.form_height_input.value;
    const heightListItem = document.createElement('li');
    heightListItem.innerText = `${height}cm`;
    heightListItem.classList.add('listItem');
    return heightListItem;
}

const submitWeight = function (event) {
    const weight = event.target.form_weight_input.value;
    const weightListItem = document.createElement('li');
    weightListItem.innerText = `${weight}kg`;
    weightListItem.classList.add('listItem');
    return weightListItem;
}

const calculateBMI = function (event) {
    const height = event.target.form_height_input.value;
    const weight = event.target.form_weight_input.value;
    const bmiListItem = document.createElement('h2');
    const result = roundNumber((weight/(height*height)));
    const range = calculateBMIRange(result);
    bmiListItem.innerText = `Your BMI is: ${result}.
    ${range}`;
    bmiListItem.classList.add('listItem');
    return bmiListItem;
}

const calculateBMIRange = function (result) {
    if (result <= 18.5) {
        return `You're in the underweight range!`;
    } else if (result <= 24.9) {
        return `You're in the healthy weight range!`;
    } else if (result <= 29.9) {
        return `You're in the overweight range!`;
    } else {
        return `You're in the obese range!`;
    };
};

const roundNumber = function (number) {
    return Number.parseFloat(number).toFixed(2);
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

const handleDeleteButton = function () {
    const ulist = document.querySelector('ul')
    const listItems = document.querySelector('listItem')
    ulist.remove('listItem');
    createUnorderedList();
};

const createUnorderedList = function () {
    const body = document.querySelector('body');
    const createUnorderedList = document.createElement('ul');
    createUnorderedList.classList.add('ulist');
    body.appendChild(createUnorderedList);
};