let info = JSON.parse(localStorage.getItem("props"))
  ? JSON.parse(localStorage.getItem("props"))
  : 
  [{
    price: 8000,
    propertyName: "Mockingbird Place",
    location: "Manhattan" ,
    continent:"North America",
    type:"Apartment",
    bedrooms:"3",

},{
    price:4500,
    propertyName: "Palm Street Apartments",
    location: "Los Angeles" ,
    continent:"North America",
    type:"Apartment",
    bedrooms:"2",
},{
    price:6000,
    propertyName: "Phoenix Feather",
    location: "Toronto" ,
    continent:"North America",
    type:"Apartment",
    bedrooms:"1",
},{
    price:8000,
    propertyName: "Designer Loft",
    location: "Lisbon",
    continent:"Europe",
    type:"Loft",
    bedrooms:"2",
},{
    price:8500,
    propertyName: "The Catalan",
    location:"Barcelona" ,
    continent:"Europe",
    type:"Loft",
    bedrooms:"3",
},{
    price:9250,
    propertyName: "Odeon Tower Loft",
    location: "Athens",
    continent:"Europe",
    type:"Loft",
    bedrooms:"2",
},{
    price:6800,
    propertyName: "Vatican Studio",
    location: "Rome",
    continent:"Europe",
    type:"Studio",
    bedrooms:"1",
},{
    price:8500,
    propertyName: "Fleur de Lis",
    location: "Paris",
    continent:"Europe",
    type:"Studio",
    bedrooms:"2",
},{
    price:7500,
    propertyName: "Rave Studio",
    location: "Prague",
    continent:"Europe",
    type:"Studio",
    bedrooms:"2",
},{
    price:4800,
    propertyName: "Night Owl Penthouse",
    location: "New York",
    continent:"North America",
    type:"Penthouse",
    bedrooms:"3",
},{
    price:4000,
    propertyName: "Beachfront Penthouse",
    location:"Berlin" ,
    continent:"Europe",
    type:"Penthouse",
    bedrooms:"3",
},{
    price:3800,
    propertyName: "The Avenue Penthouse",
    location: "Cape Town",
    continent:"Africa",
    type:"Penthouse",
    bedrooms:"2", 
}];

let display = document.getElementById("tbody");

function homify() {
  display.innerHTML =" ";
  info.forEach((e, index) => {
    display.innerHTML += `
    <tr>
    <th scope="row">${e.type}</th>
    <td>${e.continent}</td>
    <td>${e.bedrooms}</td>
    <td>${e.price}</td>
    <!-- icons -->
    <td>
    <!-- Update -->
    <a type="button" class="btn" data-bs-toggle="modal" data-bs-target="#update${index}"><i class="fa-solid fa-pen-to-square"></i></a>
    
    <!-- Delete -->
    <a class="btn" id="delete" onclick="deleteItem(${index})"><i class="fa-solid fa-trash-can"></i></a>
    </td>
    </tr>
    <!-- Modal -->
    <div class="modal modal-xl fade" id="update${index}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">${e.location}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
        <div class="modal-body">
        <div class="row">
        <div class="col-6">
            <!-- Address -->
                <div class="mb-3">
                    <label for="editTitle${index}" class="form-label">Location</label>
                    <input class="form-control" type="text"
                    name="editTitle${index}"
                    id="editTitle${index}"
                    value="${e.location}"/>
                </div>
    
            <!-- Type -->
                <div class="mb-3">
                    <label for="editType${index}" class="form-label">Type</label>
                    <input class="form-control" type="text"
                    name="editType${index}"
                    id="editType${index}"
                    value="${e.type}"/>
                </div>
    
            <!-- Location -->
                <div class="mb-3">
                    <label for="editLocation${index}" class="form-label">Continent</label>
                    <input class="form-control" type="text"
                    name="editLocation${index}"
                    id="editLocation${index}"
                    value="${e.continent}"/>
                </div>
    
            <!-- picture -->
                <div class="mb-3">
                    <label for="editPic${index}" class="form-label">Picture</label>
                    <input class="form-control" type="text"
                    name="editPic${index}"
                    id="editPic${index}"
                    value="${e.picture}"/>
                </div>
            </div>
            
            <div class="col-6">
            <!-- bedrooms -->
                <div class="mb-3">
                    <label for="editRooms${index}" class="form-label">Bedrooms</label>
                    <input class="form-control" type="text"
                    name="editRooms${index}"
                    id="editRooms${index}"
                    value="${e.bedrooms}"/>
                </div>
                
           
    
           
    
            <!-- price -->
                <div class="mb-3">
                    <label for="editPrice${index}" class="form-label">Price</label>
                    <input class="form-control" type="text"
                    name="editPrice${index}"
                    id="editPrice${index}"
                    value="${e.price}"/>
                </div>
            </div>
         </div> 
            
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" onclick="updateProperty(${index})" class="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
          </div>
        </div>
      </div>
    </div>
    `;
  });
console.table(info)
}
homify();

// Sort
function sort() {

}
document.getElementById('btnSort').addEventListener('click', sort)

// CREATE
function addItem() {
  // e.preventDefault();
  // Push to Array
  info.push({
    // id: properties.length + 1,
    type : document.getElementById('typeof').value,
    location : document.getElementById('place').value,
    picture : document.getElementById('test55').value,
    bedrooms : parseInt(document.getElementById('beds').value),
    continent : parseInt(document.getElementById('place').value),
    price : parseInt(document.getElementById('money').value),
  });
  localStorage.setItem("props", JSON.stringify(info));
}

// UPDATE
function updateProperty(id) {
  console.log("Im being clicked");
  // variables for edited values
  let etype = document.getElementById(`editType${id}`).value;
  let econtinent = document.getElementById(`editContinent${id}`).value;

  let epicture = document.getElementById(`editPic${id}`).value;
  let ebedrooms = document.getElementById(`editRooms${id}`).value;
  
  let eprice = document.getElementById(`editPrice${id}`).value;

  // passing edited values into array
    info[id].type = etype
    info[id].location = econtinent
    info[id].picture = epicture
    info[id].bedrooms = parseInt(ebedrooms)
    info[id].price = parseInt(eprice)
    localStorage.setItem("props", JSON.stringify(info));
    homify();
  };

// DELETE
function deleteItem(id) {
  if (id > -1) {
    properties.splice(id, 1);
  }
  for (i = 0; i < properties.length; i++) {
    properties[i].id = i + 1;
  }
  localStorage.setItem("props", JSON.stringify(info));
  loadData();
}
document.getElementById("delete").addEventListener("click", deleteItem);

// footer & copyright
const Year = new Date().getFullYear();
document.getElementById("footer").innerHTML += `
<div class="container">
  <div class="row w-100">
      <div class="col-12 d-flex justify-content-between">
        
        <h6>Copyright &copy;Ikhlaas Rawoot 2022. All rights reserved</h6>
        <div>
          <a href="" class="mx-1 text-black">
          <i class="fa-brands fa-github">
              GitHub
          </i>
          </a>
          <a href="" class="mx-1 text-black">
          <i class="fa-brands fa-linkedin">
              LinkedIn
          </i>
          </a>
      </div>
    </div>   
  </div> 
</div>
`;