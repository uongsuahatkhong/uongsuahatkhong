// const body = document.body;
// // const p = document.getElementById("p");
// const p = document.getElementById("chutim");
// const nuttimkiem = document.getElementById("nuttimkiem");

// nuttimkiem.addEventListener("click", () => {
//     let input = document.getElementById("input").value;
    
//     if (input !== "") {
//         let regExp = new RegExp(input, "gi")
//         p.innerHTML = p.textContent.replace(regExp, "<mark>$&</mark>");
//     };
// });


// const input = document.getElementById("searchInput");
// input.addEventListener("keyup", () => {
//     const filter = input.value.toUpperCase();
//     const paragraphs = document.querySelectorAll(".search-text p");
//     if (filter === '') {
//         paragraphs.forEach(p => {
//             p.innerHTML = p.textContent;
//         });
//         return flase;
//     }
//     paragraphs.forEach(p => {
//         let txtValue = p.textContent;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//             txtValue = txtValue.replace(
//                 new RegExp(filter, "gi"),
//                 '<span class="highlight">$&</span>'
//             );

//             p.innerHTML = txtValue;
//         } else {
//             p.innerHTML = txtValue;
//         }
//     });
// });
const input = document.getElementById("searchInput");
input.addEventListener("keyup", () => {
    const filter = input.value.toUpperCase();
    const paragraphs = document.querySelectorAll(".search-text p");
    if (filter === '') {
        paragraphs.forEach(p => {
            p.innerHTML = p.textContent;
        });
        return flase;
    }
    paragraphs.forEach(p => {
        let txtValue = p.textContent;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            txtValue = txtValue.replace(
                new RegExp(filter, "gi"),
                '<span class="highlight">$&</span>'
            );

            p.innerHTML = txtValue;
        } else {
            p.innerHTML = txtValue;
        }
    });
});

