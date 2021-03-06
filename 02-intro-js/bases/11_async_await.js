// const getImagenPromesa = () => {
//   return new Promise(resolve => resolve('https://www.google.com.pe'))
// }

// getImagenPromesa().then(console.log);
const api_key = 'DX2jQEMAUL0WeAo7LnInlZ51YQ2kqoN0';


const getImage = async () => {

  try {
    const respuesta = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${api_key}`);
    const { data } = await respuesta.json();

    let { url } = await data.images.original;

    const img = document.createElement('img');
    img.src = url;

    document.body.append(img);
    // console.log(data);
  } catch (error) {
    // Manejo del error
    console.warn(error);
  }

}

getImage();

