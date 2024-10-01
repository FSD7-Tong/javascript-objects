let foodOrder = {
    orderNumber:"A0234",
    address:"Bangkok",
    paymentType:"Cash",
    TotalPrice:4500,
    restaurantName: "MK"
};

foodOrder["totalPrice"] = 5000;
foodOrder["paymentType"] = "Caredit Card";

console.log(foodOrder); 
