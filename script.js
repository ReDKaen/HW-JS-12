const btn = document.querySelectorAll(".btn-wrapper")
const arrBtn = ["s","e","o","n","l","z","Enter"]


btn[0].addEventListener('keydown', setColorBtn)

function setColorBtn(event) {
    
    

    if (!arrBtn.includes(event.key.toString())){
        return
    }

    for (i = 0; i < btn[0].children.length; i++){     

        if(btn[0].children[i].textContent.toUpperCase() === event.key.toString().toUpperCase()){
            btn[0].children[i].style.backgroundColor = "blue";
        } else {
            btn[0].children[i].style.backgroundColor = "black";
        }

    }
}
