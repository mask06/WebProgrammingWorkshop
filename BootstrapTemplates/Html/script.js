const loadJSON = () => {
    fetch('data.json') //dosya dı ve dosya yolu
        .then(response => response.json()) //gelen yanıtı responstan jsona çeviriyor
        .then(createCards)
        .catch(error => console.error('error : ', error))
}

const createCards = (data) => {

    const cardContainer = document.getElementById('card-container');

    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'col-md-4'; //boostrap sınıfından eklendi
        card.innerHTML = `
<div class="card" style="width: 100%;">
<img src="${item.image}" class="card-img-top" alt="${item.title}">
<div class="card-body">
<h5 class="card-title">${item.title}</h5>
<p class="card-text">${item.price}</p>
<p class="card-text">${item.description}</p>
<a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>`

        cardContainer.appendChild(card);
    });
};
document.addEventListener('DOMContentLoaded', loadJSON)