var btn = document.getElementById("btn")
var para = document.getElementById("para")

btn.onclick = function () {
    var randomQuotes = [
        "You are the shuckiest shuck faced shuck in the world!",
        "I'm unpredictable, I never know where I'm going until I get there, I'm so random, I'm always growing, learning, changing, I'm never the same person twice. But one thing you can be sure of about me; is I will always do exactly what I want to do.",
        "Her name badge read: Hello! My name is DIE, DEMIGOD SCUM!",
        "Insane means fewer cameras!",
        "A musician must make music, an artist must paint, a poet must write, if he is to be ultimately at peace with himself. What a man can be, he must be",
        "I'm about as intimidating as a butterfly."
    ]

    para.innerText = randomQuotes[Math.floor(Math.random() * (randomQuotes.length - 1))]
}