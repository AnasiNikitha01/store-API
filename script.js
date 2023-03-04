
const cont = document.querySelector('.cont')

function ApiData(){

fetch('https://fakestoreapi.com/products')
           .then(res=>res.json())

            .then(data=>{
                console.log(data);
                 Cards(data);
            });
}

ApiData();

function Cards(data){

    data.forEach(product => {


        const div = document.createElement('div');
        const details = document.createElement('div');
        const img = document.createElement('img');
        const title = document.createElement('p');
        const description = document.createElement('p');
        const price = document.createElement('p');
        const rating = document.createElement('p');
        const button = document.createElement('button');

        if(parseInt(product.id)%2 == 0){
            div.classList.add('cards1')
           
        }
        else{
    
            div.classList.add('cards')
        }
        
        img.classList.add('img');
        img.src = product.image;

        title.classList.add('title');
        title.innerHTML = product.title;
        
        description.classList.add('description');
        description.innerHTML = product.description;
        description.style.width = '100%';
        
        price.classList.add('price');
        price.innerHTML = product.price;
       
        rating.classList.add('rating');
        rating.innerHTML = product.rating.rate;

        details.classList.add('details');
        button.innerHTML = 'Add to Cart'
        
        details.appendChild(title);
        details.appendChild(description);
        details.appendChild(price);
        details.appendChild(rating);
        details.appendChild(button);
        div.appendChild(img);
        div.appendChild(details);
        cont.appendChild(div)


    });
}



