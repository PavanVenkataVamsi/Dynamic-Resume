function jsonloading(file,callback) {
    var xhr=new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open("GET",file,true);
    xhr.onreadystatechange=()=>{
        if (xhr.readyState =="4" && xhr.status =="200") {
        callback(xhr.responseText);	
        }  
    }
    xhr.send();
}
jsonloading("data.json",(text)=>{
        let d = JSON.parse(text);
        console.log(d);
        Details(d.details);
        Education(d.education);
        Tech(d.tech);
})
var card1 = document.querySelector(".card-1");
var card2 = document.querySelector(".card-2");
function Details(react){
    var n = document.createElement("h2");
    n.textContent=react.name;
    card1.appendChild(n);
    var b = document.createElement("b");
    b.textContent="E-mail:";
    var a = document.createElement("p");
    a.textContent=react.email;
    card1.appendChild(b);
    card1.appendChild(a);
    var b = document.createElement("b");
    b.textContent="Number:";
    card1.appendChild(b);
    var a = document.createElement("p");
    a.textContent=react.number;
    card1.appendChild(a);
    var b = document.createElement("b");
    b.textContent="Address:";
    card1.appendChild(b);
    var a = document.createElement("p");
    a.textContent=react.address;
    card1.appendChild(a);
    var b = document.createElement("b");
    b.textContent="Linkedin:";
    card1.appendChild(b);
    var a = document.createElement("p");
    a.textContent=react.linkedin;
    card1.appendChild(a);
    var b = document.createElement("b");
    b.textContent="Github:";
    card1.appendChild(b);
    var a = document.createElement("p");
    a.textContent=react.github;
    card1.appendChild(a);
    var b = document.createElement("h5");
    b.textContent="Objective:";
    card2.appendChild(b);
    var a = document.createElement("p");
    a.setAttribute("class","l");
    a.textContent=react.objective;
    card2.appendChild(a);
}
function Education(s){
    var b = document.createElement("h5");
    b.textContent="Education:";
    card2.appendChild(b);
    var table = document.createElement("table");
    var row ="";
    row+="<tr><th>"+"College"+"</th><th>"+"Course"+"</th><th>"+"Year"+"</th><tr>"
    for (var i = 0; i < s.length; i++) {
        row +="<tr><td>"+s[i].name
        +"</td><td>"+s[i].course
        +"</td><td>"+s[i].year+"</td></tr>";
    }
    table.innerHTML=row;
    card2.appendChild(table);
}
function Tech(s){
    var b = document.createElement("h5");
    b.textContent="Technical Skills:";
    card2.appendChild(b);
    var ul = document.createElement("ul");
    for (var i = 0; i < s.skills.length; i++) {
        var li = document.createElement("li");
        li.setAttribute("class","l");
        li.textContent = s.skills[i];
        ul.appendChild(li);
    }
    card2.appendChild(ul);
    var b = document.createElement("h5");
    b.textContent="Projects:";
    card2.appendChild(b);
    var ul = document.createElement("ul");
    for (var i = 0; i < s.projects.length; i++) {
        var li = document.createElement("li");
        li.setAttribute("class","l");
        li.textContent = s.projects[i];
        ul.appendChild(li);
    }
    card2.appendChild(ul);
    var b = document.createElement("h5");
    b.textContent="Interests:";
    card2.appendChild(b);
    var ul = document.createElement("ul");
    for (var i = 0; i < s.Interests.length; i++) {
        var li = document.createElement("li");
        li.setAttribute("class","l");
        li.textContent = s.Interests[i];
        ul.appendChild(li);
    }
    card2.appendChild(ul);
}