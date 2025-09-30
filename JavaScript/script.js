// Container  
const categoriesTree = document.getElementById("categories");
const plantsCard = document.getElementById("plants-card");
const asideCartContainer = document.getElementById("aside-cart-container");

// Add Loading Spinner 
const manageSpinner = (value) => {
    const asideCart = document.getElementById("aside-cart-container").parentElement;
    if(value === true){
        document.getElementById("spinner").classList.remove("hidden");
        document.getElementById("plants-card").classList.add("hidden");
        asideCart.classList.add("hidden");
    }else{
        document.getElementById("plants-card").classList.remove("hidden");
        document.getElementById("spinner").classList.add("hidden");
        asideCart.classList.remove("hidden");
    }
}

// Categories Loaded 
const allCategoriesLoad = () => {
    const url = "https://openapi.programming-hero.com/api/categories"
    fetch(url)
    .then(res => res.json())
    .then(data => {
        displayAllCategories(data.categories)
    })
}

// Categories Displayed 
const displayAllCategories = (categories) => {
    categories.forEach(category => {
        categoriesTree.innerHTML += `
            <li id="${category.id}" class="text-lg px-4 py-2 font-medium cursor-pointer hover:bg-green-500 hover:text-white rounded-md category-btn">${category.category_name}</li>
        `
    })
}


// Add Event Listener - Main Section 
document.getElementById("main-container").addEventListener("click", (event) => {

    // Remove active class 
   if(event.target.className.includes("category-btn") || event.target.id === "main"){
        const allLi = document.querySelectorAll("li");
        allLi.forEach(x => {
            x.classList.remove("active");
        })
    }

    // Add active class
    if(event.target.className.includes("category-btn")){
        event.target.classList.add("active")
        const id = event.target.id;
        plantsByCategoryLoad(id)
    }

    // Default all plants load 
    if(event.target.id === "main"){
        allPlantsLoad()
    }

    // Add To Cart Button 
    if(event.target.className.includes("cart-btn")){
        const price = event.target.parentNode.children[2].children[1].children[1].innerText
        const title = event.target.parentNode.children[0].innerText

        alert(`${title} has bee added to the cart !!`)

        // Add and update total price to show the aside card 
        const cardTotalPrice = document.getElementById("card-total-Price").innerText
        const priceValue = Number(price)
        const totalPrice = priceValue + Number(cardTotalPrice);
        document.getElementById("card-total-Price").innerText = totalPrice

        // Create aside card innerHTML
        asideCartContainer.innerHTML += `
            <div class="flex justify-between items-center p-5 mx-5 my-4 bg-[#cff0dc99]  rounded-md">
                    <div class="space-y-2">
                        <h2 class="text-xl font-semibold">${title}</h2>
                        <p class="font-medium text-gray-500"><i class="fa-solid fa-bangladeshi-taka-sign"></i><span class="text-lg font-semibold">${price}</span></p>
                    </div>
                    <span><i class="fa-solid fa-xmark cursor-pointer cross-btn text-gray-500 hover:text-red-600"></i></span>
                </div>
        `
    }

    // Delete and update total price to show the aside card
    if(event.target.className.includes("cross-btn")){
        const cardTotalPrice = document.getElementById("card-total-Price").innerText
        const price = event.target.parentNode.parentNode.children[0].children[1].innerText
        const updatePrice = Number(cardTotalPrice) - Number(price)
        document.getElementById("card-total-Price").innerText = updatePrice
        event.target.parentNode.parentNode.remove()
        
    }

    // Modal Call 
    if(event.target.className.includes("cart-title")){
        my_modal_5.showModal()
        const id = event.target.id
        plantsDetails(id)
    }

})

// Plant By Category Loaded
const plantsByCategoryLoad = (id) => {
    manageSpinner(true)
    const url = `https://openapi.programming-hero.com/api/category/${id}`
    fetch(url)
    .then(res => res.json())
    .then(data => {
        displayPlantByCategory(data.plants)
    })
}

