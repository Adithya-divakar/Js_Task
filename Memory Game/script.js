// let flippedCards = [];
// let matchedCards = [];

// function flipCard(card) {
//     if (card.classList.contains('hidden') || flippedCards.length === 2) {
//         return;
//     }

//     card.classList.add('hidden');
//     flippedCards.push(card);

//     if (flippedCards.length === 2) {
//         setTimeout(checkMatch, 1000);
//     }
// }

// function checkMatch() {
//     const card1 = flippedCards[0];
//     const card2 = flippedCards[1];

//     if (card1.innerHTML === card2.innerHTML) {
//         cardMatch(card1, card2);
//     } else {
//         cardMismatch(card1, card2);
//     }

//     flippedCards = [];
// }

// function cardMatch(card1, card2) {
//     card1.classList.add('hidden');
//     card2.classList.add('hidden');
//     matchedCards.push(card1, card2);

//     if (matchedCards.length === 4) {
//         setTimeout(showGameComplete, 500);
//     }
// }

// function cardMismatch(card1, card2) {
//     card1.classList.remove('hidden');
//     card2.classList.remove('hidden');
// }

// function showGameComplete() {
//     alert('Congratulations! You have completed the game.');
// }

let flippedCards = [];
let matchedCards = [];

const imageUrls = [
    "https://cdn.pixabay.com/photo/2023/05/30/15/53/landscape-8029037_640.jpg",
    "https://cdn.pixabay.com/photo/2023/05/31/02/06/birds-8030307_640.jpg",
    "https://cdn.pixabay.com/photo/2023/05/31/15/20/chick-8031676_640.jpg",
    "https://cdn.pixabay.com/photo/2023/06/01/00/50/animal-8032441_640.jpg",
    "https://cdn.pixabay.com/photo/2023/05/31/19/22/cornflower-8032088_640.jpg",
    "https://cdn.pixabay.com/photo/2023/05/22/11/22/superb-fairywren-8010454_640.jpg"
    // Add more image URLs here
];

function createGame() {
    const gameContainer = document.querySelector('.game-container');

    // Shuffle the image URLs array
    const shuffledImages = shuffleArray(imageUrls.concat(imageUrls));

    shuffledImages.forEach((imageUrl) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.addEventListener('click', () => flipCard(card));

        const image = document.createElement('img');
        image.src = imageUrl;
        image.alt = "Card";

        card.appendChild(image);
        gameContainer.appendChild(card);
    });
}

function flipCard(card) {
    if (card.classList.contains('hidden') || flippedCards.length === 2) {
        return;
    }

    card.classList.add('hidden');
    flippedCards.push(card);

    if (flippedCards.length === 2) {
        setTimeout(checkMatch, 1000);
    }
}

function checkMatch() {
    const card1 = flippedCards[0];
    const card2 = flippedCards[1];

    if (card1.innerHTML === card2.innerHTML) {
        cardMatch(card1, card2);
    } else {
        cardMismatch(card1, card2);
    }

    flippedCards = [];
}

function cardMatch(card1, card2) {
    card1.classList.add('hidden');
    card2.classList.add('hidden');
    matchedCards.push(card1, card2);

    if (matchedCards.length === imageUrls.length * 2) {
        setTimeout(showGameComplete, 500);
    }
}

function cardMismatch(card1, card2) {
    card1.classList.remove('hidden');
    card2.classList.remove('hidden');
}

function showGameComplete() {
    alert('Congratulations! You have completed the game.');
}

function shuffleArray(array) {
    const shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}

// Create the game dynamically when the page loads
document.addEventListener('DOMContentLoaded', createGame);
