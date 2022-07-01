const container = document.getElementById("ikhlaas");

// let info = ["charles","Saleem","Raees"]

let info = [{
    picture:"./images/apartment1.jpg" ,
    price: 8000,
    propertyName: "Mockingbird Place",
    location: "Manhattan" ,
    continent:"North America",
    type:"Apartment",
    bedrooms:"3 Bedroom",

},{
    picture: "./images/apartment2.jpg",
    price:4500,
    propertyName: "Palm Street Apartments",
    location: "Los Angeles" ,
    continent:"North America",
    type:"Apartment",
    bedrooms:"2 Bedroom",
},{
    picture: "./images/apartment3.jpg",
    price:6000,
    propertyName: "Phoenix Feather",
    location: "Toronto" ,
    continent:"North America",
    type:"Apartment",
    bedrooms:"1 Bedroom",
},{
    picture:"./images/loft1.jpg" ,
    price:8000,
    propertyName: "Designer Loft",
    location: "Lisbon",
    continent:"Europe",
    type:"Loft",
    bedrooms:"2 Bedroom",
},{
    picture: "./images/loft2.jpg",
    price:8500,
    propertyName: "The Catalan",
    location:"Barcelona" ,
    continent:"Europe",
    type:"Loft",
    bedrooms:"3 Bedroom",
},{
    picture: "./images/penthouse2.jpg",
    price:9250,
    propertyName: "Odeon Tower Loft",
    location: "Athens",
    continent:"Europe",
    type:"Loft",
    bedrooms:"2 Bedroom",
},{
    picture: "./images/apartment1.jpg",
    price:6800,
    propertyName: "Vatican Studio",
    location: "Rome",
    continent:"Europe",
    type:"Studio",
    bedrooms:"1 Bedroom",
},{
    picture: "./images/studio2.jpeg",
    price:8500,
    propertyName: "Fleur de Lis",
    location: "Paris",
    continent:"Europe",
    type:"Studio",
    bedrooms:"2 Bedroom",
},{
    picture: "./images/studio3.jpg",
    price:7500,
    propertyName: "Rave Studio",
    location: "Prague",
    continent:"Europe",
    type:"Studio",
    bedrooms:"2 Bedroom",
},{
    picture: "./images/penthouse1.jpg",
    price:4800,
    propertyName: "Night Owl Penthouse",
    location: "New York",
    continent:"North America",
    type:"Penthouse",
    bedrooms:"3 Bedroom",
},{
    picture: "./images/penthouse2.jpg",
    price:4000,
    propertyName: "Beachfront Penthouse",
    location:"Berlin" ,
    continent:"Europe",
    type:"Penthouse",
    bedrooms:"3 Bedroom",
},{
    picture: "./images/apartment1.jpg",
    price:3800,
    propertyName: "The Avenue Penthouse",
    location: "Cape Town",
    continent:"Africa",
    type:"Penthouse",
    bedrooms:"2 Bedroom", 
}]

function homify(land){
    container.innerHTML = ' '
    land.forEach((e, index) => {
        container.innerHTML +=`
    <div class="card p-3 m-3 mx-auto" style="width: 350px;">
     <div class="back" id="test55${index}">
        <h5 class="card-title"> ${e.propertyName} </h5>
        </div>
        
        <div  class="card-body">
        <p class="card-text"> 
             ${e.location}</p>
        <hr>
            $${e.price} 
        <br> ${e.bedrooms}</p> 
        <p class="edit" > ${e.type} 
        </p>
        </div>
    </div>
        `
      document.getElementById('test55'+`${index}`).style = `background-image: url(${e.picture});
      background-repeat: no-repeat;
      background-size: cover;
      aspect-ratio:1;

      `


    });
}


function places(event){
    if (event.target.value === 'All') {
        return homify(info)
        }
    console.log(event);
    let newinfo = info.filter(x =>{
        return x.continent == event.target.value
    })
    homify(newinfo)
}
function types(event){
    if (event.target.value === 'All') {
        return homify(info)
        }
    console.log(event);
    let newinfo = info.filter(x =>{
        return x.type == event.target.value
    })
    homify(newinfo)
}
function bed(event){
    if (event.target.value === 'All') {
        return homify(info)
        }
    console.log(event);
    let newinfo = info.filter(x =>{
        return x.bedrooms == event.target.value
    })
    homify(newinfo)
}
function pricelist(event){
    if (event.target.value <= '12000') {
        return homify(info)
        }
    
    console.log(event);
    let newinfo = info.filter(x =>{
        return x.price <= event.target.value
    })
    homify(newinfo)
}
// function Alles(event){
//     console.log(event);
//     if (event.target.value === 'All') {
//         return homify(newinfo)
//         }
//     // homify(newinfo)
// }


homify(info);

document.getElementById("place").addEventListener('change',places);
document.getElementById("typeof").addEventListener('change',types);
document.getElementById("beds").addEventListener('change',bed);
document.getElementById("money").addEventListener('change',pricelist);




(function addData(){
    localStorage.setItem('props',JSON.stringify(info));
})();

let info2 = JSON.parse(localStorage.getItem('props'));