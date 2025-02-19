document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".time-slot").forEach(slot => {
        let hour = slot.getAttribute("data-hour");
        let taskInput = slot.querySelector(".task");
        let saveButton = slot.querySelector(".save-btn");

        // Load saved tasks from localStorage
        taskInput.value = localStorage.getItem("task-" + hour) || "";

        // Save task to localStorage
        saveButton.addEventListener("click", function() {
            localStorage.setItem("task-" + hour, taskInput.value);
            alert("Task saved!");
        });
    });
});
