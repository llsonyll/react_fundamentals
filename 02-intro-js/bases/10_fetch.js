const api_key = 'DX2jQEMAUL0WeAo7LnInlZ51YQ2kqoN0';

const http_call = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${api_key}`);

http_call
  .then(resp => resp.json())
  .then(({ data }) => {
    let { url } = data.images.original;
    const img = document.createElement('img');
    img.src = url;

    document.body.append(img);
  })
  // .then(resp => {
  // resp.json().then(data => console.log(data));})
  .catch(error => console.warn(error))