const url= ("https://jszlkwoagoveednauwsf.supabase.co/rest/v1/vild_mad_data?select=titel,image,id")

const key =("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impzemxrd29hZ292ZWVkbmF1d3NmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM5MDIzOTcsImV4cCI6MjAwOTQ3ODM5N30.sGTpEXzcNBQo-quSAoZl_aTwHVa1YCVeSl5jBzohEy0")




fetch("https://jszlkwoagoveednauwsf.supabase.co/rest/v1/vild_mad_data?select=titel,image,id", {


method: "GET",
headers: {
    apikey: 
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impzemxrd29hZ292ZWVkbmF1d3NmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM5MDIzOTcsImV4cCI6MjAwOTQ3ODM5N30.sGTpEXzcNBQo-quSAoZl_aTwHVa1YCVeSl5jBzohEy0"

},
})  

.then(res=>res.json())
.then(data=>showProducts(data));

function showProducts(products){
    // Looper og kalder showProduct
    products.forEach(showProduct);
}

function showProduct(product){

 console.log(product);
    // fang template
const template = document.querySelector("#smallProductTemplate").content;
    // lav en kopi
const copy = template.cloneNode(true);

 // ændre indhold
 copy.querySelector(".ingrediens_navn").textContent = product.titel
 copy.querySelector(".billede").src = product.image

 copy.querySelector("a").setAttribute("href", `om.html?id=${product.id}`);

// appende
   document.querySelector("section").appendChild(copy);
}

   


