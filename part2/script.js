//Part 2: Deck of Cards

const urlNew='http://deckofcardsapi.com/api/deck/new/draw/?count=1'

//1
axios.get(urlNew)
.then(data=>console.log(data.data.cards[0].value, 'of', data.data.cards[0].suit))
.catch(err=>console.log(err));

//2
let card1='';
let card2='';

axios.get(urlNew)
.then(data=>{
    card1=`${data.data.cards[0].value} of ${data.data.cards[0].suit}`;
    let request=axios.get(`http://deckofcardsapi.com/api/deck/${data.data.deck_id}/draw/?count=1`);
    return request;
    })
.then(data=>{
    card2=`${data.data.cards[0].value} of ${data.data.cards[0].suit}`;
    console.log(`${card1} and ${card2}`);
    })
.catch(err=>console.log(err));

//3
let deckId=null;
let $card=document.querySelector('#card');
let $button = document.querySelector('button'); 

axios.get('http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
.then(data=>{
    deckId=data.data.deck_id;
    //$button.show();
});

$button.addEventListener('click', ()=>{
    axios.get(`http://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    .then(data=>{
        let img = document.createElement("img")
        img.src=data.data.cards[0].image;
        $card.appendChild(img);
        
        if (data.data.remaining === 0){
            $button.disabled=true;
        } 
    })
})
