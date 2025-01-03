//ONLY REASON THIS IS COMMENTED OUT IS BECAUSE IT DOESNT WORK, WONT LET ME FETCH.

// document.addEventListener("DOMContentLoaded", function() {

//     var loggedin = localStorage.getItem('loggedIn');

//     if (loggedin == 0 || loggedin == null) {
//         window.location.href = "login.html";  
//     } else {
//         fetch('data/user-data.json')
//             .then(response => response.json())
//             .then(data => {
//                 document.getElementById('firstNameID').value = data.firstName || '';
//                 document.getElementById('lastNameID').value = data.lastName || '';
//                 document.getElementById('dobID').value = data.dob || '';
//                 document.getElementById('address1ID').value = data.add1 || '';
//                 document.getElementById('address2ID').value = data.add2 || '';
//                 document.getElementById('address3ID').value = data.add3 || '';
//             })
//             .catch(error => console.error("Error loading data:", error));

//         document.getElementById('udetails').addEventListener('submit', function(event) {
//             event.preventDefault(); 

//             const updatedData = {
//                 firstName: document.getElementById('firstNameID').value,
//                 lastName: document.getElementById('lastNameID').value,
//                 dob: document.getElementById('dobID').value,
//                 add1: document.getElementById('address1ID').value,
//                 add2: document.getElementById('address2ID').value,
//                 add3: document.getElementById('address3ID').value
//             };
//         });
//     }
// });

// userdetails.js

var loggedin = localStorage.getItem('loggedIn');
if (loggedin == 0 || loggedin == null) {
    window.location.href = "login.html";
}

if (localStorage.getItem('userdetails') === null) {
    var userDetails = {
        firstName: "Mikolaj", 
        lastName: "M", 
        dob: "2005-09-26", 
        address1: "2 Sigma Drive", 
        address2: "Sigma Town", 
        address3: "Co. Sligo"
    };
    document.getElementById("firstNameID").setAttribute('value', userDetails.firstName);
    document.getElementById("lastNameID").setAttribute('value', userDetails.lastName);
    document.getElementById("dobID").setAttribute('value', userDetails.dob);
    document.getElementById("address1ID").setAttribute('value', userDetails.address1);       
    document.getElementById("address2ID").setAttribute('value', userDetails.address2);
    document.getElementById("address3ID").setAttribute('value', userDetails.address3);
    localStorage.setItem('userdetails', JSON.stringify(userDetails));
} else {
    userDetails = JSON.parse(localStorage.getItem('userdetails'));
    document.getElementById("firstNameID").setAttribute('value', userDetails.firstName);
    document.getElementById("lastNameID").setAttribute('value', userDetails.lastName);
    document.getElementById("dobID").setAttribute('value', userDetails.dob);
    document.getElementById("address1ID").setAttribute('value', userDetails.address1);      
    document.getElementById("address2ID").setAttribute('value', userDetails.address2);
    document.getElementById("address3ID").setAttribute('value', userDetails.address3);
}

var userDetailsUpdate = document.getElementById('udetails');
userDetailsUpdate.addEventListener("submit", UpdateUserDetails);

function UpdateUserDetails(event) {
    event.preventDefault();
    
    var userDetails = {};
    userDetails.firstName = document.getElementById('firstNameID').value;
    userDetails.lastName = document.getElementById('lastNameID').value;
    userDetails.dob = document.getElementById('dobID').value;
    userDetails.address1 = document.getElementById('address1ID').value;
    userDetails.address2 = document.getElementById('address2ID').value;
    userDetails.address3 = document.getElementById('address3ID').value;

    localStorage.setItem('userdetails', JSON.stringify(userDetails));
    
    alert("Your details have been updated successfully!");

}
