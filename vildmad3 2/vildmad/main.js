
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

const url= ("https://jszlkwoagoveednauwsf.supabase.co/rest/v1/vild_mad_data")

const key =("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impzemxrd29hZ292ZWVkbmF1d3NmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM5MDIzOTcsImV4cCI6MjAwOTQ3ODM5N30.sGTpEXzcNBQo-quSAoZl_aTwHVa1YCVeSl5jBzohEy0")




fetch(`https://jszlkwoagoveednauwsf.supabase.co/rest/v1/vild_mad_data?id=eq.${id}`,
 {


method: "GET",
headers: {
    apikey: 
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impzemxrd29hZ292ZWVkbmF1d3NmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM5MDIzOTcsImV4cCI6MjAwOTQ3ODM5N30.sGTpEXzcNBQo-quSAoZl_aTwHVa1YCVeSl5jBzohEy0"

},
})  

.then(res=>res.json())
.then(data=>showProduct(data));

function showProduct(product){
    console.table("product", product);
    // jeg looper array'en
    product.forEach(build);
}

function build(products){ 
    console.table(products)
    document.querySelector(".overskrift").textContent = products.titel;
    document.querySelector(".tekst").textContent = products.description ;
    document.querySelector(".sanke").textContent = products.categories_sankested ;
    document.querySelector(".seson").textContent = products.categories_time ;

    document.querySelector(".billede_1").src = products.image ;
    document.querySelector(".opskrift").src = products.image_food ;





}














// IKONER:

// vælger vores elemnet som vi vil tag fat i
const dropdowns = document.querySelectorAll(".dropdown");

// hvad der sker når du vil åben dropdown
dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("mouseover", () => {
    // vi henter vores css element der er mouseover 
    dropdown.querySelector(".dropdown-content").style.display = "block";
  });
// for at kunne fjerne block teksten
  dropdown.addEventListener("mouseout", () => {
    dropdown.querySelector(".dropdown-content").style.display = "none";
  });
});