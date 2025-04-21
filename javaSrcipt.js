// script.js

//for New Book
document.addEventListener("DOMContentLoaded", function () {
  const newBookBtn = document.getElementById("newBookBtn");

  newBookBtn.addEventListener("click", function () {
    window.location.href = "new-book.html";
  });
});


//for Book Details(For Multiple Buttons with Same Class)
document.addEventListener("DOMContentLoaded", function () {
  const detailBtns = document.querySelectorAll(".bookDetailsBtn");

  detailBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      window.location.href = "book-details.html";
    });
  });
});


          //  for one button(Use id)

// document.addEventListener("DOMContentLoaded", function () {
//   const newBookBtn = document.getElementById("bookDetailsBtn");

//   newBookBtn.addEventListener("click", function () {
//     window.location.href = "book-details.html";
//   });
// });



//for Update
document.addEventListener("DOMContentLoaded", function () {
  const detailBtns = document.querySelectorAll(".bookUpdateBtn");

  detailBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      window.location.href = "book-update.html";
    });
  });
});




          //  for one button(Use id)

// document.addEventListener("DOMContentLoaded", function () {
//   const newBookBtn = document.getElementById("bookUpdateBtn");

//   newBookBtn.addEventListener("click", function () {
//     window.location.href = "book-update.html";
//   });
// });



//for delete button

function confirmWindow(ppp)
      {
          window.confirm("Are you sure you want to delete",ppp);
      }

// var b = window.confirm("Are you sure your want to delete");
// document.getElementById("confirmWindow").textContent=b; 


// start new-book .............

    



//  for back button
document.addEventListener("DOMContentLoaded", function () {
  const newBookBtn = document.querySelector(".back");

  newBookBtn.addEventListener("click", function () {
    window.location.href = "index.html";
  });
});




// start book-details


//  for back button
document.addEventListener("DOMContentLoaded", function () {
  const newBookBtn = document.querySelector(".back-1");

  newBookBtn.addEventListener("click", function () {
    window.location.href = "index.html";
  });
});
