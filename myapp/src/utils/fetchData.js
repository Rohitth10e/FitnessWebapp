
let url="https://work-out-api1.p.rapidapi.com/exercises"
  
  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
    },
  };

  export const exerciseOptions={
  headers: {
    'X-RapidAPI-Key': '23d92be467mshbb902d7a19cd219p1297d0jsn1a62daac6855',
    'X-RapidAPI-Host': 'work-out-api1.p.rapidapi.com'
  }
}

export const fetchData=async(url,options)=>{
const response = await fetch(url,options);
const data=await response.json();

return data;
}
