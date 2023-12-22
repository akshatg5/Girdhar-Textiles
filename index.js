// document.addEventListener('DOMContentLoaded', function() {
//     const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

//     dropdownToggles.forEach(function(toggle) {
//         toggle.addEventListener('click', function(event) {
//             event.preventDefault();
//             const dropdown = toggle.nextElementSibling;

//             // Toggle the dropdown visibility
//             dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
//         });
//     });

//     // Close dropdowns when clicking outside
//     document.addEventListener('click', function(event) {
//         if (!event.target.matches('.dropdown-toggle')) {
//             dropdownToggles.forEach(function(toggle) {
//                 const dropdown = toggle.nextElementSibling;
//                 dropdown.style.display = 'none';
//             });
//         }
//     });
// });
