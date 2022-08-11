//Part 2: Deck of Cards

const urlNew='http://deckofcardsapi.com/api/deck/new/draw/?count=1'

//1
async function Part1(url){
    try{
        res = await axios.get(url);
        console.log(res.data.cards[0].value, 'of', res.data.cards[0].suit);
    }catch(e){console.log(e)};
}

Part1(urlNew);


//2
async function Part2(url){
    try{
        res = await axios.get(url);
        let card1 = `${res.data.cards[0].value} of ${res.data.cards[0].suit}`;
        let res2 = await axios.get(`http://deckofcardsapi.com/api/deck/${res.data.deck_id}/draw/?count=1`);
        let card2 = `${res2.data.cards[0].value} of ${res2.data.cards[0].suit}`;
        console.log(`${card1} and ${card2}`);
    }catch(e){console.log(e)};
}

Part2(urlNew);


//3
let deckId=null;
let $card=document.querySelector('#card');
let $button = document.querySelector('button');

async function Part3(){
    try{
        let res = await axios.get('http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
        deckId = res.data.deck_id;
        $button.disabled=false;

        $button.addEventListener('click',async function(){
            let res2= await axios.get(`http://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
            let img = document.createElement("img");
            img.src=res2.data.cards[0].image;
            $card.appendChild(img);

            if (res2.data.remaining === 0){
                $button.disabled=true;
            }
        }) 
    }catch(e){console.log(e)};
}

Part3();


