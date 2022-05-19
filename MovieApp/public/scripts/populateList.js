
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
    movieNode.className = "results_poster_info_split itemBasic"

    //POSTER OF EACH ITEM
    var moviePoster = document.createElement("img")
    moviePoster.src = item.Poster
    moviePoster.className = "itemPoster itemBasic itemAlign"

    //DATA OF EACH ITEM
    var titleNode = document.createElement("h3")
    titleNode.className = "itemTitle itemBasic itemAlign"
    titleNode.textContent = item.Title

    var genreNode = document.createElement("h4")
    genreNode.className = "itemGenre itemBasic itemAlign"
    genreNode.textContent = "Genre :"+item.Genre

    var yearNode = document.createElement("h4")
    yearNode.className = "itemYear itemBasic itemAlign"
    yearNode.textContent = "Year: "+item.Year

    var typeNode = document.createElement("h4")
    typeNode.className = "itemType itemBasic itemAlign"
    typeNode.textContent = "Type: "+item.Type

    var runtimeNode = document.createElement("h4")
    runtimeNode.className = "itemRuntime itemBasic itemAlign"
    runtimeNode.textContent = "Duration: "+item.Runtime

    var boxOfficeNode = document.createElement("h4")
    boxOfficeNode.className = "itemBoxOffice itemBasic itemAlign"
    boxOfficeNode.textContent = "BoxOffice: "+item.BoxOffice

    var imdbRatingNode = document.createElement("h4")
    imdbRatingNode.className = "itemImdbRating itemBasic itemAlign"
    imdbRatingNode.textContent = "IMDB rating: "+ item.imdbRating

    var directorNode = document.createElement("h4")
    directorNode.className = "itemDirector itemBasic itemAlign"
    directorNode.textContent = "Director: "+ item.Director

    var actorsNode = document.createElement("h4")
    actorsNode.className = "itemActors itemBasic itemAlign"
    actorsNode.textContent = "Actors: "+ item.Actors

    var plotNode = document.createElement("h4")
    plotNode.className = "itemPlot itemBasic itemAlign"
    plotNode.id = ""
    plotNode.textContent = "Plot: "+ item.Plot

    //Link functions for each item
    var saveNode = document.createElement("img")
    saveNode.className = "itemSave itemBasic itemAlign"
    saveNode.src = "./ribbon.png"
    saveNode.id = "s"+item.imdbID
    saveNode.onclick = () => {
        console.log("BBB")
    }

    var moreNode = document.createElement("a")
    moreNode.className = "moreText itemBasic itemAlign"
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