const input = document.getElementById('name');
function resultingFunction()
{
if (input.value ==="") 
    {
    alert("Please enter your name!"); 
    }
else 
    {
    document.getElementById('final').innerHTML = 'Hello '+ input.value + ' ,welcome to the bootcamp!'; 
    }
}