var cardContainer = $('.card-container');
var submit = $('.submit-btn');

submit.on("click", createNewUser);
$(`.card-container`).on("click", ".delete-btn",deleteItem) ;

function createNewUser() {
  var toDo = $('.to-do').val();

  appendNewToDo(toDo);
  clearInputs();
}

function appendNewToDo(toDo) {
    cardContainer.append(`
    <div class="to-do-card">
  <p>${toDo}</p>
    <button class="delete-btn">Delete</button>
  </div>
`);
}

function clearInputs() {
  $('.to-do').val("");
}


function deleteItem(event) {
     event.target.parentNode.remove()
}
