const createBtn = document.getElementById('create-btn');
const noteList = document.querySelector('.notes-list');
let notes = document.querySelectorAll('.input-box');

function showNotes(){
  noteList.innerHTML = localStorage.getItem("notes");
}

showNotes();

function updateStorage(){
  localStorage.setItem("notes", noteList.innerHTML);
}

createBtn.addEventListener('click', () => {
  let inputBox = document.createElement('p');
  let img = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "images/delete.png";
  noteList.appendChild(inputBox).appendChild(img);
});

noteList.addEventListener('click', function(e){
  if(e.target.tagName === 'IMG'){
    e.target.parentElement.remove();
    updateStorage();
  }
  else if(e.target.tagName === 'P'){
    notes = document.querySelectorAll('.input-box');
    notes.forEach(note => {
      note.onkeyup = function(){
        updateStorage();
      }
    })
  }
})

document.addEventListener("keydown", event => {
  if(event.key === "Enter"){
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
})