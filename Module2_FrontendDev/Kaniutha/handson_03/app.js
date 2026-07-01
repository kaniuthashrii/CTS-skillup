import { courses } from "./data.js";

// =========================
// ES6+ PRACTICE
// =========================

// Destructuring
courses.forEach(course => {
    const { name, credits } = course;
    console.log(`${name} - ${credits} credits`);
});

// map()
const formattedCourses = courses.map(course =>
    `${course.code} — ${course.name} (${course.credits} credits)`
);

console.log("Formatted Courses:");
console.log(formattedCourses);

// filter()
const filteredCourses = courses.filter(course => course.credits >= 4);

console.log("Courses with credits >= 4:");
console.log(filteredCourses);
console.log("Count:", filteredCourses.length);

// reduce()
const totalCredits = courses.reduce(
    (sum, course) => sum + course.credits,
    0
);

console.log("Total Credits:", totalCredits);

// =========================
// DOM ELEMENTS
// =========================

const courseGrid = document.querySelector(".course-grid");
const totalCreditsText = document.querySelector("#total-credits");
const searchInput = document.querySelector("#search-courses");
const sortButton = document.querySelector("#sort-btn");
const selectedCourse = document.querySelector("#selected-course");

// =========================
// RENDER FUNCTION
// =========================

function renderCourses(courseList){

    courseGrid.innerHTML = "";

    courseList.forEach(course=>{

        const article=document.createElement("article");

        article.className="course-card";

        article.dataset.id=course.id;

        article.innerHTML=`
            <h3>${course.name}</h3>
            <p><strong>Code:</strong> ${course.code}</p>
            <p><strong>Credits:</strong> ${course.credits}</p>
        `;

        courseGrid.appendChild(article);

    });

    totalCreditsText.textContent =
        `Total Credits : ${courseList.reduce(
            (sum,course)=>sum+course.credits,0
        )}`;

}

// Initial render
renderCourses(courses);

// =========================
// SEARCH
// =========================

searchInput.addEventListener("input",()=>{

    const searchValue =
        searchInput.value.toLowerCase();

    const filtered =
        courses.filter(course =>
            course.name.toLowerCase().includes(searchValue)
        );

    renderCourses(filtered);

});

// =========================
// SORT
// =========================

sortButton.addEventListener("click",()=>{

    const sorted =
        [...courses].sort(
            (a,b)=>b.credits-a.credits
        );

    renderCourses(sorted);

});

// =========================
// EVENT DELEGATION
// =========================

courseGrid.addEventListener("click",(event)=>{

    const card =
        event.target.closest(".course-card");

    if(!card) return;

    const id =
        Number(card.dataset.id);

    const selected =
        courses.find(course=>course.id===id);

    selectedCourse.textContent =
        `Selected Course: ${selected.name} | Grade: ${selected.grade}`;

});