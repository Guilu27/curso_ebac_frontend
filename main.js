const taskList = $(".container");

$(document).ready(function () {
  formSubmit();

  taskDone();

  removeTask();

  editTask();
});

function formSubmit() {
  $("form").on("submit", function (e) {
    e.preventDefault();
    addNewTask();
  });
}

function addNewTask() {
  const taskName = $("#task-name").val();

  $(
    `<div class="task-list">
        <img src="imagens/lixo.png" alt="icone de lixeira, para apagar as tasks" class="delete-task">
        <img src="imagens/pen.png" alt="icone de caneta, para editar as tasks" class="edit-task">
        <p class="task">${taskName}</p>
    </div> `
  ).appendTo(".container");

  $("#task-name").val("");
}

function taskDone() {
  taskList.on("click", ".task", function () {
    $(this).toggleClass("task-done");
  });
}

function removeTask() {
  taskList.on("click", ".delete-task", function () {
    $(this).parent().remove();
  });
}

function editTask() {
  taskList.on("click", ".edit-task", function () {
    const originalText = $(this).next("p").text();

    $(this)
      .next("p")
      .html(`<input class="editor" type="text" value="${originalText}" />`);
    $(".editor").focus();
  });

  taskList.on("blur", ".editor", function () {
    const newText = $(this).val();
    $(this).parent().replaceWith(`<p class="task">${newText}</p>`);
  });
}
