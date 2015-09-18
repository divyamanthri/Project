

function validate()
{
	var t1=document.getElementById("t1").value;
	if(t1=="")
	{
		alert(" Please Enter first name !!");
		document.getElementById("t1").focus();
		return false;
	}
	
	if(!(isNaN(t1)))
		{
		
			alert("First name should contain only alphabets");
			document.getElementById("t1").focus();
			document.getElementById("t1").value="";
			return false;
		}
	if(t1.lenght>20)
		{
			alert("Can't exceed 20 characters!");
			document.getElementById("t1").focus();
			document.getElementById("t1").value="";
			return false;
		}
	
	var t2=document.getElementById("t2").value;
	if(t2=="")
	{
		alert(" Please Enter last name !!");
		document.getElementById("t2").focus();
		document.getElementById("t2").value="";
		return false;
	}
	
	
	
	if(!(isNaN(t2)))
	{
	
		alert("Last name should contain only alphabets");
		document.getElementById("t2").focus();
		document.getElementById("t2").value="";
		return false;
	}
if(t2.lenght>20)
	{
		alert("Can't exceed 20 characters!");
		document.getElementById("t2").focus();
		document.getElementById("t2").value="";
		return false;
	}
	
	
	
	var e=document.getElementById("e").value;
	if(e.length=="")
	{
		alert(" Please Enter Email Adress!! ");
		document.getElementById("e").focus();
		return false;
	}
	
	var e=document.getElementById("e").value;
	var atpos=e.indexOf("@");
	var dotpos=e.lastIndexOf(".");
	if (atpos<1 || dotpos<atpos+2 || dotpos+2>=e.length)
			{
				alert("Not a valid e-mail address");
				document.getElementById("e").focus();
				document.getElementById("e").value="";
				return false;
			}
	
	
	
	var t3=document.getElementById("t3").value;
	if(t3.length=="")
	{
		alert(" Please Enter Contact Number!! ");
		document.getElementById("t3").focus();
		return false;
	}
	
	if(isNaN(t3)){
		alert("contact number should contain only numbers");
		document.getElementById("t3").focus();
		document.getElementById("t3").value="";
		return false;
	}
	if(t3.length<10)
    {
	alert("contact number should be exactly 10 digits");
	document.getElementById("t3").focus();
	document.getElementById("t3").value="";
	return false;
    }
	
	
	
	else return true;
}

