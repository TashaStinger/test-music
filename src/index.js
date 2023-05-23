let plates=[
    {
        name: "Let There Be Rock",
        artist: "AC/DC",
        year: "1990",
        style: "Rock",
        country: "USA",
        imgUrl: "images/img1.png"
    },
    {
        name: "Song 2",
        artist: "Artist 2",
        year: "1992",
        style: "Genre 2",
        country: "Country 2",
        imgUrl: "images/img2.png"
    },
    {
        name: "Song 3",
        artist: "Artist 3",
        year: "1993",
        style: "Genre 3",
        country: "Country 3",
        imgUrl: "images/img3.png"
    },
    {
        name: "Song 4",
        artist: "Artist 4",
        year: "1994",
        style: "Rock",
        country: "Country 4",
        imgUrl: "images/img4.png"
    },
    {
        name: "Song 5",
        artist: "Artist 5",
        year: "1995",
        style: "Genre 5",
        country: "Country 5",
        imgUrl: "images/img5.png"
    },
    {
        name: "Song 6",
        artist: "Artist 6",
        year: "1996",
        style: "Rock",
        country: "Country 6",
        imgUrl: "images/img6.png"
    }
]

let filteredPlates = [];
let filteredPlatesCount = 0;

function checkArtistNameLength() {
    let artistName = document.querySelector("#artist");
    artistName = artistName.value.trim();
    if (artistName.length > 10) {
        alert("Artist name is too long! You can type 10 symbols.");
    }
}

function genreFilter(currentPlates){
    let genre=document.querySelector("#genre").value;
    currentPlates.forEach(function(plate, index) {
        if (index < currentPlates.length) {
            if (plate.style === genre){
                filteredPlates[filteredPlatesCount] = plate;
                filteredPlatesCount++;
            }
        }
    })
    showPlateCards(filteredPlates);
}

function handleSearchClick(event){
    event.preventDefault();
    checkArtistNameLength();
    genreFilter(plates);
}

function showPlateCards(currentPlates){
    let platesHTML = `
        <div class="row">`;
    currentPlates.forEach(function(plate, index) {
        if (index < currentPlates.length) {
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
    })
    platesHTML += `</div>`;
    document.querySelector("#plates").innerHTML=platesHTML;
}


document.getElementById("go-back").addEventListener("click", () => {
  history.back();
});

document.querySelector("#search").addEventListener("click", handleSearchClick);
showPlateCards(plates);