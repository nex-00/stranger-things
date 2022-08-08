export const fetchAllMessages = async () => {
    const response = await fetch(
      `https://strangers-things.herokuapp.com/api/2206-ftb-mt-web-ft/posts/messages`
    );
    const posts = await response.json();
    return posts;
  };
  
  export const createMsg = async (token, msgObject) => {
    const response = await fetch(`https://strangers-things.herokuapp.com/api/2206-ftb-mt-web-ft/posts/messages`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}` 
    },
    body: JSON.stringify({
      post: msgObject
  })
}).then(response => response.json())
.then(result => {
  console.log(result);
})
.catch(console.error);
}