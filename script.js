const cards = document.getElementsByClassName('card');
let newUrl = '';
let targetImg = '';
let win = 0;
let clickCounter = 0;

for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', event => {
        clickCounter++;
        previousImg = targetImg;
        previousUrl = newUrl;
        const targetId = cards[i].dataset.id;
        targetImg = document.getElementById(targetId)
        newUrl = targetImg.getAttribute('src');
        if (previousUrl === newUrl && targetImg !== previousImg) {
            previousImg.classList.add('display-block')
            targetImg.classList.add('display-block')
            win++;
            if (cards.length / 2 === win) {
                alert('bravo gagné en ' + clickCounter + ' clicks ')
            }
        } else {
            if (previousImg !== '') {
                previousImg.classList.toggle('hidden')
            }
        }
        targetImg.classList.toggle('hidden')
        console.log(previousImg, targetImg);
    })
}