const startButton = document.querySelector(".startBtn");
const nextButton = document.querySelector(".button-1");
const start = document.querySelector(".start");
const endButton = document.querySelector(".exit");
const head = document.querySelector(".head");
const main = document.querySelector(".main");
const openDiv = document.querySelector(".openDiv");
const win = document.querySelector(".win");
const openButton = document.querySelector(".open");
const closeButton = document.querySelector(".close");
const submitButton = document.querySelector("submit");
const resumeButton = document.querySelector(".resume");
const restartButton = document.querySelector(".restart");

const navDiv = document.querySelector(".navDiv");
const sidebar = document.querySelector(".sidebar");
const item1 = document.querySelector("#item1");
const item2 = document.querySelector("#item2");
const item3 = document.querySelector("#item3");
const animalName = document.querySelector(".animal-name");
const gif = document.querySelector(".gif1");


startButton.addEventListener("click", function() {
    hideDisplay1();
    addRandomItems();

});
resumeButton.addEventListener("click", function() {
    sidebar.style.display = 'none';
    openButton.style.display = 'block';
    closeButton.style.display = 'none';

});
restartButton.addEventListener("click", function() {
    hideDisplay2()
    removeItems();
});
nextButton.addEventListener("click", function() {
    win.style.display = 'none';
    gif.style.display = 'none';

    addRandomItems();

});
openButton.addEventListener("click", function() {
    win.style.display = 'none';
    gif.style.display = 'none';
    sidebar.style.display = 'flex';
    openButton.style.display = 'none';
    closeButton.style.display = 'block';

});
closeButton.addEventListener("click", function() {
    sidebar.style.display = 'none';
    openButton.style.display = 'block';
    closeButton.style.display = 'none';

});

function hideDisplay1() {
    start.style.display = 'none';
    openDiv.style.display = 'block';
    main.style.display = 'block';
    nextButton.style.display = "";

}

function hideDisplay2() {
    start.style.display = '';
    openDiv.style.display = 'none';
    main.style.display = 'none';
    nextButton.style.display = "none";
    sidebar.style.display = "none"
}

function removeItems() { // Remove existing items
    while (item1.firstChild) {
        item1.firstChild.remove();
    }
    while (item2.firstChild) {
        item2.firstChild.remove();
    }
    while (item3.firstChild) {
        item3.firstChild.remove();
    }
}

let itemCount = 2;


function addRandomItems() {



    // Remove existing items
    removeItems()


    const animal = [
        "apple",
        "bananas",
        "grapes",
        "mango",
        // "Auto",
        "strawberry"
    ];

    const notEdible = [
      
        "notEdible/Bicycle.svg",
        "notEdible/Bike.svg",
        "notEdible/Car.svg",
        "notEdible/Train.svg",
        "notEdible/Truck.svg"
    ];

    const ediblePositionIndex = Math.floor(Math.random() * itemCount);
    const randomEdibleIndex = Math.floor(Math.random() * animal.length);
    const edibleImage = animal[randomEdibleIndex];

    for (let i = 0; i < itemCount; i++) {
        let itemImage;
        let itemAlt;

        if (i === ediblePositionIndex) {
            itemImage = "edible/" + edibleImage + ".svg";
            itemAlt = "animal";
        } else {
            const randomItemIndex = Math.floor(Math.random() * notEdible.length);
            itemImage = notEdible[randomItemIndex];
            notEdible.splice(randomItemIndex, 1);
            itemAlt = "notEdible";
        }

        const itemDiv = document.createElement("div");
        itemDiv.classList.add("item");
        itemDiv.id = "item" + i;
        const itemImg = document.createElement("img");
        itemImg.src = itemImage;
        itemImg.alt = itemAlt;
        itemImg.classList.add("item-img");

        if (itemImage.substring(0, 6) === 'edible') {
            console.log("edible");
            itemDiv.classList.add('edible');
        }
        itemDiv.addEventListener("click", clickHandler);
        itemDiv.appendChild(itemImg);
        console.log("Ki");

        if (item1.childElementCount < 2) {
            item1.appendChild(itemDiv);
        } else if (item2.childElementCount < 2) {
            item2.appendChild(itemDiv);
        } else if (item3.childElementCount < 2) {
            item3.appendChild(itemDiv);
        }

    }
    if (itemCount > 6) {
        removeItems();
        hideDisplay2();
        itemCount = 2;
    }


}

function clickHandler(event) {
    var element = event.currentTarget;
    const spanElement = document.createElement("span");
    spanElement.classList = "mark";
    spanElement.id = "mark";
    element.appendChild(spanElement);


    // Check if the dropped item is a fruit
    if (element.classList.contains("edible")) {
        document.getElementById("awesomeSound").play(); // Play the awesome sound

        updateScore(1); // Increment the score by 1
        gif.src = "WS2k.gif";
        gif.style.display = 'block';
        const win = document.getElementsByClassName("win");
        if (win.length > 0) {
            win[0].style.display = 'block';
        }
    } else {
        gif.src = "emoji-yuck.gif";
        gif.style.display = 'block';
        document.getElementById("yuckySound").play(); // Play the yucky sound
    }
    itemCount++;

}

function updateScore(score) {
    const scoreElement = document.getElementById("score");
    const currentScore = parseInt(scoreElement.textContent.split(":")[1]);
    const newScore = currentScore + score;
    scoreElement.textContent = "Score: " + newScore;
    console.log(scoreElement);
}
theme = document.getElementById("theme");
theme.onclick = function() {
    document.body.classList.toggle("dark-theme");
}