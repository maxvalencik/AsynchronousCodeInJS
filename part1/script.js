
// Part 1: Number Facts

let response;
const url = "http://numbersapi.com/";
let favNum = 21;

function numberRequest(num){
    response = axios.get(`${url}${num}?json`);
    return response;
}

// 1
numberRequest(favNum)
.then(data=>console.log(data.data))
.catch(err=>console.log(err));

//2
numberRequest([21,6,11,5])
.then(data=>console.log(data.data))
.catch(err=>console.log(err));

//3
let numberPromises=[];

for(let i=0; i<4; i++){
    numberPromises.push(numberRequest(favNum))
};

Promise.all(numberPromises)
.then(array=>array.forEach(data=>document.querySelector('body').insertAdjacentHTML('beforeend',`<p>${data.data.text}</p>`)))
.catch(err=>console.log(err));




