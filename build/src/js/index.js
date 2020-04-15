// const Model = require('./js/Model.js');
// const View = require('./js/View.js');
// const Controller = require('./js/Controller.js');

// function initProject() {
//     const model = new Model();
//     const view = new View();
//     const controller = new Controller(model, view);
// }

// initProject()

const root = document.querySelector('div#root');
console.log(root);


//first form--------------------------------------------------------
const div = document.createElement('div');
div.setAttribute('class', 'container-first')
root.appendChild(div);

const formTag = document.createElement('form');
formTag.setAttribute('id','container-first__form-input')
div.appendChild(formTag);

const RegDiv = document.createElement('div');
RegDiv.setAttribute('class', 'find');
RegDiv.title = 'регистрация';
RegDiv.textContent = 'введите данные';
formTag.appendChild(RegDiv);

const lebel = document.createElement('label');
lebel.setAttribute('for', 'name');
lebel.innerHTML = 'Имя <span>*</span>';
formTag.appendChild(lebel);

const input = document.createElement('input');
input.setAttribute('id', 'name');
input.setAttribute('name', 'name');
input.setAttribute('type', 'text');
input.placeholder = 'Введите имя';
formTag.appendChild(input);

const lebel_1 = document.createElement('label');
lebel_1.setAttribute('for', 'surname');
lebel_1.innerHTML = 'Фамилия <span>*</span>';
formTag.appendChild(lebel_1);

const input_1 = document.createElement('input');
input_1.setAttribute('id', 'surname');
input_1.setAttribute('type', 'text');
input_1.placeholder = 'Введите Фамилию';
formTag.appendChild(input_1);

const lebel_2 = document.createElement('label');
lebel_2.setAttribute('for', 'age');
lebel_2.innerHTML = 'Возрост <span>*</span>';
formTag.appendChild(lebel_2);

const input_2 = document.createElement('input');
input_2.setAttribute('id', 'age');
input_2.setAttribute('type', 'number');
input_2.placeholder = 'Введите Возрост';
input_2.min = '1';
input_2.max = '100';    
formTag.appendChild(input_2);

const btnDiv = document.createElement('div');
btnDiv.setAttribute('onclick', 'sendName()');
btnDiv.setAttribute('id', 'send');
btnDiv.setAttribute('class', 'btn');
btnDiv.textContent = 'Отправить';
formTag.appendChild(btnDiv);

//first-page_second form------------------------------------------------
const formTag_1 = document.createElement('form');
formTag_1.setAttribute('id','container-first__form-input')
div.appendChild(formTag_1);

const findDiv = document.createElement('div');
findDiv.setAttribute('class', 'find');
findDiv.textContent = 'Список Имен';
findDiv.title = 'вы можете найти тут свою имя';
formTag_1.appendChild(findDiv);

const textarea = document.createElement('div');
textarea.setAttribute('id', 'message');
textarea.name = 'message';
textarea.placeholder = 'Имя Фамилия Возрост';
formTag_1.appendChild(textarea);

const list = document.createElement('ul');
list.setAttribute('id', 'list');
textarea.appendChild(list);

//second page -------------------------------------------------
const div_1 = document.createElement('div');
div_1.setAttribute('class', 'container-second');
root.appendChild(div_1);

const formTag_2 = document.createElement('form');
formTag_2.setAttribute('id','container-first__form-input');
div_1.appendChild(formTag_2);

const RegDiv_1 = document.createElement('div');
RegDiv_1.setAttribute('class', 'find');
RegDiv_1.title = 'найдите свое имя';
RegDiv_1.textContent = 'поиск человека !';
formTag_2.appendChild(RegDiv_1);

const lebel_3 = document.createElement('label');
lebel_3.setAttribute('for', 'names');
lebel_3.innerHTML = 'Имя<span>*</span>';
formTag_2.appendChild(lebel_3);

const input_3 = document.createElement('input');
input_3.setAttribute('id', 'names');
input_3.setAttribute('name','name');
input_3.setAttribute('type', 'text');
input_3.placeholder = 'Введите имя';
formTag_2.appendChild(input_3);

