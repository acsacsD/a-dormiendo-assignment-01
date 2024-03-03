const albumTitle = document.querySelector("#album-title");
const albumDescription = document.querySelector("#album-description");
const albumArt = document.querySelector("#album-art");

document.querySelector("#album-form").addEventListener("submit", onAlbumSubmit);
function onAlbumSubmit(e) {
    e.preventDefault();
    // Creating ref var for title, description and art
    let albumTitle = document.getElementById("album-title").value.trim();
	let albumDescription = document.getElementById("album-description").value.trim();
	let albumArt = document.getElementById("album-art").value;


    // Validation for title
	if (albumTitle === '') {
		document.getElementById("album-title").classList.add("is-invalid");
	} 
    // validation for word lenght
    else if(albumTitle.length > 10) {
        document.getElementById("album-title").classList.add("is-invalid");
        // document.getElementsByClassName("invalid-feedback").textContent = "Album name should be less than 10 characters";
        document.getElementById("album-title").nextElementSibling.textContent = "Album name should be less than 10 characters";
    }
    else {
		document.getElementById("album-title").classList.remove("is-invalid");
	}
    // Validation Ttle end

    // Album Description validation
	if (albumDescription === '') {
		document.getElementById("album-description").classList.add("is-invalid");
		
	} 
    else if (albumDescription.length > 30) {
        document.getElementById("album-description").classList.add("is-invalid");
        document.getElementById("album-description").nextElementSibling.textContent = "Album description should be less than 30 characters";
    }
    else {
		document.getElementById("album-description").classList.remove("is-invalid");
		
	}
    // END

    // Album art validation
	if (albumArt === '') {
		document.getElementById("album-art").classList.add("is-invalid");
		
	} else {
		document.getElementById("album-art").classList.remove("is-invalid");
		
	}   
    // END
}

function renderAlbum(title, description, albumImage) {
    const template = `
    <div class="col">
	<div class="card shadow-sm">
		<img class="bd-placeholder-img card-img-top" src="${albumImage}}" />
		<div class="card-body">
			<h5 class="card-title">${description}</h5>
			<p class="card-text">${title}</p>
		</div>
	</div>
</div>
    `;
}