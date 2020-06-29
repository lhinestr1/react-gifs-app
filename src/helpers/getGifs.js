


export const getGifs = async ( category='cars' ) => {

    try{
        const api_key = 'SLxKrY6Puqz2EkiTu48zkGyqqepsgoFT';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${category}&limit=6`);
        const {data} = await resp.json();
        return data;
    }catch(error){
        //console.error(error)
        return "No existe"
    }
    
}