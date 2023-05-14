const axios = require('axios');

const username = 'admin';
const password = 'ibKq UfiL Nu7D UxAK Gybb qPbf';
const title = 'This post is created with rest api';
const content = 'This is the content of my new post.';

axios.post('http://localhost/wordpress/wp-json/wp/v2/posts',
    {
        title: title,
        content: content,
        status: 'publish'
    },
    {
        auth: {
            username: username,
            password: password
        }
    }
)
.then(response => {
    console.log(response.data);
})
.catch(error => {
    console.error(error);
});
