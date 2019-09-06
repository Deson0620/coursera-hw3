
<SCRIPT>
function passWord() {
var testV = 1;
var pass1 = prompt('原因',' ');
while (testV < 3) {
if (!pass1) 
history.go(-1);
if (pass1.toLowerCase() == "bilan") {
alert('能看到最后吗');
window.open('bilan.html');
break;
} 
testV+=1;
var pass1 = 
prompt('Access Denied - Password Incorrect, Please Try Again.','Password');
}
if (pass1.toLowerCase()!="password" & testV ==3) 
history.go(-1);
return " ";
} 
</SCRIPT>