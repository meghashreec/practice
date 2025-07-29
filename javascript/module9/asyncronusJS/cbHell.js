// 🔥 Callback Hell in JavaScript — Explained
// Callback Hell is a term used to describe the situation when multiple nested callbacks make code:

// Hard to read

// Hard to debug

// Hard to maintain

// This often happens in asynchronous JavaScript, especially when one async task depends on the result of another.

// 😱 What Callback Hell Looks Like

getUser(function (user) {
  getPosts(user.id, function (posts) {
    getComments(posts[0].id, function (comments) {
      console.log("Comments:", comments);
    });
  });
});
// It becomes a "pyramid of doom":
// Too many nested levels → messy, unreadable code.

// 🧠 Why Callback Hell Happens
// JavaScript uses callbacks for asynchronous operations like:

// setTimeout()

// Network requests (XMLHttpRequest)

// Event handling

// File I/O (in Node.js)

// And when these are chained without structure, it spirals into chaos.

// ✅ How to Avoid Callback Hell
// 1️⃣ Modularize Functions
// Break large callbacks into named functions:

function handleComments(comments) {
  console.log("Comments:", comments);
}

function handlePosts(posts) {
  getComments(posts[0].id, handleComments);
}

function handleUser(user) {
  getPosts(user.id, handlePosts);
}

getUser(handleUser);

// 2️⃣ Use Promises
// Promises flatten nested callbacks:

getUser()
  .then((user) => getPosts(user.id))
  .then((posts) => getComments(posts[0].id))
  .then((comments) => console.log("Comments:", comments))
  .catch((err) => console.error(err));

// 3️⃣ Use async/await
// Even cleaner, more readable:

async function showComments() {
  try {
    const user = await getUser();
    const posts = await getPosts(user.id);
    const comments = await getComments(posts[0].id);
    console.log("Comments:", comments);
  } catch (err) {
    console.error(err);
  }
}
// 🔁 Summary
// | Technique     | Readability | Error Handling | Suitable For       |
// | ------------- | ----------- | -------------- | ------------------ |
// | Callback Hell | ❌ Low       | ❌ Scattered    | Legacy Code        |
// | Promises      | ✅ Better    | ✅ Chained      | Modern Async Code  |
// | async/await   | ✅✅ Best     | ✅ Try/Catch    | Most New Codebases |
