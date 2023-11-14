document.addEventListener("DOMContentLoaded", function () {
    let pfpImages = document.querySelectorAll(".pfp");
    for (let i = 0; i < pfpImages.length; i++) {
        let newHeight = 80;
        pfpImages[i].style.height = newHeight + "px";
    }
    
    const newChatButton = document.getElementById("new-chat-button");
    const chatInputContainer = document.querySelector(".chat-input-container");
    const buttonContainer = document.getElementById("button-container");
    const topContainer = document.getElementById("top");

    let inputCreated = false;
    let buttonCreated = false;

    newChatButton.addEventListener("click", function () {
        if (!inputCreated) {
            chatInputContainer.style.display = "flex";
            inputCreated = true;

            topContainer.classList.add("curved");   

            const welcome = document.getElementById("welcome");
            const chatBox = document.getElementById("chat-box");
            chatBox.style.transition = "opacity 0.5s ease-in-out, transform 0.5s ease-in-out";
            chatBox.style.opacity = 0;
            chatBox.style.transform = "translateY(-100px)";

            setTimeout(function () {
                welcome.remove();
                chatBox.remove();
            }, 500);

            if (!buttonCreated) {
                const customButton = document.createElement("button");
                customButton.classList.add("custom-button");
                customButton.textContent = "Custom Button";
                buttonContainer.appendChild(customButton);
                buttonCreated = true;
            }

            const mainElement = document.querySelector("main");
            const messageBox = document.createElement("div");
            messageBox.className = "message-box";
            messageBox.style.border = "thick solid #0000FF";
            mainElement.appendChild(messageBox);
        }
    });
});
