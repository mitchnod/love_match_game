function test_match(){
    document.getElementById("btn").style.display = "none"
    document.getElementById("percent").innerHTML = getRandomInt(100) + "%"
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}