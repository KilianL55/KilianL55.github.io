for (const li of document.querySelectorAll(".item")) {
    li.addEventListener("click", function () {
        const active = document.querySelector(".item.active");
        this.classList.toggle("active");
        if (active && this !== active) active.classList.toggle("active");
    });
}
let num = 1;
function img(){
    if (num === 1) {
        document.getElementById("img"+ num).style.display="block";
        document.getElementById("img"+ 11).style.display="none";
    }
    if (num === 2) {
        document.getElementById("img"+ num).style.display="block";
        document.getElementById("img"+ 1).style.display="none";
    }
    if (num === 3) {
        document.getElementById("img"+ num).style.display="block";
        document.getElementById("img"+ 2).style.display="none";
    }
    if (num === 4) {
        document.getElementById("img"+ num).style.display="block";
        document.getElementById("img"+ 3).style.display="none";
    }
    if (num === 5) {
        document.getElementById("img"+ num).style.display="block";
        document.getElementById("img"+ 4).style.display="none";
    }
    num++;
}



function open1(){
    document.getElementById('1').style.display="flex";
    document.getElementById('2').style.display="none";
    document.getElementById('3').style.display="none";
    document.getElementById('4').style.display="none";
    document.getElementById('5').style.display="none";
}

function open2(){
    document.getElementById('2').style.display="flex";
    document.getElementById('1').style.display="none";
    document.getElementById('3').style.display="none";
    document.getElementById('4').style.display="none";
    document.getElementById('5').style.display="none";
}

function open3(){
    document.getElementById('3').style.display="flex";
    document.getElementById('1').style.display="none";
    document.getElementById('2').style.display="none";
    document.getElementById('4').style.display="none";
    document.getElementById('5').style.display="none";
}

function open4(){
    document.getElementById('4').style.display="flex";
    document.getElementById('1').style.display="none";
    document.getElementById('2').style.display="none";
    document.getElementById('3').style.display="none";
    document.getElementById('5').style.display="none";
}

function open5(){
    document.getElementById('5').style.display="flex";
    document.getElementById('1').style.display="none";
    document.getElementById('2').style.display="none";
    document.getElementById('3').style.display="none";
    document.getElementById('4').style.display="none";
}