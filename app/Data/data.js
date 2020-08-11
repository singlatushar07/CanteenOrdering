const foods = [
  {
    class: "Snacks",
    id: "Snacks1",
    title: "food1",
    image: require("../assets/burger.jpg"),
    price: 10,
    subTitle: "Cheakcn lidec",
  },
  {
    class: "Snacks",
    id: "Snacks2",
    title: "food2",
    image: require("../assets/burger.jpg"),
    price: 10,
    subTitle: "Cheakcn lidec",
  },
  {
    class: "Snacks",
    id: "Snacks3",
    title: "food3",
    image: require("../assets/burger.jpg"),
    price: 10,
    subTitle: "Cheakcn lidec",
  },
  {
    class: "Veg",
    id: "Veg1",
    title: "food4",
    image: require("../assets/burger.jpg"),
    price: 10,
  },
  {
    class: "Veg",
    id: "Veg2",
    title: "food5",
    image: require("../assets/burger.jpg"),
    price: 10,
  },
  {
    class: "Veg",
    id: "Veg3",
    title: "food6",
    image: require("../assets/burger.jpg"),
    price: 10,
  },
  {
    class: "Veg",
    id: "Veg4",
    title: "food7",
    image: require("../assets/burger.jpg"),
    price: 10,
  },
  {
    class: "NonVeg",
    id: "NonVeg1",
    title: "food11",
    image: require("../assets/burger.jpg"),
    price: 10,
  },
  {
    class: "NonVeg",
    id: "NonVeg2",
    title: "food12",
    image: require("../assets/burger.jpg"),
    price: 10,
  },
  {
    class: "NonVeg",
    id: "NonVeg3",
    title: "food13",
    image: require("../assets/burger.jpg"),
    price: 10,
  },
];
// import url from "../keys/url";

// var foods;

// let getFood = () => {
//   fetch(url.ngrokurl + "/menu", {
//     method: "get", // Method its
//   })
//     .then((response) => response.json())
//     //If response is in json then in success
//     .then((responseJson) => {
//       //Success
//       //alert(JSON.stringify(responseJson));

//       foods = responseJson;
//       // console.log(foods);
//     })
//     //If response is not in json then in error
//     .catch((error) => {
//       //Error
//       alert(JSON.stringify(error));
//       console.error(error);
//     });
// };

// getFood();

export default foods;
