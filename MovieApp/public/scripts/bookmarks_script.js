function showBookmarks() {
    fetchAllBookmarks()
        .then(bookmarks => {
            console.log("!!!!!!!!!!!!!!")
            console.log(bookmarks)


            var results_list = document.getElementById("results_list")
            console.log(document.getElementById("results_list"))

            //make list element
            results_list = document.createElement("ul")
            results_list.setAttribute("id", "list")
            results_list.className = "results_list"
            document.getElementById("results_list").appendChild(results_list)

            console.log(bookmarks)
            if (bookmarks === undefined || bookmarks.length === 0) {
                results_list.textContent = "You do not have any Bookmarks!"
                results_list.style = "color: black; font-size: 20px;"
                return
            }

            //make list items
            populateList(results_list, bookmarks)
        })
}


// var results_list = document.getElementById("results_list")
// console.log(document.getElementById("results_list"))
//
// //make list element
// results_list = document.createElement("ul")
// results_list.setAttribute("id","list")
// results_list.className = "results_list"
// document.getElementById("results_list").appendChild(results_list)
//
// //make list items
// populateList(results_list,jsonObject)



async function fetchAllBookmarks() {
    var res = await fetch('bookmark', {
        method: 'GET'
    })
    console.log(res.status)
    if (res.status !== 200)
        return undefined

    var bookmarks = await res.json()
    console.log(bookmarks)
    return bookmarks
}

async function fetchBookmark(imdbID) {
    var res = await fetch('bookmark/'+imdbID, {
        method: 'GET'
    })
    console.log(res.status)
    if (res.status !== 200)
        return undefined

    var bookmark = await res.json()
    console.log(bookmark)
    return bookmark
}

async function saveBookmark(imdbID) {
    var res = await fetch('bookmark', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            imdbID: imdbID
        })
    })
    console.log(res.status)
    if (res.status !== 200)
        return

    var bookmarks = await res.json()
    console.log(bookmarks)
}

async function deleteBookmark(imdbID) {
    var res = await fetch('bookmark', {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            imdbID: imdbID
        })
    })
    console.log(res.status)
    if (res.status !== 200)
        return

    var bookmarks = await res.json()
    console.log(bookmarks)
}