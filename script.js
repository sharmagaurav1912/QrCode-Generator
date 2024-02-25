let inputText = document.getElementById('input-txt');
let submitBtn = document.getElementById('submit-btn');

let qrImg = document.getElementById('qr-img');

submitBtn.addEventListener("click", () => {

    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputText.value}`;
    
})

