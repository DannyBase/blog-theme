
// header
// const header = document.querySelector("header");
// const navbar = document.querySelector("header .nav-bar");
// const blogInfo = document.querySelector("header .blog-info");
// const write = document.querySelector("header .step-1 .write");
// const searchInput = document.querySelector(
//   "header .blog-search-category .input-search input"
// );
// const blogCategories = document.querySelectorAll(
//   "header .blog-search-category .category-list .category-link"
// );
// const blogSearchCategory = document.querySelector(
//   "header .blog-search-category"
// );

// const links = document.querySelectorAll("header .step-2 .nav-link");

// window.addEventListener("scroll", fixNav);

// function fixNav() {
//   if (window.scrollY > 60) {
//     header.classList.add("active");
//     if (blogInfo != null) {
//       blogInfo.style.display = "none";
//     }
//     navbar.style.paddingTop = ".8rem";
//     navbar.style.gap = ".3rem";
//     write.classList.add("adjust-write");
//     links.forEach((link) => {
//       link.classList.add("adjust-nav-link");
//     });

//     if (blogSearchCategory != null) {
//       blogSearchCategory.style.marginTop = "1.5rem";
//     }
//     if (searchInput != null) {
//       searchInput.classList.add("adjust-input");
//     }
//     if (blogCategories != null) {
//       blogCategories.forEach((category) => {
//         category.classList.add("adjust-blog-categories");
//       });
//     }
//   } else {
//     header.classList.remove("active");
//     if (blogInfo != null) {
//       blogInfo.style.display = "flex";
//     }
//     navbar.style.paddingTop = "1.7rem";
//     navbar.style.gap = "1rem";
//     write.classList.remove("adjust-write");
//     links.forEach((link) => {
//       link.classList.remove("adjust-nav-link");
//     });
//     if (blogSearchCategory != null) {
//       blogSearchCategory.style.marginTop = "2rem";
//     }
//     if (searchInput != null) {
//       searchInput.classList.remove("adjust-input");
//     }
//     if (blogCategories != null) {
//       blogCategories.forEach((category) => {
//         category.classList.remove("adjust-blog-categories");
//       });
//     }
//   }
// }

const navList = document.querySelector(".hide-md");
function showNav() {
  navList.classList.add("show");
}

function hideNav() {
  navList.classList.remove("show");
}

const searchField = document.querySelector("#search-something");
const searchList = document.querySelector(".search-list");

function toggleCancleButton() {
  if (searchField.value.length > 1) {
    searchField.classList.add("change-input");
    searchList.style.display = "flex"
  }else{
    searchField.classList.remove("change-input");
    searchList.style.display = "none"
  }
  if (searchField.value.length > 0) {
    document.querySelector(".clear-input").style.display = "flex";
  } else {
    document.querySelector(".clear-input").style.display = "none";
  }
}

function clearInput() {
  overlaySearchField.value = "";
  document.querySelector(".clear-input").style.display = "none";
}

const password = document.getElementById("password-input");
const eyeIcon1 = document.querySelector(".btn-eye-1");
const eyeIcon2 = document.querySelector(".btn-eye-2");

function showEyeIcon() {
  if (password.value.length > 0) {
    eyeIcon1.style.display = "block";
    if (eyeIcon2.style.display == "block") {
      eyeIcon1.style.display = "none";
    }
  } else {
    document.querySelectorAll(".btn-eye").forEach((eye) => {
      eye.style.display = "none";
    });
  }

  if (password.value == "") {
    password.setAttribute("type", "password");
  }
}
function changType() {
  password.setAttribute("type", "text");
  eyeIcon1.style.display = "none";
  eyeIcon2.style.display = "block";
}

function unChange() {
  password.setAttribute("type", "password");
  eyeIcon2.style.display = "none";
  eyeIcon1.style.display = "block";
}


const ellipsis = document.querySelectorAll(".ellipsis")

ellipsis.forEach(ell => {
  ell.addEventListener("click", function(){
    const functions = this.nextElementSibling
   
    if(functions){
    functions.classList.toggle("show-functions")
    }
  })
})

document.getElementById("profile-picture").addEventListener("input", function(){
  // Get selected file
  const file = this.files[0]

  // Display a preview of the image
  const preview = document.querySelector(".preview")
  const reader = new FileReader();

  reader.onload = function(e){
    preview.src = e.target.result
  }

  reader.readAsDataURL(file)
  

})



// const btns = document.querySelectorAll(".btn-normal")

// btns.forEach(btn =>{
//   btn.addEventListener("click", () =>{
//     functions.style.display = "flex"
//   })

// })

// const functions = document.querySelector(".functions")
// const articleCards = document.querySelector(".article-cards").addEventListener("click", (e) =>{
//  if(e.target.parentElement.classList.contains("btn-normal")){
//     functions.style.display = "flex"

//     console.log(articleCards.functions)
    
//  }
// })