// Plant By Category Displayed 
const displayPlantByCategory = (values) => {
    document.getElementById("plants-card").innerHTML = "";
    values.forEach(value => {
         plantsCard.innerHTML += `
             <div class="p-5 bg-white rounded-xl shadow-lg md:transform md:transition md:duration-300 md:hover:scale-105 md:hover:shadow-xl">
                    <div class="space-y-4">
                        <div class="rounded-md flex justify-center items-center">
                            <img src="${value.image}" alt="" class="h-80 md:h-72 w-full rounded-lg">
                        </div>
                        <div class="text-left space-y-3">
                            <h2 id="${value.id}" class="text-lg font-bold cursor-pointer cart-title">${value.name}</h2>
                            <p class="text-gray-600">${value.description}</p>
                            <div class="flex justify-between space-y-2">
                                <p class="px-3 py-1 font-medium text-green-700 bg-[#DCFCE7] rounded-full">${value.category}</p>
                                <p class="font-medium"><i class="fa-solid fa-bangladeshi-taka-sign"></i><span class="text-xl font-bold">${value.price}</span></p>
                            </div>
                            <button class="bg-[#15803D] w-full py-2 font-medium text-white hover:bg-yellow-400 hover:text-green-700 rounded-full cursor-pointer cart-btn">Add to Cart</button>
                        </div>
                    </div>
                </div>
        `
    })
    manageSpinner(false)
}

// All Plants Loaded 
const allPlantsLoad = () => {
    manageSpinner(true)
    const url = "https://openapi.programming-hero.com/api/plants"
    fetch(url)
    .then(res => res.json())
    .then(data => {
        displayAllPlats(data.plants)
    })
}

// All plants Displayed 
const displayAllPlats = (plants) => {
    document.getElementById("plants-card").innerHTML = "";
    plants.forEach(plant => {
         plantsCard.innerHTML += `
             <div class="p-5 bg-white rounded-xl shadow-lg md:transform md:transition md:duration-300 md:hover:scale-105 md:hover:shadow-xl">
                    <div class="space-y-4">
                        <div class="rounded-md flex justify-center items-center">
                            <img src="${plant.image}" alt="" class="h-80 md:h-72 w-full rounded-lg">
                        </div>
                        <div class="text-left space-y-3">
                            <h2 id="${plant.id}" class="text-lg font-bold cursor-pointer cart-title">${plant.name}</h2>
                            <p class="text-gray-600">${plant.description}</p>
                            <div class="flex justify-between space-y-2">
                                <p class="px-3 py-1 font-medium text-green-700 bg-[#DCFCE7] rounded-full">${plant.category}</p>
                                <p class="font-medium"><i class="fa-solid fa-bangladeshi-taka-sign"></i><span class="text-xl font-bold">${plant.price}</span></p>
                            </div>
                            <button class="bg-[#15803D] w-full py-2 font-medium text-white hover:bg-yellow-400 hover:text-green-700 rounded-full cursor-pointer cart-btn">Add to Cart</button>
                        </div>
                    </div>
                </div>
        `
    })
    manageSpinner(false)
}

// Plants Details Loaded 
const plantsDetails = (id) => {
    const url = `https://openapi.programming-hero.com/api/plant/${id}`
    fetch(url)
    .then(res => res.json())
    .then(data => {
        displayPlantsDetails(data.plants)
    })
}

// Plants Details Displayed
const displayPlantsDetails = (value) => {
    // Empty Modal Box 
    document.getElementById("modal-box").innerHTML = "";

    // Create Modal Box 
    document.getElementById("modal-box").innerHTML += `
            <div class="space-y-4">
               <h2 class="text-3xl font-bold">${value.name}</h2>
               <img src="${value.image}" alt="" class="h-80 w-full rounded-lg">
               <p class="text-xl"><span class="text-xl font-bold">Category: </span>${value.category}</p>
               <p class="text-xl"><span class="text-xl font-bold">Price: </span>${value.price}</p>
               <p class="text-xl"><span class="text-xl font-bold">Description: </span>${value.description}</p>
            </div>
    `
}

// Active class added for All Plants of the categories 
document.getElementById("main").classList.add("active")

// Function Call 
allCategoriesLoad()
allPlantsLoad()





                   