async function populateList(list, values) {

    removeAllChildNodes(list)

    for (const y of values) {

        var res = await fetch('search/id?plot=short&imdbID=' + y.imdbID, {
            method: 'GET'
        })
        console.log(res.status)
        if (res.status !== 304 && res.status !== 200) continue

        var jsonInfo = await res.json()
        console.log(jsonInfo)

        var item
        item = document.createElement("li")
        item.setAttribute("id", y.imdbID)
        item.className = "result_item"


        console.log(jsonInfo)
        item = await movieJsonToElements(item, jsonInfo)
        console.log(item)

        list.appendChild(item)
    }
}

async function movieJsonToElements(node, item) {
    var movieNode = document.createElement("div")
    movieNode.className = "results_poster_info_split itemBasic"

    //POSTER OF EACH ITEM
    var moviePoster = document.createElement("img")
    if (item.Poster !== "N/A")
        moviePoster.src = item.Poster
    else moviePoster.alt = "N/A"
    moviePoster.className = "itemPoster itemBasic itemAlign"

    //DATA OF EACH ITEM
    var titleNode = document.createElement("h3")
    titleNode.className = "itemTitle itemBasic itemAlign"
    titleNode.textContent = item.Title

    var genreNode = document.createElement("h4")
    genreNode.className = "itemGenre itemBasic itemAlign"
    genreNode.textContent = "Genre: " + item.Genre

    var yearNode = document.createElement("h4")
    yearNode.className = "itemYear itemBasic itemAlign"
    yearNode.textContent = "Year: " + item.Year

    var typeNode = document.createElement("h4")
    typeNode.className = "itemType itemBasic itemAlign"
    typeNode.textContent = "Type: " + item.Type

    var runtimeNode = document.createElement("h4")
    runtimeNode.className = "itemRuntime itemBasic itemAlign"
    runtimeNode.textContent = "Duration: " + item.Runtime

    var boxOfficeNode = document.createElement("h4")
    boxOfficeNode.className = "itemBoxOffice itemBasic itemAlign"
    boxOfficeNode.textContent = "BoxOffice: " + item.BoxOffice

    var imdbRatingNode = document.createElement("h4")
    imdbRatingNode.className = "itemImdbRating itemBasic itemAlign"
    imdbRatingNode.textContent = "IMDB rating: " + item.imdbRating

    var directorNode = document.createElement("h4")
    directorNode.className = "itemDirector itemBasic itemAlign"
    directorNode.textContent = "Director: " + item.Director

    var actorsNode = document.createElement("h4")
    actorsNode.className = "itemActors itemBasic itemAlign"
    actorsNode.textContent = "Actors: " + item.Actors

    var plotNode = document.createElement("h4")
    plotNode.className = "itemPlot itemBasic"
    plotNode.id = ""
    plotNode.innerHTML = "Plot: " + item.Plot + "&ensp;"



    //Link functions for each item
    var saveNode = document.createElement("img")
    saveNode.className = "itemSave itemBasic"
    saveNode.src = "./ribbon.png"
    saveNode.id = "s" + item.imdbID

    if (document. cookie. indexOf('authorization=') === 0) {
        var bookmarkColorFlag = await fetchBookmark(item.imdbID)
        if (bookmarkColorFlag === undefined)
            saveNode.style = "background-color:lawngreen;"
        else saveNode.style = "background-color:lightsalmon;"

        saveNode.onclick = async () => {
            var result = await fetchBookmark(item.imdbID)
            console.log(result)
            if (result === undefined) {
                saveBookmark(item.imdbID)
                saveNode.style = "background-color:lightsalmon;"
            } else {
                deleteBookmark(item.imdbID)
                saveNode.style = "background-color:lawngreen;"
            }
        }
    }
    else {
        saveNode.onclick = () => {
            window.location.href = '/login'
        }
    }


    var moreNode = document.createElement("a")
    moreNode.className = "moreText itemBasic"
    moreNode.text = 'more..'
    moreNode.id = "p" + item.imdbID
    moreNode.onclick = async () => {
        var res = await fetch('search/id?plot=full&imdbID=' + item.imdbID, {
            method: 'GET'
        })
        if (res.status !== 304 && res.status !== 200) return

        var fullPlotJson = await res.json()

        plotNode.textContent = "Plot: "+fullPlotJson.Plot
    }
    plotNode.appendChild(moreNode)


    movieNode.append(moviePoster, titleNode, saveNode, genreNode,
        yearNode, typeNode, runtimeNode, boxOfficeNode,
        imdbRatingNode, directorNode, actorsNode, plotNode)
    node.append(movieNode)

    return movieNode
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}