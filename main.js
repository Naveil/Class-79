var array=[];
function submit(){
    var name1=document.getElementById("student_1").value;
    var name2=document.getElementById("student_2").value;
    var name3=document.getElementById("student_3").value;
    var name4=document.getElementById("student_4").value;
    array.push(name1);
    array.push(name2);
    array.push(name3);
    array.push(name4);

    console.log(array);
    document.getElementById("div1").innerHTML=array;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}

function sort(){
    array.sort();
    document.getElementById("div1").innerHTML=array;
}