var nav = document.querySelector("nav");

var value1 = document.createTextNode(""),
    value2 = document.createTextNode(""),
    value3 = document.createTextNode("");

var hlo = document.getElementById("hlo").appendChild(value1);
var name = document.getElementById("name").appendChild(value2);
var comp = document.getElementById("comp").appendChild(value3);

var about = document.getElementById("abt");
var projects = document.getElementById("projects");
var skills = document.getElementById("skills");
var footer = document.getElementById("footer");

var nametxt = "I am Deekshith ";
var helloTxt = "Hello!!";
var compTxt = "computer science student...";
var i = 0;
var scrollEnable = false;

function printComp() {
    var char = compTxt[i++];
    value3.nodeValue += char;
    if (i < compTxt.length) setTimeout(printComp, 100);
    else {
        about.style.display = "block";
        projects.style.display = "block";
        //skills.style.display = "flex";
        //footer.style.display = "block";
    }
}

function printName() {
    var char = nametxt[i++];
    if (char == "|") value2.nodeValue += "\n";
    else value2.nodeValue += char;
    if (i < nametxt.length) setTimeout(printName, 200);
    else {
        i = 0;
        printComp();
    }
}

function printHello() {
    var char = helloTxt[i++];
    value1.nodeValue += char;
    if (i < helloTxt.length) setTimeout(printHello, 200);
    else {
        i = 0;
        printName();
    }
}

function clickContact() {
    window.scrollTo(0, 1300);
}

function clickProject() {
    window.scrollTo(0, 1190);
}

clickAbout = () => {
    window.scrollTo(0, 650);
};

var aby = 0,
    sky = 0,
    pjy = 0;
printHello();
function scrollManeger() {
    console.log("x : " + scrollY);
    if (scrollY >= 580) {
        aby = 1;
        sky += 0.01;
    } else aby += 0.01;
    if (scrollY >= 750) {
        sky = 1;
        pjy += 0.01;
        footer.childNodes[3].style.display = "flex";
        footer.style.opacity = 1;
    }
    if (scrollY >= 1050) {
        pjy = 1;
    }
    if (scrollY >= 1452) {
        if (nav.childNodes[1].className != "pos")
            nav.childNodes[1].className += "pos";
    } else {
        nav.childNodes[1].classList.remove("pos");
    }
    about.style.opacity = aby;
    skills.style.opacity = sky;
    projects.style.opacity = pjy;
    footer.style.display = "block";
    console.log(nav.childNodes);
}
document.addEventListener("scroll", scrollManeger);
