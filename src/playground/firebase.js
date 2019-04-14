database
  .ref("expenses")
  .on("child_changed", snapshot => console.log(snapshot.key, snapshot.val()));

// database.ref("expenses").on("value", snapshot => {
//   let expenses = [];

//   snapshot.forEach(childSnapshot => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });

//   console.log(expenses);
// });

/* Push content */
// const coffee = {
//   description: "Rent",
//   note: "pricyshitt",
//   type: "basic-needs",
//   amount: 30000,
//   createdAt: 23190800
// };

// database.ref("expenses").push(coffee);

/* Realtime Database Fetch */
// database.ref().on("value", snapshot => {
//   const { name, height } = snapshot.val();
//   console.log(`${name} is ${height} centimeters tall. `);
// });

// const attributes = {
//   height: 180,
//   name: "Diego",
//   stressLeve: 6.5,
//   job: {
//     title: "Web Developer",
//     company: "google"
//   },
//   location: {
//     city: "moscow",
//     country: "russia"
//   },
//   age: 26,
//   favoriteGame: {
//     mobile: "PUBG",
//     pc: "Spelunky"
//   }
// };

/* It returns promises, so catch them! */
// database
//   .ref()
//   .set(attributes)
//   .then(() => console.log("data saved succesfully"))
//   .catch(e => console.log("failed"));

// //stress lvl to 9
// //job company to amazon
// //location city to atibaia
// database.ref().update({
//   stressLevel: 9,
//   "job/company": "Amazon",
//   "location/city": "Atibaia"
// });
