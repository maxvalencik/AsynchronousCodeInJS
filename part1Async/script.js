
// Part 1: Number Facts

let response;
const url = "http://numbersapi.com/";
let favNum = 21;
let favNumList = [2,4,67,89];


// 1
async function numberFacts(num){
    try{
    let res = await axios.get(`${url}${num}?json`);
    console.log(res.data.text);
    }catch (e) {console.log(e)};
}

numberFacts(favNum);

//2
async function numbersFacts(numList){
    try{
    let res = await axios.get(`${url}${numList}?json`);
    console.log(res.data);
    }catch (e) {console.log(e)};
}

numbersFacts(favNumList);

//3
async function multiNumberFacts(num){
    try{
        //Request in parallel sent at the same time
        let res1 = await axios.get(`${url}${num}?json`);
        let res2 = await axios.get(`${url}${num}?json`);
        let res3 = await axios.get(`${url}${num}?json`);

        await res1;
        document.querySelector('body').insertAdjacentHTML('beforeend',`<p>${res1.data.text}</p>`);
        await res2;
        document.querySelector('body').insertAdjacentHTML('beforeend',`<p>${res2.data.text}</p>`);
        await res3;
        document.querySelector('body').insertAdjacentHTML('beforeend',`<p>${res3.data.text}</p>`);
    }catch(e){console.log(e)};
}

multiNumberFacts(favNum);



