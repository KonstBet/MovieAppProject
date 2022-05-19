// let jsonObject = [{"Title":"The Lord of the Rings: The Fellowship of the Ring","Year":"2001","imdbID":"tt0120737","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"},{"Title":"The Lord of the Rings: The Return of the King","Year":"2003","imdbID":"tt0167260","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"},{"Title":"The Lord of the Rings: The Two Towers","Year":"2002","imdbID":"tt0167261","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"},{"Title":"Lord of War","Year":"2005","imdbID":"tt0399295","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"},{"Title":"The Lord of the Rings","Year":"1978","imdbID":"tt0077869","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"},{"Title":"Lord of the Flies","Year":"1990","imdbID":"tt0100054","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMDczN2I3NzItNjdlMS00YmNhLTkyODQtZGI1YWQ0NmViMTgwXkEyXkFqcGdeQXVyNjMwMjk0MTQ@._V1_SX300.jpg"},{"Title":"Greystoke: The Legend of Tarzan, Lord of the Apes","Year":"1984","imdbID":"tt0087365","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BM2NmYjZjOGItYTQ0ZC00YjcyLTk3MWUtYzdmZjY1MGNkMDViXkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_SX300.jpg"},{"Title":"Lord of the Flies","Year":"1963","imdbID":"tt0057261","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BM2FjM2VlYzgtYzI1OS00MTM2LWJmNjQtNTZkNTJjNzQzYzk5XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg"},{"Title":"Lord of Illusions","Year":"1995","imdbID":"tt0113690","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNDg1OTc0MDQwNl5BMl5BanBnXkFtZTcwMjQ3NDk0NA@@._V1_SX300.jpg"},{"Title":"Something the Lord Made","Year":"2004","imdbID":"tt0386792","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BYmMzYWY4MDUtOWQ4OC00YTY5LWExN2YtYzEyZWM5ZjUyZGQ5XkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_SX300.jpg"}]
//
// let jsonInfo = {"Title":"The Lord of the Rings: The Fellowship of the Ring","Year":"2001","Rated":"PG-13","Released":"19 Dec 2001","Runtime":"178 min","Genre":"Action, Adventure, Drama","Director":"Peter Jackson","Writer":"J.R.R. Tolkien, Fran Walsh, Philippa Boyens","Actors":"Elijah Wood, Ian McKellen, Orlando Bloom","Plot":"A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.","Language":"English, Sindarin","Country":"New Zealand, United States","Awards":"Won 4 Oscars. 121 wins & 126 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.8/10"},{"Source":"Rotten Tomatoes","Value":"91%"},{"Source":"Metacritic","Value":"92/100"}],"Metascore":"92","imdbRating":"8.8","imdbVotes":"1,794,230","imdbID":"tt0120737","Type":"movie","DVD":"06 Aug 2002","BoxOffice":"$316,115,420","Production":"N/A","Website":"N/A","Response":"True"}

async function searchFunction() {

    var title = document.getElementById("search").value

    var moviesJson

    var res = await fetch('search?title='+title, {
        method: 'GET'
    })

    moviesJson = await res.json().catch(e => {
        return
    })


    console.log(moviesJson)
    if (moviesJson === undefined) return

    var list = document.getElementById("list")

    if (list != null) {
        //change list items
        populateList(list,moviesJson)
    }
    else {
        //make list element
        list = document.createElement("ul")
        list.setAttribute("id","list")
        list.className = "results_list"
        document.getElementById("results_list").appendChild(list)

        //make list items
        populateList(list,moviesJson)
    }
}