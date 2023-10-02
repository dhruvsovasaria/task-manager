let myWork = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("add-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const workFromLocalStorage = JSON.parse(localStorage.getItem("myWork"));

if (workFromLocalStorage) {
  myWork = workFromLocalStorage;
  render(myWork);
}

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `<li ondblclick="deleteTask(${i})"><input type="checkbox" > ${leads[i]}</li>`;
  }
  ulEl.innerHTML = listItems;
}

deleteBtn.addEventListener("click", function () {
  localStorage.clear();
  myWork = [];
  render(myWork);
});

inputBtn.addEventListener("click", function () {
  if (inputEl.value) {
    myWork.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myWork", JSON.stringify(myWork));
    render(myWork);
  }
});

function deleteTask(index) {
  myWork.splice(index, 1);
  localStorage.setItem("myWork", JSON.stringify(myWork));
  render(myWork);
}
