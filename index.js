import Cat from './Cats.js'
import catsData from './data.js'
let currentCatIndex = 0
let currentCat = new Cat(catsData[currentCatIndex])
document.getElementById("accept-button").addEventListener('click', yes)
document.getElementById("reject-button").addEventListener('click', no)
render()

function render() {
    document.getElementById('card').innerHTML = currentCat.getCatHtml()
}
function empty() {
  document.getElementById('card').innerHTML = currentCat.catEmpty()
}

function getNewCat() {
    currentCatIndex+=1
    currentCat = new Cat(catsData[currentCatIndex])
    if (Object.keys(currentCat).length){
      render()
    }
    else{
      empty()
    }
  }

function yes() {
    currentCat.setMatchStatus(true)
    if(currentCat.hasBeenLiked){
    document.getElementById("liked").style.display= "block";
    }
    setTimeout(() => {
      getNewCat()
      document.getElementById("liked").style.display= "none";
    }, 1000);

}

function no() {
  currentCat.setMatchStatus(false)
   if(!currentCat.hasBeenLiked && currentCat.hasBeenSwiped){
    document.getElementById("disliked").style.display= "block";
    }
    setTimeout(() => {
      getNewCat()
      document.getElementById("disliked").style.display= "none";
    }, 1000);
}
