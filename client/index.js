// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var signup = function(){

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
      alert("User created Successfully");
      console.log('succes: '+data);
  }
})

}