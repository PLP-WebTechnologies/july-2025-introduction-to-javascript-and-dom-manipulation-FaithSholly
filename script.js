// ================================
// 🎯 Part 1: JavaScript Basics
// ================================
function checkAge() {
  let age = document.getElementById("ageInput").value;

  if (age >= 18) {
    document.getElementById("ageResult").textContent = "✅ You are an adult.";
  } else {
    document.getElementById("ageResult").textContent = "❌ You are a minor.";
  }
}

// ================================
// ❤️ Part 2: Functions
// ================================

// Function 1: Calculate total of two numbers
function calculateTotal(a, b) {
  return a + b;
}

function showTotal() {
  let total = calculateTotal(10, 20);
  document.getElementById("totalResult").textContent = "Total = " + total;
}

// Function 2: Format a message
function formatMessage(name) {
  return "Hello, " + name + "! Welcome 👋";
}
console.log(formatMessage("Student")); // Example output in console

// ================================
// 🔁 Part 3: Loops
// ================================

// Example 1: Countdown using a for loop
function countdown() {
  let list = document.getElementById("countdownList");
  list.innerHTML = ""; // Clear previous list
  for (let i = 5; i > 0; i--) {
    let li = document.createElement("li");
    li.textContent = i;
    list.appendChild(li);
  }
}

// Example 2: Looping through an array
let books = ["Book A", "Book B", "Book C"];
books.forEach(function(book) {
  console.log("📚 " + book);
});

// ================================
// 🌐 Part 4: DOM Manipulation
// ================================

// Example 1: Toggle text content
function toggleMessage() {
  let textElement = document.getElementById("toggleText");
  if (textElement.textContent.includes("Hello")) {
    textElement.textContent = "Text has been toggled ✅";
  } else {
    textElement.textContent = "Hello! Click the button to toggle me 👋";
  }
}

// Example 2: Change background color
document.body.addEventListener("dblclick", function() {
  document.body.style.backgroundColor = "#dff9fb";
});

// Example 3: Create new element dynamically
let newPara = document.createElement("p");
newPara.textContent = "🌟 This was added with JavaScript!";
document.body.appendChild(newPara);