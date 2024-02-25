function Rembo() {
var input, filter, table, tr, td, i, txtValue, input1, filter1, td1, txtValue1,i, z, x, c, v, b, n, tc, a;
input = document.getElementById("Input1");
input1 = document.getElementById("sel");
filter = input.value.toUpperCase();
filter1 = input1.options[sel.selectedIndex].value.toUpperCase();
table = document.getElementById("table");
tr = table.getElementsByTagName("tr");
tc=table.querySelectorAll('[id="old"]');
for (i = 0; i < tr.length; i++) {
td = tr[i].getElementsByTagName("td")[3];
td1 = tr[i].getElementsByTagName("td")[5];
if (td) {
txtValue = td.textContent || td.innerText;
txtValue1 = td1.textContent || td1.innerText;

if ((txtValue.toUpperCase().indexOf(filter) > -1)*(txtValue1.toUpperCase().indexOf(filter1) > -1)) {
table.style.width = "100%";
table.style.display = "";
tr[i].style.display = "";
tr[i].setAttribute("class",`a`);
} else {
tr[i].style.display = "none";
tr[i].setAttribute("class",`b`);
}
}
}
z=table.querySelectorAll('[id="z"][class="a"]').length+1;
x=table.querySelectorAll('[id="x"][class="a"]').length+1;
c=table.querySelectorAll('[id="c"][class="a"]').length+1;
v=table.querySelectorAll('[id="v"][class="a"]').length+1;
b=table.querySelectorAll('[id="b"][class="a"]').length+1;
n=table.querySelectorAll('[id="n"][class="a"]').length+1;
if (z==1){tc[0].style.display = "none";}
else {tc[0].style.display = "";}
tc[0].setAttribute("rowspan",`${z}`);
if (x==1){tc[1].style.display = "none";}
else {tc[1].style.display = "";}
tc[1].setAttribute("rowspan",`${x}`);
if (c==1){tc[2].style.display = "none";}
else {tc[2].style.display = "";}
tc[2].setAttribute("rowspan",`${c}`);
if (v==1){tc[3].style.display = "none";}
else {tc[3].style.display = "";}
tc[3].setAttribute("rowspan",`${v}`);
if (b==1){tc[4].style.display = "none";}
else {tc[4].style.display = "";}
tc[4].setAttribute("rowspan",`${b}`);
if (n==1){tc[5].style.display = "none";}
else {tc[5].style.display = "";}
tc[5].setAttribute("rowspan",`${n}`);
}

