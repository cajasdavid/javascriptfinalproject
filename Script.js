function nameInfo(){  
    var firstName = document.getElementById("FirstName").value;
    var lastName = document.getElementById("LastName").value;
    var address = document.getElementById("Address").value;
    var fullName = firstName + " " + lastName
    var age = parseInt(document.getElementById('Age').value);
    var phoneNumber = parseInt(document.getElementById('PhoneNumber').value);
    var numberArray = [];
    numberArray.push(age, phoneNumber)
    {
     for (var i = 0; i < numberArray.length; i++){
       if (numberArray[i] <= 100){
         document.getElementById("postAge").innerHTML = age;}
       else {
         document.getElementById("postPhoneNumber").innerHTML = phoneNumber;}
     }
   }
    
    document.getElementById("postFullName").innerHTML = fullName;
    document.getElementById("postAddress").innerHTML = address;
  }