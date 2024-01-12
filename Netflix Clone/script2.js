const api = "api_key=ee1b48141ef816a9ca406d096a279946";

const base_url = "https://api.themoviedb.org/3";
const banner_url = "https://image.tmdb.org/t/p/original";
const img_url = "https://image.tmdb.org/t/p/w300";

const requests = {
    fetchTrending: `${base_url}/trending/all/week?${api}&language=en-US`,
    fetchNetflixOriginals: `${base_url}/discover/tv?${api}&with_networks=213`,
    fetchActionMovies: `${base_url}/discover/movie?${api}&with_genres=28`,
    fetchComedyMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
    fetchNetHorrorMovies: `${base_url}/discover/movie?${api}&with_genres=27`,
    fetchRomanceMovies: `${base_url}/discover/movie?${api}&with_genres=10749`,
    fetchDocumentaries: `${base_url}/discover/movie?${api}&with_genres=99`,
};

// used to truncate the string
function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

// banner
fetch(requests.fetchNetflixOriginals)
    .then((res) => res.json())
    .then((data) => {
        // every refresh the movie will be change
        const setMovie =
            data.results[Math.floor(Math.random() * data.results.length - 1)];

        var banner = document.getElementById("banner");
        var banner_title = document.getElementById("banner_title");
        var banner_desc = document.getElementById("banner_description");

        banner.style.backgroundImage =
            "url(" + banner_url + setMovie.backdrop_path + ")";
        banner_desc.innerText = truncate(setMovie.overview, 150);
        banner_title.innerText = setMovie.name;
    });

// movie rows

    fetch(requests.fetchNetflixOriginals)
    .then((res)=>res.json())

    .then((data)=>{
        const headrow=document.getElementById("headrow");
        const row=document.createElement("div");

        row.className="row";
        row.classList.add("netflixrow");
        headrow.appendChild(row);

        const title=document.createElement("h2");

        title.className="row_title";
        title.innerText="NETFLIX ORIGINALS";

        row.appendChild(title);

        const row_posters=document.createElement("div");
        row_posters.className="row_posters";
        row.appendChild(row_posters);

        data.results.forEach((movie)=>{
            const poster=document.createElement("img");
            poster.className="row_posterLarge";

            var s=movie.name.replace(/\s+/g,"");

            poster.id=s;
            poster.src=img_url+movie.poster_path;
            row_posters.appendChild(poster);
        });
    });


// Other movie categories (e.g., Trending, Action, Comedy, Horror, Romance, Documentaries)
fetch(requests.fetchTrending)
    .then((res) => res.json())
    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");
        row.className = "row";

        headrow.appendChild(row);

        const title = document.createElement("h2");
        title.className = "row_title";
        title.innerText = "Top Rated";
        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row_posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {
            const poster = document.createElement("img");
            poster.className = "row_posterLarge";
            var s2 = movie.id;
            poster.id = s2;
            poster.src = img_url + movie.poster_path; // Corrected this line
            row_posters.appendChild(poster);
        });
    });



// action
fetch(requests.fetchActionMovies)
    .then((res) => res.json())
    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");
        row.className = "row";

        headrow.appendChild(row);

        const title = document.createElement("h2");
        title.className = "row_title";
        title.innerText = "Action Movies";
        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row_posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {
            const poster = document.createElement("img");
            poster.className = "row_posterLarge";
            var s2 = movie.id;
            poster.id = s2;
            poster.src = img_url + movie.poster_path;
            row_posters.appendChild(poster);
        });
    });

// comedy
fetch(requests.fetchComedyMovies)
    .then((res) => res.json())
    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");
        row.className = "row";

        headrow.appendChild(row);

        const title = document.createElement("h2");
        title.className = "row_title";
        title.innerText = "Comedy Movies";
        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row_posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {
            const poster = document.createElement("img");
            poster.className = "row_posterLarge";
            var s2 = movie.id;
            poster.id = s2;
            poster.src = img_url + movie.poster_path;
            row_posters.appendChild(poster);
        });
    });

// Horror
fetch(requests.fetchNetHorrorMovies)
    .then((res) => res.json())
    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");
        row.className = "row";

        headrow.appendChild(row);

        const title = document.createElement("h2");
        title.className = "row_title";
        title.innerText = "Horror Movies";
        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row_posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {
            const poster = document.createElement("img");
            poster.className = "row_posterLarge";
            var s2 = movie.id;
            poster.id = s2;
            poster.src = img_url + movie.poster_path;
            row_posters.appendChild(poster);
        });
    });

// Romance
fetch(requests.fetchRomanceMovies)
    .then((res) => res.json())
    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");
        row.className = "row";

        headrow.appendChild(row);

        const title = document.createElement("h2");
        title.className = "row_title";
        title.innerText = "Romance Movies";
        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row_posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {
            const poster = document.createElement("img");
            poster.className = "row_poster";
            var s2=movie.id;
            poster.id=s2;
            poster.src=img_url+movie.poster_path;
            row_posters.appendChild(poster);
        });
    }); 
