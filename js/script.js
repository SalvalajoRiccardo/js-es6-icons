const icons = [
    {
      name: 'cat',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'crow',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dog',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dove',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dragon',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'horse',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'hippo',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'fish',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'carrot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'apple-alt',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'lemon',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'pepper-hot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'user-astronaut',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-graduate',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-ninja',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-secret',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
];


// colorazione oggetti
const iconsColor = icons.map((obj) => {
    let color;
    if (obj.type == 'animal') {
        color = 'brown';
    } else if (obj.type == 'vegetable') {
        color = 'green';
    } else {
        color = 'violet';
    } 
    return {
        ...obj, color
    }
});

stampa (iconsColor)

// inserimento valori in select
const tipi = [];
iconsColor.forEach((obj) => {
    if (!tipi.includes(obj.type)){
        tipi.push(obj.type);
        document.getElementById('tipo').innerHTML += `<option value="${obj.type}">${obj.type}</option>`
    }
});


// cambio nel select
const selezione = document.getElementById('tipo');
selezione.addEventListener("change", function(){
    const filtrato = iconsColor.filter((val)=>{
        return val.type == selezione.value ;
    });
    stampa(filtrato);
    if(selezione.value == 'all'){
        stampa(iconsColor);
    };
});

// funzioni
function stampa (array) {
    document.getElementById('icons').innerHTML = '';
    array.forEach(obj => {
        document.getElementById('icons').innerHTML += `
        <div class="col g-3">
            <div class="box-obj text-center ">
                <i style="color: ${obj.color}" class="${obj.family} ${obj.prefix}${obj.name}"></i>
                <h5 class="upper">${obj.name}</h5>
            </div>
        </div>`
    });

};


