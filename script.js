const categoryTab = async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
const data = await res.json();
const category = data.data;
// console.log(data.data);
categoryName(category);
}



const categoryName = (category) =>{
    const categoryContainer = document.getElementById('category-container');
    categoryContainer.classList = `tabs justify-center`;
    // accessing category names ND SHOWING THEM
    category.forEach((categoryName) =>{
        
        console.log(categoryName.category);
        const div = document.createElement('div');
        div.innerHTML = `<a onclick = "handleCategoryDetail('${categoryName.category_id}')" class="tab tabs-boxed mx-1 md:mx-4 px-1 md:px-6 ">${categoryName.category}</a> `
        categoryContainer.appendChild(div);
    })
    
   
}

// Accessing category details
const handleCategoryDetail = async (categoryId) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
    const data = await res.json();
    const categoryDetail = data.data;

    // obtaining the div to append details inside it
    const categoryDetailContainer = document.getElementById('category-detail-container');
    categoryDetailContainer.classList = `grid grid-cols-4 gap-4`;
    categoryDetailContainer.textContent = '';
    

    categoryDetail.forEach((cardInfo) =>{
        const div = document.createElement('div');
        div.innerHTML = ` 
        <div class="card  bg-base-100 shadow-xl my-20">
            <figure><img class="w-46 h-56" src=${cardInfo?.thumbnail} /></figure>
            <div class="card-body">
                <div class=" flex">
                    <img class="rounded-full W-6 justify-around" src="Icon.png" alt="">

                    <div>
                        <h2 class="card-title text-lg">Shoes!</h2>
                        <div class="flex gap-3">
                            <p class="text-gray-400">If a dog chews shoes whose shoes does he choose?</p>
                            <p>ratings</p>
                        </div>
                        <p class="text-gray-400">aname</p>
                        <p class="text-gray-400">view</p>
                    </div>
                </div>
            </div>
        </div>
    `
    categoryDetailContainer.appendChild(div)
        console.log(cardInfo);
    })
    // console.log(categoryDetail);
}


categoryTab();
