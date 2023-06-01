let plates=[
    {
        id: 1,
        name: "Let There Be Rock",
        artist: "AC/DC",
        year: 1990,
        style: "Rock",
        country: "USA",
        imgUrl: "images/img8.jpg",
        imgUrl_2x: "images/img8_2x.jpg",
    },
    {
        id: 2,
        name: "Bohemian Rhapsody / Sweet Lady",
        artist: "Queen",
        year: 1976,
        style: "Rock",
        country: "Turkey",
        imgUrl: "images/img7.jpg",
        imgUrl_2x: "images/img7_2x.jpg"
    },
    {
        id: 3,
        name: "Elvis",
        artist: "Elvis Presley",
        year: 1956,
        style: "Rock",
        country: "USA",
        imgUrl: "images/img9.jpg",
        imgUrl_2x: "images/img9_2x.jpg"
    },
    {
        id: 4,
        name: "Song 4",
        artist: "Artist 4",
        year: 1954,
        style: "Popular",
        country: "France",
        imgUrl: "images/img4.png",
        imgUrl_2x: "images/img4.png"
    },
    {
        id: 5,
        name: "Song 5",
        artist: "Artist 4",
        year: 1955,
        style: "Popular",
        country: "France",
        imgUrl: "images/img5.png",
        imgUrl_2x: "images/img5.png"
    },
    {
        id: 6,
        name: "Song 6",
        artist: "Artist 6",
        year: 2004,
        style: "Rock",
        country: "Ukraine",
        imgUrl: "images/img6.png",
        imgUrl_2x: "images/img6.png"
    },
    {
        id: 7,
        name: "Song 7",
        artist: "AC/DC",
        year: 1998,
        style: "Rock",
        country: "USA",
        imgUrl: "images/img1.png",
        imgUrl_2x: "images/img1.png"
    },
    {
        id: 8,
        name: "Song 8",
        artist: "Artist 2",
        year: 1999,
        style: "Popular",
        country: "USA",
        imgUrl: "images/img2.png",
        imgUrl_2x: "images/img2.png"
    },
    {
        id: 9,
        name: "Song 9",
        artist: "Artist 2",
        year: 1997,
        style: "Popular",
        country: "USA",
        imgUrl: "images/img3.png",
        imgUrl_2x: "images/img3.png"
    },
    {
        id: 10,
        name: "Song 10",
        artist: "Artist 4",
        year: 1954,
        style: "Popular",
        country: "France",
        imgUrl: "images/img4.png",
        imgUrl_2x: "images/img4.png"
    },
    {
        id: 11,
        name: "Song 11",
        artist: "Artist 4",
        year: 1955,
        style: "Popular",
        country: "France",
        imgUrl: "images/img5.png",
        imgUrl_2x: "images/img5.png"
    },
    {
        id: 12,
        name: "Song 12",
        artist: "Artist 6",
        year: 2004,
        style: "Rock",
        country: "USA",
        imgUrl: "images/img6.png",
        imgUrl_2x: "images/img6.png"
    },
    {
        id: 13,
        name: "Song 13",
        artist: "Artist 4",
        year: 1955,
        style: "Popular",
        country: "France",
        imgUrl: "images/img5.png",
        imgUrl_2x: "images/img5.png"
    },
    {
        id: 14,
        name: "Song 14",
        artist: "Artist 6",
        year: 2004,
        style: "Rock",
        country: "Ukraine",
        imgUrl: "images/img6.png",
        imgUrl_2x: "images/img6.png"
    }
]

let filteredPlates = plates;
let filteredPlatesCount = plates.length;
let maxPlatesOnPage = 6;
let pageNumber = 1; 
   
let collection = [];
let favoutites = [];

let collectionFromStorage = JSON.parse(window.localStorage.getItem('collection'));
let firstUrl = new URL(document.location);


function checkArtistNameLength() {
    let artistName = document.querySelector("#artist");
    artistName = artistName.value.trim();
    if (artistName.length > 10) {
        alert("Artist name is too long! You can type 10 symbols.");
    }
}

function genreFilter(currentPlates){
    let genre = document.querySelector("#genre").value;
    filteredPlates = [];
    filteredPlatesCount = 0;

    if (genre !== "") {
        currentPlates.forEach(function(plate, index) {
            if (index < currentPlates.length) {
                if (plate.style === genre){
                    filteredPlates[filteredPlatesCount] = plate;
                    filteredPlatesCount++;
                }
            }
        })
    } else {
        filteredPlates = currentPlates;
        filteredPlatesCount = currentPlates.length;
    } 
}

