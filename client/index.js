  
$.ajax({
  type: "POST",
  url: "http://localhost:3000/api/createUser",
  ContentType:'application/json',
  dataType:'json',
  data:{
    username:'amitabh',
    password:'amitabh@123'
  },
  success: function(data){
      console.log('succes: '+data);
  }
})