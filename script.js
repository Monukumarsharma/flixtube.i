// Function to get comments from local storage
function getCommentsFromStorage() {
    return JSON.parse(localStorage.getItem('comments')) || [];
}

// Function to save comments to local storage
function saveCommentsToStorage(comments) {
    localStorage.setItem('comments', JSON.stringify(comments));
}

// Function to display existing comments
function displayComments(comments) {
    const commentsContainer = document.querySelector('.comments');
    commentsContainer.innerHTML = '';

    comments.forEach(function (comment) {
        const commentElement = document.createElement('div');
        commentElement.className = 'comment';
        commentElement.innerHTML = `<p>${comment}</p>
            <button class="like-comment-button">Like</button>
            <button class="dislike-comment-button">Dislike</button>`;

        commentsContainer.appendChild(commentElement);
    });
}

// Function to update and display like, dislike, and comment counts
function updateCounts(likeCount, dislikeCount, commentCount) {
    document.querySelector('.like-count').textContent = likeCount;
    document.querySelector('.dislike-count').textContent = dislikeCount;
    document.querySelector('.comment-count').textContent = commentCount + (commentCount === 1 ? ' Comment' : ' Comments');
}

// Load existing comments from local storage
const comments = getCommentsFromStorage();
displayComments(comments);

// Add an event listener to the "Post Comment" button
document.querySelector('#post-comment-button').addEventListener('click', handleCommentPost);

function handleLike() {
    let likeCount = parseInt(document.querySelector('.like-count').textContent);
    likeCount++;
    updateCounts(likeCount, parseInt(document.querySelector('.dislike-count').textContent), comments.length);
}

function handleDislike() {
    let dislikeCount = parseInt(document.querySelector('.dislike-count').textContent);
    dislikeCount++;
    updateCounts(parseInt(document.querySelector('.like-count').textContent), dislikeCount, comments.length);
}

function handleShare() {
    // Your code to handle sharing goes here
    alert("Shared!");
}

function handleComment() {
    // Your code to display comments goes here
    alert("Displaying comments!");
}

function handleCommentPost() {
    const commentText = document.querySelector('#comment-text').value;
    if (commentText.trim() !== '') {
        const commentElement = document.createElement('div');
        commentElement.className = 'comment';
        commentElement.innerHTML = `<p>${commentText}</p>
            <button class="like-comment-button">Like</button>
            <button class="dislike-comment-button">Dislike</button>`;
        
        document.querySelector('.comments').appendChild(commentElement);
        document.querySelector('#comment-text').value = '';

        const comments = getCommentsFromStorage();
        comments.push(commentText);
        saveCommentsToStorage(comments);

        updateCounts(parseInt(document.querySelector('.like-count').textContent), parseInt(document.querySelector('.dislike-count').textContent), comments.length);
    }
}

// Attach event listeners to the buttons
document.querySelector('.like-button').addEventListener('click', handleLike);
document.querySelector('.dislike-button').addEventListener('click', handleDislike);
document.querySelector('.share-button').addEventListener('click', handleShare);
document.querySelector('.comment-button').addEventListener('click', handleComment);

// Handle comment like and dislike buttons
document.querySelectorAll('.like-comment-button').forEach(function (button) {
    button.addEventListener('click', handleLike);
});

document.querySelectorAll('.dislike-comment-button').forEach(function (button) {
    button.addEventListener('click', handleDislike);
});

// Initialize counts
updateCounts(0, 0, comments.length);
