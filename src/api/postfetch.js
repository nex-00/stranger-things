export const fetchAllPosts = async () => {
  const response = await fetch(
    "https://strangers-things.herokuapp.com/api/2206-ftb-mt-web-ft/posts"
  );
  const posts = await response.json();
  return posts;
};

export const createPost = async (token, postObject) => {
  const response = await fetch('https://strangers-things.herokuapp.com/api/2206-ftb-mt-web-ft/posts', {
  method: "POST",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}` 
  },
  body: JSON.stringify({
    post: postObject
  })
})
const result = response.json()
console.log("inside createPost", result)
}