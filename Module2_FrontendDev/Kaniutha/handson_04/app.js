import { courses } from "./data.js";

// ==========================
// Task 1 - Promise (.then())
// ==========================

function fetchUser(id) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())
        .then(user => {
            console.log("User using .then():", user.name);
            return user;
        });
}

// Call Promise version
fetchUser(1);

// ==========================
// Task 1 - async/await
// ==========================

async function fetchUserAsync(id) {

    try {

        const response =
            await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

        const user =
            await response.json();

        console.log("User using async/await:", user.name);

        return user;

    }

    catch(error){

        console.error(error);

    }

}

fetchUserAsync(1);

// ==========================
// Simulate Network Delay
// ==========================

function fetchAllCourses(){

    return new Promise(resolve=>{

        setTimeout(()=>{

            resolve(courses);

        },1000);

    });

}

// ==========================
// DOM Elements
// ==========================

const courseGrid =
document.querySelector(".course-grid");

const loading =
document.querySelector("#loading");

const spinner =
document.querySelector("#spinner");

const notificationList =
document.querySelector("#notification-list");

const errorMessage =
document.querySelector("#error-message");

const retryButton =
document.querySelector("#retry-btn");

// ==========================
// Render Courses
// ==========================

function renderCourses(courseList){

    courseGrid.innerHTML="";

    courseList.forEach(course=>{

        const article =
        document.createElement("article");

        article.className="course-card";

        article.innerHTML=`

        <h3>${course.name}</h3>

        <p><strong>Code:</strong> ${course.code}</p>

        <p><strong>Credits:</strong> ${course.credits}</p>

        <p><strong>Grade:</strong> ${course.grade}</p>

        `;

        courseGrid.appendChild(article);

    });

}

// ==========================
// Load Courses
// ==========================

async function loadCourses(){

    loading.style.display="block";

    const courseData =
    await fetchAllCourses();

    loading.style.display="none";

    renderCourses(courseData);

}

loadCourses();

// ==========================
// Promise.all()
// ==========================

Promise.all([

    fetchUserAsync(1),

    fetchUserAsync(2)

]).then(users=>{

    console.log(

        "Promise.all Users:",

        users[0].name,

        users[1].name

    );

});
// ==========================
// Task 2 - Reusable Fetch API
// ==========================

async function apiFetch(url){

    const response = await fetch(url);

    if(!response.ok){

        throw new Error("Unable to fetch data. Please try again.");

    }

    return await response.json();

}

// ==========================
// Render Notifications
// ==========================

function renderNotifications(posts){

    notificationList.innerHTML="";

    posts.slice(0,10).forEach(post=>{

        const card=document.createElement("div");

        card.className="notification-card";

        card.innerHTML = `
    <h3>📢 Notification ${post.id}</h3>
    <p>New update available for students. Please check your student portal regularly.</p>
`;

        notificationList.appendChild(card);

    });

}

// ==========================
// Load Notifications
// ==========================

async function loadNotifications(){

    spinner.style.display="block";

    notificationList.innerHTML="";

    errorMessage.innerHTML="";

    retryButton.style.display="none";

    try{

        const posts = await apiFetch(
            "https://jsonplaceholder.typicode.com/posts"
        );

        spinner.style.display="none";

        renderNotifications(posts);

    }

    catch(error){

        spinner.style.display="none";

        errorMessage.innerHTML=error.message;

        retryButton.style.display="block";

    }

}

loadNotifications();

// ==========================
// Simulate 404 Error
// ==========================

async function simulate404(){

    try{

        await apiFetch(
            "https://jsonplaceholder.typicode.com/nonexistent"
        );

    }

    catch(error){

        errorMessage.innerHTML=
        "404 Error! Resource not found.";

        retryButton.style.display="block";

    }

}

// Uncomment this line if you want to test the 404 error
// simulate404();

// ==========================
// Retry Button
// ==========================

retryButton.addEventListener("click",()=>{

    loadNotifications();

});

// ==========================
// Axios
// ==========================

axios.interceptors.request.use(config=>{

    console.log("API call started:",config.url);

    return config;

});

// ==========================
// Axios Example
// ==========================

async function loadAxiosPosts(){

    try{

        const response =
        await axios.get(

            "https://jsonplaceholder.typicode.com/posts",

            {

                params:{
                    userId:1
                },

                timeout:5000

            }

        );

        console.log(
            "Axios User 1 Posts:",
            response.data
        );

    }

    catch(error){

        console.log(error);

    }

}

loadAxiosPosts();

/*

======================================
FETCH vs AXIOS
======================================

1. Fetch requires response.ok checking.
   Axios automatically throws errors.

2. Fetch needs response.json().
   Axios automatically parses JSON.

3. Fetch is built into browsers.
   Axios is an external library with
   interceptors, timeout, request cancellation,
   baseURL and many extra features.

*/