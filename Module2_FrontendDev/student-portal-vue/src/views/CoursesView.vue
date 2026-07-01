<template>
  <div>

    <h2>Courses</h2>

    <input
      v-model="searchTerm"
      placeholder="Search Course"
    />

    <CourseCard
      v-for="course in filteredCourses"
      :key="course.id"
      :name="course.name"
      :code="course.code"
      :credits="course.credits"
      :grade="course.grade"
    />

  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import CourseCard from "../components/CourseCard.vue";

const searchTerm = ref("");

const courses = ref([]);

onMounted(() => {
  courses.value = [
    {
      id: 1,
      name: "Data Structures",
      code: "CS101",
      credits: 4,
      grade: "A",
    },
    {
      id: 2,
      name: "Web Development",
      code: "CS102",
      credits: 3,
      grade: "A+",
    },
    {
      id: 3,
      name: "Database Management",
      code: "CS103",
      credits: 4,
      grade: "B+",
    },
    {
      id: 4,
      name: "Operating Systems",
      code: "CS104",
      credits: 3,
      grade: "A",
    },
    {
      id: 5,
      name: "Computer Networks",
      code: "CS105",
      credits: 4,
      grade: "B",
    },
  ];
});

const filteredCourses = computed(() =>
  courses.value.filter((course) =>
    course.name
      .toLowerCase()
      .includes(searchTerm.value.toLowerCase())
  )
);
</script>