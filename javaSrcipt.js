// script.js

//for New Book
document.addEventListener("DOMContentLoaded", function () {
  const newBookBtn = document.getElementById("newBookBtn");

  newBookBtn.addEventListener("click", function () {
    window.location.href = "new-book.html";
  });
});


//for Book Details
document.addEventListener("DOMContentLoaded", function () {
  const newBookBtn = document.getElementById("bookDetailsBtn");

  newBookBtn.addEventListener("click", function () {
    window.location.href = "book-details.html";
  });
});



//for Update
document.addEventListener("DOMContentLoaded", function () {
  const newBookBtn = document.getElementById("bookUpdateBtn");

  newBookBtn.addEventListener("click", function () {
    window.location.href = "book-update.html";
  });
});



//for delete button
// var b = window.confirm("Are you sure your want to delete");
// document.getElementById("confirmWindow").textContent=b;
function confirmWindow(ppp)
      {
          window.confirm("Are you sure you want to delete",ppp);
      }
