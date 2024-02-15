//
// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('sendOTPButton').addEventListener('click', async function() {
//         const userEmail = document.querySelector('input[name="userEmail"]').value;
//         const response = await fetch('/resetPassword', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 userEmail: userEmail,
//                 action: 'sendOTP'
//             })
//         });
//         const data = await response.json();
//         document.getElementById('otpMessage').textContent = data.message;
//         document.getElementById('otpCodeContainer').style.display = 'block';
//     });
//
//     document.getElementById('resetPasswordButton').addEventListener('click', async function() {
//         const userEmail = document.querySelector('input[name="userEmail"]').value;
//         const OTPCode = document.querySelector('input[name="OTPCode"]').value;
//         const newPassword = document.querySelector('input[name="newPassword"]').value;
//         const response = await fetch('/resetPassword', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 userEmail: userEmail,
//                 action: 'reset',
//                 OTPCode: OTPCode,
//                 newPassword: newPassword
//             })
//         });
//         const data = await response.text();
//         document.getElementById('otpMessage').textContent = data;
//     });
// });
//
//
//
//
//
//
//
// //
// //
// //
// // document.addEventListener('DOMContentLoaded', function() {
// //     document.getElementById('sendOTPButton').addEventListener('click', async function() {
// //         const userEmail = document.querySelector('input[name="userEmail"]').value;
// //         const response = await fetch('/resetPassword', {
// //             method: 'POST',
// //             headers: {
// //                 'Content-Type': 'application/json'
// //             },
// //             body: JSON.stringify({
// //                 userEmail: userEmail,
// //                 action: 'sendOTP'
// //             })
// //         });
// //         const data = await response.json();
// //         document.getElementById('otpMessage').textContent = data.message;
// //         document.getElementById('otpCodeContainer').style.display = 'block';
// //     });
// //
// //     document.getElementById('resetPasswordButton').addEventListener('click', async function() {
// //         const userEmail = document.querySelector('input[name="userEmail"]').value;
// //         const OTPCode = document.querySelector('input[name="OTPCode"]').value;
// //         const newPassword = document.querySelector('input[name="newPassword"]').value;
// //         const response = await fetch('/resetPassword', {
// //             method: 'POST',
// //             headers: {
// //                 'Content-Type': 'application/json'
// //             },
// //             body: JSON.stringify({
// //                 userEmail: userEmail,
// //                 action: 'reset',
// //                 OTPCode: OTPCode,
// //                 newPassword: newPassword
// //             })
// //         });
// //         const data = await response.text();
// //         document.getElementById('otpMessage').textContent = data;
// //     });
// // });
// //
// //
// //
// // // document.getElementById('sendOTPButton').addEventListener('click', async function() {
// // //     const userEmail = document.querySelector('input[name="userEmail"]').value;
// // //     console.log("userEmail "+userEmail);
// // //     const response = await fetch('/resetPassword', {
// // //         method: 'POST',
// // //         headers: {
// // //             'Content-Type': 'application/json'
// // //         },
// // //         body: JSON.stringify({
// // //             userEmail: userEmail,
// // //             action: 'sendOTP'
// // //         })
// // //     });
// // //     const data = await response.json();
// // //     document.getElementById('otpMessage').textContent = data.message;
// // //     document.getElementById('otpCodeContainer').style.display = 'block';
// // // });
// // //
// // // document.getElementById('resetPasswordButton').addEventListener('click', async function() {
// // //     const userEmail = document.querySelector('input[name="userEmail"]').value;
// // //     const OTPCode = document.querySelector('input[name="OTPCode"]').value;
// // //     const newPassword = document.querySelector('input[name="newPassword"]').value;
// // //     const response = await fetch('/resetPassword', {
// // //         method: 'POST',
// // //         headers: {
// // //             'Content-Type': 'application/json'
// // //         },
// // //         body: JSON.stringify({
// // //             userEmail: userEmail,
// // //             action: 'reset',
// // //             OTPCode: OTPCode,
// // //             newPassword: newPassword
// // //         })
// // //     });
// // //     const data = await response.text();
// // //     document.getElementById('otpMessage').textContent = data;
// // // });