const lebel_4 = document.createElement('label');
lebel_4.setAttribute('for', 'surnames');
lebel_4.innerHTML = 'Фамилия <span>*</span>';
formTag_2.appendChild(lebel_4);

const input_4 = document.createElement('input');
input_4.setAttribute('id', 'surnames');
input_4.setAttribute('type', 'text');
input_4.placeholder = 'Введите Фамилию';
formTag_2.appendChild(input_4);

const lebel_5 = document.createElement('label');
lebel_5.setAttribute('for', 'ages');
lebel_5.innerHTML = 'Возрост <span>*</span>';
formTag_2.appendChild(lebel_5);

const input_5 = document.createElement('input');
input_5.setAttribute('id', 'ages');
input_5.setAttribute('type', 'number');
input_5.placeholder = 'Введите Возрост';
input_5.min = '1';
input_5.max = '100';
formTag_2.appendChild(input_5);

const btnDiv_1 = document.createElement('div');
btnDiv_1.setAttribute('onclick', 'searchName()');
btnDiv_1.setAttribute('class', 'btn');
btnDiv_1.textContent = 'Поиск';
formTag_2.appendChild(btnDiv_1);

//second-page_second-form-------------------------------
const formTag_3 = document.createElement('form');
formTag_3.setAttribute('id','container-first__form-input')
div_1.appendChild(formTag_3);

const findDiv_1 = document.createElement('div');
findDiv_1.setAttribute('class', 'find');
findDiv_1.title = 'Результат поиска';
findDiv_1.textContent = ' Результат поиска';
formTag_3.appendChild(findDiv_1);

const textarea_1 = document.createElement('div');
textarea_1.setAttribute('id', 'message');
textarea_1.name = 'message';
textarea_1.placeholder = 'Имя Фамилия Возрост';
formTag_3.appendChild(textarea_1);

const list_1 = document.createElement('ul');
list_1.setAttribute('id', 'list2')
textarea_1.appendChild(list_1);



//--------------------------------------------------------------------------------


var people = [];

function sendName() {
    var sName = document.getElementById('name').value;
    var sSurname = document.getElementById('surname').value;
    var sAge = document.getElementById('age').value;
    if (!((sName === "") && (sSurname === "") && (sAge === ""))) {
        var p = {
            name: sName,
            surname: sSurname,
            age: sAge, 
        };
    people.push(p);
    
    for (i = 0; i < people.length; i++) {
        let oldlist = document.getElementById('list');
    for (i = 0; i < people.length; i++) {
        var newlist = document.getElementById('list').innerHTML;
        var newlist = newlist + "<li>" + people[i].name + " " + people[i].surname  + " " +  people[i].age + "</li>";
    };
    oldlist.innerHTML =  newlist;
    };
  };
};


function searchName() {
    var sNames = document.getElementById('names').value;
    var sSurnames = document.getElementById('surnames').value;
    var sAges = document.getElementById('ages').value;
    

    var resmassiv = [];

    for (var i = 0; i < people.length; i++) {
        if ((people[i].name === sNames && sNames !== "") || (people[i].surname === sSurnames && sSurnames !== "") || (people[i].age === sAges && sAges !== "")) {
            var newarray = {
                name: people[i].name,
                surname: people[i].surname,
                age: people[i].age,
            } 
        resmassiv.push(newarray);
        } else {return 'ged qarnivu qashi'};
    };

        document.getElementById('list2').innerHTML = "";
        var resultObject = resmassiv;
        searchList = resultObject.length;
        for (y = 0; y < searchList; y++) {
    
            oldlistsearch = document.getElementById('list2');
            for (y = 0; y < searchList; y++) {
                var newlistsearchh = document.getElementById('list2').innerHTML;
                var newlistsearch = newlistsearchh + "<li>" + resultObject[y].name + " " + resultObject[y].surname + " " + resultObject[y].age + "</li>";
            oldlistsearch.innerHTML = newlistsearch;
        };
     };
};