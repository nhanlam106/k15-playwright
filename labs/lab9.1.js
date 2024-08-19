const url = 'https://jsonplaceholder.typicode.com/posts';
const user_id = 1;
const post_id = 1;

print_target_post(user_id, post_id);
print_all_posts(user_id);

function print_target_post(user_id, post_id) {
    get_posts_by_user_id(user_id).then(function(posts) {
        const target_post = posts.filter(function(post) {
            return post.id === post_id;
        });
        console.log(target_post[0]);
    });
}

function print_all_posts(user_id) {
    get_posts_by_user_id(user_id).then(function(posts) {
        console.log(posts);
    });
}

function get_posts_by_user_id(user_id) {
    return send_request(url).then(function(posts) {
        return posts.filter(function(post) {
            return post.userId === user_id;
        });
    });
}

function send_request(url) {
    return fetch(url)
        .then(response => response.json());
}
