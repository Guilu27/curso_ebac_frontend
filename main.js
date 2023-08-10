$(document).ready(function () {
  $("form").on("submit", function (e) {
    e.preventDefault();
    addNewTask();
  });

  const taskList = $("ul");

  taskList.on("click", "li", function () {
    $(this).toggleClass("task-done");
  });
});

function addNewTask() {
  const taskName = $("#task-name").val();

  $(`<li>${taskName}</li>`).appendTo("ul");

  $("#task-name").val("");
}

addNewTask.class;
