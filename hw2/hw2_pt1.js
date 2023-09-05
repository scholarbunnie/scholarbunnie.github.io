// Part 1
const partOne = document.getElementById("part-one")
const firstText = document.createElement("span")
const secondText = document.createElement("span")
const thirdText = document.createElement("span")

firstText.textContent = "xy "
firstText.style = `
    color:red;
    font-family:"Times New Roman";
    font-weight:bold;
    font-size:16pt`

secondText.textContent = "12 "
secondText.style = `
    color:blue;
    font-family:Arial;
    font-size:16pt`

thirdText.textContent = "89"
thirdText.style = `
    color:green;
    font-family:Impact;
    font-style:italic;
    font-size:16pt`

partOne.prepend(firstText, secondText, thirdText)
