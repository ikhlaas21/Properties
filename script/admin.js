let properties = JSON.parse(localStorage.getItem("property"))
  ? JSON.parse(localStorage.getItem("property"))
  : [
      {
        id: 1,
        type: "Residential",
        location: "Rondebosch East",
        address: "Metro Plaza Dr",
        picture: `../image/res1.jpg`,
        bedrooms: 3,
        bathrooms: 2,
        garage: 3,
        price: 7000,
      },
      {
        id: 2,
        type: "Apartment",
        address: "65 Lawson Rd",
        location: "Belgravia",
        picture: `../image/apt1.jpg`,
        bedrooms: 1,
        bathrooms: 1,
        garage: 1,
        price: 5000,
      },
      {
        id: 3,
        type: "Apartment",
        address: "Quincy St",
        location: "Jupiter",
        picture: `../image/apt2.jpg`,
        bedrooms: 3,
        bathrooms: 2,
        garage: 3,
        price: 9500,
      },
      {
        id: 4,
        type: "Commercial",
        address: "65 Lawson Rd",
        location: "Leeward",
        picture: `../image/cmrcl2.jpg`,
        bedrooms: 1,
        bathrooms: 1,
        garage: 1,
        price: 5000,
      },
      {
        id: 5,
        type: "Apartment",
        address: "87-656 Farrington Highway A",
        location: "Jupiter",
        picture: `../image/res2.jpg`,
        bedrooms: 1,
        bathrooms: 1,
        garage: 1,
        price: 5000,
      },
      {
        id: 6,
        type: "Residential",
        address: "41-157 Nalu Street",
        location: "Rondebosh East",
        picture: `../image/res3.jpg`,
        bedrooms: 1,
        bathrooms: 1,
        garage: 1,
        price: 5000,
      },
      {
        id: 7,
        type: "Apartment",
        address: "87-1409 Akowai Road",
        location: "Belgravia",
        picture: `../image/apt3.jpg`,
        bedrooms: 1,
        bathrooms: 1,
        garage: 1,
        price: 5000,
      },
      {
        id: 8,
        type: "Commercial",
        address: "1946 Pauoa Road A",
        location: "Athlone",
        picture: `../image/cmrcl3.webp`,
        bedrooms: 1,
        bathrooms: 1,
        garage: 1,
        price: 5000,
      },
      {
        id: 9,
        type: "Residential",
        address: "87-280 Laulele Street",
        location: "Leeward",
        picture: `../image/res4.jpg`,
        bedrooms: 4,
        bathrooms: 4,
        garage: 5,
        price: 10000,
      },
      {
        id: 10,
        type: "Commercial",
        address: " 85-929 midway Street",
        location: "Belgravia",
        picture: `../image/cmrcl4.jpg`,
        bedrooms: 2,
        bathrooms: 2,
        garage: 3,
        price: 7800,
      },
      {
        id: 11,
        type: "Apartment",
        address: "87-1013 Kahiwelola Street",
        location: "Leeward",
        picture: `../image/apt4.jpg`,
        bedrooms: 3,
        bathrooms: 2,
        garage: 1,
        price: 9000,
      },
      {
        id: 12,
        type: "Commercial",
        location: "Athlone",
        address: "8100 S Ashland Ave",
        picture: `../image/cmrcl1.jpg`,
        bedrooms: 2,
        bathrooms: 3,
        garage: 2,
        price: 5000,
      },
    ];
let display = document.getElementById("tbody");

