const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")
const search = document.getElementById("usersInput")

function opnenPage1() {
    if(search.value === "") {
        alert("Please type somthing!");
        return;
    }
    let inputText = document.getElementById("usersInput").value;
    window.location.href= "https://www.google.com/search?q=" + inputText;
    search.value = "";
}
function opnenPage2() {
    if(search.value === "") {
        alert("Please type somthing!");
        return;
    }
    let inputText = document.getElementById("usersInput").value;
    window.location.href= "https://www.youtube.com/results?search_query=" + inputText;
    search.value = "";
}
function opnenPage3() {
    if(search.value === "") {
        alert("Please type somthing!");
        return;
    }
    let inputText = document.getElementById("usersInput").value;
    window.location.href= "https://www.google.com/search?q=" + inputText;
    search.value = "";
}
btn1.addEventListener("click", opnenPage1);
btn2.addEventListener("click", opnenPage2);
btn3.addEventListener("click", opnenPage3);

function removeText() {
    let inputText = document.getElementById("usersInput").value;
    usersInput.value = "";
}