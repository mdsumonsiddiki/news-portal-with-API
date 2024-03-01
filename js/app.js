const loadCat = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/categories`);
    const catData = await res.json();
    const data = catData.data.news_category;
    getCatData(data);
}
const getCatData = (catData) => {
    const catContainer = document.getElementById('cat-container');
    catData.forEach((catItem) => {
        const btnDiv = document.createElement('div');
        btnDiv.innerHTML = `<button onclick="loadNews('${catItem.category_id}')" class="text-xl font-bold">${catItem.category_name}</button>`
        catContainer.appendChild(btnDiv)
    });
}

const loadNews = async (catId) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${catId}`);
    const newsData = await res.json();
    const data = newsData.data;
    const emptyNews = document.getElementById('empty-news');
    console.log(emptyNews.classList)
    if (data.length === 0) {
        emptyNews.classList.remove('hidden');
    }
    else {
        emptyNews.classList.add('hidden');
    }
    getNewsData(data)
}
const getNewsData = (newsData) => {

    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = '';
    newsData.forEach((newsItem) => {
        console.log()
        const newsDiv = document.createElement('div');
        newsDiv.innerHTML = `<div class="bg-white p-4 rounded-xl flex items-center gap-8 drop-shadow-xl">
        <div class="w-6/12">
            <img class="object-cover" src=${newsItem.image_url} alt="">
        </div>
        <div>
            <div>
                <h2 class="text-[#121221] text-2xl font-bold">${newsItem.title}</h2>
                <p class="text-[#949494] pt-2">From our favourite UK influencers to the best missives from
                    Milan and the coolest New Yorkers, read on some of the best fashion blogs out there, and
                    for even more inspiration, do head to our separate black fashion influencer round-up.
                    Milan and the coolest New Yorkers, read on some of the best fashion blogs out there, and
                    for even more inspiration, do head to our separate black fashion influencer round-up.
                </p>
            </div>
            <div class="flex items-center justify-between pt-4">
                <div class="flex items-center gap-3">
                <div class="h-10 w-10 rounded-full flex items-center justify-center overflow-hidden">
                     <img class="object-center" src=${newsItem.thumbnail_url} alt="">
                 </div>
                    <div>
                        <h4 class="text-[#2B2C34] font-medium text-lg">${newsItem.author.name ? newsItem.author.name : '...'}</h4>
                        <p class="text-[#718797]">${newsItem.author.published_date ? newsItem.author.published_date : ' '}</p>
                    </div>
                </div>
                <div class="flex items-center gap-3">
                    <img src="images/carbon_view.svg" alt="">
                    <h3 class="text-xl text-[#515151] font-bold">${newsItem.total_view ? newsItem.total_view : '0'}</h3>
                </div>
                <div>
                    <img src="images/Group 116134.svg" alt="">
                </div>
                <div>
                    <img src="images/bi_arrow-right-short.svg" alt="">
                </div>
            </div>
        </div>
    </div>
        `
        newsContainer.appendChild(newsDiv);
    })
}
loadNews('08')
loadCat()