function loadData() {
  display.innerHTML = "";
  properties.forEach((item, index) => {
    display.innerHTML += `
    <tr>
    <th scope="row">${item.id}</th>
    <td>${item.address}</td>
    <td>${item.type}</td>
    <td>${item.location}</td>
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
            <h5 class="modal-title" id="exampleModalLabel">${item.address}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
        <div class="modal-body">
        <div class="row">
        <div class="col-6">
            <!-- Address -->
                <div class="mb-3">
                    <label for="editTitle${index}" class="form-label">Address</label>
                    <input class="form-control" type="text"
                    name="editTitle${index}"
                    id="editTitle${index}"
                    value="${item.address}"/>
                </div>
    
            <!-- Type -->
                <div class="mb-3">
                    <label for="editType${index}" class="form-label">Type</label>
                    <input class="form-control" type="text"
                    name="editType${index}"
                    id="editType${index}"
                    value="${item.type}"/>
                </div>
    
            <!-- Location -->
                <div class="mb-3">
                    <label for="editLocation${index}" class="form-label">Location</label>
                    <input class="form-control" type="text"
                    name="editLocation${index}"
                    id="editLocation${index}"
                    value="${item.location}"/>
                </div>
    
            <!-- picture -->
                <div class="mb-3">
                    <label for="editPic${index}" class="form-label">Picture</label>
                    <input class="form-control" type="text"
                    name="editPic${index}"
                    id="editPic${index}"
                    value="${item.picture}"/>
                </div>
            </div>
            
            <div class="col-6">
            <!-- bedrooms -->
                <div class="mb-3">
                    <label for="editRooms${index}" class="form-label">Bedrooms</label>
                    <input class="form-control" type="text"
                    name="editRooms${index}"
                    id="editRooms${index}"
                    value="${item.bedrooms}"/>
                </div>
                
            <!-- bathrooms -->
                <div class="mb-3">
                    <label for="editBath${index}" class="form-label">Bathrooms</label>
                    <input class="form-control" type="text"
                    name="editBath${index}"
                    id="editBath${index}"
                    value="${item.bathrooms}"/>
                </div>
    
            <!-- garage -->
                <div class="mb-3">
                    <label for="editGarage${index}" class="form-label">Garage Space</label>
                    <input class="form-control" type="text"
                    name="editGarage${index}"
                    id="editGarage${index}"
                    value="${item.garage}"/>
                </div>
    
            <!-- price -->
                <div class="mb-3">
                    <label for="editPrice${index}" class="form-label">Price</label>
                    <input class="form-control" type="text"
                    name="editPrice${index}"
                    id="editPrice${index}"
                    value="${item.price}"/>
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
console.table(properties)
}
loadData();

// Sort
function sort() {

}
document.getElementById('btnSort').addEventListener('click', sort)

// CREATE
function addItem() {
  // e.preventDefault();
  // Push to Array
  properties.push({
    id: properties.length + 1,
    type : document.getElementById('addType').value,
    location : document.getElementById('addLocation').value,
    address : document.getElementById('addAddress').value,
    picture : document.getElementById('addPicture').value,
    bedrooms : parseInt(document.getElementById('addRooms').value),
    bathrooms : parseInt(document.getElementById('addBathrooms').value),
    garage : parseInt(document.getElementById('addGarage').value),
    price : parseInt(document.getElementById('addPrice').value),
  });
  localStorage.setItem("property", JSON.stringify(properties));
  loadData();
}

// UPDATE
function updateProperty(id) {
  console.log("Im being clicked");
  // variables for edited values
  let etype = document.getElementById(`editType${id}`).value;
  let elocation = document.getElementById(`editLocation${id}`).value;
  let eaddress = document.getElementById(`editTitle${id}`).value;
  let epicture = document.getElementById(`editPic${id}`).value;
  let ebedrooms = document.getElementById(`editRooms${id}`).value;
  let ebathrooms = document.getElementById(`editBath${id}`).value;
  let egarage = document.getElementById(`editGarage${id}`).value;
  let eprice = document.getElementById(`editPrice${id}`).value;

  // passing edited values into array
    properties[id].type = etype
    properties[id].location = elocation
    properties[id].address = eaddress
    properties[id].picture = epicture
    properties[id].bedrooms = parseInt(ebedrooms)
    properties[id].bathrooms = parseInt(ebathrooms)
    properties[id].garage = parseInt(egarage)
    properties[id].price = parseInt(eprice)
    localStorage.setItem("property", JSON.stringify(properties));
    loadData();
  };

// DELETE
function deleteItem(id) {
  if (id > -1) {
    properties.splice(id, 1);
  }
  for (i = 0; i < properties.length; i++) {
    properties[i].id = i + 1;
  }
  localStorage.setItem("property", JSON.stringify(properties));
  loadData();
}
document.getElementById("delete").addEventListener("click", deleteItem);

// footer & copyright
const Year = new Date().getFullYear();
document.getElementById("footer").innerHTML += `
<div class="container">
  <div class="row w-100">
      <div class="col-12 d-flex justify-content-between">
        <p><i class="fa-solid fa-location-dot"></i> Property 420</p>
        
        <i>&copyAbdus-Samad Charles ${Year}</i>
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