// Get the counter element
let counter = document.getElementById("counter");

// Get the current view count from local storage or initialize it to zero
let viewCount = localStorage.getItem("viewCount") || 0;

// Increment the view count
viewCount++;

// Set the counter text to the updated view count
counter.innerText = viewCount;

// Save the updated view count to local storage
localStorage.setItem("viewCount", viewCount);
