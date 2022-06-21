results()
{
  if (document.getElementById('name').valuegit==="") 
  {
  alert("Please enter your name!");  
  }
  else
  {
    document.getElementById('final').innerHTML='Hello'+document.getElementById('name').value+ ' ,welcome to the bootcamp!';
  }
}