var prudectNameInput = document.getElementById("prodName");
var prudectCatuoryInput = document.getElementById("catuory")
var prudectPriceInput = document.getElementById("prodPrice");
var prudectDescInput = document.getElementById("prodDesc");
var prudectsList = []
if (localStorage.getItem("prodects") != null) {
    prudectsList = JSON.parse(localStorage.getItem("prodects"))
    displayProdects()
}


function getInputs() {
    var prudects = {
        name: prudectNameInput.value,
        catuory: prudectCatuoryInput.value,
        price: prudectPriceInput.value,
        desc: prudectDescInput.value,

    }
    console.log(prudects)
    prudectsList.push(prudects);
    localStorage.setItem("prodects", JSON.stringify(prudectsList))
    displayProdects()

}

function displayProdects() {
    var cartona = ``;
    for (var i = 0; i < prudectsList.length; i++) {
        cartona += `
        <tr>
           <td>${i}</td>
           <td>${prudectsList[i].name}</td>
           <td>${prudectsList[i].catuory}</td>
           <td>${prudectsList[i].price}</td>
           <td>${prudectsList[i].desc}</td>
           <td><button  onclick="deleteItem(${i}) "   class="btn btn-success">delete</button></td>
           <td><button class="btn btn-danger">update</button></td>

         </tr>

        `
    }
    document.getElementById("tBody").innerHTML = cartona;

}

function deleteItem(index) {
    prudectsList.splice(index, 1);
    alert("Do you want to delete it ")
    localStorage.setItem("prodects", JSON.stringify(prudectsList))
    displayProdects()


}
function search(op) {
    var cartona = ``;

    for (var i = 0; i < prudectsList.length; i++) {
        if (prudectsList[i].name.toLowerCase().includes(op.toLowerCase()))
            cartona += `
        <tr>
           <td>${i}</td>
           <td>${prudectsList[i].name}</td>
           <td>${prudectsList[i].catuory}</td>
           <td>${prudectsList[i].price}</td>
           <td>${prudectsList[i].desc}</td>
           <td><button  onclick="deleteItem(${i}) "   class="btn btn-success">delete</button></td>
           <td><button class="btn btn-danger">update</button></td>

         </tr>

        `

    }
    document.getElementById("tBody").innerHTML = cartona;


}
































// var prudectNameInput = document.getElementById("prodName");
// var prudectCatuorymeInput = document.getElementById("catuory");
// var prudectPriceInput = document.getElementById("prodPrice");
// var prudectDescInput = document.getElementById("prodDesc");
// var productList = [];
// if(localStorage.getItem("prudects") != null){
//     productList=JSON.parse(localStorage.getItem("prudects"));
//  displayProdects();
// }

// function getInputs() {

//     var product = {
//         name: prudectNameInput.value,
//         catuory: prudectCatuorymeInput.value,

//         price: prudectPriceInput.value,

//         desc: prudectDescInput.value

//     }
//     productList.push(product);
//     localStorage.setItem("prudects",JSON.stringify(productList))
//     displayProdects()

// }

// function displayProdects() {
//     var cartona = ``
//     for (var i = 0; i < productList.length; i++) {
//         cartona += `
//         <tr>
//         <td>${[i]}</td>
//         <td>${productList[i].name}</td>
//         <td>${productList[i].catuory}</td>
//         <td>${productList[i].price}</td>
//         <td>${productList[i].desc}</td>
//         <td> <button class="btn btn-success">delete</button>
//         </td>
//         <td> <button class="btn btn-danger ">update</button>
//         </td>
//      </tr>
//     `
//     }
//     document.getElementById("tBody").innerHTML = cartona;

// }
