for (const li of document.querySelectorAll(".item")) {
    li.addEventListener("click", function () {
        const active = document.querySelector(".item.active");
        this.classList.toggle("active");
        if (active && this !== active) active.classList.toggle("active");
    });
}

onload(document.getElementById("patrimoine").style.display="flex");

function openPatrimoine(){
    document.getElementById("patrimoine").style.display="flex";
    document.getElementById("incidents").style.display="none";
    document.getElementById("presence").style.display="none";
    document.getElementById("projet").style.display="none";
    document.getElementById("service").style.display="none";
    document.getElementById("developpement").style.display="none";
}

function openIncidents(){
    document.getElementById("incidents").style.display="flex";
    document.getElementById("patrimoine").style.display="none";
    document.getElementById("presence").style.display="none";
    document.getElementById("projet").style.display="none";
    document.getElementById("service").style.display="none";
    document.getElementById("developpement").style.display="none";
}

function openPresence(){
    document.getElementById("presence").style.display="flex";
    document.getElementById("patrimoine").style.display="none";
    document.getElementById("incidents").style.display="none";
    document.getElementById("projet").style.display="none";
    document.getElementById("service").style.display="none";
    document.getElementById("developpement").style.display="none";
}

function openProjet(){
    document.getElementById("projet").style.display="flex";
    document.getElementById("patrimoine").style.display="none";
    document.getElementById("incidents").style.display="none";
    document.getElementById("presence").style.display="none";
    document.getElementById("service").style.display="none";
    document.getElementById("developpement").style.display="none";
}

function openService(){
    document.getElementById("service").style.display="flex";
    document.getElementById("patrimoine").style.display="none";
    document.getElementById("incidents").style.display="none";
    document.getElementById("presence").style.display="none";
    document.getElementById("projet").style.display="none";
    document.getElementById("developpement").style.display="none";
}

function openDeveloppement(){
    document.getElementById("developpement").style.display="flex";
    document.getElementById("patrimoine").style.display="none";
    document.getElementById("incidents").style.display="none";
    document.getElementById("presence").style.display="none";
    document.getElementById("projet").style.display="none";
    document.getElementById("service").style.display="none";
}