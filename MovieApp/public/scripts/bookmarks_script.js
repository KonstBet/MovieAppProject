let jsonObject = [{"Title":"The Lord of the Rings: The Fellowship of the Ring","Year":"2001","imdbID":"tt0120737","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"},{"Title":"The Lord of the Rings: The Return of the King","Year":"2003","imdbID":"tt0167260","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"},{"Title":"The Lord of the Rings: The Two Towers","Year":"2002","imdbID":"tt0167261","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"},{"Title":"Lord of War","Year":"2005","imdbID":"tt0399295","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"},{"Title":"The Lord of the Rings","Year":"1978","imdbID":"tt0077869","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"},{"Title":"Lord of the Flies","Year":"1990","imdbID":"tt0100054","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMDczN2I3NzItNjdlMS00YmNhLTkyODQtZGI1YWQ0NmViMTgwXkEyXkFqcGdeQXVyNjMwMjk0MTQ@._V1_SX300.jpg"},{"Title":"Greystoke: The Legend of Tarzan, Lord of the Apes","Year":"1984","imdbID":"tt0087365","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BM2NmYjZjOGItYTQ0ZC00YjcyLTk3MWUtYzdmZjY1MGNkMDViXkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_SX300.jpg"},{"Title":"Lord of the Flies","Year":"1963","imdbID":"tt0057261","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BM2FjM2VlYzgtYzI1OS00MTM2LWJmNjQtNTZkNTJjNzQzYzk5XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg"},{"Title":"Lord of Illusions","Year":"1995","imdbID":"tt0113690","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNDg1OTc0MDQwNl5BMl5BanBnXkFtZTcwMjQ3NDk0NA@@._V1_SX300.jpg"},{"Title":"Something the Lord Made","Year":"2004","imdbID":"tt0386792","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BYmMzYWY4MDUtOWQ4OC00YTY5LWExN2YtYzEyZWM5ZjUyZGQ5XkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_SX300.jpg"}]

let jsonInfo = {"Title":"The Lord of the Rings: The Fellowship of the Ring","Year":"2001","Rated":"PG-13","Released":"19 Dec 2001","Runtime":"178 min","Genre":"Action, Adventure, Drama","Director":"Peter Jackson","Writer":"J.R.R. Tolkien, Fran Walsh, Philippa Boyens","Actors":"Elijah Wood, Ian McKellen, Orlando Bloom","Plot":"A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.","Language":"English, Sindarin","Country":"New Zealand, United States","Awards":"Won 4 Oscars. 121 wins & 126 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.8/10"},{"Source":"Rotten Tomatoes","Value":"91%"},{"Source":"Metacritic","Value":"92/100"}],"Metascore":"92","imdbRating":"8.8","imdbVotes":"1,794,230","imdbID":"tt0120737","Type":"movie","DVD":"06 Aug 2002","BoxOffice":"$316,115,420","Production":"N/A","Website":"N/A","Response":"True"}

var results_list = document.getElementById("results_list")
console.log(document.getElementById("results_list"))

//make list element
results_list = document.createElement("ul")
results_list.setAttribute("id","list")
results_list.className = "results_list"
document.getElementById("results_list").appendChild(results_list)

//make list items
populateList(results_list,jsonObject)



function populateList(list, values) {
    
    for (const y of values) {

        var item
        if (document.getElementById(y.imdbID) == null) {
            item = document.createElement("li")
            item.setAttribute("id",y.imdbID)
            item.className = "result_item"

            
            console.log(jsonInfo)
            movieJsonToElements(item, jsonInfo)


            list.appendChild(item)
        }
        else {
            item = document.getElementById(y.imdbID)


            item.textContent = y
        }
    }
}

function movieJsonToElements(node, item) {
    var movieNode = document.createElement("div")
    movieNode.className = "results_poster_info_split"

    //POSTER OF EACH ITEM
    var moviePoster = document.createElement("img")
    moviePoster.src = item.Poster
    moviePoster.className = "itemPoster itemBasic"

    //DATA OF EACH ITEM
    var titleNode = document.createElement("h3")
    titleNode.className = "itemTitle itemBasic"
    titleNode.textContent = item.Title

    var genreNode = document.createElement("h4")
    genreNode.className = "itemGenre itemBasic"
    genreNode.textContent = "Genre :"+item.Genre

    var yearNode = document.createElement("h4")
    yearNode.className = "itemYear itemBasic"
    yearNode.textContent = "Year: "+item.Year

    var typeNode = document.createElement("h4")
    typeNode.className = "itemType itemBasic"
    typeNode.textContent = "Type: "+item.Type

    var runtimeNode = document.createElement("h4")
    runtimeNode.className = "itemRuntime itemBasic"
    runtimeNode.textContent = "Duration: "+item.Runtime

    var boxOfficeNode = document.createElement("h4")
    boxOfficeNode.className = "itemBoxOffice itemBasic"
    boxOfficeNode.textContent = "BoxOffice: "+item.BoxOffice

    var imdbRatingNode = document.createElement("h4")
    imdbRatingNode.className = "itemImdbRating itemBasic"
    imdbRatingNode.textContent = "IMDB rating: "+ item.imdbRating

    var directorNode = document.createElement("h4")
    directorNode.className = "itemDirector itemBasic"
    directorNode.textContent = "Director: "+ item.Director

    var actorsNode = document.createElement("h4")
    actorsNode.className = "itemActors itemBasic"
    actorsNode.textContent = "Actors: "+ item.Actors

    var plotNode = document.createElement("h4")
    plotNode.className = "itemPlot itemBasic"
    plotNode.id = ""
    plotNode.textContent = "Plot: "+ item.Plot

    //Link functions for each item
    var saveNode = document.createElement("img")
    saveNode.className = "itemSave itemBasic"
    saveNode.src = "./ribbon.png"
    saveNode.id = "s"+item.imdbID
    saveNode.onclick = () => {
        console.log("BBB")
    }

    var moreNode = document.createElement("a")
    moreNode.className = "moreText"
    moreNode.text = ' more..'
    moreNode.id = "p"+item.imdbID
    moreNode.onclick = () => {
        plotNode.textContent = "Plot: "
    }
    plotNode.appendChild(moreNode)


    movieNode.append(moviePoster,titleNode,saveNode,genreNode,
        yearNode,typeNode,runtimeNode,boxOfficeNode,
        imdbRatingNode,directorNode,actorsNode,plotNode)
    node.append(movieNode)
    
    return movieNode
}