function decadeFilter(currentPlates){
    let decade=document.querySelector("#decade").value;

    let filteredYears = [parseInt(decade)];
    for (let i = 1; i < 10; i++) {
        filteredYears[i]= filteredYears[0] + i;
    }

    filteredPlates = [];
    filteredPlatesCount = 0;

    if (decade !== "") {
        currentPlates.forEach(function(plate, index) {
            if (index < currentPlates.length) {
                if (filteredYears.includes(plate.year)){
                    filteredPlates[filteredPlatesCount] = plate;
                    filteredPlatesCount++;
                }
            }
        })
    } else {
        filteredPlates = currentPlates;
        filteredPlatesCount = currentPlates.length;
    } 
}

function countryFilter(currentPlates){
    let country=document.querySelector("#country").value;
    filteredPlates = [];
    filteredPlatesCount = 0;

    if (country !== "") {
        currentPlates.forEach(function(plate, index) {
            if (index < currentPlates.length) {
                if (plate.country === country){
                    filteredPlates[filteredPlatesCount] = plate;
                    filteredPlatesCount++;
                }
            }
        })
    } else {
        filteredPlates = currentPlates;
        filteredPlatesCount = currentPlates.length;
    } 
}

function artistFilter(currentPlates) {
    let artist=document.querySelector("#artist").value.trim();
    filteredPlates = [];
    filteredPlatesCount = 0;

    if (artist !== "") {
        currentPlates.forEach(function(plate, index) {
            if (index < currentPlates.length) {
                if (plate.artist === artist){
                    filteredPlates[filteredPlatesCount] = plate;
                    filteredPlatesCount++;
                }
            }
        })
    } else {
        filteredPlates = currentPlates;
        filteredPlatesCount = currentPlates.length;
    } 
}

function setNewSearchParams(){
    let artist = document.querySelector("#artist").value.trim();
    let genre = document.querySelector("#genre").value;
    let decade = document.querySelector("#decade").value;
    let country = document.querySelector("#country").value;
    let params = new URL(document.location).searchParams;
    let url = new URL (document.location);
    url.search = "";

    if (params.get("collection") === "show") {
        url.searchParams.append("collection", "show");
        // console.log(url);
        document.querySelector("#artist").value = "";
        document.querySelector("#genre").value ="";
        document.querySelector("#decade").value = "";
        document.querySelector("#country").value = "";
    } else {            
        if (artist !== "") {
            url.searchParams.append("artist", artist);
        }   
        if (genre !== "") {
            url.searchParams.append("genre", genre);
        }
        if (decade !== "") {
            url.searchParams.append("decade", decade);
        }
        if (country !== "") {
            url.searchParams.append("country", country);
        }
    }
    // if (pageNumber > 1) {
    url.searchParams.append("page", pageNumber);
    // }
    window.history.pushState("", "", url.search);
}

function search(){
    filteredPlates = plates;
    filteredPlatesCount = plates.length;
    checkArtistNameLength();
    
    genreFilter(filteredPlates);
    decadeFilter(filteredPlates);
    countryFilter(filteredPlates);
    artistFilter(filteredPlates);

    showPlateCards(filteredPlates);

    setNewSearchParams();
    // getPageNumber();
}

function handleSearchClick(){
    let url = new URL(document.location);
    url.search = "";
    window.history.pushState("", "", url);
    pageNumber = 1;
    search();
}

function addToCollection(event) {
    event.preventDefault();
    alert("Add to Collection?");
    // debugger;
    let currentPlate = plates[parseInt(event.target.id.slice(11))];
    let plateInCollection = false;
    collection.forEach(function(plate, index) {
        if (plate.id === currentPlate.id) {
            plateInCollection = true;
        }
    })
    if (plateInCollection === false) {
        collection.push(currentPlate);
        console.log(collection);
        window.localStorage.removeItem('collection');
        window.localStorage.setItem('collection', JSON.stringify(collection));
    }
}

function buttonsAddEventListeners(currentPlates){
    currentPlates.forEach(function(plate, index) {
        // debugger;
        // if (document.getElementById(`#button-add-${plates.indexOf(plate)}`) !== undefined){
            if (index >= maxPlatesOnPage * (pageNumber - 1)) {
                if (index < maxPlatesOnPage * pageNumber) {
                    document.querySelector(`#button-add-${plates.indexOf(plate)}`).addEventListener("click", addToCollection);
                }
            }
        // }
    })
}

function getPageNumber(){
    let params = new URL(document.location).searchParams;
    let newPageNumber = parseInt(params.get("page"));

    if (newPageNumber) {
        pageNumber = newPageNumber;
    }
    else {
        pageNumber = 1;
    }
}
function getNewSearchParams(){
    let params = new URL(document.location).searchParams;
    let artist = params.get("artist");
    let genre = params.get("genre");
    let decade = params.get("decade");
    let country = params.get("country");
    // let collection = params.get("collection");

    if (artist) {
        document.querySelector("#artist").value = artist;
    }
    if (genre) {
        document.querySelector("#genre").value = genre;
    }
     if (decade) {
        document.querySelector("#decade").value = decade;
    }
     if (country) {
        document.querySelector("#country").value = country;
    }
}

