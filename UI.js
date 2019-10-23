class UI {
    constructor() {
        this.profileUI = Array.from(document.querySelectorAll(".profile"));
        console.log(this.profileUI);
        this.search = Array.from(document.querySelectorAll(".result"));
        console.log(this.search);
    }

    showOnUi({ name , author, title, index, description,url,urlToImage,publishedAt }) {
        this.profileUI[index].innerHTML = `
        <img src="${urlToImage}" class="card-img-top" alt="..." />
        <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p class="card-text">
            ${description}
            </p>
            <a href="${url}" target="_blank">More...</a>
        </div>
        <div class="card-footer">
            <small class="text-muted">Published: ${publishedAt}</small>
        </div>
        
                            
                        `;
    }

    searchUI({ name , author, title, index, description,url,urlToImage,publishedAt }){
        this.search[index].innerHTML = `
        
        <img src="${urlToImage}" class="card-img-top" alt="..." />
        <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p class="card-text">
            ${description}
            </p>
            <a href="${url}" target="_blank">More...</a>
        </div>
        <div class="card-footer">
            <small class="text-muted">Published: ${publishedAt}</small>
        </div>
        `
    }
}

{
  /* <div class="border rounded mb-3 align-self-center">
                            
                            <p class="img-fluid card-img-top rounded ">${name}</p>
                            <p class="img-fluid card-img-top rounded ">${title}</p>
                            <div class="card-body card2  round">
                            <div class="align">
                            <a href="#" target="_blank" class="btn btn-info"><figure>${title}</figure></a>
                            </div>
                            </div>
                            </div> */
}

{/* <div class=" border-success mb-3" style="max-width: 20rem;">
                <div > ${name}</div>
                <div>
                <h4 class="card-title">${title}</h4>
                <p class="card-text">${description}</p>
                <a href="${url}" target="_blank" class="btn btn-info"><figure>Details</figure></a>
                </div>
            </div> 
        

             <p class='card-text'>
                    <span class='h5 text-muted'>Montepremi</span>";
                    <small style='padding-left: 125px;' class='text-muted'>data</small>
                </p>
        
        
        
        */}

        // <img src="..." class="card-img-top" alt="..." />
		// 	<div class="card-body">
		// 		<h5 class="card-title">Card title</h5>
		// 		<p class="card-text">
		// 		This is a wider card with supporting text below as a natural
		// 		lead-in to additional content. This content is a little bit
		// 		longer.
		// 		</p>
		// 	</div>
		// 	<div class="card-footer">
		// 		<small class="text-muted">Last updated 3 mins ago</small>
		// 	</div>



{/* <div style='height: 450px;' class='card mb-3' style='border: 1px solid #33cdc6;'>
            <img style='height:185.59px; width: 100%;' class='card-img-top' src='${urlToImage}' alt='IMage not Available'>
            <div class='card-body p-3'style='width: 100%;'>
                <h6 class='card-title' style='color: #293a44;'>${name}</h6>
                <p class='card-text '>${description}</p>
            </div>
        
        </div> */}