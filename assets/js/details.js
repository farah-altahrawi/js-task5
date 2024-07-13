const getProduct = async ()=>{
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id'); 
    const {data} = await axios.get(`https://dummyjson.com/products/${id}`);
    return data;
}
const displayProduct = async ()=>{
    const data = await getProduct();
    const images = data.images.map((img) => {
        return `
        <img src="${img}"/>
        `;
    }).join(' ');

    const result = `
    <h2>${data.title}</h2>
    <p>${data.description}</p>
    <span>Price:${data.price}</span>
    <span>rate:${data.rating}</span>
    `;
    const reviews = data.reviews.map((review)=>{
        return`
        <div class="review">
        <p>Reviewer: ${review.reviewerName}
        <p>comment:${review.comment}</p>
        <span>review:${review.rating}</span>
        </div>
        `;
    }).join(' ');
    document.querySelector(".product").innerHTML=result;
    document.querySelector(".product-images").innerHTML=images; 
    document.querySelector(".reviews").innerHTML=reviews;
}
displayProduct();