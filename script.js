const categoryTab = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await res.json();
    const category = data.data;
    // console.log(data.data);
    categoryName(category);
}



const categoryName = (category) => {
    const categoryContainer = document.getElementById('category-container');
    categoryContainer.classList = `tabs justify-center`;
    // accessing category names ND SHOWING THEM
    category.forEach((categoryName) => {

        console.log(categoryName.category);
        const div = document.createElement('div');
        div.innerHTML = `<a onclick = "handleCategoryDetail('${categoryName.category_id}')" class="tab tabs-boxed mx-1 md:mx-4 px-1 md:px-6 ">${categoryName.category}</a> `
        categoryContainer.appendChild(div);
    })


}

// Accessing category details
const handleCategoryDetail = async (categoryId) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
    const data = await res.json();
    const categoryDetail = data.data;
    displaydata(categoryDetail)

    // obtaining the div to append details inside it
    const categoryDetailContainer = document.getElementById('category-detail-container');
    categoryDetailContainer.classList = `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4`;
    categoryDetailContainer.textContent = '';


    categoryDetail.forEach((cardInfo) => {
        const div = document.createElement('div');
        div.innerHTML = ` 
        <div class="card  bg-base-100 shadow-xl my-10 mx-3 md:mx-6 lg:mx-0">
            <figure><img class="w-46 h-56" src=${cardInfo?.thumbnail} ></figure>
            <div class="card-body">
                <div class=" flex gap-2 ">
                    <div class = "w-10 ">
                    <img class="rounded-full W-8 h-10 justify-around" src= '${cardInfo?.authors[0]?.profile_picture}' alt="">
                    </div>

                    <div>
                <div>
                <h2 class="card-title text-lg">${cardInfo?.title}</h2>
                </div>
                        <div class="flex  items-center justify-center w-32 ">
                            <p class="text-gray-400">${cardInfo?.authors[0]?.profile_name.slice(0, 10)}</p>
                           
                            <p  >${cardInfo.authors[0].verified ? `<img  src="verify.png">` : ''}</p>
                           
                        </div>
                        <p class="text-gray-400">${cardInfo?.others?.views + ' ' + 'views'}</p>
                        
                    </div>
                </div>
            </div>
        </div>

    `
        categoryDetailContainer.appendChild(div)

        console.log(cardInfo);



    })

    // to display no content id there is no data
    function displaydata(item) {
        const emptyContent = document.getElementById('no-content');
        if (item.length == 0) {
            emptyContent.classList.remove('hidden');
            
        }
        else if(item.length > 0){
            emptyContent.classList.add('hidden');
        }

        
    }


}



categoryTab();
handleCategoryDetail(1000);


