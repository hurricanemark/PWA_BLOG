async function getBlogs() {
    let url = "http://localhost:8000/blogs";
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderBlogs() {
    let data = await getBlogs();
    let html = '';
    console.log(data.blogs);
    let rows = data.blogs;
    rows.forEach(({ title, avatar, intro, ref } = rows) => {
        let htmlSegment = `
        <div class="card">
             <img class="card-avatar" src="/${avatar}"/>
             <h1 class="card-title">${title}</h1>
             <p class="intro">${intro}</p>
             <a class="card-link" href="${ref}" target="readmore_frame">Read</a>
         </div>
        `;

        // <li><span>${title}</span><a href="${ ref }" target="readmore_frame">read</a></li>

        html += htmlSegment;
    });

    let container = document.querySelector('.container');
    container.innerHTML = html;
}

async function renderLiBlogs() {
    let data = await getBlogs();
    let html = '';
    console.log(data.blogs);
    let rows = data.blogs;
    rows.forEach(({ title, avatar, intro, ref } = rows) => {
        let htmlSegment = `<li><a href="${ ref }" target="readmore_frame">&#x27A2; ${title}</a></li>`;
        html += htmlSegment;
    });

    let container = document.querySelector('.nav');
    container.innerHTML = html;
}


/* 
    <iframe src="https://hurricanemark.github.io/relational_database/" name="myFrame"></iframe>
    <p><a href="https://hurricanemark.github.io/relational_database/" target="myFrame">Open TutorialRepublic.com</a></p>

*/


if ("serviceWorker" in navigator) {
window.addEventListener("load", function () {
    navigator.serviceWorker
    .register("/blogger.serviceWorker.js")
    .then((res) => console.log("service worker registered"))
    .catch((err) => console.log("service worker not registered", err));
});
}  

// renderBlogs();
renderLiBlogs()