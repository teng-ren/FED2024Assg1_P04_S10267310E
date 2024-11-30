 // Function to toggle the dropdown menu
 const menuToggle = document.querySelector('.menu-toggle');
 const dropdownMenu = document.querySelector('.dropdown-menu');

 menuToggle.addEventListener('click', () => {
   dropdownMenu.classList.toggle('active');
 });

 // Function to save booking details to local storage
 function saveBookingDetails() {
   // Retrieve values from input fields
   const fullName = document.getElementById('full-name').value;
   const email = document.getElementById('email').value;
   const phoneNumber = document.getElementById('phone-number').value;
   const destination = document.getElementById('destination').value;
   const travelDates = document.getElementById('travel-dates').value;
   const numTravelers = document.getElementById('num-travelers').value;

   // Create an object to store the details
   const bookingDetails = {
     fullName,
     email,
     phoneNumber,
     destination,
     travelDates,
     numTravelers
   };

   // Save the object as a JSON string in local storage
   localStorage.setItem('bookingDetails', JSON.stringify(bookingDetails));

   // Alert the user
   alert('Booking details saved successfully!');
 }