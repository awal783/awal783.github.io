document.addEventListener("DOMContentLoaded", function() {
    const question = document.querySelector(".question");
    const img = document.querySelector(".img");
    const yesBtn = document.querySelector(".yes-btn");
    const noBtn = document.querySelector(".no-btn");
    const secondQuestion = document.querySelectorAll(".question")[1];

    let isImageChanged = false;

    yesBtn.addEventListener("click", () => {
        
        if (!isImageChanged) return;
        
        
        redirectToWhatsApp();
    });

    noBtn.addEventListener("mouseover", () => {
        const noBtnRect = noBtn.getBoundingClientRect();
        const maxX = window.innerWidth - noBtnRect.width;
        const maxY = window.innerHeight - noBtnRect.height;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        noBtn.style.marginLeft = randomX + "px"; 
        noBtn.style.marginTop = randomY + "px"; 
    });

    function redirectToWhatsApp() {
        var phoneNumber = "6283827452346";
        var whatsappURL = "https://wa.me/" + phoneNumber;
        window.location.href = whatsappURL;
    }

    yesBtn.addEventListener("click", () => {
        question.innerHTML = "Pinjam dulu seratus";
        secondQuestion.innerHTML = "bagaimana adakah seratus?";
        img.src = "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/AskCrush1.png";
        isImageChanged = true;
    });
});
      
