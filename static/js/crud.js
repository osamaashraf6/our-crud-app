var inpt__value = document.querySelector(
    ".section__wrapper__side1__left__input__inpt"
);
var btn__create = document.querySelector(
    ".section__wrapper__side1__right__btncreate"
);
var btn__update = document.getElementsByClassName(
    "section__wrapper__side2__right__btnupdate"
);

var btn__delete = document.getElementsByClassName(
    "section__wrapper__side2__right__btndelete"
);
var parent__product = document.querySelector(".section__wrapper__side2");
// var para = document.querySelector(".section__wrapper__side2__left__p");
var pro = document.querySelector("#pro");

// =================================================================
inpt__value.addEventListener("keyup", function(e) {
    if (e.key == "Enter" && e.target.value != "") {
        let product = `
       <div id="pro">
       <div class="section__wrapper__side2__left float width65">
       <p class="section__wrapper__side2__left__p">
       ${inpt__value.value}
       </p>
   </div>
   <div class="section__wrapper__side2__right float width35">
       <button class="section__wrapper__side2__right__btnupdate">
 Update</button
><button class="section__wrapper__side2__right__btndelete">
 Delete
</button>
   </div>
       </div>
`;
        parent__product.innerHTML += product;
        inpt__value.value = "";
        for (let i = 0; i < btn__update.length; i++) {
            btn__update[i].addEventListener("click", function() {
                let one = btn__update[i].parentElement;
                let two = one.previousElementSibling;
                let three = two.children;
                three[0].setAttribute("contenteditable", "true");
                btn__update[i].addEventListener("click", function() {
                    let one = btn__update[i].parentElement;
                    let two = one.previousElementSibling;
                    let three = two.children;
                    three[0].setAttribute("contenteditable", "false");
                });
            });
        }
        for (let a = 0; a < btn__delete.length; a++) {
            btn__delete[a].addEventListener("click", function() {
                let one1 = btn__delete[a].parentElement;
                one1.parentElement.style.display = "none";
            });
        }
    } else if (e.target.value == "") {
        alert("Please enter a value.");
    }
});
// ==================================================================
btn__create.addEventListener("click", function() {
    if (inpt__value.value == "") {
        alert("Please enter a value.");
    } else {
        let product = `
       <div id="pro">
       <div class="section__wrapper__side2__left float width65">
       <p class="section__wrapper__side2__left__p">
       ${inpt__value.value}
       </p>
   </div>
   <div class="section__wrapper__side2__right float width35">
       <button class="section__wrapper__side2__right__btnupdate">Update</button><button class="section__wrapper__side2__right__btndelete">
 Delete
</button>
   </div>
       </div>
`;
        parent__product.innerHTML += product;
        inpt__value.value = "";
        for (let i = 0; i < btn__update.length; i++) {
            btn__update[i].addEventListener("click", function() {
                let one = btn__update[i].parentElement;
                let two = one.previousElementSibling;
                let three = two.children;
                three[0].setAttribute("contenteditable", "true");
                btn__update[i].addEventListener("click", function() {
                    let one = btn__update[i].parentElement;
                    let two = one.previousElementSibling;
                    let three = two.children;
                    three[0].setAttribute("contenteditable", "false");
                });
            });
        }
        for (let a = 0; a < btn__delete.length; a++) {
            btn__delete[a].addEventListener("click", function() {
                let one1 = btn__delete[a].parentElement;
                one1.parentElement.style.display = "none";
            });
        }
    }
});
// ====================================================================