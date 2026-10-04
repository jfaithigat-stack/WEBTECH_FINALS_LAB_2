// Run automatically when the page loads
// Delay gives the browser time to paint the page before dialogs fire
window.onload = function () {
  setTimeout(startEvaluation, 150);
};

function startEvaluation() {
  // 1. Welcome message
  alert("Welcome to the Score Evaluator!");

  // 2. Ask for name
  var name = prompt("Enter your name:");

  if (name === null || name.trim() === "") {
    showMessage("Evaluation cancelled. Name cannot be empty.");
    return;
  }

  // 3. Ask for score
  var scoreInput = prompt("Enter your score (0-100):");

  if (scoreInput === null || scoreInput.trim() === "") {
    showMessage("Evaluation cancelled. Score cannot be empty.");
    return;
  }

  // 4. Validate score
  var score = Number(scoreInput);

  if (isNaN(score)) {
    showMessage("Invalid input. Score must be a number.");
    return;
  }

  if (score < 0) {
    showMessage("Invalid input. Score cannot be negative.");
    return;
  }

  if (score > 100) {
    showMessage("Invalid input. Score cannot exceed 100.");
    return;
  }

  // 5. Confirm to proceed
  var proceed = confirm("Name: " + name + "\nScore: " + score + "\n\nDo you want to proceed?");

  if (!proceed) {
    showMessage("Evaluation cancelled. You chose not to proceed.");
    return;
  }

  // 6. Evaluate and display result
  var remark = evaluateScore(score);
  displayResult(name, score, remark);
}

// Function to evaluate the score using conditional branching
function evaluateScore(score) {
  if (score >= 90 && score <= 100) {
    return "Excellent";
  } else if (score >= 75 && score <= 89) {
    return "Passed";
  } else if (score >= 0 && score < 75) {
    return "Failed";
  } else {
    return "Invalid Score";
  }
}

// Display result on the page
function displayResult(name, score, remark) {
  document.getElementById("nameOut").textContent   = name;
  document.getElementById("scoreOut").textContent  = score;
  document.getElementById("remarkOut").textContent = remark;

  document.getElementById("result").classList.remove("hidden");
  document.getElementById("message").classList.add("hidden");
}

// Show error or cancelled message
function showMessage(msg) {
  var el = document.getElementById("message");
  el.textContent = msg;
  el.classList.remove("hidden");
  document.getElementById("result").classList.add("hidden");
}

// Reset and run again
function resetPage() {
  document.getElementById("result").classList.add("hidden");
  document.getElementById("message").classList.add("hidden");
  setTimeout(startEvaluation, 150);
}
