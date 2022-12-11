var studentname=[];
function submit()
{
var name1=document.getElementById("input1").value;
var name2=document.getElementById("input2").value;
var name3=document.getElementById("input3").value;
var name4=document.getElementById("input4").value;

studentname.push(name1);
studentname.push(name2);
studentname.push(name3);
studentname.push(name4);
console.log(studentname);
document.getElementById("displayname").innerHTML=studentname;
document.getElementById("submitbutton").style.display="none";
document.getElementById("sortbutton").style.display="inline-block";
}

function sorting()
{
studentname.sort();
console.log(studentname);
document.getElementById("displayname").innerHTML=studentname;
}