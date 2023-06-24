const main=document.querySelector('.scary')
const scary=document.querySelector('.scary1')

const Tvseries='https://api.themoviedb.org/3/tv/popular?api_key=7cb2b7f879548a7d13c4a7a1f835b68f '
const movieapi='https://api.themoviedb.org/3/discover/movie?api_key=7cb2b7f879548a7d13c4a7a1f835b68f '
const search='https://api.themoviedb.org/3/search/movie?api_key=7cb2b7f879548a7d13c4a7a1f835b68f'
const IMGURL='https://image.tmdb.org/t/p/w500';
const moviecamp=document.querySelector('.movie-camp')
const movey=document.querySelector('.movey')
const form=document.querySelector('.form')
const input=document.querySelector('.input')


const getmovies=(url)=>{
    fetch(url)
    .then(response=> response.json())
    .then(data=>{
        // console.log(data.results)
        showmovies(data.results)
    })

    .catch(error=>console.log("faail to load"))
}
getmovies(movieapi)

const showmovies=(data)=>{
      moviecamp.innerHTML=''
    data.forEach(movie => {
     
        const {title,overview,poster_path,vote_average}=movie
        const movieview=document.createElement('div')
        movieview.classList.add=('main')
        movieview.innerHTML=`
        
        <div class="scary">
        <img src="${IMGURL+poster_path}" alt="scary" class="movie"/>
        <div class="vote">
        <h3 class="title">${title}</h3>
        <h5 class="average">${vote_average}</h5>
        </div>
        <div class='overview' >
        <h4 class="">${overview}</h4>
        </div>
        </div>
        `
        moviecamp.appendChild(movieview);
    });
}

form.addEventListener('submit',(e)=>{
e.preventDefault()
let searchterm=input.value
if(searchterm && searchterm !==''){
   getmovies(search+'&query='+searchterm)
   console.log(searchterm)
}else{
    window.location.reload()
}
})

// POPULAR TV SERIES
const populartv=(api)=>{
    fetch(api)
    .then(response=> response.json())
    .then(data=>{
        console.log(data.results)
        tvmovies(data.results)
    })

    // .catch(error=>console.log("faail to load"))
}
populartv(Tvseries)

const tvmovies=(data)=>{
    //   moviecamp.innerHTML=''
    data.forEach(moviee => {
     
        const {overview,poster_path,vote_average}=moviee
        const moviev=document.createElement('div')
        moviev.classList.add=('scary')
        moviev.innerHTML=`
        
        <div class="scary1">
        <img src="${IMGURL+poster_path}" alt="scary" class="movie"/>
        <div class="vote">
       
        <h5 class="average1">${vote_average}</h5>
        </div>
        <div class='overview' >
        <h4 class="">${overview}</h4>
        </div>
        </div>
        `
        movey.appendChild(moviev);
    });
}



// const uvee='https://api.themoviedb.org/3/movie/movie_id/videos?language=en-US'
// console.log(uvee)