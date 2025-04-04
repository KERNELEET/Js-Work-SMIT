var products = [
    {
      id: 101,
      title: "Sony LED 40 inch",
      variations: [
        { id: 1, color: "black", price: 50000, quantity: 5 },
        { id: 2, color: "red", price: 50000, quantity: 1 },
        { id: 3, color: "silver", price: 55000, quantity: 8 },
      ],
      reviews: [
        {
          id: 1,
          user: "Ahmad",
          rating: 4.0,
          title: "Good Product",
          comments: "It is a very good product ....",
          date: "06-02-2021",
          status: true,
        },
        {
          id: 2,
          user: "Zubair",
          rating: 4.5,
          title: "Very Good Product",
          comments: "zubair It is a very good product ....",
          date: "05-02-2021",
          status: false,
        },
        {
          id: 3,
          user: "Ali",
          rating: 5.0,
          title: "Bad Product",
          comments: "ali It is a very good product ....",
          date: "04-02-2021",
          status: true,
        },
      ],
    },
    {
      id: 102,
      title: "Mobile",
      variations: [
        { id: 1, color: "black", price: 50000, quantity: 5 },
        { id: 2, color: "red", price: 50000, quantity: 1 },
        { id: 3, color: "silver", price: 55000, quantity: 8 },
      ],
      reviews: [
        {
          id: 1,
          user: "Ahmad",
          rating: 4.0,
          title: "Good Product",
          comments: "It is a very good product ....",
          date: "06-02-2021",
          status: true,
        },
        {
          id: 2,
          user: "Zubair",
          rating: 4.5,
          title: "Very Good Product",
          comments: "zubair It is a very good product ....",
          date: "05-02-2021",
          status: false,
        },
        {
          id: 3,
          user: "Ali",
          rating: 5.0,
          title: "Bad Product",
          comments: "ali It is a very good product ....",
          date: "04-02-2021",
          status: true,
        },
      ],
    },
    {
      id: 103,
      title: "Bike",
      variations: [
        { id: 1, color: "black", price: 55000, quantity: 5 },
        { id: 2, color: "red", price: 50000, quantity: 1 },
      ],
      reviews: [
        {
          id: 1,
          user: "Ahmad",
          rating: 4.0,
          title: "Good Product",
          comments: "It is a very good product ....",
          date: "06-02-2021",
          status: true,
        },
        {
          id: 2,
          user: "Zubair",
          rating: 3.0,
          title: "Very Good Product",
          comments: "zubair It is a very good product ....",
          date: "05-02-2021",
          status: false,
        },
      ],
    },
  ];
  

//   //1
//   let names = products.map((names) => names.title)
//   console.log(names);



//2
// let filtered = products.filter((filteritems) => filteritems.variations.filter( (color) => color.color === "black" ))
// let filtered = products.filter((filter) => filter.variations.some((color) => color.color === "black"))
// console.log(filtered);



//3
// let reduced = products.reduce((acc,item) => {
//     const price = item.variations.reduce((sum,variations) => sum + variations.price,0)
//     return price + acc;
// },0)
// console.log(reduced);


//4
// let avgrating = products.map((item) => item.reviews.reduce((facc,items) => {
//     if(items.rating == true){
//         items.rating 
//     }
// }))
// console.log(avgrating);



// //5
// let filter = products.filter((items) => items.reviews.some((item) => item.rating === 5.0))
// console.log(filter);



//6 
// const newarray = products.map((items) => ({
//     title: items.title,
//     variation: items.variations
// }))
// console.log(newarray);


//7
// const trev = products.reduce((acc,items) => 
//     acc + items.variations.reduce((acc,item) => acc +item.quantity*item.price,0),0)
// console.log(trev);


// 8
// const filter = products.9
// ((fitem) => fitem.variations.filter((filter) => filter.quantity > 5))
// console.log(filter);


// 9
// const mapp = products.map((items) => ({
//     title : items.title,
//     Variations : "Total Variatons " + items.variations.length,
//     Reviews: "Total Reviews" + items.reviews.length
// }))
// console.log(mapp);


//10
// const max = products.reduce((acc, item) => {
//     const totalStock = item.variations.reduce((sum, variation) => sum + variation.quantity, 0);
//     if (totalStock > acc.TotalStock) {
//         return { Title: item.title, TotalStock: totalStock };
//     }
//     return acc;
// }, { Title: "", TotalStock: 0 });
// console.log(max);