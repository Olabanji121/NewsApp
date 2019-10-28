class UI {
    constructor() {
        this.profileUI = Array.from(document.querySelectorAll(".profile"));
        this.search = Array.from(document.querySelectorAll(".result"));
        
    }

    showOnUi({ name ,  index, description,url,urlToImage,publishedAt }) {

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

    searchUI({ name ,  index, description,url,urlToImage,publishedAt }){
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

