const addprodackted = ()=>{
   const prodacktedName = document.getElementById('prodackted-name');
   const prodacktedqality = document.getElementById('prodackted-qalyty');
   const prodackted = prodacktedName.value;
   const quolaity = prodacktedqality.value;
   
    prodacktedName.value = "";
    prodacktedqality.value = "";
   
   createliment(prodackted,quolaity); 
   saveProdackdatoLocalstoreg(prodackted,quolaity)
}

const createliment =(data1,data2)=>{
    console.log(data1,data2);
    const ul = document.getElementById('prodeckted-container');
    

    const li = document.createElement('li');
    li.innerHTML = `${data1}  , ${data2}`
   
    ul.appendChild(li);

}

const getLocalstoregsoping= () => {
    let cart = {};
    const storedcart = localStorage.getItem('cart');
    if (storedcart) {
        cart =JSON.parse(storedcart);
    }
    return cart;
}
const saveProdackdatoLocalstoreg = (prodackted,quolaity)=>{
  const cart = getLocalstoregsoping();
  cart[prodackted] =quolaity;
  const cardstringify = JSON.stringify(cart)
  localStorage.setItem ('cart',cardstringify)
  console.log(cardstringify);
} 

const displaysopingCart = ()=>{
   const setcard =  getLocalstoregsoping();
   for(const prodackted in setcard){
    const contity = setcard[prodackted]
    createliment(prodackted,contity);

   }
  
} 

displaysopingCart();