console.log(
  "%c" +
    " __      __  ______   __  __   ______     " +
    "\n" +
    "/\\ \\  __/\\ \\ /\\__  _\\ /\\ \\ /\\ \\ /\\__  _\\    " +
    "\n" +
    "\\ \\ \\/\\ \\ \\ \\/_\\/\\ \\/ \\ \\ \\/'/'\\/ _/\\ \\/    " +
    "\n" +
    " \\ \\ \\ \\ \\ \\ \\ \\ \\ \\  \\ \\ , <    \\ \\ \\    " +
    "\n" +
    "  \\ \\ \\_/ \\_\\ \\ \\_\\ \\__\\ \\ \\\\`\\   \\_\\ \\__ " +
    "\n" +
    "   \\ `\\___x___/ /\\_____\\\\ \\_\\ \\_\\ /\\_____\\ " +
    "\n" +
    "    '/__//__/  /_____/ \\/_/\\/_/ /_____/",
  "color: #d81b60; font-size: 16px; font-weight: bold;"
);

console.log("알맞은 스크립트를 작성하세요");

document.addEventListener("DOMContentLoaded", function () {
    const commentInput = document.getElementById("comment-input");
    const submitButton = document.getElementById("submit-comment");
    const commentList = document.getElementById("comment-list");

    submitButton.addEventListener("click", function () {
        const commentText = commentInput.value.trim();

        if (commentText === "") {
            alert("댓글을 입력해주세요!");
            return;
        }

        const commentItem = document.createElement("li");
        commentItem.classList.add("comment-item");

        const commentContent = document.createElement("span");
        commentContent.classList.add("comment-content");
        commentContent.textContent = commentText;

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-comment");
        deleteButton.textContent = "삭제";

        deleteButton.addEventListener("click", function () {
            commentItem.remove();
        });

        commentItem.appendChild(commentContent);
        commentItem.appendChild(deleteButton);
        commentList.appendChild(commentItem);

        commentInput.value = "";
    });
});
