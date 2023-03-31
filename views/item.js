const description=document.getElementById("description");
const price=document.getElementById("price");
const itemname=document.getElementById("item_name");
const quantity=document.getElementById("quantity");
const submit=document.getElementById("Submit");
const table=document.querySelector('table tbody')
submit.addEventListener('click', ()=>{
    axios.post("http://localhost:3000/addItem", 
       
     {
        itemname: itemname.value,
        description:description.value,
        price:price.value,
        quantity:quantity.value
    }
).then(response=>{
    console.log(response);
    alert(`${"Data Added"}`);

    loadHTMLTable(response);
    
});
})

document.addEventListener('DOMContentLoaded', ()=>{
    axios.get("http://localhost:3000/getdata")
    .then(data=>{
        loadHTMLTable(data);
    })
    
})

function loadHTMLTable(data)
{
let count=0;

console.log(table);

const data1=data.data;

if(data1.length===0)
{
    table.innerHTML="<tr><td class='no-data' colspan='7'>No Data</td></tr>"
}
else
{
let tableHTML="";

    for(let i=0; i<data1.length;i++)
    {
        
        
        tableHTML+= "<tr>";
   // tableHTML+=`<td>${count}</td>`;
    tableHTML+=`<td>${data1[i].itemname}</td>`;
    tableHTML+=`<td>${data1[i].description}</td>`;
    tableHTML+=`<td>${data1[i].price}</td>`;
    tableHTML+=`<td>${data1[i].quantity}</td>`;
       
    tableHTML+=`<td><button class="buy1-btn" data-id=${data1[i].id} data-quantity=${data1[i].quantity}>Buy 1</button></td>`;
    tableHTML+=`<td><button class="buy2-btn" id="EditBtn" data-id=${data1[i].id} data-quantity=${data1[i].quantity}>Buy 2</button></td>`;
    tableHTML+=`<td><button class="buy3-btn" data-id=${data1[i].id} data-quantity=${data1[i].quantity}>Buy 3</button></td>`;
    tableHTML+="</tr>";
    }

    
        table.innerHTML=tableHTML;
    }
   
}

document.querySelector('table tbody').addEventListener('click', function(event) {
    if (event.target.className === "buy1-btn") {
        console.log(event.target.dataset.quantity);
        

        updateQuantity(event.target.dataset.id, event.target.dataset.quantity-1);
        
    }

    if (event.target.className === "buy2-btn") {
        console.log(event.target.dataset.id);
        updateQuantity(event.target.dataset.id, event.target.dataset.quantity-2);
        
    }
    if (event.target.className === "buy3-btn") {
        console.log(event.target.dataset.id);
        updateQuantity(event.target.dataset.id, event.target.dataset.quantity-3);
        
    }})
    
function updateQuantity(id, val) {

    axios('http://localhost:3000/isDone', {
        method: 'PATCH',
        data:({
            id:id,
            quantity:val
        })
    })
    .then(data => {
        location.reload();
})}

