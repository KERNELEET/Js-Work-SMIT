var products = [
    {
      id: 101,
      title: "Sony LED 40 inch",
      variations: [
        { id: 1, color: "black", price: 50000, quantity: 5 },
        { id: 2, color: "red", price: 50000, quantity: 1 },
        { id: 3, color: "silver", price: 55000, quantity: 8 }
      ],
      reviews: [
        {
          id: 1,
          user: "Ahmad",
          rating: 4.0,
          title: "Good Product",
          comments: "It is a very good product ....",
          date: "06-02-2021",
          status: true
        },
        {
          id: 2,
          user: "Zubair",
          rating: 4.5,
          title: "Very Good Product",
          comments: "Zubair It is a very good product ....",
          date: "05-02-2021",
          status: false
        },
        {
          id: 3,
          user: "Ali",
          rating: 5.0,
          title: "Bad Product",
          comments: "Ali It is a very good product ....",
          date: "04-02-2021",
          status: true
        }
      ]
    },
    {
      id: 102,
      title: "Mobile",
      variations: [
        { id: 1, color: "black", price: 50000, quantity: 5 },
        { id: 2, color: "red", price: 50000, quantity: 1 },
        { id: 3, color: "silver", price: 55000, quantity: 8 }
      ],
      reviews: [
        {
          id: 1,
          user: "Ahmad",
          rating: 4.0,
          title: "Good Product",
          comments: "It is a very good product ....",
          date: "06-02-2021",
          status: true
        },
        {
          id: 2,
          user: "Zubair",
          rating: 4.5,
          title: "Very Good Product",
          comments: "Zubair It is a very good product ....",
          date: "05-02-2021",
          status: false
        },
        {
          id: 3,
          user: "Ali",
          rating: 5.0,
          title: "Bad Product",
          comments: "Ali It is a very good product ....",
          date: "04-02-2021",
          status: true
        }
      ]
    },
    {
      id: 103,
      title: "Bike",
      variations: [
        { id: 1, color: "black", price: 55000, quantity: 5 },
        { id: 2, color: "red", price: 50000, quantity: 1 }
      ],
      reviews: [
        {
          id: 1,
          user: "Ahmad",
          rating: 4.0,
          title: "Good Product",
          comments: "It is a very good product ....",
          date: "06-02-2021",
          status: true
        },
        {
          id: 2,
          user: "Zubair",
          rating: 3.0,
          title: "Very Good Product",
          comments: "Zubair It is a very good product ....",
          date: "05-02-2021",
          status: false
        }
      ]
    }
  ];




  //Program#01//
//   var x = prompt("Enter Id"); 
//   for (var i = 0; i < products.length; i++) {
//       if (products[i].id == x) { 
//           console.log(products[i]); 
//       }
//   }



//Program#02//
// for(var i = 0; i<products.length; i++){
//     console.log(products[i].title);
// }


//Program#03//
// var x = prompt("Enter ID");
// for (var i = 0; i < products.length; i++) {
//     if (products[i].id == x) {
//         for (var j = 0; j < products[i].variations.length; j++) {
//             console.log(products[i].variations[j].color);
//         }
//     }
// }


//Porgram#04//
// var sum = 0;
// for(var i = 0 ; i < products.length ; i++){
//     for(var j = 0 ; j < products[i].variations.length ; j++){
//         sum += products[i].variations[j].quantity;
//     }
// }
// console.log(sum);


//Program#05//
// var x = 2;
// for (var i = 0; i < products.length; i++) {
//     var flag = false;
//     for (var j = 0; j < products[i].variations.length; j++) {
//         if (products[i].variations[j].quantity < 2) {
//             flag = true;
//             break; 
//         }
//     }
//     if (flag) {
//         console.log(products[i].title);
//     }
// }


//Program#07//
// for (var i = 0; i < products.length; i++) {
//     console.log("Product: " + products[i].title);
//     for (var j = 0; j < products[i].reviews.length; j++) {
//         if (products[i].reviews[j].status) {
//             console.log(products[i].reviews[j]);
//         }
//     }
// }

//Program#08//
// for (var x = 0; x < products.length; x++) {
//     var y = { price: 0, color: "" };
//     for (var z = 0; z < products[x].variations.length; z++) {
//         if (products[x].variations[z].price > y.price) {
//             y = products[x].variations[z];
//         }
//     }
//     console.log("Product " + products[x].id + " = " + products[x].title + " - " + y.color + " (" + y.price + ")");
// }



// Program#09//
// var q = 0;
// var sum = 0
// for(var i = 0 ; i < products.length ; i++){
//     for(var j = 0 ; j < products[i].variations.length ; j++){
//         q += products[i].variations[j].quantity;
//         sum += products[i].variations[j].price
//     }
// }
// console.log(q);
// console.log(sum);
// console.log(q*sum);