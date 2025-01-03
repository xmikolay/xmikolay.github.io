var checkout = document.getElementById('buy-now');

var element = document.getElementById("payment-failure");
element.style.display = 'none';
var element = document.getElementById("payment-success");
element.style.display = 'none';

var loggedin = localStorage.getItem('loggedIn'); 
if (loggedin == 0) {
    window.location.href = "login.html"; 
}

var userDetails = JSON.parse(localStorage.getItem('userdetails'));

if (userDetails) {
    document.getElementById('getFirstName').value = userDetails.firstName;
    document.getElementById('getLastName').value = userDetails.lastName;
    document.getElementById('getAddress1').value = userDetails.address1;
    document.getElementById('getAddress2').value = userDetails.address2;
    document.getElementById('getAddress3').value = userDetails.address3;
}

checkout.addEventListener("click", () => {
    event.preventDefault(); 

    var cardnumber = document.getElementById('cardNumber').value;
    var cardcvv = document.getElementById('cardCvv').value;

    if (cardnumber == "1234 5678 9102 3456" && cardcvv == "123") {
        alert("Payment Success");

        var element = document.getElementById("payment-failure");
        element.style.display = 'none';
        var element = document.getElementById("payment-success");
        element.style.display = 'block';

        var total = 0;
        localStorage.setItem('checkout', total);
        window.location.href = "index.html";
    } else {
        alert("Payment Failure");

        var element = document.getElementById("payment-failure");
        element.style.display = 'block';
        var element = document.getElementById("payment-success");
        element.style.display = 'none';
    }
    return false; 
});