function changePageNumber(event) {
    let params = new URL(document.location).searchParams;
    // console.log(params.collection);
    pageNumber = parseInt(event.target.id.slice(4));
    // alert(pageNumber);
    if (params.get("collection") === "show"){
        showPlateCards(collection);
        setNewSearchParams();
    }
    else {
        setNewSearchParams();
        showPlateCards(filteredPlates);
    }
    getPageNumber();
}

function pagesAddEventListeners(currentPlates){
    if (currentPlates.length % maxPlatesOnPage === 0){
        for (let i = 1; i <= currentPlates.length / maxPlatesOnPage; i++) {
        document.querySelector(`#page${i}`).addEventListener("click", changePageNumber);
        } 
    } else {
        for (let i = 1; i <= currentPlates.length / maxPlatesOnPage + 1; i++) {
            document.querySelector(`#page${i}`).addEventListener("click", changePageNumber);
        }   
    }
}

function showPlateCards(currentPlates){
    let params = new URL(document.location).searchParams;
    // console.log(params.get("collection"));
    let platesHTML = ``;
    if (params.get("collection") === "show"){
                    platesHTML += `<h1 class="text-center">My Collection</h2>`;
    }

    platesHTML += `
        <div class="row">`;
    
    currentPlates.forEach(function(plate, index) {
        // if (index < currentPlates.length) {
        if (index >= maxPlatesOnPage * (pageNumber - 1)) {
            if (index < maxPlatesOnPage * pageNumber) {
                platesHTML += `
                    <div class="col-6 pe-2">
                        <div class="plate-card">
                            <button type="button" class="btn-heart2">
                                <img src="images/heart2_icon.png" />
                            </button>
                            <div class="image-plate">
                                <img srcset="${plate.imgUrl_2x} 2x" src="${plate.imgUrl}" class="img-fluid plate-icon" alt="" />  
                            </div>
                            <h3 class="text-truncate">${plate.name}</h3>
                            <p class="mb-2">
                                ${plate.artist}
                                <ul>
                                    <li><span class="text-black-50">Year: </span>${plate.year}</li>
                                    <li><span class="text-black-50">Style: </span>${plate.style}</li>
                                    <li><span class="text-black-50">Country: </span>${plate.country}</li>
                                </ul>
                            </p>
                            <button type="button" id="button-add-${plates.indexOf(plate)}" class="btn btn-dark button-add">
                                Add +
                            </button>
                        </div>
                    </div>
                `;
            }
        }
                    
        }
    )
    platesHTML += `</div>`;

    platesHTML += `
        <nav aria-label="Page navigation example">
            <ul class="pagination pagination-lg justify-content-center">
                `;

    if (currentPlates.length % maxPlatesOnPage === 0){
        for (let i = 1; i <= currentPlates.length / maxPlatesOnPage; i++) {
                platesHTML += `
                    <li class="page-item"><a id="page${i}" class="page-link" href="#">${i}</a></li>
                `;
        }
    } else {
        for (let i = 1; i <= currentPlates.length / maxPlatesOnPage + 1; i++) {
                platesHTML += `
                    <li class="page-item"><a id="page${i}" class="page-link" href="#">${i}</a></li>
                `;
        }
    }

    platesHTML += `
            </ul>
        </nav>
    `;

    document.querySelector("#plates").innerHTML=platesHTML;

    buttonsAddEventListeners(currentPlates);
    pagesAddEventListeners(currentPlates);
}

function handleCollectionClick() {
    
    if (collection.length !== 0) {
        pageNumber = 1;
        window.history.pushState("", "", "?collection=show&page=1");
        setNewSearchParams();
        showPlateCards(collection);
        
    } else {
        alert("Your collection is empty now");
    }
}

function loadCollection() {
    if (collectionFromStorage) {
        collection = collectionFromStorage;
        // console.log("loadCollection");
    }
}

loadCollection();
getPageNumber();
getNewSearchParams();
if (firstUrl.searchParams.get("collection") === "show") {
    showPlateCards(collection);
} else {
    search();
}

document.getElementById("go-back").addEventListener("click", () => {
    history.back();
    getPageNumber();
    getNewSearchParams();
    search();
});

document.querySelector("#search").addEventListener("click", handleSearchClick);
document.querySelector("#collection").addEventListener("click", handleCollectionClick)



