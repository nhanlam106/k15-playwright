const PostController = require("./PostController");

const BASE_URL = 'https://jsonplaceholder.typicode.com';
const SLUG = '/posts';
run();

async function run() {
    const userId = 1;
    const postId = 1;
    const post_controller = new PostController(BASE_URL, SLUG);
    const all_post_by_user = await post_controller.get_all_post_by_user_id(userId);
    console.log(all_post_by_user);

    const post = await post_controller.get_post_by_user_id_and_post_id(userId, postId);
    console.log(post);

}
