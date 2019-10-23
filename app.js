const newsApi = new NewsApi();
const ui = new UI();

const inputField = document.getElementById("search");
const searchBtn = document.getElementById("btnSearch");
const result = document.querySelector(".showResult");
const displayOnLoad = document.querySelector(".showONload");
const backBtn = document.getElementById('back');
const loading = document.getElementById('loading');
const alert = document.querySelector('.alert');

loading.style.display="none";
result.style.display='none';
alert.style.display='none'

backBtn.addEventListener('click', ()=>{
    console.log('back btn')
    loadOnDom()
    result.style.display='none'
    displayOnLoad.style.display='block';
})


searchBtn.addEventListener("click", e => {
    result.style.display='block';
    displayOnLoad.style.display='none';
    

	const input = inputField.value.trim();
	if (input !== "") {
        // loading.style.display='none'
        newsApi.getNewsBysearch(input)
        .then(dats => {
			console.log(dats);
			// console.log(`source:${name}, author:${author}, tittle:${title}`);
			dats.articles.forEach((dat, index) => {
				const {
					source: { name },
					author,
					title,
					description,
					url,
					urlToImage,
					publishedAt
                } = dat;
                // console.log(`source:${name}, author:${author}, tittle:${title}`);
				ui.searchUI({
					name,
					author,
					title,
					index,
					description,
					url,
					urlToImage,
                    publishedAt,
                });
                console.log(`source:${name}, author:${author}, tittle:${title}`);
            });
        
		});
	} else {
        loadOnDom();
        displayOnLoad.style.display='none';
        result.style.display="none"
        alert.style.display='block'

    }
    
    inputField.value= " "
});




function loadOnDom() {
    
	newsApi
		.getNewsData()
		.then(res => {
			console.log(res);
			const {
				source: { name },
				author,
				title
			} = res.articles[0];
			console.log(`source:${name}, author:${author}, tittle:${title}`);
			res.articles.forEach((dat, index) => {
				const {
					source: { name },
					author,
					title,
					description,
					url,
					urlToImage,
					publishedAt
				} = dat;
				ui.showOnUi({
					name,
					author,
					title,
					index,
					description,
					url,
					urlToImage,
					publishedAt
				});
			});
		})
		.catch(err => {
			console.log(err);
		});
}

loadOnDom();
