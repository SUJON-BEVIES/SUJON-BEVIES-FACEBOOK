// Add functionality for posting updates
document.querySelector('.status-update button').addEventListener('click', function () {
    const postContent = document.querySelector('.status-update textarea').value;
    if (postContent.trim() !== "") {
        const post = document.createElement('div');
        post.classList.add('post');
        post.innerHTML = `<h3>User Name</h3><p>${postContent}</p>
            <div class="post-actions">
                <button>Like</button>
                <button>Comment</button>
                <button>Share</button>
            </div>`;
        document.querySelector('.feed').prepend(post);
        document.querySelector('.status-update textarea').value = "";
    }
});
