

// Get the modal
var modal1 = document.getElementById('id01');
var modal2 = document.getElementById('id02');

console.log("I am Working");
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}

window.onclick = function (event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}

var signup = function (event) {
    event.preventDefault();
    console.log("I am Here");
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/api/createUser",
        ContentType: 'application/json',
        dataType: 'json',
        data: {
            username: $('.uname').get(0).value,
            password: $('.psw').get(0).value
        },
        success: function (data) {
            alert("User created Successfully");
            window.location.href = 'chatpage.html'
            console.log('succes: ' + data);
        }
    })
}

