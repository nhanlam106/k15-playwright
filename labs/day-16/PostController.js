const Post = require("./Post");


class PostController {
    constructor(baseUrl, slug) {
        this.url = `${baseUrl}${slug}`;
    }

    async get_all_post_by_user_id(userId) {
        const all_post = await this._get_all_posts();
        console.log(all_post);
        
        return all_post.filter(post => post._userId === userId);
    }

    async get_post_by_user_id_and_post_id(userId, postId) {
        const posts = await this.get_all_post_by_user_id(userId);
        const target_post = posts.find(post => post._id === postId);
        return target_post;
    }

    async _get_all_posts() {
        const response = await fetch(this.url);
        const json_response = await response.json();
        // console.log(json_response);
        
        return json_response.map(function (post) {            
            const { userId, id, title, body } = post;
            return new Post(userId, id, title, body);
        })
    }
}
module.exports = PostController;