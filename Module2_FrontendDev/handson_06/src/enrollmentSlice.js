import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllCourses } from "./api/courseApi";

export const fetchAllCourses = createAsyncThunk(
  "courses/fetchAll",
  async () => {
    return await getAllCourses();
  }
);

const enrollmentSlice = createSlice({
  name: "enrollment",

  initialState: {
    enrolledCourses: [],
    courses: [],
    loading: false,
    error: null,
  },

  reducers: {
    enroll: (state, action) => {
      const exists = state.enrolledCourses.find(
        (course) => course.id === action.payload.id
      );

      if (!exists) {
        state.enrolledCourses.push(action.payload);
      }
    },

    unenroll: (state, action) => {
      state.enrolledCourses = state.enrolledCourses.filter(
        (course) => course.id !== action.payload
      );
    },
  },

  extraReducers: (builder) => {
    builder

      .addCase(fetchAllCourses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchAllCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.courses = action.payload;
      })

      .addCase(fetchAllCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { enroll, unenroll } = enrollmentSlice.actions;

export default enrollmentSlice.reducer;
export const selectCourses = (state) => state.enrollment.courses;

export const selectCoursesLoading = (state) =>
  state.enrollment.loading;