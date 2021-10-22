let p1 = {
    score:0,
    button: document.querySelector("#p1Button"),
    display: document.querySelector("#p1Display")
}

let p2 = {
    score:0,
    button: document.querySelector("#p2Button"),
    display: document.querySelector("#p2Display")
}

let resetButton = document.querySelector("#reset")
let winningScoreSelect = document.querySelector("#playto")
let winningScore = " "
let isGemeOver = false

function updateScores(player,opponent){
    if(!isGemeOver){
        player.score++
        if(player.score==winningScore){
            isGemeOver = true
            player.display.classList.add("has-text-success")
            opponent.display.classList.add("has-text-danger")
            player.button.disabled = true
            opponent.button.disabled = true
        }
        player.display.textContent = player.score
    }
}

p1.button.addEventListener("click",function(){
    updateScores(p1,p2)
})

p2.button.addEventListener("click",function(){
    updateScores(p2,p1)
})

winningScoreSelect.addEventListener("change", function(){
    winningScore = parseInt(this.value)
    reset( )
})

resetButton.addEventListener("click",reset)

function reset(){
    isGemeOver = 0
    for(let p of [p1,p2]){
        p.score = 0
        p.display.textContent = 0
        p.display.classList.remove("has-text-success","has-text-danger")
        p.button.disabled = false
    }
}



// let p1Button = document.querySelector("#p1Button")
// let p2Button = document.querySelector("#p2Button")
// let p1Display = document.querySelector("#p1Display")
// let p2Display = document.querySelector("#p2Display")
// let resetButton = document.querySelector("#reset")
// let winningScoreSelect = document.querySelector("#playto")

// let p1Score = 0
// let p2Score = 0
// let winningScore = " "
// let isGemeOver = false

// p1Button.addEventListener("click",()=>{
//     if(!isGemeOver){
//         p1Score++
//         if(p1Score==winningScore){
//             isGemeOver = true
//             p1Display.classList.add("has-text-success")
//             p2Display.classList.add("has-text-danger")
//             p1Button.disabled = true
//             p2Button.disabled = true
//         }
//         p1Display.textContent = p1Score
//     }
// })
// p2Button.addEventListener("click",()=>{
//     if(!isGemeOver){
//         p2Score++
//         if(p2Score==winningScore){
//             isGemeOver = true
//             p2Display.classList.add("has-text-success")
//             p1Display.classList.add("has-text-danger")
//             p1Button.disabled = true
//             p2Button.disabled = true
//         }
//         p2Display.textContent = p2Score
//     }
// })

// winningScoreSelect.addEventListener("change", function(){
//     winningScore = parseInt(this.value)
//     reset( )
// })

// resetButton.addEventListener("click",reset)

// function reset(){
//     isGemeOver = 0
//     p1Score = 0
//     p2Score = 0
//     p1Display.textContent = 0
//     p2Display.textContent = 0
//     p1Display.classList.remove("has-text-success","has-text-danger")
//     p2Display.classList.remove("has-text-success","has-text-danger")
//     p1Button.disabled = false
//     p2Button.disabled = false
// }