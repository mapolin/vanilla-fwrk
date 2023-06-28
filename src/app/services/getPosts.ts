import { RawPost } from "../contracts/Post"

export const getPosts = () => {
    return fetch('https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json')
        .then<RawPost[]>(response => response.json())
}