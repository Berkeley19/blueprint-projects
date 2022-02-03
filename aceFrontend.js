var ul = document.getElementById("dropdown-list");
let count = 0;
while(count<3){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("Item"));
    ul.appendChild(li);
    count++;
}
