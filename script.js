const cont = document.querySelector('.container')
function fetchApiData(){
    const url = 'https://restcountries.com/v3.1/all'
    fetch(url).then(response=>{
        return response.json();
    }).then(data=>{
        console.log(data);
        createData(data);
    })
}
fetchApiData();
function createData(data){
    data.forEach((val) => {
        const div = document.createElement('div')
        div.classList.add('card')
        
        const img = document.createElement('img') 
        img.src= val.flags.png// "https://flagcdn.com/w320/hu.png"
        const heading = document.createElement('h2')
        heading.innerHTML=val.name.common
        const capital = document.createElement('p')
        capital.innerHTML=val.capital
        const currency = document.createElement('p')
        currency.innerHTML=val.continents


        // const heading = document.createElement('h1')
        // heading.innerHTML=coin.name
        div.appendChild(img)
        div.appendChild(heading)
        div.appendChild(capital)
        div.appendChild(currency)
         cont.appendChild(div)
    });
    
}