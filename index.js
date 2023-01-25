let choice = document.getElementById('choice')
let rock = document.getElementById('rock')
let paper = document.getElementById('paper')
let scissor = document.getElementById('scissor')
let computer = document.getElementById('computer')
let res = document.getElementById('result')
let userS = document.getElementById('user_score')
let computerS = document.getElementById('computer_score')
let clear = document.getElementById('clear')
let userChoice = -1
let userScore = 0 , computerScore = 0


let game = (userChoice,computerChoice) =>{
  computer.style.opacity = '1'
  clear.style.opacity='1'
  res.style.opacity='1'
  

  if(computerChoice == 0){
    computer.innerHTML = '<img src="images/stone.png" width="100px">'
  }
  else if(computerChoice == 1){
    computer.innerHTML = '<img src="images/document.png" width="100px">'
  }
  else if(computerChoice == 2){
    computer.innerHTML = '<img src="images/scissors.png" width="100px">'
  }
  if(userChoice == 0 && computerChoice == 2 || userChoice == 1 && computerChoice == 0 || userChoice == 2 && computerChoice == 1){
    res.innerHTML = '<p style="color:green">User wins!!</p>'
    userScore++
  }
  else if(userChoice == computerChoice){
    res.innerHTML = '<p>Draw</p>'
    userScore++
    computerScore++
  }
  else{
    res.innerHTML = '<p style="color:red">Computer wins</p>'
    computerScore++
  }
  clear.onclick = () => {
    userScore = 0
    computerScore = 0
    userS.innerText = `User : ${userScore}`
    computerS.innerText = `Computer : ${computerScore}`
    res.innerHTML = '<p>Vs</p>'
  }

  userS.innerText = `User : ${userScore}`
  computerS.innerText = `Computer : ${computerScore}`

}


userChoice = rock.onclick = () => game(0,Math.floor(Math.random()*3))
userChoice = paper.onclick = () => game(1,Math.floor(Math.random()*3))
userChoice = scissor.onclick = () => game(2,Math.floor(Math.random()*3))
