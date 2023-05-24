let plates=[
    {
        name: "Let There Be Rock",
        artist: "AC/DC",
        year: 1990,
        style: "Rock",
        country: "USA",
        imgUrl: "images/img1.png"
    },
    {
        name: "Song 2",
        artist: "Artist 2",
        year: 1992,
        style: "Popular",
        country: "USA",
        imgUrl: "images/img2.png"
    },
    {
        name: "Song 3",
        artist: "Artist 2",
        year: 1993,
        style: "Popular",
        country: "USA",
        imgUrl: "images/img3.png"
    },
    {
        name: "Song 4",
        artist: "Artist 4",
        year: 1954,
        style: "Popular",
        country: "France",
        imgUrl: "images/img4.png"
    },
    {
        name: "Song 5",
        artist: "Artist 4",
        year: 1955,
        style: "Popular",
        country: "France",
        imgUrl: "images/img5.png"
    },
    {
        name: "Song 6",
        artist: "Artist 6",
        year: 2004,
        style: "Rock",
        country: "Ukraine",
        imgUrl: "images/img6.png"
    },
    {
        name: "Song 7",
        artist: "AC/DC",
        year: 1990,
        style: "Rock",
        country: "USA",
        imgUrl: "images/img1.png"
    },
    {
        name: "Song 8",
        artist: "Artist 2",
        year: 1992,
        style: "Popular",
        country: "USA",
        imgUrl: "images/img2.png"
    },
    {
        name: "Song 9",
        artist: "Artist 2",
        year: 1993,
        style: "Popular",
        country: "USA",
        imgUrl: "images/img3.png"
    },
    {
        name: "Song 10",
        artist: "Artist 4",
        year: 1954,
        style: "Popular",
        country: "France",
        imgUrl: "images/img4.png"
    },
    {
        name: "Song 11",
        artist: "Artist 4",
        year: 1955,
        style: "Popular",
        country: "France",
        imgUrl: "images/img5.png"
    },
    {
        name: "Song 12",
        artist: "Artist 6",
        year: 2004,
        style: "Rock",
        country: "USA",
        imgUrl: "images/img6.png"
    },
    {
        name: "Song 13",
        artist: "Artist 4",
        year: 1955,
        style: "Popular",
        country: "France",
        imgUrl: "images/img5.png"
    },
    {
        name: "Song 14",
        artist: "Artist 6",
        year: 2004,
        style: "Rock",
        country: "Ukraine",
        imgUrl: "images/img6.png"
    }
]

let filteredPlates = plates;
let filteredPlatesCount = plates.length;
let maxPlatesOnPage = 6;
let pageNumber = 1; 

function checkArtistNameLength() {
    let artistName = document.querySelector("#artist");
    artistName = artistName.value.trim();
    if (artistName.length > 10) {
        alert("Artist name is too long! You can type 10 symbols.");
    }
}

function genreFilter(currentPlates){
    let genre=document.querySelector("#genre").value;
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
    showPlateCards(filteredPlates);
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
    showPlateCards(filteredPlates);
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
    showPlateCards(filteredPlates);
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
    showPlateCards(filteredPlates);
}

function handleSearchClick(event){
    // event.preventDefault();
    pageNumber = 1;
    filteredPlates = plates;
    filteredPlatesCount = plates.length
    checkArtistNameLength();
    
    genreFilter(filteredPlates);
    decadeFilter(filteredPlates);
    countryFilter(filteredPlates);
    artistFilter(filteredPlates);
}

function showPlateCards(currentPlates){
    let platesHTML = `
        <div class="row">`;
    currentPlates.forEach(function(plate, index) {
        // if (index < currentPlates.length) {
        if (index >= maxPlatesOnPage * (pageNumber - 1)) {
            if (index < maxPlatesOnPage * pageNumber) {
                // debugger;
                platesHTML += `
                    <div class="col-6 pe-2">
                        <div class="plate-card">
                            <button type="button" class="btn-heart2">
                                <img src="images/heart2_icon.png" />
                            </button>
                            <div class="image-plate">
                                <img src="${plate.imgUrl}" class="img-fluid plate-icon" />  
                            </div>
                            <h3>${plate.name}</h3>
                            <p class="mb-2">
                                ${plate.artist}
                                <ul>
                                    <li><span class="text-black-50">Year: </span>${plate.year}</li>
                                    <li><span class="text-black-50">Style: </span>${plate.style}</li>
                                    <li><span class="text-black-50">Country: </span>${plate.country}</li>
                                </ul>
                            </p>
                            <button type="button" class="btn btn-dark button-add">
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
    pagesAddEventListeners(filteredPlates);
}

function changePageNumber(event) {
    pageNumber = parseInt(event.target.id[4]);
    // alert(pageNumber);
    showPlateCards(filteredPlates);
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


document.getElementById("go-back").addEventListener("click", () => {
  history.back();
});

document.querySelector("#search").addEventListener("click", handleSearchClick);
showPlateCards(filteredPlates);


