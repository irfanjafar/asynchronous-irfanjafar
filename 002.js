
const data1 = axios.get("https://jsonplaceholder.typicode.com/users");
const data2 = axios.get("https://jsonplaceholder.typicode.com/posts");

axios.all([requestOne, requestTwo]).then(axios.spread((...responses) => {
    const data1 = responses[0];
    const data2 = responses[1];
    const users  = data1.data;
    const posts  = data2.data;
  
    for(index in posts){
        let userid = posts[index].userId;
        let found_user = users.find(user => user.id == userid);
        if (typeof found_user != 'undefined'){
            posts[index].user = found_user;
        }

    }
}));
    console.log(posts);
