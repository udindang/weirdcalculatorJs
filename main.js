const numberButtons = [
    document.getElementById("1"),
    document.getElementById("2"),
    document.getElementById("3"),
    document.getElementById("4"),
    document.getElementById("5"),
    document.getElementById("6"),
    document.getElementById("7"),
    document.getElementById("8"),
    document.getElementById("9"),
    document.getElementById("0"),
];
const calcInput = document.getElementById("calcinputID");

numberButtons.forEach((numBtn) => {
    numBtn.onclick = function() {
        console.log("test");
    }
});
