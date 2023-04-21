const dataTable = document.getElementById('data-table');
const addForm = document.getElementById('add-form');

const Vezeteknev = document.getElementById('vezeteknev-input');
const Keresztnev = document.getElementById('keresztnev-input');
const Telefonszam = document.getElementById('telefonszam-input');

addForm.addEventListener('submit', function(evet){
    evet.preventDefault();

    const row = document.createElement('tr');
    const vezeteknevCell = document.createElement('td');
    const keresztnevCell = document.createElement('td');
    const telefonszamCell = document.createElement('td');

    vezeteknevCell.textContent = Vezeteknev.value;
    keresztnevCell.textContent = Keresztnev.value;
    telefonszamCell.textContent = Telefonszam.value;

    row.appendChild(vezeteknevCell);
    row.appendChild(keresztnevCell);
    row.appendChild(telefonszamCell);

    dataTable.appendChild(row);

    Vezeteknev.value = '';
    Keresztnev.value = '';
    Telefonszam.value = '';

});
function torol(){
    const row = document.createElement('tr');
    const vezeteknevCell = document.createElement('td');
    const keresztnevCell = document.createElement('td');
    const telefonszamCell = document.createElement('td');

    vezeteknevCell.textContent = Vezeteknev.value;
    keresztnevCell.textContent = Keresztnev.value;
    telefonszamCell.textContent = Telefonszam.value;

    row.appendChild(vezeteknevCell);
    row.appendChild(keresztnevCell);
    row.appendChild(telefonszamCell);

    dataTable.appendChild(row);

    Vezeteknev.value = '';
    Keresztnev.value = '';
    Telefonszam.value = '';

    

}