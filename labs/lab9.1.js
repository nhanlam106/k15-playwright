const url = 'https://jsonplaceholder.typicode.com/posts'
// console.log(post);
const userId = 1;
const postId = 1;
printTargetPost(userId, postId)
printAllPosts(userId)

function printTargetPost(userId, postId){
    getPostByUserId(userId).then(function (posts){
        const targetPost = posts.filter(function(post){
            return post.id === postId
        });
        console.log(targetPost[0]);
        
    })
}

function printAllPosts(userId){
    getPostByUserId(userId).then(function (posts){
        console.log(posts);
        
    })
}
function getPostByUserId(userId) {
    return send_request(url).then(function (posts) {
        return posts.filter(function (post) {
            return post.userId === userId
        })
    })
}

function send_request(url) {
    return fetch(url)
        .then(response => response.json())
}