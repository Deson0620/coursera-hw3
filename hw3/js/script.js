function passWord() {
var testV = 1;
var pass1 = prompt('这里才是我为什么做这个网页的原因',' ');
while (testV < 3) {
if (!pass1) 
history.go(-1);
if (pass1.toLowerCase() == "bilan") {
alert('那就看到最后吧');
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