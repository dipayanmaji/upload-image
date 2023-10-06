const container = document.getElementById("container");

const imageHandler = (e) => {
    let imageFile = e.target.files;
    // console.log(imageFile[0]);

    if (imageFile.length && imageFile[0].type.includes("image")) {
        const url = URL.createObjectURL(imageFile[0]);
        const img = document.createElement('img');
        img.src = url;

        container.append(img);
    }
    e.target.value = "";
}

const resetHandler = () => {
    container.innerHTML = "";
}