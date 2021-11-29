function validation()

{
   username();
   fathervalidation();
   emailvalidation();
   dobvalidation();
   phonevalidation();
   addressvalidation();
   cityvalidation();
   pinvalidation();
   permanentvalidation();

}
function username()
{

    var fname=document.getElementById("FirstName").value
    if(fname=="")
    {   

        document.getElementById("FirstName");
        var fnout =document.getElementById("fnstyle");
        fnout.style.color="red";
        fnout.style.visibility="visible";
        
        
    }
    else if(regx1.test(fname))
    {
        document.getElementById("FirstName");
        document.getElementById("fnstyle").style.visibility="hidden";
        
    }
}
function fathervalidation()
{
    var fname1=document.getElementById("FatherName").value;
    var regx2=/[A-Za-z]+$/;
    if(fname1=="")
    {   

        document.getElementById("FatherName");
        var fnout1 =document.getElementById("fatherstyle");
        fnout1.style.color="red";
        fnout1.style.visibility="visible";
       
        
    }
    else if(regx2.test(fname1))
    {
        document.getElementById("FatherName");
        document.getElementById("fatherstyle").style.visibility="hidden";
        
    }
}
function emailValidation()
{
     
    var email=document.getElementById("Email").value;
    var regx3=/([a-zA-Z0-9\.-]+)@([a-zA-Z0).([a-zA-Z])(.[a-z]{2,8})?$/;
    if(regx3.test(email))
    {

        document.getElementById("Email");
        document.getElementById("emailstyle").style.visibility="hidden";
        
    }
    else
    {
        document.getElementById("Email");
        var emout2=document.getElementById("emailstyle");
        emout2.style.color="red";
        emout2.style.visibility="visible";
       
        
    }
}
function dobvalidation()
{
     
    var dobb=document.getElementById("DOB").value;
    var regx4=/([0-3])([0-9]-([0-1])([0-9])-([0-2])([0-9]){3})$/;
    if(regx4.test(dobb))
    {

        document.getElementById("DOB");
        document.getElementById("dob").style.visibility="hidden";
       
    }
    else 
    {
        document.getElementById("DOB");
        var dobout=document.getElementById("dob");
        dobout.style.color="red";
        dobout.style.visibility="visible";
       
        
    }

}
function phonevalidation()
{
    var mob=document.getElementById("MobileNumber").value;
    var regx5=/[6-9]\d{9}$/;
    if(regx5.test(mob))
    {

        document.getElementById("Mobilenumber");
        document.getElementById("mob").style.visibility="hidden";
        
    }
    else 
    {
    
        document.getElementById("MobileNumber");
        var mobout=document.getElementById("mob");
        mobout.style.color="red";
        mobout.style.visibility="visible";
      
        
    }
}
function pinvalidation()
{
    var pin=document.getElementById("Pincode1").value;
    var regx6=/\d{6}$/;
    if(regx6.test(pin))
    {

        document.getElementById("Pincode1");
        document.getElementById("pin").style.visibility="hidden";
        
    }
    else 
    {
        
        document.getElementById("Pincode1");
        var pinout=document.getElementById("pin");
        pinout.style.color="red";
        pinout.style.visibility="visible";
        return false;
        
    }
}
function addressvalidation()
{
    var address=document.getElementById("Address1").value;
    var regx7=/[\w]/;
    if(address=="")
    {   

       
        document.getElementById("Address1")
        var addout1 =document.getElementById("add1");
        addout1.style.color="red";
        addout1.style.visibility="visible";
        
        
    }
    else if(regx7.test(addres)
    {
        document.getElementById("Address1")
        document.getElementById("add1").style.visibility="hidden";
       
    }
}
function cityvali()
{
    var city=document.getElementById("City1").value;
    var regx8=/[\w]/;
    if(city=="")
    {   

        
        document.getElementById("City1");
        var cityout1 =document.getElementById("city");
        cityout1.style.color="red";
        cityout1.style.visibility="visible";
      
        
    }
    else if(regx8.test(city))
    {
        document.getElementById("City1");
        document.getElementById("city");
        
    }
}
function permanentvali()
{


    var cadd1=document.getElementById("Address1").value;
    var cadd2=document.getElementById("Address2").value;
    var ccity=document.getElementById("City1").value;
    var cstate=document.getElementById("State1").value;
    var cpin=document.getElementById("Pincode1").value;


    var permanent=document.getElementById("PermanentAddress";
    if(permanent.checked==true)
    {   

       
        padd1.value=cadd1;
        padd2.value=cadd2;
        pcity.value=ccity;
        pstate.value=cstate;
        ppin.value=cpin;
        
    }
    else if(permanent.checked==false)
   { 
       
          padd1.value="";
          padd2.value="";
          pcity.value="";
          pstate.value="";
          ppin.value="";
         
       
       
    }
}







