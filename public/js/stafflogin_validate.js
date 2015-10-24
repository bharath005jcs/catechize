function validateForm() 
{
    var x = document.forms["myForm"]["fname"].value;
    var y = document.forms["myForm"]["pwd"].value;
    if (x == ""  || y == "") 
    {
    	if(x=="")
    	{
        	alert("Enter UserName");
        	return false;
      	}
   		if (y == "") 
   		{
        	alert("Enter Password");
        	return false;
    	}
	}
}
