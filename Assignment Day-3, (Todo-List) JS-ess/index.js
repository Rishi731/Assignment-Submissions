
function addTask()
{
    let data=document.getElementById('input').value;

    document.getElementById('two').innerHTML+=`<h1 class='todo'>${data}</h1>`;
    document.getElementById('input').value="";
}

function changeColor()
{
    document.getElementById('two').style.backgroundColor="grey";
}