const showm=document.querySelector('.show')
const showapi='https://api.themoviedb.org/3/discover/movie?api_key=7cb2b7f879548a7d13c4a7a1f835b68f '
const IMGURL='https://image.tmdb.org/t/p/w500';


const getmore=(url)=>{
    fetch(url)
    .then(response=> response.json())
    .then(data=>{
        console.log(data.results)
        shownew(data.results)
    })

    // .catch(error=>console.log("faail to load"))
}
getmore(showapi)

const shownew=(data)=>{
      
    data.forEach(movie => {
        const {poster_path}= movie
        const showview=document.createElement('div')
        showview.classList.add=('showm')
        showview.innerHTML=`
        <div class="show">
            <button class="Times"><i class="fa fa-times timess" aria-hidden="true"></i></button>
            <img src="${IMGURL+poster_path}" alt="sca" class="imy"/>
    
            <div class="update">
            <h4 class="movies"><span>N</span> movies</h4>
            <h2>King the Land</h2>
            <h4 class="year">2023</h4>
            <div class="tops">
                <h5 class="ratings">Top<br>10</h5>
                <h4>Tv Shows</h4>
            </div>
            <div class="">
                <h3 class="playit"><i class="fa fa-play" aria-hidden="true"></i>  Play</h3>
            </div>
            <div class="">
                <h3 class="playitt"><i class="fa fa-download" aria-hidden="true"></i>  Download</h3>
            </div>
            <h4 class="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
                , fuga. Exercitationem m aperiam, odit iure architecto dolore distinctio iusto a odio quos 
                culpa provident hic repellat sed fugiat, veritatis tenetur.</h4>
            <h4 class="casts">casts names:</h4>
            <div class="iconss">
                <div class="icon-To">
                <i class="fa fa-plus icon" aria-hidden="true"></i>
                <h5 class="list-rate">List</h5>
                </div>
                <div class="icon-To">
                <i class="fa fa-thumbs-o-up icon" aria-hidden="true"></i>
                <h5 class="list-rate"> Rate</h5>
                </div>
    
                <div class="icon-To">
                <i class="fa fa-paper-plane-o icon" aria-hidden="true"></i>
                <h5 class="list-rate">Share</h5>
                </div>  
            </div>
                 
        </div>
        </div>
        `
        showm.appendChild(showview);
    });
}
