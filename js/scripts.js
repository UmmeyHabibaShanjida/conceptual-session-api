const handleCategory = async() =>{
    
    const response = await fetch("https://openapi.programming-hero.com/api/news/categories");
    const data = await response.json();
    const tabContainer = document.getElementById("tab-container");

    const trimedData = data.data.news_category.slice(0, 3);

    trimedData.forEach((category) =>{
        const div = document.createElement("div");
        div.innerHTML = `
        <a onclick="handleLoadNews('${category.category_id}')" role="tab" class="tab">${category.category_name}</a> 
        `;
        tabContainer.appendChild(div);
    });
}

const handleLoadNews = async (categoryId) =>{
    console.log(categoryId);
    const response = await fetch(` https://openapi.programming-hero.com/api/news/category/${categoryId}`);
    const data = await response.json();

    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    
    data.data?.forEach((news) =>{
        console.log(news)
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card bg-base-100 shadow-xl">
  <figure><img src=${news?.image_url} alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">
      ${news?.title.slice(0,40)}
      <div class="badge badge-secondary">${news?.rating?.badge}</div>
    </h2>
    <p>${news?.details.slice(0,50)}</p> 
  </div>
</div> `;
    cardContainer.appendChild(div);
    })
}


handleCategory()
handleLoadNews('01')