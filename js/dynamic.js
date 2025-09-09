const categoryContainer = document.querySelector("#category-list");
const treeContainer = document.querySelector("#tree-list");
const cartContainer = document.querySelector("#cart-list");
const totalPriceEl = document.querySelector("#cart-total");
const spinner = document.querySelector("#spinner");

let cart = [];

async function loadCategories() {
    spinner.classList.remove("hidden");
    try {
        const res = await fetch("https://openapi.programming-hero.com/api/categories")
        const data = await res.json();
        spinner.classList.add("hidden");

        categoryContainer.innerHTML = "";
        data.categories.forEach(cat => {
            const li = document.createElement("li");
            li.innerHTML = `
            <button onclick="loadtrees('${cat.category_id}', this)"
                    class="block w-full px-3 py-2 rounded-md hover:bg-green-500 text-left">
                    ${cat.category}
            </button>`;
            categoryContainer.appendChild(li);


        });
        if (data.categories.length > 0) {
            loadtrees(data.categories[0].category_id, categoryContainer.querySelector("button"));

        }

    } catch (err) {
        console.error("Error loading categories", err);
    }
}

async function loadtrees(catid, btn) {
    setActiveCategory(btn);
    spinner.classList.remove("hidden");
    try {
        const res = await fetch(`https://openapi.programming-hero.com/api/category/${catid}`);
        const data = await res.json();
        spinner.classList.add("hidden");

        treeContainer.innerHTML = "";
        data.data.forEach(tree => {
            const div = document.createElement("div");
            div.className = "bg-white rounded-lg shadow-sm overflow-hidden";
            div.innerHTML = `
            <div class="h-48 bg-gray-200 flex items-center justify-center">
                <img src="${tree.image}" alt="${tree.name}" class="w-full h-full object-cover"/>
                </div>
                <div class="p-4">
                <h3 onclick="showDetails('${tree.id}')"
                  class="cursor-pointer font-semibold text-green-700 mb-2 hover:underline">
                  ${tree.name}
                    </h3>
                     <p class="text-sm text-gray-600 mb-3">${tree.description.slice(0, 60)}...</p>
                        <div class="flex items-center justify-between mb-3">
                        <span class="bg-green-200 rounded-full text-sm font-normal">${tree.category}</span>
                        <span class="text-lg font-bold text-gray-800">৳${tree.price}</span>
                        </div>
                        <button onclick="addToCart('${tree.name}', ${tree.price})"
                           class="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors">
                           Add to Cart
                           </button>
                           </div>`;
            treeContainer.appendChild(div);
        });

    } catch (err) {
        console.error("Error losding trees", err);
    }

}
  
        async function showDetails(id){
            spinner.classList.remove("hidden");
            try{
                const res = await fetch(`https://openapi.programming-hero.com/api/plant/${id}`);
                const { data } = await res.json();
                spinner.classList.add("hidden")

                const model = document.createElement("div");
                model.className = "fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50";
                model.innerHTML = `
                 <div class="bg-white rounded-lg shadow-lg p-6 w-96 relative">
                 <button onclick="this.parentElement.parentElement.remove()"
                        class="absolute top-2 right-2 text-gray-600 text-2xl">&times;</button>
                       <img src="${data.image}" class="w-full h-48 object-cover mb-3 rounded">
                       <h2 class="text-xl font-bold mb-2">${data.name}</h2>
                       <p class="text-gray-600 mb-3">${data.description}</p>
                       <p><b>category:</b>${data.category}</p>
                       <p><b>price:</b>৳${data.price}</p>
                       </div>`;
                       document.body.appendChild(model);
            } catch(err){
                console.error("Error loading details", err);
            }

                
            }
        

        function addToCart(name,price) {
            cart.push({name,price});
            renderCart();
        }

        function renderCart() {
            cartContainer.innerHTML= "";
            let total = 0
            cart.forEach((item, i) => {
                total+= item.price;
                const div = document.createElement("div")
                div.className = "flex justify-between items-center text-sm mb-2";
                div.innerHTML = `
                <div>
                  <span class="font-medium">${item.name}</span>
                  </div>
                  <button onclick="removeFromCart(${i})"class="text-red-500 hover:text-red-700">
                  <i class="fa-solid fa-xmark"></i></button>`;
                  cartContainer.appendChild(div)
            });
            totalPriceEl.textContent = "৳" + total;

                  
            }

            function removeFromCart(index){
                cart.splice(index, 1);
                renderCart();
            }

            function setActiveCategory(btn){
                document.querySelectorAll("#category-list button").forEach(b => {
                    b.classList.remove("bg-green-600", "text-white");
                });
                btn.classList.add("bg-green-600", "text-white")
            }
        

        loadCategories();




