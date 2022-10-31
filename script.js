const input = document.getElementById("myInput").value;
const div = document.getElementById("myDropdown");
const li = div.getElementsByTagName("li");

if (input.length > 0) {
    for (let i = 0; i < li.length; i++) {
        li[i].style.display = "block"
    }
}
else{
    for (let i = 0; i < li.length; i++) {
        li[i].style.display = "none";
    }
}

function myFunction() {
    const input = document.getElementById("myInput");
    const filter = input.value.toUpperCase();
    const div = document.getElementById("myDropdown");
    const li = div.getElementsByTagName("li");


    for (let i = 0; i < li.length; i++) {
        const text = li[i].innerText;
        if(input.value.length == 0){
            for(let i=0; i<li.length; i++){
                li[i].style.display = "none";
              }
        }
        else{
            if (text.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            }
            else {
                li[i].style.display = "none";
            }
        }
    }
}


