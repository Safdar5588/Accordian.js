
let buttons = document.querySelectorAll('.btn');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        
        let texts = document.querySelectorAll(".text");
        if (texts[i].style.display === "block") {
            texts[i].style.display = "none";
        } else {
            texts[i].style.display = "block";
        }
    });
}


// let buttons = document.querySelectorAll(".btn");
// let content = document.querySelectorAll(".text")

// for(let i = 0 ; i<buttons.length; i++){
//     buttons[i].addEventListener("click", function(){
//         for(j=0; j<content.length; j++){
//             content[j].classList.remove("active")
//         }
//         content[i].classList.add("active")
//     })

// }


