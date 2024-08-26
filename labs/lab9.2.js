const url = 'https://jsonplaceholder.typicode.com/posts';
const user_id = 1;
const post_id = 1;

print_target_post(user_id, post_id);
print_all_posts(user_id);

async function print_target_post(user_id, post_id) {
    try {
        const posts = await get_posts_by_user_id(user_id);
        const target_post = posts.find(post => post.id === post_id);
        console.log(target_post);
    } catch (error) {
        console.error('Error fetching target post:', error);
    }
}

async function print_all_posts(user_id) {
    try {
        const posts = await get_posts_by_user_id(user_id);
        console.log(posts);
    } catch (error) {
        console.error('Error fetching all posts:', error);
    }
}

async function get_posts_by_user_id(user_id) {
    try {
        const posts = await send_request(url);
        return posts.filter(post => post.userId === user_id);
    } catch (error) {
        console.error('Error getting posts by user ID:', error);
        return []; // Return an empty array in case of error
    }
}

async function send_request(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error sending request:', error);
        throw error; // Rethrow the error to be handled by the caller
    }
}

