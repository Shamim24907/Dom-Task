// 1️⃣ Toggle Dark Mode
const darkBtn = document.querySelector("#darkModeBtn");
darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// 2️⃣ Display User Input
const nameInput = document.querySelector("#nameInput");
const greetP = document.querySelector("#greetP");
document.querySelector("#showNameBtn").addEventListener("click", () => {
  const name = nameInput.value.trim();
  greetP.textContent = name ? `Hello, ${name}!` : "Please enter your name.";
});

// 3️⃣ Image Gallery Navigation
const galleryImgs = [
  "images/pic1.jpg",
  "images/pic2.jpg",
  "images/pic3.jpg",
  "images/pic4.jpg",
  "images/pic5.jpg"
];
let index = 0;
const galleryImg = document.querySelector("#galleryImg");

document.querySelector("#next").addEventListener("click", () => {
  index = (index + 1) % galleryImgs.length;
  galleryImg.src = galleryImgs[index];
});

document.querySelector("#prev").addEventListener("click", () => {
  index = (index - 1 + galleryImgs.length) % galleryImgs.length;
  galleryImg.src = galleryImgs[index];
});

// 4️⃣ Form Validation Message
const emailInput = document.querySelector("#emailInput");
const submitBtn = document.querySelector("#submitBtn");
const errorMsg = document.querySelector("#errorMsg");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (emailInput.value.trim() === "") {
    errorMsg.textContent = "Email is required!";
    errorMsg.style.color = "red";
  } else {
    errorMsg.textContent = "Form submitted successfully!";
    errorMsg.style.color = "green";
  }
});

// 5️⃣ Character Counter
const tweetInput = document.querySelector("#tweetInput");
const charCount = document.querySelector("#charCount");
tweetInput.addEventListener("input", () => {
  const max = 240;
  const remaining = max - tweetInput.value.length;
  charCount.textContent = `${remaining} characters remaining`;
  charCount.style.color = remaining < 0 ? "red" : "black";
});


// TASK 6: Accordion FAQ

const questions = document.querySelectorAll(`.question`);

questions.forEach(q => {
  q.addEventListener("click", () => {
    document.querySelectorAll(`.answer`).forEach(ans => ans.style.display = `none`);
    const ans = q.nextElementSibling;
    ans.style.display = ans.style.display === `block` ? `none` : `block`;
  });
});

// TASK 7: Shopping Cart Counter

const cartBtn = document.querySelector('.addToCart');
const cartCount = document.getElementById('cartCount');
let count = 0;

cartBtn.addEventListener('click', () => {
  count++;
  cartCount.textContent = count;
});

// TASK 8: Hover Tooltip

const image = document.getElementById('productImage');
const tooltip = document.querySelector('.tooltip');

image.addEventListener('mouseenter', () => {
  tooltip.style.display = 'block';
});
image.addEventListener('mouseleave', () => {
  tooltip.style.display = 'none';
})

// TASK 9: Double Click to Edit

const items = document.querySelectorAll('#todoList li');

items.forEach(item => {
  item.addEventListener('dblclick', () => {
    const newText = prompt('Edit task:', item.textContent);
    if (newText) TextMetrics.textContent = newText;
  });
});


// TASK 10: Prevent Form Submission

const form = document.getElementById('loginForm');
const pass = document.getElementById('password');
const errorMessage = document.getElementById('formError');

form.addEventListener('submit', (e) => {
  if (pass.value.length < 8) {
    e.preventDefault();
    errorMessage.textContent = " Password mus be at least 8 characters";
  }
  else {
    errorMessage.textContent = "";
    alert("Login Successful")
  }
});


// ---- Task 11: Add Comments ----
const commentInput = document.getElementById("commentInput");
const postCommentBtn = document.getElementById("postCommentBtn");
const commentList = document.getElementById("commentList");

postCommentBtn.addEventListener("click", () => {
  const text = commentInput.value.trim();
  if (!text) return; 

  const li = document.createElement("li");
  li.textContent = text;

  const remove = document.createElement("button");
  remove.textContent = "✖";
  remove.className = "remove-btn";
  remove.addEventListener("click", () => li.remove());
  li.appendChild(remove);

  commentList.appendChild(li);
  commentInput.value = "";
});