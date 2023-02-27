const posts = [
    {
        name: "Llama Drama",
        username: "lmdram",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-1.jpg",
        post: "images/post-1.jpg",
        comment: "out in the wild",
        likes: 21
    },
    {
        name: "Banallama",
        username: "lma1819",
        location: "Ornans, France",
        avatar: "images/avatar-2.jpg",
        post: "images/post-2.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Glama-Llama",
        username: "gl1735",
        location: "Paris, France",
        avatar: "images/avatar-3.jpg",
        post: "images/post-3.jpg",
        comment: "How's it going",
        likes: 152
    }
]

const mainBody = document.getElementById("main");
let text = "";

for (let i = 0; i < posts.length; i++) {
    text += `<div class="post">
    <div class="post-header">
        <img src='${posts[i].avatar}' alt="Van Gogh Avatar" class="user-img">
        <div class="details">
            <p><span class="bold">${posts[i].name}</span></p>
            <p>${posts[i].location}</p>
        </div>
    </div>
    <img src="${posts[i].post}" alt="Van Gogh Post" class="post-img">
    <div class="post-details">
        <div class="action-icons">
            <img src="images/icon-heart.png" class="icon heart">
            <img src="images/icon-comment.png" class="icon">
            <img src="images/icon-dm.png" class="icon">
        </div>
        <p ><span class="bold likes">${posts[i].likes} likes</span> </p>
        <p><span class="bold">${posts[i].username}</span> ${posts[i].comment}</p>
    </div>
    </div>`
    
}

mainBody.innerHTML = text;

const hearts = document.querySelectorAll('.heart');
const likes = document.querySelectorAll('.likes');

for (let j = 0; j < hearts.length; j++) {
hearts[j].addEventListener('click', function addLike() {
    let num = parseInt(likes[j].textContent.split(' ')[0]);
    likes[j].textContent = num + 1 + ' likes';  
});}
