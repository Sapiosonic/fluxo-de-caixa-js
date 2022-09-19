let btnAdd = document.querySelector('button');
let table = document.querySelector('tbody');

let select = document.getElementById('dropdown');
let value = document.getElementById('value');
let total = document.getElementById('result')
let soma = 0;

btnAdd.addEventListener('click', () => {
    let months = Number(select.value);
    let valor = Number(value.value);
    const arr = [];
    arr.push(valor);

    switch (months) {
        case 1:  months = 'Janeiro'; break;
        case 2:  months = 'Fevereiro'; break;
        case 3:  months = 'Março'; break;
        case 4:  months = 'Abril'; break;
        case 5:  months = 'Maio'; break;
        case 6:  months = 'Junho'; break;
        case 7:  months = 'Julho'; break;
        case 8:  months = 'Agosto'; break;
        case 9:  months = 'Setembro'; break;
        case 10: months = 'Outubro'; break;
        case 11: months = 'Novembro'; break;
        case 12: months = 'Dezembro'; break;
    }

    let template = `
                        <td>${months}</td>
                        <td>${valor}</td>

    `;
    table.innerHTML += template;

    for(let i = 0; i < arr.length; i++){
      soma = soma + arr[i];
    }
    total.innerHTML = `<td> R$   ${soma} </td>`;

});



//https://www.youtube.com/watch?v=zWIyJdJW6t8
//https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/insertRow
//https://www.youtube.com/watch?v=vaj2kAfPYys
//https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces
