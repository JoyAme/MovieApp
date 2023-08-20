const main=document.querySelector('.scary')
const ratedIt=document.querySelector('.ratedd')
const scary=document.querySelector('.card-img')

const Tvseries='https://api.themoviedb.org/3/tv/popular?api_key=7cb2b7f879548a7d13c4a7a1f835b68f '
const movieapi='https://api.themoviedb.org/3/discover/movie?api_key=7cb2b7f879548a7d13c4a7a1f835b68f '
const Tvratedd='https://api.themoviedb.org/3/tv/top_rated?api_key=7cb2b7f879548a7d13c4a7a1f835b68f'
const search='https://api.themoviedb.org/3/search/movie?api_key=7cb2b7f879548a7d13c4a7a1f835b68f'
const IMGURL='https://image.tmdb.org/t/p/w500';

const trending='https://api.themoviedb.org/3/tv/on_the_air?api_key=7cb2b7f879548a7d13c4a7a1f835b68f'
const moviecamp=document.querySelector('.movie-camp')
const movey=document.querySelector('.movey')
const imagyy= document.querySelector('.card-imgg')
const form=document.querySelector('.form')
const input=document.querySelector('.input')
const show= document.querySelector('.show')
const Times= document.querySelector('.Times')
const Ratte= document.querySelector('.Rate')
// const ray=document.querySelector('.ray')

// TRENDING MOVIES
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
        const {poster_path,vote_average}= movie
        const movieview=document.createElement('div')
        movieview.classList.add=('main')
        movieview.innerHTML=`
        <div class="card-img">
       <h4 class="rating1">Top<br>${vote_average}</h4>
       <img src="${IMGURL+poster_path}" alt="sca" class="imgy"/>
        <h5 class="Watch">Watch Now</h5>
         </div>
        `
        moviecamp.appendChild(movieview);

    });
}
 

const cardy=document.querySelector('.card-imgg1')
const inputyy=document.getElementById('search-hy')
const boddy=document.getElementById('.boddy')


// MODAL POP UP
// moviecamp.addEventListener('click', function(){
//     show.style.display='block';
//     location.href="show.html";
// })
// Times.addEventListener('click', function(){
//     show.style.display='none'
// })

// FORM EVENTLISTNER
    form.addEventListener('submit',(e)=>{
    e.preventDefault()
    // let infill=inputyy
    let searchterm=input.value
    if(searchterm  && searchterm !==''){
    getmovies(search+'&query='+searchterm )
    cardy.style.display='none'
    console.log(searchterm)
    }else if (searchterm !== search ){
        window.location.reload()
    }

    
    })


    inputyy.addEventListener('click',function(){
  
        let searchterm=input.value
        if(searchterm && searchterm !==''){
            getmovies(search+'&query='+searchterm )
            cardy.style.display='none'
            console.log(searchterm)
        }
})

// POPULAR TV SERIES
const populartv=(api)=>{
    fetch(api)
    .then(response=> response.json())
    .then(data=>{
        // console.log(data.results)
        tvmovies(data.results)
    })

    // .catch(error=>console.log("faail to load"))
}
populartv(Tvseries)
const tvmovies=(data)=>{
    data.forEach(moviee => {
        const {poster_path,vote_average}=moviee
        const moviev=document.createElement('div')
        moviev.classList.add=('scary')
        moviev.innerHTML=`
        <div class="card-img">
        <h4 class="rating1">Top<br>${vote_average}</h4>
        <img src="${IMGURL+poster_path}" alt="sca" class="imgy"/>
        <h5 class="Watch">Watch Now</h5>
         </div>
        `
        movey.appendChild(moviev);
    });
}

const Rad=document.querySelector('.tOPRate')


// TOP SERIES 
const ratedtv=(apii)=>{
    fetch(apii)
    .then(response=> response.json())
    .then(data=>{
        // console.log(data.results)
        Rated(data.results)
    })    
}
ratedtv(Tvratedd)

const Rated=(data)=>{
    data.forEach(movie => {
        const {poster_path} = movie 
        const movi=document.createElement('div')
        movi.classList.add=('ray')
         movi.innerHTML =`      
        <div class="tOPRATED">
        <img src="${IMGURL+poster_path}" alt="sca" class="ratedd"/>
        </div>
        `
        ray.appendChild(movi);
    });

}

// TOP   ACTION SERIES
const gettrends=(url)=>{
    fetch(url)
    .then(response=> response.json())
    .then(data=>{
        // console.log(data.results)
        trends(data.results)
    })

    // .catch(error=>console.log("faail to load"))
}
gettrends(trending)

const trends =(data)=>{   
    data.forEach(tren => {
        const {overview,poster_path}= tren
        const treen=document.createElement('div')
        treen.classList.add=('imagyy')
        treen.innerHTML=`  
    <div class="cardss">
    <div class="img1">
    <img src="${IMGURL+poster_path}" alt="sca" class="imgyy"/>
    </div>
    </div>      
   ` 
        imagyy.appendChild(treen);
    });
}



// SLIDER SCROLL

let scrollcontainer=document.querySelector('.movie-camp')

scrollcontainer.addEventListener("wheel" ,(evt)=>{
      evt.preventDefault();
      scrollcontainer.scrollLeft += evt.deltaY
})
let scrolle=document.querySelector('.movey')

scrolle.addEventListener("wheel" ,(evt)=>{
      evt.preventDefault();
      scrolle.scrollLeft += evt.deltaY
})

let imgay=document.querySelector('.card-imgg')

imgay.addEventListener("wheel" ,(evt)=>{
    evt.preventDefault();
    imgay.scrollLeft += evt.deltaY
})

let ray=document.querySelector('.ray')

ray.addEventListener("wheel" ,(evt)=>{
    evt.preventDefault();
    ray.scrollLeft += evt.deltaY
})