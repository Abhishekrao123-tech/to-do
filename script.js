document.getElementById("addTaskBtn").addEventListener("click", function () {
  let taskText = document.getElementById("taskInput").value;
  let taskDate = document.getElementById("taskDate").value;

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  let ul = document.getElementById("taskList");
  let li = document.createElement("li");
  li.className = "task";

  li.innerHTML = `
        <div>
            <strong>${taskText}</strong><br>
            <small>${taskDate ? "⏰ " + taskDate : ""}</small>
        </div>
        <div class="buttons">
            <button class="complete-btn">✔</button>
            <button class="edit-btn">✏</button>
            <button class="delete-btn">🗑</button>
        </div>
    `;

  // Mark as completed
  li.querySelector(".complete-btn").addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  // Edit task
  li.querySelector(".edit-btn").addEventListener("click", function () {
    let newText = prompt("Edit your task:", taskText);
    if (newText !== null && newText.trim() !== "") {
      li.querySelector("strong").innerText = newText;
    }
  });

  // Delete task
  li.querySelector(".delete-btn").addEventListener("click", function () {
    li.remove();
  });

  // Add to list
  ul.appendChild(li);

  // Clear inputs
  document.getElementById("taskInput").value = "";
  document.getElementById("taskDate").value = "";
});
