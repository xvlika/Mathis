document.addEventListener("DOMContentLoaded", function () {
    const viewSavedChatsButton = document.querySelector(".chat-button:last-child");
    const chatboxRemove = document.getElementById("chat-box");
    const body = document.body; 

    let boxCreated = false;

    viewSavedChatsButton.addEventListener("click", function () {
        if (!boxCreated) {
            const floatingBox = document.createElement("div");
            floatingBox.className = "floating-box";
            chatboxRemove.remove();
            body.classList.add("gray-background");

            document.body.appendChild(floatingBox);

            boxCreated = true;
            
        }
    });
});
