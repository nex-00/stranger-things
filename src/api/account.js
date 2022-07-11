const createAcc = async (name) => {
    const response = await fetch(
        "https://strangers-things.herokuapp.com/api/2206-ftb-mt-web-ft/posts", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/JSON',
        },
        body: JSON.stringify({
            name: name,
        }),
    }
  );
  const result = await response.json();
  return result;
}